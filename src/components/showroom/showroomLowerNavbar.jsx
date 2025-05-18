import React from "react";

function LowerNavbar() {
  const showroomLogoUrl = `${
    import.meta.env.VITE_API_URL
  }/Uploads/${sessionStorage.getItem("logo")}`;
  const showroomName = sessionStorage.getItem("showroomName");

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 shadow-lg py-3 sm:py-4 px-4 sm:px-6 md:px-8 lg:px-10 sticky top-16 sm:top-20 z-40">
      <div className="max-w-screen-4xl mx-auto flex items-center justify-between">
        {/* Left: Showroom Logo + Name */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <img
            src={showroomLogoUrl}
            alt="Showroom Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded object-cover border-2 border-gray-200 shadow-sm"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "/src/assets/default-logo.png";
            }}
          />
          <div className="flex flex-col">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 tracking-tight truncate max-w-[150px] sm:max-w-[200px] md:max-w-none">
              {showroomName || "Showroom"}
            </h2>
          </div>
        </div>

        {/* Right: Quick Actions - Uncomment if needed */}
        {/* <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <button className="text-gray-600 hover:text-gray-800 font-medium text-xs sm:text-sm md:text-base transition-colors whitespace-nowrap">
            Contact Support
          </button>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs sm:text-sm md:text-base font-semibold px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all shadow-md whitespace-nowrap">
            Quick Actions
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default LowerNavbar;
