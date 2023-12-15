/* eslint-disable react/no-unknown-property */
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard";
import useMovieData from "../../hooks/useMovieData";

export default function MovieList() {
  useMovieData();

  const { bookList, status } = useSelector((state) => state.books);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="spinner"></div>
        <div className="ml-4 text-xl font-semibold text-gray-700">
          Loading...
        </div>
      </div>
    );
  }

  if (!bookList.length) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="text-center">
          <svg
            className="w-16 h-16 mb-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v6m0 0v6m0-6h6m-6 0H6"
            ></path> */}
          </svg>
          <p className="text-xl font-semibold text-gray-700">
            Oops! No books found.
          </p>
          <p className="text-gray-500">Try searching for different subject.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-around gap-4">
      {bookList.map((data) => (
        <MovieCard
          key={data.cover_id}
          title={data.title}
          authors={data.authors[0]}
          coverId={data.cover_id}
          publishedYear={data.first_publish_year}
        />
      ))}
    </div>
  );
}
