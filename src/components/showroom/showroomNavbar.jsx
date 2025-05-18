import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function ShowroomNavbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { label: "Home", to: "/showroom/dashboard" },
    { label: "Inventory", to: "/showroom/inventory" },
    { label: "Maintenance", to: "/showroom/maintenance" },
    { label: "Payments", to: "/showroom/payments" },
    { label: "Invoices", to: "/showroom/invoices" },
  ];

  const showroomLogoUrl = `${
    import.meta.env.VITE_API_URL
  }/uploads/${sessionStorage.getItem("logo")}`;
  const showroomName = sessionStorage.getItem("showroomName");

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("showroomName");
    sessionStorage.removeItem("logo");
    sessionStorage.removeItem("name");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-4 sm:px-5 md:px-8">
      <div className="max-w-screen-4xl mx-auto flex items-center justify-between h-16 sm:h-20">
        {/* Left: RentRush Logo + Name */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/showroom/dashboard" className="flex items-center">
            <img
              src="/src/assets/logo.png"
              alt="Logo"
              className="h-[60px] sm:h-[80px] md:h-[100px] mr-1 sm:mr-2"
            />
            <div className="flex flex-col">
              <h1 className="list-none cursor-pointer font-bold text-xl sm:text-2xl md:text-[28px] text-[#C17D3C] leading-tight">
                RentRush
              </h1>
            </div>
          </Link>
        </div>

        {/* Center: Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navItems.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className={`relative text-base xl:text-lg font-medium transition-colors ${
                location.pathname === to
                  ? "text-[#C17D3C]"
                  : "text-gray-600 hover:text-[#C17D3C]"
              }`}
            >
              {label}
              {location.pathname === to && (
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#C17D3C]"
                  layoutId="underline"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right: Showroom Details + Logout */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600 hover:text-[#C17D3C] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>

          {/* Logout Button */}
          <Link
            to="/login"
            onClick={handleLogout}
            className="bg-[#C17D3C] hover:bg-[#a96a33] text-white text-sm sm:text-base font-semibold px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg transition-all"
          >
            Logout
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-lg">
          {navItems.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === to
                  ? 'bg-[#C17D3C] text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-[#C17D3C]'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default ShowroomNavbar;
