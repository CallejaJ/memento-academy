"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { verifyQuizAnswers, QuizQuestion } from "@/actions/course";
import confetti from "canvas-confetti";
import { useToast } from "@/hooks/use-toast";
import { useParams } from "next/navigation";
import { useSound } from "@/contexts/sound-context";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  sectionId: string;
  questions: QuizQuestion[];
  onPassed: () => void | Promise<void>;
  onRetry?: () => Promise<void>;
}

export function QuizModal({
  isOpen,
  onClose,
  sectionId,
  questions,
  onPassed,
  onRetry,
}: QuizModalProps) {
  const { lng } = useParams<{ lng: string }>();
  // Use passed language or default to 'en'
  const lang = (lng as string) || "en";

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitting, setSubmitting] = useState(false);
  const [retrying, setRetrying] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    feedback?: Record<
      string,
      { correct: boolean; explanation: Record<string, string> }
    >;
  } | null>(null);

  const { toast } = useToast();
  const { playSound } = useSound();

  const handleSelect = (questionId: string, index: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: index }));
  };

  const handleSubmit = async () => {
    if (Object.keys(answers).length < questions.length) {
      toast({
        title: "Answer all questions",
        description: "Please select an answer for every question.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const resp = await verifyQuizAnswers(sectionId, answers);
      setResult(resp);

      if (resp.success) {
        // Play success sound
        playSound("correct");
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
        });
        // Remove auto-close. Let user click Continue.
        onPassed();
      } else {
        // Play fail sound
        playSound("wrong");
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to submit quiz. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleRetry = async () => {
    if (onRetry) {
      setRetrying(true);
      try {
        await onRetry();
      } catch (error) {
        console.error("Retry failed", error);
      } finally {
        setRetrying(false);
      }
    }
    setResult(null);
    setAnswers({});
  };

  // Helper to safely get localized string
  const getLoc = (obj: any) => {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] || obj["en"] || ""; // Fallback to EN
  };

  // helper for UI text
  const uiText = {
    en: {
      passedTitle: "🎉 Quiz Passed!",
      checkTitle: "🧠 Knowledge Check",
      passedDesc: "You successfully unlocked the next section.",
      checkDesc: (count: number) =>
        `Answer correctly to unlock the next section. (${count} questions)`,
      correct: "Correct!",
      incorrect: "Incorrect",
      tryAgain: "Try Again",
      submit: "Submit Answers",
      continue: "Continue",
      errorTitle: "Error",
      errorDesc: "Failed to submit quiz. Please try again.",
      answerAllTitle: "Answer all questions",
      answerAllDesc: "Please select an answer for every question.",
    },
    es: {
      passedTitle: "🎉 ¡Quiz Aprobado!",
      checkTitle: "🧠 Comprobación de Conocimientos",
      passedDesc: "Has desbloqueado exitosamente la siguiente sección.",
      checkDesc: (count: number) =>
        `Responde correctamente para desbloquear la siguiente sección. (${count} preguntas)`,
      correct: "¡Correcto!",
      incorrect: "Incorrecto",
      tryAgain: "Intentar de nuevo",
      submit: "Enviar Repuestas",
      continue: "Continuar",
      errorTitle: "Error",
      errorDesc: "Error al enviar el quiz. Por favor intenta de nuevo.",
      answerAllTitle: "Responde todas las preguntas",
      answerAllDesc: "Por favor selecciona una respuesta para cada pregunta.",
    },
  };

  const t = uiText[lang as keyof typeof uiText] || uiText.en;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-xl bg-slate-900 border-slate-800 text-slate-100 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {result?.success ? t.passedTitle : t.checkTitle}
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            {result?.success ? t.passedDesc : t.checkDesc(questions.length)}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 py-4">
          {questions.map((q, idx) => {
            const feedback = result?.feedback?.[q.id];
            const isCorrect = feedback?.correct;
            const explanation = getLoc(feedback?.explanation);

            return (
              <div key={q.id} className="space-y-4">
                <div className="flex gap-2 items-start">
                  <span className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded-full shrink-0">
                    {idx + 1}
                  </span>
                  <p className="font-medium text-lg leading-snug">
                    {getLoc(q.question)}
                  </p>
                </div>

                <RadioGroup
                  value={answers[q.id]?.toString()}
                  onValueChange={(val: any) =>
                    handleSelect(q.id, parseInt(val))
                  }
                  disabled={!!result} // Disable changes after submit
                  className="space-y-3 pl-8"
                >
                  {
                    /* Fix mapping: q.options is an array of localized objects */
                    (Array.isArray(q.options) ? q.options : []).map(
                      (opt: any, optIdx: number) => {
                        // Check if this option was selected and if it was right/wrong
                        // Note: Front-end doesn't know which is correct unless validated.
                        // But we can highlight the selected one green/red if we have feedback.

                        let itemClass =
                          "border-slate-700 bg-slate-800/50 hover:bg-slate-800";

                        if (result) {
                          const selected = answers[q.id] === optIdx;
                          if (selected) {
                            if (isCorrect)
                              itemClass =
                                "border-green-500 bg-green-500/10 text-green-400";
                            else
                              itemClass =
                                "border-red-500 bg-red-500/10 text-red-400";
                          }
                        }

                        return (
                          <div
                            key={optIdx}
                            className={`flex items-center space-x-3 rounded-lg border p-3 transition-all ${itemClass}`}
                          >
                            <RadioGroupItem
                              value={optIdx.toString()}
                              id={`q-${q.id}-opt-${optIdx}`}
                              className="border-slate-500 text-violet-500"
                            />
                            <Label
                              htmlFor={`q-${q.id}-opt-${optIdx}`}
                              className="flex-grow cursor-pointer"
                            >
                              {getLoc(opt)}
                            </Label>
                          </div>
                        );
                      },
                    )
                  }
                </RadioGroup>

                {/* Feedback Area */}
                {feedback && (
                  <div
                    className={`p-3 rounded-lg text-sm flex gap-3 pl-8 ${isCorrect ? "bg-green-500/10 text-green-300" : "bg-red-500/10 text-red-300"}`}
                  >
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 shrink-0" />
                    )}
                    <div>
                      <p className="font-bold">
                        {isCorrect ? t.correct : t.incorrect}
                      </p>
                      {explanation && (
                        <p className="mt-1 opacity-90">{explanation}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          {!result?.success && (
            <Button
              onClick={result ? handleRetry : handleSubmit}
              disabled={submitting || retrying}
              className={
                result
                  ? "w-full sm:w-auto"
                  : "w-full sm:w-auto bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500"
              }
              variant={result ? "secondary" : "default"}
            >
              {(submitting || retrying) && (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              )}
              {result ? t.tryAgain : t.submit}
            </Button>
          )}

          {result?.success && (
            <Button
              onClick={onClose}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-500"
            >
              {t.continue}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
