import react from "react";

const Card = (movie) => {
  let img_path = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className="Movie">
        <img src={img_path + movie.info.poster_path} className="poster"></img>
      </div>
    </>
  );
};
