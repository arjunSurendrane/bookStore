import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, OrderPage } from "./elements";
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
