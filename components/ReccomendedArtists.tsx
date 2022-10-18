import ReccomendedArtist from "./ReccomendedArtist";

const ReccomendedArtists = (props) => {
  console.log("props :>> ", props);
  const { items = [] } = props;
  return (
    <div className="reccomended-listing">
      {items.map((item) => (
        <ReccomendedArtist key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ReccomendedArtists;
