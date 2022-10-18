import ReccomendedArtists from "../components/ReccomendedArtists";
import SearchBar from "../components/SearchBar";
import "../styles/Homepage.module.scss";

const HomepageLayout = (props) => {
  return (
    <>
      <SearchBar />
      <ReccomendedArtists items={props.reccomendedArtists} />
    </>
  );
};

export default HomepageLayout;
