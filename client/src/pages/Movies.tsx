import GenreDropdown from "../components/GenreDropdown";
import YearDropdown from "../components/YearDropdown";
import CardSection from "../components/Cards";

const Movies = () => {
  return (
    <div>
      <GenreDropdown />
      <YearDropdown />
      <CardSection />
    </div>
  );
};

export default Movies;
