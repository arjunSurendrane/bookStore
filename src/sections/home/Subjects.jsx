import { useSelector } from "react-redux";
import FilterButton from "../../components/FilterButton";
import { filterButtons } from "../../constant";
import useSubjectData from "../../hooks/useSubjectData";

export default function Subjects() {
  const { updateSubject } = useSubjectData();
  const { subject } = useSelector((state) => state.subject);
  return (
    <div className="flex flex-wrap  my-5 ">
      {filterButtons.map((data) => (
        <div key={data.subject} onClick={() => updateSubject(data.subject)}>
          <FilterButton
            content={data.subject}
            selected={subject === data.subject}
          />
        </div>
      ))}
    </div>
  );
}
