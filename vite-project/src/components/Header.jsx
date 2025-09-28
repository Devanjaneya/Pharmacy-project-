import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const userName = localStorage.getItem("name");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/loginform"); // ✅ replaces window.location.href
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">

        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/">
            <div className="text-2xl font-bold text-blue-600">
              MediCare<span className="text-green-500">+</span>
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <nav className="space-x-4 hidden sm:flex">
            <Link to="/about">
              <span className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">About</span>
            </Link>
            <Link to="/help">
              <span className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">Help</span>
            </Link>
          </nav>

          {!userName ? (
            <Link to="/registerform">
              <span className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">SignIn</span>
            </Link>
          ) : (
            <div className="flex items-center space-x-3 text-gray-700 font-medium mr-2">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                {userName}
              </span>
              <button
                onClick={handleLogout}
                className="text-red-600 text-sm hover:underline"
              >
                Logout
              </button>
            </div>
          )}

          <Link to="/cart">
            <div className="relative cursor-pointer text-blue-600 text-xl">
              🛒
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {cartItems.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

