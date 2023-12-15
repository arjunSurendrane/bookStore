import MovieList from "./MovieList";
import Subjects from "./Subjects";

export default function HomeSections() {
  return (
    <div className="px-5">
      <Subjects />
      <MovieList />
    </div>
  );
}
