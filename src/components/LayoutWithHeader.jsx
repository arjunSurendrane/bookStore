import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function LayoutWithHeader() {
  return (
    <div>
      <div className="h-16">
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
