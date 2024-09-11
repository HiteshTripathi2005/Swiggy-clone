import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <svg className="w-16 h-16" viewBox="0 0 100 100">
        <path
          d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white animate-draw will-change-[stroke-dasharray, stroke-dashoffset]"
        />
      </svg>
    </div>
  );
};

export default LoadingPage;
