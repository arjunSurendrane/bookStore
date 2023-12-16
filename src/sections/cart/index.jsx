import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, resetCart } from "../../redux/slice/cartSlice";
import { createOrder } from "../../redux/slice/orderSlice";
import toast from "react-hot-toast";

export default function CartSections() {
  const { cartItems, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    // Dispatch the action to remove the item from the cart
    dispatch(removeItemFromCart(item));
  };

  const handleClearCart = () => {
    // Dispatch the action to clear all items from the cart
    dispatch(resetCart());
  };

  const handlePlaceOrder = () => {
    dispatch(createOrder({ cartItems, total }));
    dispatch(resetCart());
    toast.success("Order Placed");
  };

  return (
    <div className="px-5">
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.coverId} className="flex mb-4">
              <img
                src={`https://covers.openlibrary.org/b/id/${item.coverId}-M.jpg`}
                alt={item.name}
                className="w-16 h-16 object-cover mr-4 rounded-md"
              />
              <div>
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-gray-600">₹{item?.price?.toFixed(2)}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-4">
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">Total:</p>
              <p className="text-sm font-bold"> ₹{total.toFixed(2)}</p>
            </div>
            <button
              onClick={handleClearCart}
              className="mt-2 w-full text-base font-semibold bg-red-100 text-red-500 py-2 px-4 rounded-md"
            >
              Clear Cart
            </button>
            <button
              onClick={handlePlaceOrder}
              className="mt-2 w-full bg-green-100 text-green-800 font-semibold py-2 px-4 rounded-md"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
