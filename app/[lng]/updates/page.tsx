import { Tweet } from "react-tweet";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualizaciones de X (Twitter) | Memento Academy",
  description:
    "Las últimas actualizaciones y anuncios de Memento Academy directamente desde X.",
};

const TWEETS = [
  "2012827306239365209",
  "2012464917627244789",
  "2012087430292394370",
  "2011800539558797749",
  "2011438151550877978",
  "2011000266645295429",
];

export default function UpdatesPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
        Actualizaciones en X
      </h1>

      <p className="text-lg text-muted-foreground text-center mb-12">
        Sigue nuestras últimas noticias, anuncios y contenido educativo
        directamente desde nuestra cuenta oficial.
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
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Ver todo en X
        </a>
      </div>
    </div>
  );
}
