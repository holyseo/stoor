import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="relative w-12 h-12">
      {/* Outer border circle */}
      <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
      {/* Inner spinning animation */}
      <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
};

export default LoadingSpinner;
