import { Outlet } from "react-router-dom";

export default function LayoutWithHeader() {
  return (
    <div>
      <div>Header</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
