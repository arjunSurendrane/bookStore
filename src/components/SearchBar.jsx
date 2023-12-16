import PropTypes from "prop-types";

export default function SearchBar({ searchString, setSearchString }) {
  const handleSearchChange = (e) => {
    setSearchString(e.target.value);
  };
  return (
    <div>
      {/* Search Bar */}
      <div className="flex items-center mb-3">
        <input
          type="text"
          placeholder="Search..."
          value={searchString}
          onChange={handleSearchChange}
          className="border  bg-gray-200 rounded-lg px-4 py-3 text-sm font-semibold mr-4 focus:outline-none"
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  searchString: PropTypes.string.isRequired,
  setSearchString: PropTypes.func.isRequired,
};
