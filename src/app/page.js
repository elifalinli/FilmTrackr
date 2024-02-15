import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import FilmsList from "@/components/FilmsList";




const Home = async () => {

  const trendingMoviesRes = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`);
  const trendingMoviesData = await trendingMoviesRes.json();
 
  // const [filterOption,setFilterOption] = useState('Trending')
  // const [movieData, setMovieData] = useState([])
  // setMovieData(trendingMoviesData)

  return (
    <main>
       <MaxWidthWrapper className="mb-12 mt-20 sm:mt-32 flex flex-col items-center text-center justify-center">
       <div className="rounded-xl border border-gray-300 p-6 sm:p-12">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
      Film Trackr
    </h1>
    <h3 className=" mt-9 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
    Track, journal, and treasure your film-watching experiences with us.
    </h3>
    </div>
    <FilmsList trendingMovies={trendingMoviesData} />
       </MaxWidthWrapper>
       <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1.5 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8 ">
              <div className="mt-16 flow-root sm:mt-24 first-line:">
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1.5 rotate-[30deg] bg-gradient-to-tr from-[#addde0] to-[#5f54f4] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
export default Home;