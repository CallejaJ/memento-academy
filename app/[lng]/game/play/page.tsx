"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { Clock, CheckCircle, XCircle, Flame, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

const translations = {
  en: {
    question: "Question",
    of: "of",
    correct: "Correct!",
    incorrect: "Incorrect",
    next: "Next",
    finish: "See Results",
    streak: "streak",
    timeUp: "Time's up!",
    loading: "Loading questions...",
    error: "Failed to load questions",
  },
  es: {
    question: "Pregunta",
    of: "de",
    correct: "¡Correcto!",
    incorrect: "Incorrecto",
    next: "Siguiente",
    finish: "Ver Resultados",
    streak: "racha",
    timeUp: "¡Se acabó el tiempo!",
    loading: "Cargando preguntas...",
    error: "Error al cargar preguntas",
  },
};

interface Question {
  id: string;
  category: string;
  difficulty: string;
  question_text: { en: string; es: string };
  options: Array<{ en: string; es: string }>;
}

interface AnswerFeedback {
  isCorrect: boolean;
  correctIndex: number;
  explanation: { en: string; es: string } | null;
}

const TIME_PER_QUESTION = 30;

function GamePlayContent() {
  const { lng } = useParams<{ lng: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const t = translations[lng as keyof typeof translations] || translations.en;

  const sessionToken = searchParams.get("session");

  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<AnswerFeedback | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  // Fetch questions on mount
  useEffect(() => {
    if (!sessionToken) {
      router.push(`/${lng}/game`);
      return;
    }
    fetchQuestions();
  }, [sessionToken]);

  // Timer countdown
  useEffect(() => {
    if (loading || showFeedback) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, loading, showFeedback]);

  const fetchQuestions = async () => {
    try {
      const res = await fetch(
        `/api/game/questions?sessionToken=${sessionToken}`
      );
      if (!res.ok) throw new Error("Failed to fetch questions");

      const data = await res.json();
      setQuestions(data.questions);
      setLoading(false);
      setQuestionStartTime(Date.now());
    } catch (error) {
      console.error("Error fetching questions:", error);
      router.push(`/${lng}/game`);
    }
  };

  const handleTimeUp = () => {
    if (!showFeedback && selectedAnswer === null) {
      submitAnswer(-1); // Submit invalid answer for time-up
    }
  };

  const submitAnswer = async (answerIndex: number) => {
    if (submitting || showFeedback) return;

    setSubmitting(true);
    setSelectedAnswer(answerIndex);

    const responseTimeMs = Date.now() - questionStartTime;

    try {
      const res = await fetch("/api/game/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionToken,
          questionId: questions[currentIndex].id,
          answerIndex,
          responseTimeMs,
        }),
      });

      const data = await res.json();
      setFeedback(data);
      setShowFeedback(true);

      if (data.isCorrect) {
        setStreak((prev) => prev + 1);
        setScore((prev) => prev + 1);
        // Mini confetti for correct answer
        confetti({
          particleCount: 30,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#22d3ee", "#2dd4bf", "#a855f7"],
        });
      } else {
        setStreak(0);
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleNext = () => {
    if (currentIndex >= questions.length - 1) {
      // Go to results
      router.push(`/${lng}/game/results?session=${sessionToken}`);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setFeedback(null);
      setShowFeedback(false);
      setTimeLeft(TIME_PER_QUESTION);
      setQuestionStartTime(Date.now());
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="text-cyan-400 animate-pulse text-xl">{t.loading}</div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const questionText =
    currentQuestion.question_text[lng as "en" | "es"] ||
    currentQuestion.question_text.en;
  const options = currentQuestion.options;

  return (
    <div
      className="min-h-screen py-8 px-4"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(2, 6, 23, 0.85), rgba(15, 23, 42, 0.75)), url('/images/wallpapers/quiz-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto max-w-2xl">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
            <span>
              {t.question} {currentIndex + 1} {t.of} {questions.length}
            </span>
            <span className="text-cyan-400 font-bold">
              {score}/{questions.length}
            </span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Timer */}
        <div className="flex items-center justify-center mb-6">
          <div
            className={`relative w-20 h-20 ${timeLeft <= 10 ? "animate-pulse" : ""}`}
          >
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-slate-800"
              />
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 36}`}
                strokeDashoffset={`${2 * Math.PI * 36 * (1 - timeLeft / TIME_PER_QUESTION)}`}
                className={`transition-all duration-1000 ${
                  timeLeft <= 5
                    ? "text-red-500"
                    : timeLeft <= 10
                      ? "text-yellow-500"
                      : "text-cyan-400"
                }`}
                strokeLinecap="round"
              />
            </svg>
            <div
              className={`absolute inset-0 flex items-center justify-center text-2xl font-bold ${
                timeLeft <= 5
                  ? "text-red-500"
                  : timeLeft <= 10
                    ? "text-yellow-500"
                    : "text-white"
              }`}
            >
              {timeLeft}
            </div>
          </div>

          {/* Streak indicator */}
          {streak > 0 && (
            <div className="ml-4 flex items-center gap-1 text-orange-400">
              {[...Array(Math.min(streak, 5))].map((_, i) => (
                <Flame
                  key={i}
                  className="w-5 h-5 animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
              <span className="ml-1 font-bold">
                {streak} {t.streak}!
              </span>
            </div>
          )}
        </div>

        {/* Question card */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-6 mb-6 shadow-2xl">
          <div className="text-xs text-cyan-400 mb-2 uppercase tracking-wide">
            {currentQuestion.category}
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
            {questionText}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {options.map((option, index) => {
            const optionText = option[lng as "en" | "es"] || option.en;
            const isSelected = selectedAnswer === index;
            const isCorrect = feedback?.correctIndex === index;
            const isWrong = showFeedback && isSelected && !feedback?.isCorrect;

            return (
              <button
                key={index}
                onClick={() => !showFeedback && submitAnswer(index)}
                disabled={showFeedback || submitting}
                className={`w-full p-4 rounded-2xl text-left transition-all duration-300 border ${
                  showFeedback
                    ? isCorrect
                      ? "bg-green-500/20 border-green-500 text-green-300"
                      : isWrong
                        ? "bg-red-500/20 border-red-500 text-red-300 animate-shake"
                        : "bg-slate-800/50 border-slate-700 text-slate-400"
                    : isSelected
                      ? "bg-cyan-500/20 border-cyan-500 text-white"
                      : "bg-slate-800/50 border-slate-700 text-white hover:bg-slate-700/50 hover:border-slate-600"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      showFeedback && isCorrect
                        ? "bg-green-500 text-white"
                        : showFeedback && isWrong
                          ? "bg-red-500 text-white"
                          : "bg-slate-700 text-slate-300"
                    }`}
                  >
                    {showFeedback && isCorrect ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : showFeedback && isWrong ? (
                      <XCircle className="w-5 h-5" />
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </div>
                  <span className="flex-1">{optionText}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback & Next button */}
        {showFeedback && (
          <div className="space-y-6 mt-8">
            {/* Feedback message */}
            <div
              className={`p-4 rounded-2xl ${
                feedback?.isCorrect
                  ? "bg-green-500/20 border border-green-500/50"
                  : "bg-red-500/20 border border-red-500/50"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {feedback?.isCorrect ? (
                  <CheckCircle className="w-6 h-6 text-green-400" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-400" />
                )}
                <span
                  className={`font-bold ${feedback?.isCorrect ? "text-green-400" : "text-red-400"}`}
                >
                  {feedback?.isCorrect ? t.correct : t.incorrect}
                </span>
              </div>
              {feedback?.explanation && (
                <p className="text-slate-300 text-sm">
                  {feedback.explanation[lng as "en" | "es"] ||
                    feedback.explanation.en}
                </p>
              )}
            </div>

            {/* Next button */}
            <div className="flex justify-center">
              <Button
                onClick={handleNext}
                className="px-8 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400"
              >
                {currentIndex >= questions.length - 1 ? t.finish : t.next}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Shake animation */}
      <style jsx global>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default function GamePlayPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="text-cyan-400 animate-pulse text-xl">Loading...</div>
        </div>
      }
    >
      <GamePlayContent />
    </Suspense>
  );
}
