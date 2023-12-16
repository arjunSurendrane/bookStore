/* eslint-disable react/no-unknown-property */
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard";
import useBooksData from "../../hooks/useBooksData";
import toast from "react-hot-toast";
import Loading from "../../components/Loading";
import Notfound from "../../components/Notfound";

export default function MovieList() {
  useBooksData();
  const { bookList, status } = useSelector((state) => state.books);

  if (status === "failed") {
    toast.error("Something went wrong. Try again !!!");
  }

  if (status === "loading") {
    return <Loading />;
  }

  if (!bookList.length) {
    return <Notfound />;
  }

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
