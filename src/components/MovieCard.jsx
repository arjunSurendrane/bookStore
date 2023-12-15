import { useState } from "react";
import PropTypes from "prop-types";
import useCart from "../hooks/useCart";
import useTrucate from "../hooks/useTruncate";

const MovieCard = (props) => {
  const [isTooltipVisible, setTooltipVisibility] = useState(false);
  const { isAddedToCart, handleAddToCart } = useCart(props);
  const { title, authors, publishedYear, coverId } = props;
  // Truncate long titles to fit within a specified length
  const truncatedTitle = useTrucate(title, 10);
  const truncatedAuthorName = useTrucate(authors.name, 20);

  return (
    <div className="rounded-md p-4 shadow-lg">
      <div className="bg-gray-300 h-48 w-48 overflow-hidden rounded-md shadow-md">
        <img
          src={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`}
          alt="banner"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="mt-4">
        <h2
          onMouseOver={() => setTooltipVisibility(true)}
          onMouseOut={() => setTooltipVisibility(false)}
          className="text-xl font-bold font-serif text-black relative"
        >
          {truncatedTitle}
          {isTooltipVisible && (
            <span className="absolute text-sm bottom-full left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 text-white rounded-md">
              {title}
            </span>
          )}
        </h2>
        <p className="text-sm text-gray-600 font-semibold">
          ✍️ {truncatedAuthorName}
        </p>
        <p className="text-sm text-gray-600 font-semibold">
          📆 {publishedYear}
        </p>
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
    </div>
  );
};

// Prop validation using PropTypes
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.object.isRequired,
  publishedYear: PropTypes.number.isRequired,
  coverId: PropTypes.string.isRequired,
};

export default MovieCard;
