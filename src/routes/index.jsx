import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartPage, HomePage, OrderPage } from "./elements";
import LayoutWithHeader from "../components/LayoutWithHeader";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LayoutWithHeader />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "order",
          element: <OrderPage />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
