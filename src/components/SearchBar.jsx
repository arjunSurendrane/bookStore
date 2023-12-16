export default function SearchBar() {
  return (
    <div>
      {/* Search Bar */}
      <div className="flex items-center mb-3">
        <input
          type="text"
          placeholder="Search..."
          // value={searchQuery}
          // onChange={handleSearchChange}
          className="border  bg-gray-100 rounded-lg px-4 py-3 text-sm font-semibold mr-4 focus:outline-none"
        />
      </div>
    </div>
  );
}
