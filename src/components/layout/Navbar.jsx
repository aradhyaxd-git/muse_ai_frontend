import React from "react";
import { ArrowRight } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react"; // Auth0 React SDK
import { assets } from "../../assets/assets";

const Navbar = () => {
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();

  return (
    <>
      <div className="fixed z-50 w-full flex justify-between items-center py-3 px-6 sm:px-12 lg:px-20 bg-transparent">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <img alt="logo" src={assets.logo} className="w-8 sm:w-10 object-contain" />
          <span className="ml-1 text-lg sm:text-xl font-semibold text-purple-700">
            use.ai
          </span>
        </div>

        {/* Auth Section */}
        {isLoading ? (
          <div className="text-gray-600 text-sm">Loading...</div>
        ) : isAuthenticated ? (
          <div className="relative">
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500"
            >
              <img
                src={user?.picture || "https://via.placeholder.com/150"}
                alt="User"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="flex items-center gap-2 rounded-full text-sm sm:text-base cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 sm:px-8 py-2 sm:py-2.5 hover:opacity-90 transition"
          >
            Get started
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
