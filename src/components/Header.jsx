/* eslint-disable react/no-unknown-property */
import { useSelector } from "react-redux";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Drawer from "./drawer";
import CartSections from "../sections/cart";
import { PATH_AUTH } from "../routes/path";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate(PATH_AUTH.home)}
        >
          <img src={Logo} alt="Logo" className="h-8 mr-2" />
          <h1 className="text-lg font-bold text-gray-800">BookApp</h1>
        </div>

        {/* Cart and Order Icons */}
        <div className="flex items-center">
          <Drawer header={"Cart"} isOpen={isOpen} setIsOpen={setIsOpen}>
            <CartSections />
          </Drawer>
          <div
            className="mr-4 cursor-pointer relative "
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-2xl" role="img" aria-label="Cart">
              🛒
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                {cartItems?.length}
              </div>
            </span>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => navigate(PATH_AUTH.order)}
          >
            {/* Your Custom Order Icon */}
            <span className="text-2xl" role="img" aria-label="Order">
              📦
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
