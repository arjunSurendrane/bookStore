import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/slice/bookSlice";

export default function useBooksData() {
  const dispatch = useDispatch();
  const { subject } = useSelector((state) => state.subject);
  useEffect(() => {
    dispatch(fetchBooks({ subject }));
  }, [dispatch, subject]);
  return {};
}
