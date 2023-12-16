import SearchBar from "../../components/SearchBar";
import SearchResults from "./SearchResult";
import MovieList from "./MovieList";
import Subjects from "./Subjects";
import useSearch from "../../hooks/useSearch";

export default function HomeSections() {
  const { searchString, setSearchString } = useSearch();

  return (
    <div className="px-5">
      <Subjects />
      <div className=" flex justify-center">
        <SearchBar
          searchString={searchString}
          setSearchString={setSearchString}
        />
      </div>
      {searchString !== "" ? <SearchResults /> : <MovieList />}
    </div>
  );
}
