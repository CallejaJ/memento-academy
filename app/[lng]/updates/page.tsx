import { Tweet } from "react-tweet";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lng: string }>;
}): Promise<Metadata> {
  const { lng } = await params;

  return {
    title:
      lng === "es"
        ? "Actualizaciones de X (Twitter) | Memento Academy"
        : "X (Twitter) Updates | Memento Academy",
    description:
      lng === "es"
        ? "Las últimas actualizaciones y anuncios de Memento Academy directamente desde X."
        : "The latest updates and announcements from Memento Academy directly from X.",
  };
}

const TWEETS = [
  "2012827306239365209",
  "2012464917627244789",
  "2012087430292394370",
  "2011800539558797749",
  "2011438151550877978",
  "2011000266645295429",
];

export default async function UpdatesPage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  return (
    <div
      className="min-h-screen bg-center bg-no-repeat bg-slate-950"
      style={{
        background:
          "radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.15) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(20,184,166,0.1) 0%, transparent 50%), radial-gradient(ellipse at 60% 60%, rgba(16,185,129,0.08) 0%, transparent 40%), linear-gradient(to bottom, #0f172a 0%, #020617 100%)",
      }}
    >
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1
          className="text-4xl sm:text-5xl font-bold mb-8 text-center"
          style={{
            background:
              "linear-gradient(to left, #06b6d4 0%, #14b8a6 40%, #10b981 70%, #6ee7b7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter:
              "drop-shadow(0 0 8px rgba(6,182,212,0.3)) drop-shadow(0 0 20px rgba(20,184,166,0.4)) drop-shadow(0 0 40px rgba(110,231,183,0.5))",
          }}
        >
          {lng === "es" ? "Actualizaciones en X" : "Updates on X"}
        </h1>

        <p className="text-lg text-slate-300 text-center mb-12">
          {lng === "es"
            ? "Sigue nuestras últimas noticias, anuncios y contenido educativo directamente desde nuestra cuenta oficial."
            : "Follow our latest news, announcements and educational content directly from our official account."}
        </p>

        <div className="space-y-8 flex flex-col items-center">
          {TWEETS.map((id, index) => (
            <div
              key={`${id}-${index}`}
              className="w-full max-w-[550px]"
              data-theme="dark"
            >
              <Tweet id={id} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://x.com/memento_academy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:opacity-90 h-10 px-6 py-2"
          >
            {lng === "es" ? "Ver todo en X" : "View all on X"}
          </a>
        </div>
      </div>
    </div>
  );
}
