import { Suspense, lazy } from "react";

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) =>
  (
    <Suspense fallback="loading">
      <Component {...props} />
    </Suspense>
  );

export const HomePage = Loadable(lazy(() => import("../pages/Home")));
export const CartPage = Loadable(lazy(() => import("../pages/Cart")));
export const OrderPage = Loadable(lazy(() => import("../pages/Order")));
