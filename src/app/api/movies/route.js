import { NextResponse } from "next/server";

const apiKEY = process.env.API_KEY;
const apiToken = process.env.API_TOKEN;

const generateSitemap = async (count) => {
  const sitemapUrlsArray = ["/", "/search", "/movies"];

  const promiseArray = [];

  for (let i = 1; i <= count; i++) {
    promiseArray.push(
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${i}`
      )
    );
  }
  const movies = await Promise.all(promiseArray);
  const moviesJson = await Promise.all(movies.map((movie) => movie.json()));

  for (const moviesObj of moviesJson) {
    for (const movie of moviesObj.results) {
      sitemapUrlsArray.push(`/movies/${movie.id}`);
    }
  }
  const sitemap = sitemapUrlsArray.map((url) => websiteUrl + url).join("\n");

  return sitemap;
};

async function GET (req) {
  const sitemap = await generateSitemap(10)

  return new Response(
    sitemap,
    {
        status: 200,
        headers: {
            'content-type': 'text/plain',
            'cache-control': 'stale-while-revalidate, s-maxage=3600',
        },
    },
)
}
