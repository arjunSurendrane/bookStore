import { useSelector } from "react-redux";
import Drawer from "../../components/drawer";
import OrderDetails from "./orderDetails";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";

export default function OrderSections() {
  const { orders } = useSelector((state) => state.order);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});
  const previousOrders = Object.values(orders);
  const handleClickBox = (order) => {
    setIsOpen(!isOpen);
    setSelectedOrder(order);
  };

  return (
    <div className="mt-5 px-5">
      <SearchBar />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 ">
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} header={"Order Details"}>
          <OrderDetails
            orderItems={selectedOrder.items}
            total={selectedOrder.total}
          />
        </Drawer>
        {previousOrders.length === 0 ? (
          <p className="text-gray-600">No previous orders available.</p>
        ) : (
          previousOrders.map((order) => (
            <div
              key={order.id}
              className="bg-gray-100 p-4 rounded-md shadow-md"
              onClick={() => handleClickBox(order)}
            >
              <h2 className="text-lg font-semibold mb-2">
                Order Date: {order.date}
              </h2>
              <p className="text-gray-600">Total: ₹{order.total.toFixed(2)}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
