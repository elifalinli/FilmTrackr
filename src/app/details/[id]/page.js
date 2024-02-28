import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Details = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=69a4a5a44ce1c9025852dc6d3be18d93`
  );
  const data = await res.json();

  return (
    <MaxWidthWrapper>
      <div className="grid grid-rows-4 grid-cols-4 gap-4 pt-10 mt-10">
        <h1 className=" col-span-2">{data.title}</h1>
        <article className="col-span-2 col-start-1 row-span-3 row-start-2 ">
          {data.overview}
        </article>
        <img
          className="col-span-2 row-span-4 col-start-3 row-start-1 "
          src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt={data.title}
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default Details;
