import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";

export default function useCart({ title, authors, publishedYear, coverId }) {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const isAddedToCart = cartItems.some(
    (book) =>
      book.title === title &&
      JSON.stringify(book.authors) === JSON.stringify(authors) &&
      book.publishedYear === publishedYear &&
      book.coverId === coverId
  );
  console.log({ isAddedToCart });
  const handleAddToCart = () => {
    dispatch(addToCart({ title, authors, publishedYear, coverId }));
  };

  return { handleAddToCart, isAddedToCart };
}
