import { useEffect, useState } from "react";
import _debounce from "lodash/debounce";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../redux/slice/bookSlice";

export default function useSearch() {
  const [searchString, setSearchString] = useState("");
  const dispatch = useDispatch();
  const debouncedFetchSearchResults = _debounce(
    (query) => dispatch(fetchSearchResults({ query })),
    300
  );
  useEffect(() => {
    if (searchString !== "") {
      debouncedFetchSearchResults(searchString);
    }
  }, [searchString, debouncedFetchSearchResults]);

  return { setSearchString, searchString };
}
