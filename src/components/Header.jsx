import { useSelector } from "react-redux";
import Logo from "../assets/Logo.png";
const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <header className="bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8 mr-2" />
          <h1 className="text-lg font-bold text-gray-800">BookApp</h1>
        </div>

        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            // value={searchQuery}
            // onChange={handleSearchChange}
            className="border bg-gray-100 rounded-lg px-4 py-1 text-sm font-semibold mr-4 focus:outline-none"
          />
        </div>

        {/* Cart and Order Icons */}
        <div className="flex items-center">
          <div className="mr-4 cursor-pointer relative">
            {/* Your Custom Cart Icon */}
            <span className="text-2xl" role="img" aria-label="Cart">
              🛒
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                {cartItems?.length}
              </div>
            </span>
          </div>
          <div className="cursor-pointer">
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
