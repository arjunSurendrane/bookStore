import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";

export default function useCart({
  title,
  authors,
  publishedYear,
  coverId,
  price,
}) {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const isAddedToCart = cartItems.some(
    (book) =>
      book.title === title &&
      JSON.stringify(book.authors) === JSON.stringify(authors) &&
      book.publishedYear === publishedYear &&
      book.coverId === coverId
  );
  const handleAddToCart = () => {
    dispatch(addToCart({ title, authors, publishedYear, coverId, price }));
  };

  return { handleAddToCart, isAddedToCart };
}
