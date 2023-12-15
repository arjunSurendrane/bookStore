import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/slice/bookSlice";

export default function useMovieData() {
  const dispatch = useDispatch();
  const { subject } = useSelector((state) => state.subject);
  const subjectData = useSelector((state) => state.subject);
  console.log({ subject, subjectData });
  useEffect(() => {
    dispatch(fetchBooks({ subject }));
  }, [dispatch, subject]);
  return {};
}
