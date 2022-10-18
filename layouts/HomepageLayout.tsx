import ReccomendedArtists from "../components/ReccomendedArtists";
import "../styles/Homepage.module.scss";

const HomepageLayout = (props) => {
  return (
    <>
      <div className="homepage-wrapper">
        {/* <div className="search-bar">
          <span>Cerca</span>
          <input type="search" name="" id="" />
        </div> */}
      </div>
      <ReccomendedArtists items={props.reccomendedArtists} />
    </>
  );
};

export default HomepageLayout;
