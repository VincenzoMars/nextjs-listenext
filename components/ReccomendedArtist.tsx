import Image from "next/future/image";
const ReccomendedArtist = (props) => {
  const { item } = props;
  return (
    <div className="reccomended-listing">
      <h3>{item.name}</h3>
      <Image
        src={item.picture}
        alt={"artist picture"}
        width={100}
        height={100}
      />
    </div>
  );
};

export default ReccomendedArtist;
