import { Home, AlertCircle } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-[80vh] pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-white">
      {/* Background decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none z-0">
        <span className="text-[12rem] md:text-[20rem] font-black text-gray-50 leading-none">
          404
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <AlertCircle size={32} />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-dark-900 mb-6">
          Page Not Found
        </h1>

        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
          Oops! It seems the page you are looking for doesn't exist, has been
          moved, or is temporarily unavailable.
        </p>

        <button
          onClick={() => navigateTo("welcome")}
          className="group flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-lg shadow-xl hover:shadow-green-600/30 transition-all duration-300"
        >
          <Home
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Home
        </button>
      </div>
    </div>
  );
}
export default NotFound;
