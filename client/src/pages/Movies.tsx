import { useEffect, useState } from "react";
import CardSection from "../components/Cards";
import { getPosters } from "../api/postersAPI";
import { CardData } from "../interfaces/CardData";
import YearDropdown from "../components/YearDropdown";
import GenreDropdown from "../components/GenreDropdown";
import { PosterReqData } from "../interfaces/PosterReqData";

const Movies = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [reqData, setReqData] = useState<PosterReqData>({ Type: "movie" });

  // Handlers for year category
  const handleYearChange = (year: string) => {
    setReqData((prevReqData) => ({
      ...prevReqData,
      Year: year,
    }));
  };
  // Handlers for genre category
  const handleGenreChange = (genreId: number | null) => {
    setReqData((prevReqData) => ({
      ...prevReqData,
      Genre: genreId === null ? undefined : genreId,
    }));
  };

  useEffect(() => {
    getPosters(reqData)
      .then((data) => {setCards(data);})
      .catch((err) => {console.error(err);});
  }, [reqData]);

  return (
    <div className="nonwide-container">
      <div className="dropdown-container flex-row">
        <YearDropdown onYearChange={handleYearChange} />
        <GenreDropdown onGenreChange={handleGenreChange} type={reqData.Type as "movie" | "tv"}/>
      </div>
      <div className="card-parent-container">
        {cards.map((card, index) => (
          <CardSection {...card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
