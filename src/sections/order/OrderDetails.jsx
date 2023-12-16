import React from "react";

export default function OrderDetails({ orderItems = [], total }) {
  return (
    <div className="px-5">
      {orderItems?.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {orderItems?.map((item) => (
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
              </div>
            </div>
          ))}

          <div className="mt-4">
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">Total:</p>
              <p className="text-sm font-bold"> ₹{total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
