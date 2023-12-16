/* eslint-disable react/no-unknown-property */
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard";
import useBooksData from "../../hooks/useBooksData";
import toast from "react-hot-toast";

export default function MovieList() {
  useBooksData();

  const { bookList, status } = useSelector((state) => state.books);

  if (status === "failed") {
    toast.error("Something went wrong. Try again !!!");
  }

  if (status === "loading") {
    // Loading ui
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="spinner"></div>
        <div className="ml-4 text-xl font-semibold text-gray-700">
          Loading...
        </div>
      </div>
    );
  }

  // No books found
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
          ></svg>
          <p className="text-xl font-semibold text-gray-700">
            Oops! No books found.
          </p>
          <p className="text-gray-500">Try searching for different subject.</p>
        </div>
      </div>
    );
  }

  // list all books
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
