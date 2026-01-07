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
    if (isLocked) {
      if (!isLoggedIn) {
        openLogin();
      }
      return;
    }
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
              ) : isLocked ? (
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

                {/* special block (list with title) - NFT Masterclass */}
                {content.special && (
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
                    <h4 className="text-blue-400 font-semibold mb-3">
                      {content.special.title}
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {content.special.list?.map((item: string, i: number) => (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{ __html: `• ${item}` }}
                        />
                      ))}
                    </ul>
                  </div>
                )}

                {/* types block (grid of cards with title + optional image) - Technical Analysis */}
                {content.types && (
                  <div>
                    {content.types.title && (
                      <h4 className="font-semibold text-white mb-4">
                        {content.types.title}
                      </h4>
                    )}
                    {content.types.image && (
                      <div className="mb-6 rounded-xl overflow-hidden border border-slate-700/50">
                        <img
                          src={content.types.image}
                          alt={content.types.title || "Chart types"}
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {(content.types.items || []).map(
                        (type: any, i: number) => (
                          <div
                            key={i}
                            className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/50"
                          >
                            <h5 className="text-cyan-400 font-semibold mb-2">
                              {type.title}
                            </h5>
                            <p className="text-sm text-slate-300">
                              {type.desc}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* tech block (title + desc + optional list) */}
                {content.tech && (
                  <div className="bg-slate-800/40 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">
                      {content.tech.title}
                    </h4>
                    {content.tech.desc && (
                      <p className="text-sm mb-3">{content.tech.desc}</p>
                    )}
                    {content.tech.list && (
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {content.tech.list.map((item: string, i: number) => (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        ))}
                      </ul>
                    )}
                    {content.tech.dynamic && (
                      <div className="mt-3 bg-slate-900/50 p-3 rounded">
                        <p className="font-semibold text-purple-400">
                          {content.tech.dynamic.title}
                        </p>
                        <p className="text-xs">{content.tech.dynamic.desc}</p>
                      </div>
                    )}
                    {content.tech.ai && (
                      <div className="mt-2 bg-slate-900/50 p-3 rounded">
                        <p className="font-semibold text-purple-400">
                          {content.tech.ai.title}
                        </p>
                        <p className="text-xs">{content.tech.ai.desc}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* process block (title + steps) - NFT Minting */}
                {content.process && (
                  <div className="bg-slate-800/40 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-3">
                      {content.process.title}
                    </h4>
                    <div className="space-y-2">
                      {content.process.steps?.map((step: any, i: number) => (
                        <div key={i} className="flex gap-3 items-start">
                          <span className="bg-cyan-500/20 text-cyan-400 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                            {i + 1}
                          </span>
                          <div>
                            <span className="font-semibold text-white">
                              {step.title}
                            </span>{" "}
                            <span className="text-sm text-slate-400">
                              {step.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* concepts block (cards) */}
                {content.concepts && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {Object.values(content.concepts).map(
                      (concept: any, i: number) => (
                        <div
                          key={i}
                          className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/50"
                        >
                          <p className="font-semibold text-cyan-400 mb-1">
                            {concept.title}
                          </p>
                          <p className="text-xs text-slate-300">
                            {concept.desc}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* warn block (important considerations) */}
                {content.warn && (
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-400 mb-3">
                      {content.warn.title}
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {content.warn.list?.map((item: string, i: number) => (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{ __html: `• ${item}` }}
                        />
                      ))}
                    </ul>
                  </div>
                )}

                {/* markets block (marketplace cards) */}
                {content.markets && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {Object.values(content.markets).map(
                      (market: any, i: number) => (
                        <div key={i} className="bg-slate-800/40 p-4 rounded-lg">
                          <h5 className="font-semibold text-cyan-400 mb-1">
                            {market.title}
                          </h5>
                          <p className="text-xs text-slate-400 mb-2">
                            {market.desc}
                          </p>
                          {market.list && (
                            <ul className="text-xs space-y-1">
                              {market.list.map((item: string, j: number) => (
                                <li key={j}>• {item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* tips block (trading tips) */}
                {content.tips && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">
                      {content.tips.title}
                    </h4>
                    {content.tips.research && (
                      <div className="bg-slate-800/40 p-4 rounded-lg">
                        <p className="font-semibold text-green-400 mb-2">
                          {content.tips.research.title}
                        </p>
                        <ul className="text-sm space-y-1">
                          {content.tips.research.list?.map(
                            (item: string, i: number) => (
                              <li key={i}>• {item}</li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                    {content.tips.safe && (
                      <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                        <p className="font-semibold text-red-400 mb-2">
                          {content.tips.safe.title}
                        </p>
                        <ul className="text-sm space-y-1">
                          {content.tips.safe.list?.map(
                            (item: string, i: number) => (
                              <li key={i}>• {item}</li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* pricing block */}
                {content.pricing && (
                  <div className="bg-slate-800/40 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-3">
                      {content.pricing.title}
                    </h4>
                    <div className="space-y-2 text-sm">
                      {content.pricing.floor && (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: content.pricing.floor,
                          }}
                        />
                      )}
                      {content.pricing.avg && (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: content.pricing.avg,
                          }}
                        />
                      )}
                      {content.pricing.ceil && (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: content.pricing.ceil,
                          }}
                        />
                      )}
                    </div>
                  </div>
                )}

                {/* strats block (investment strategies) */}
                {content.strats && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.values(content.strats).map(
                      (strat: any, i: number) => (
                        <div key={i} className="bg-slate-800/40 p-4 rounded-lg">
                          <h5 className="font-semibold text-cyan-400 mb-1">
                            {strat.title}
                          </h5>
                          <p className="text-xs text-slate-400 mb-2">
                            {strat.desc}
                          </p>
                          {strat.list && (
                            <ul className="text-xs space-y-1">
                              {strat.list.map((item: string, j: number) => (
                                <li key={j}>• {item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* portfolio block */}
                {content.portfolio && (
                  <div className="bg-slate-800/40 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-3">
                      {content.portfolio.title}
                    </h4>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {content.portfolio.blue && (
                        <div className="bg-blue-500/10 p-3 rounded border border-blue-500/20">
                          <p className="font-semibold text-blue-400 text-sm">
                            {content.portfolio.blue.title}
                          </p>
                          <p className="text-xs text-slate-300 mb-2">
                            {content.portfolio.blue.desc}
                          </p>
                          {content.portfolio.alloc?.blue && (
                            <span className="text-xs font-bold bg-blue-500/20 px-2 py-0.5 rounded text-blue-300">
                              {content.portfolio.alloc.blue}
                            </span>
                          )}
                        </div>
                      )}
                      {content.portfolio.mid && (
                        <div className="bg-green-500/10 p-3 rounded border border-green-500/20">
                          <p className="font-semibold text-green-400 text-sm">
                            {content.portfolio.mid.title}
                          </p>
                          <p className="text-xs text-slate-300 mb-2">
                            {content.portfolio.mid.desc}
                          </p>
                          {content.portfolio.alloc?.mid && (
                            <span className="text-xs font-bold bg-green-500/20 px-2 py-0.5 rounded text-green-300">
                              {content.portfolio.alloc.mid}
                            </span>
                          )}
                        </div>
                      )}
                      {content.portfolio.small && (
                        <div className="bg-orange-500/10 p-3 rounded border border-orange-500/20">
                          <p className="font-semibold text-orange-400 text-sm">
                            {content.portfolio.small.title}
                          </p>
                          <p className="text-xs text-slate-300 mb-2">
                            {content.portfolio.small.desc}
                          </p>
                          {content.portfolio.alloc?.small && (
                            <span className="text-xs font-bold bg-orange-500/20 px-2 py-0.5 rounded text-orange-300">
                              {content.portfolio.alloc.small}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* flags block (red flags) */}
                {content.flags && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-red-400 mb-3">
                      {content.flags.title}
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {content.flags.list?.map((item: string, i: number) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* copyright block */}
                {content.copyright && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">
                      {content.copyright.title}
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {content.copyright.own && (
                        <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                          <p className="font-semibold text-green-400 mb-2">
                            {content.copyright.own.title}
                          </p>
                          <ul className="text-sm space-y-1">
                            {content.copyright.own.list?.map(
                              (item: string, i: number) => (
                                <li key={i}>✓ {item}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                      {content.copyright.dont && (
                        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                          <p className="font-semibold text-red-400 mb-2">
                            {content.copyright.dont.title}
                          </p>
                          <ul className="text-sm space-y-1">
                            {content.copyright.dont.list?.map(
                              (item: string, i: number) => (
                                <li key={i}>✗ {item}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* rights block */}
                {content.rights && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {content.rights.cc0 && (
                      <div className="bg-slate-800/40 p-4 rounded-lg">
                        <p className="font-semibold text-purple-400 mb-2">
                          {content.rights.cc0.title}
                        </p>
                        <p
                          className="text-sm"
                          dangerouslySetInnerHTML={{
                            __html: content.rights.cc0.desc,
                          }}
                        />
                      </div>
                    )}
                    {content.rights.comm && (
                      <div className="bg-slate-800/40 p-4 rounded-lg">
                        <p className="font-semibold text-purple-400 mb-2">
                          {content.rights.comm.title}
                        </p>
                        <p className="text-sm">{content.rights.comm.desc}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* tax block */}
                {content.tax && (
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-400 mb-2">
                      {content.tax.title}
                    </h4>
                    <p className="text-sm mb-3">{content.tax.desc}</p>
                    {content.tax.list && (
                      <ul className="space-y-1 text-sm">
                        {content.tax.list.map((item: string, i: number) => (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{ __html: `• ${item}` }}
                          />
                        ))}
                      </ul>
                    )}
                    {content.tax.disclaimer && (
                      <p className="text-xs text-slate-500 mt-3 italic">
                        {content.tax.disclaimer}
                      </p>
                    )}
                  </div>
                )}

                {/* reg block (regulatory) */}
                {content.reg && (
                  <div className="bg-slate-800/40 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">
                      {content.reg.title}
                    </h4>
                    <p className="text-sm mb-3">{content.reg.desc}</p>
                    <div className="space-y-2 text-sm">
                      {content.reg.sec && (
                        <p
                          dangerouslySetInnerHTML={{ __html: content.reg.sec }}
                        />
                      )}
                      {content.reg.aml && (
                        <p
                          dangerouslySetInnerHTML={{ __html: content.reg.aml }}
                        />
                      )}
                      {content.reg.cons && (
                        <p
                          dangerouslySetInnerHTML={{ __html: content.reg.cons }}
                        />
                      )}
                    </div>
                  </div>
                )}

                {/* trends block (future trends) */}
                {content.trends && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {Object.values(content.trends).map(
                      (trend: any, i: number) => (
                        <div key={i} className="bg-slate-800/40 p-4 rounded-lg">
                          <h5 className="font-semibold text-cyan-400 mb-1">
                            {trend.title}
                          </h5>
                          <p className="text-xs text-slate-400 mb-2">
                            {trend.desc}
                          </p>
                          {trend.list && (
                            <ul className="text-xs space-y-1">
                              {trend.list.map((item: string, j: number) => (
                                <li key={j}>• {item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* example block (list) */}
                {content.example && (
                  <div className="bg-slate-800/40 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-3">
                      {content.example.title}
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {content.example.list?.map((item: string, i: number) => (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{ __html: `• ${item}` }}
                        />
                      ))}
                    </ul>
                  </div>
                )}

                {/* goals block (Portfolio Basics) */}
                {content.goals && (
                  <div className="bg-slate-800/40 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-3">
                      {content.goals.title}
                    </h4>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {content.goals.items?.map((item: any, i: number) => (
                        <div
                          key={i}
                          className="bg-indigo-500/10 border border-indigo-500/20 p-3 rounded-lg"
                        >
                          <p className="font-semibold text-indigo-400 text-sm mb-1">
                            {item.title}
                          </p>
                          <p className="text-xs text-slate-300">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* pyramid block (Portfolio Visual Scheme) */}
                {content.pyramid && (
                  <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 flex flex-col items-center">
                    <h4 className="font-semibold text-white mb-6">
                      {content.pyramid.title}
                    </h4>
                    {/* Safelist for dynamic DB classes to prevent purging:
                        bg-red-500 bg-blue-500 bg-green-500 
                        w-1/3 w-2/3 w-full 
                    */}
                    <div className="w-full max-w-md flex flex-col gap-1 items-center">
                      {content.pyramid.levels?.map((level: any, i: number) => {
                        // Explicit map to ensure classes exist
                        const colorClass =
                          level.color === "bg-red-500"
                            ? "bg-red-500"
                            : level.color === "bg-blue-500"
                              ? "bg-blue-500"
                              : level.color === "bg-green-500"
                                ? "bg-green-500"
                                : level.color;

                        return (
                          <div
                            key={i}
                            className={`${level.width} ${colorClass} p-3 rounded text-center shadow-lg transition-transform hover:scale-105`}
                          >
                            <p className="font-bold text-white text-sm">
                              {level.label}
                            </p>
                            <p className="text-xs text-white/80">
                              {level.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* diversification block (Purple list) */}
                {content.diversification && (
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-400 mb-3">
                      {content.diversification.title}
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {content.diversification.list?.map(
                        (item: string, i: number) => (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{
                              __html: `• ${item.replace(
                                /\*\*(.*?)\*\*/g,
                                "<strong>$1</strong>"
                              )}`,
                            }}
                          />
                        )
                      )}
                    </ul>
                  </div>
                )}

                {/* risk block (Red list) */}
                {content.risk && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-red-400 mb-3">
                      {content.risk.title}
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {content.risk.list?.map((item: string, i: number) => (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{
                            __html: `• ${item.replace(
                              /\*\*(.*?)\*\*/g,
                              "<strong>$1</strong>"
                            )}`,
                          }}
                        />
                      ))}
                    </ul>
                  </div>
                )}

                {/* rebalance block (Green grid) */}
                {content.rebalance && (
                  <div className="bg-slate-800/40 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-3">
                      {content.rebalance.title}
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {content.rebalance.grid?.map((item: any, i: number) => (
                        <div
                          key={i}
                          className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-lg"
                        >
                          <p className="font-semibold text-emerald-400 mb-1">
                            {item.title}
                          </p>
                          <p className="text-xs text-slate-300">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* tracking block (Cyan list) */}
                {content.tracking && (
                  <div className="bg-slate-800/40 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-3">
                      {content.tracking.title}
                    </h4>
                    <ul className="space-y-3">
                      {content.tracking.list?.map((item: any, i: number) => (
                        <li key={i} className="flex gap-3 items-start">
                          <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-white text-sm">
                              {item.title}
                            </span>
                            <p className="text-xs text-slate-400">
                              {item.desc}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {content.outro && (
                      <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg text-center border border-cyan-500/30">
                        <p className="text-cyan-100 font-medium">
                          {content.outro}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* comparison block (table) - Smart Contracts */}
                {content.comparison && (
                  <div className="bg-slate-800/40 p-4 rounded-lg overflow-x-auto">
                    <h4 className="font-semibold text-white mb-3">
                      {content.comparison.title}
                    </h4>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-700">
                          <th className="text-left py-2 text-slate-400">
                            Aspect
                          </th>
                          <th className="text-left py-2 text-red-400">
                            Traditional
                          </th>
                          <th className="text-left py-2 text-green-400">
                            Smart Contract
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {content.comparison.table?.map(
                          (row: any, i: number) => (
                            <tr
                              key={i}
                              className="border-b border-slate-800/50"
                            >
                              <td className="py-2 text-white">{row.aspect}</td>
                              <td className="py-2">{row.traditional}</td>
                              <td className="py-2">{row.smart}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* code block (code snippet) - Smart Contracts */}
                {content.code && (
                  <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                    <h4 className="font-semibold text-white mb-3">
                      {content.code.title}
                    </h4>
                    <pre className="text-xs font-mono text-slate-300 whitespace-pre-wrap">
                      {content.code.snippet}
                    </pre>
                  </div>
                )}

                {/* networks block (table) - Smart Contracts Development */}
                {content.networks && (
                  <div className="bg-slate-800/40 p-4 rounded-lg overflow-x-auto">
                    <h4 className="font-semibold text-white mb-3">
                      {content.networks.title}
                    </h4>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-700">
                          <th className="text-left py-2 text-slate-400">
                            Network
                          </th>
                          <th className="text-left py-2 text-slate-400">
                            Purpose
                          </th>
                          <th className="text-left py-2 text-slate-400">
                            Cost
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {content.networks.table?.map((row: any, i: number) => (
                          <tr key={i} className="border-b border-slate-800/50">
                            <td className="py-2 text-cyan-400">
                              {row.network}
                            </td>
                            <td className="py-2">{row.purpose}</td>
                            <td className="py-2">{row.cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* tools block (security tools) */}
                {content.tools && (
                  <div className="bg-slate-800/40 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-3">
                      {content.tools.title}
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {content.tools.items?.map((tool: any, i: number) => (
                        <div
                          key={i}
                          className="bg-slate-900/50 p-3 rounded border border-slate-800"
                        >
                          <p className="font-semibold text-cyan-400 text-sm">
                            {tool.name}
                          </p>
                          <p className="text-xs">{tool.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* deploy block (deployment steps) */}
                {content.deploy && (
                  <div className="bg-slate-800/40 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-3">
                      {content.deploy.title}
                    </h4>
                    <div className="space-y-2">
                      {content.deploy.steps?.map((step: any, i: number) => (
                        <div key={i} className="flex gap-3 items-start">
                          <span className="bg-green-500/20 text-green-400 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                            {i + 1}
                          </span>
                          <div>
                            <span className="font-semibold text-white">
                              {step.step}
                            </span>{" "}
                            <span className="text-sm text-slate-400">
                              {step.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Fallback removed to prevent raw JSON dumps */}
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
