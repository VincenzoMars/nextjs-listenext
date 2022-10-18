import "../styles/SearchBar.module.scss";

const SearchBar = (props) => {
  const { item } = props;
  return (
    <div className="search-bar">
      <span>Cerca</span>
      <input type="search" name="" id="" />
    </div>
  );
};

export default SearchBar;
