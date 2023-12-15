import { useDispatch } from "react-redux";
import { setSubjectData } from "../redux/slice/subjectSlice";

export default function useSubjectData() {
  const dispatch = useDispatch();
  const updateSubject = (subjectString) => {
    dispatch(setSubjectData(subjectString));
  };
  return {
    updateSubject,
  };
}
