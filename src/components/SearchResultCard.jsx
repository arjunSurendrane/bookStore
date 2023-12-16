import PropTypes from "prop-types";
import useCart from "../hooks/useCart";

export default function SearchResultCard({ result }) {
  const { isAddedToCart, handleAddToCart } = useCart({
    coverId: result.cover_i,
    title: result.title,
    price: 87,
  });

  return (
    <div key={result?.key} className="bg-white p-4 rounded-md shadow-md">
      <img
        src={`https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`}
        alt={result?.title}
        className="w-full h-32 object-cover mb-4 rounded-md"
      />
      <p className="text-lg font-semibold">{result?.title}</p>
      <p className="text-gray-600">Author: {result?.author_name?.join(", ")}</p>
      {isAddedToCart ? (
        <p
          className="text-2xl mt-2"
          role="img"
          aria-label="Already Added to Cart"
        >
          ✅
        </p>
      ) : (
        <p
          className="text-2xl mt-2 cursor-pointer"
          role="img"
          aria-label="Add to Cart"
          onClick={handleAddToCart}
        >
          🛒
        </p>
      )}
    </div>
  );
}

SearchResultCard.propTypes = {
  result: PropTypes.object.isRequired,
};
