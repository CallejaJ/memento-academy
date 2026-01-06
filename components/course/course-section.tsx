"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Lock,
  CheckCircle,
  PlayCircle,
  BookOpen,
  UserPlus,
} from "lucide-react";
import { useAuthModal } from "@/contexts/auth-modal-context";
import { QuizModal } from "@/components/quiz/quiz-modal";
import {
  CourseSection as SectionData,
  QuizQuestion,
  getQuizQuestions,
} from "@/actions/course";
import { useParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

interface CourseSectionProps {
  section: SectionData;
  isLocked: boolean;
  isCompleted: boolean;
  isCurrent: boolean; // The next actionable section
  onComplete: () => void;
  onMarkComplete: () => Promise<void>; // Client-side progress save
  isLoggedIn?: boolean; // For free courses CTA
  isLastSection?: boolean; // Hide connector line on last item
}

export function CourseSection({
  section,
  isLocked,
  isCompleted,
  isCurrent,
  onComplete,
  onMarkComplete,
  isLoggedIn = true, // Default to true for backward compatibility
  isLastSection = false,
}: CourseSectionProps) {
  const { openLogin } = useAuthModal();
  const [expanded, setExpanded] = useState(isCurrent || isCompleted); // Default expand if actionable
  const [quizOpen, setQuizOpen] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loadingQuiz, setLoadingQuiz] = useState(false);

  const { lng } = useParams<{ lng: string }>();
  const lang = (lng as string) || "en";
  const { toast } = useToast();

  const getLoc = (obj: any) => {
    if (typeof obj === "string") return obj; // already string (legacy)
    if (!obj) return "";
    return obj[lang] || obj["en"] || "";
  };

  const title = getLoc(section.title);
  const description = getLoc(section.description);
  const content = section.content[lang] || section.content["en"];

  const handleToggle = () => {
    if (isLocked) return;
    setExpanded(!expanded);
  };

  const loadQuiz = async () => {
    setLoadingQuiz(true);
    try {
      const qs = await getQuizQuestions(section.id);
      setQuestions(qs);
      setQuizOpen(true);
    } catch (e) {
      toast({
        title: "Error",
        description: "Failed to load quiz. Check connection.",
        variant: "destructive",
      });
    } finally {
      setLoadingQuiz(false);
    }
  };

  return (
    <>
      <div className="relative group mb-4">
        {/* Connector Line - hide on last section */}
        {!isLastSection && (
          <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
        )}
        {/* Status Dot */}
        <div
          className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
            isCompleted
              ? "bg-green-500 border-green-500"
              : isCurrent
                ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50"
                : "bg-slate-700 border-slate-600"
          }`}
        />

        <Card
          className={`ml-4 transition-all border-slate-800 ${
            isLocked && isLoggedIn
              ? "bg-slate-900/30 opacity-70"
              : "bg-slate-900/50 hover:border-slate-700"
          }`}
        >
          {/* Header */}
          <div
            className={`p-4 flex items-center justify-between ${
              !isLocked || !isLoggedIn ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            onClick={handleToggle}
          >
            <div className="flex items-center gap-3">
              {isCompleted ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : isLocked && isLoggedIn ? (
                <Lock className="w-5 h-5 text-slate-500" />
              ) : (
                <BookOpen className="w-5 h-5 text-cyan-400" />
              )}

              <div>
                <h3
                  className={`text-lg font-semibold ${isLocked ? "text-slate-500" : "text-white"}`}
                >
                  {section.order_index}. {title}
                </h3>
                <p className="text-sm text-slate-400">{description}</p>
              </div>
            </div>
            {!isLocked && (
              <ChevronDown
                className={`w-5 h-5 text-slate-400 transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            )}
          </div>

          {/* Expanded Content */}
          {expanded && !isLocked && (
            <div className="px-6 pb-6 border-t border-slate-800/50 pt-4">
              {/* Dynamic Content Rendering */}
              {/* For now, simplistic rendering of JSON blocks. 
                  In reality, this would be a rich text renderer or map over specific keys 
                  depending on the structure we defined in seed.sql.
              */}
              <div className="text-slate-300 space-y-4 mb-6">
                {/* p1 paragraph with bold support */}
                {content.p1 && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: content.p1.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong class="text-white">$1</strong>'
                      ),
                    }}
                  />
                )}

                {/* p2 paragraph with bold support */}
                {content.p2 && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: content.p2.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong class="text-white">$1</strong>'
                      ),
                    }}
                  />
                )}

                {/* p3 paragraph with bold support */}
                {content.p3 && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: content.p3.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong class="text-white">$1</strong>'
                      ),
                    }}
                  />
                )}

                {/* desc paragraph (alternative to p1) */}
                {content.desc && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: content.desc.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong class="text-white">$1</strong>'
                      ),
                    }}
                  />
                )}

                {/* components block */}
                {content.components && (
                  <div className="bg-slate-800/40 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">
                      {content.components.title}
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {content.components.items?.map((item: any, i: number) => (
                        <div
                          key={i}
                          className="bg-slate-900/50 p-2 rounded border border-slate-800"
                        >
                          <p className="font-bold text-cyan-400 text-sm">
                            {item.title}
                          </p>
                          <p className="text-xs">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* crypto block */}
                {content.crypto && (
                  <div className="bg-slate-800/40 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">
                      {content.crypto.title}
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {content.crypto.list?.map((item: string, i: number) => (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{
                            __html: item.replace(
                              /\*\*(.*?)\*\*/g,
                              '<strong class="text-white">$1</strong>'
                            ),
                          }}
                        />
                      ))}
                    </ul>
                  </div>
                )}

                {/* pow block (Proof of Work) */}
                {content.pow && (
                  <div className="bg-slate-800/40 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">
                      {content.pow.title}
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {content.pow.list?.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* pos block (Proof of Stake) */}
                {content.pos && (
                  <div className="bg-slate-800/40 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">
                      {content.pos.title}
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {content.pos.list?.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* faqs block (FAQ items) */}
                {content.faqs && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white mb-3">
                      {content.faqs.title}
                    </h4>
                    <div className="space-y-2">
                      {content.faqs.items?.map((item: any, i: number) => (
                        <div
                          key={i}
                          className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/50"
                        >
                          <p className="font-semibold text-cyan-400 mb-2">
                            {item.title}
                          </p>
                          <p className="text-slate-300 text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Fallback for unknown structures */}
                {!content.p1 &&
                  !content.desc &&
                  !content.components &&
                  !content.crypto &&
                  !content.pow &&
                  !content.pos &&
                  !content.faqs && (
                    <div className="whitespace-pre-wrap">
                      {JSON.stringify(content, null, 2)}
                    </div>
                  )}
              </div>

              {/* Action Area */}
              <div className="flex justify-center pt-4 border-t border-slate-800/50">
                {isCompleted ? (
                  <Badge className="bg-green-500/10 text-green-400 hover:bg-green-500/20 px-4 py-1">
                    {lang === "es" ? "Sección Completada" : "Section Completed"}
                  </Badge>
                ) : isLoggedIn ? (
                  <Button
                    onClick={loadQuiz}
                    disabled={loadingQuiz}
                    className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/20"
                  >
                    {loadingQuiz ? (
                      <>
                        {lang === "es" ? "Cargando Quiz..." : "Loading Quiz..."}
                      </>
                    ) : (
                      <>
                        <PlayCircle className="w-4 h-4 mr-2" />
                        {lang === "es"
                          ? "Tomar Quiz para Desbloquear"
                          : "Take Quiz to Unlock Next"}
                      </>
                    )}
                  </Button>
                ) : (
                  <Button
                    onClick={openLogin}
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white shadow-lg shadow-cyan-500/20"
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    {lang === "es"
                      ? "Regístrate para hacer el Quiz"
                      : "Register to take the Quiz"}
                  </Button>
                )}
              </div>
            </div>
          )}
        </Card>
      </div>

      <QuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        sectionId={section.id}
        questions={questions}
        onPassed={async () => {
          await onMarkComplete(); // Save progress via client-side hook
          onComplete(); // Trigger UI refresh
          setExpanded(false); // Collapse after pass
        }}
        onRetry={loadQuiz}
      />
    </>
  );
}
