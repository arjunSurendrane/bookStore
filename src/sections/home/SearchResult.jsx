import { useSelector } from "react-redux";
import SearchResultCard from "../../components/SearchResultCard";
import Loading from "../../components/Loading";
import toast from "react-hot-toast";
import Notfound from "../../components/Notfound";

const SearchResults = () => {
  const { searchResults, searchStatus } = useSelector((state) => state.books);

  if (searchStatus === "failed") {
    toast.error("Something went wrong. Try again !!!");
  }

  if (searchStatus === "loading") {
    return <Loading />;
  }

  if (!searchResults.length) {
    return <Notfound />;
  }

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-2">Search Results:</h2>
      <div className="grid grid-cols-5 gap-4">
        {searchResults?.map((result) => (
          <SearchResultCard result={result} key={result?.cover_i} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
