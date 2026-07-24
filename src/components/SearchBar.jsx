function SearchBar({ onSearch }) {

  return (
    <input
      type="text"
      placeholder="Search by country or league..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );

}

export default SearchBar;