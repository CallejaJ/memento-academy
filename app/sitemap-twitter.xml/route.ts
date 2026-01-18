const EXTERNAL_DATA_URL = "https://x.com/memento_academy";

// Estos deben coincidir con los IDs usados en la página de updates
const TWEET_IDS = [
  "2012827306239365209",
  "2012464917627244789",
  "2012087430292394370",
  "2011800539558797749",
  "2011438151550877978",
  "2011000266645295429",
];

function generateSiteMap(tweets: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     ${tweets
       .map((id) => {
         return `
       <url>
           <loc>${EXTERNAL_DATA_URL}/status/${id}</loc>
           <changefreq>weekly</changefreq>
           <priority>0.8</priority>
           <lastmod>${new Date().toISOString().split("T")[0]}</lastmod> 
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

export async function GET() {
  const sitemap = generateSiteMap(TWEET_IDS);

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "text/xml",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}
