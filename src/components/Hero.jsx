import { ArrowRight } from "lucide-react";
import { DevAgency } from "../assets/Assets";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="pt-20 pb-20 md:pt-30 md:pb-30 px-4 overflow-hidden">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 flex flex-col lg:text-left text-center items-center lg:items-start">
            <span className="uppercase mb-4 text-green-600 font-bold text-sm block">
              Web & Software Development
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              Your Vision, <br />
              <span className="text-green-600">Our Code.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              We design and build custom websites and software solutions that
              drive growth, engage users, and deliver real business results.
            </p>
            <NavLink
              className="w-fit flex justify-center items-center gap-x-3 bg-green-600 text-white py-4 px-10 rounded-2xl font-semibold transition-all hover:bg-green-700 shadow-2xl"
              to="/connect"
            >
              Start Your Project{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </NavLink>
          </div>

          {/* Hero Image / Visual */}
          <div className="flex-1 w-full flex justify-center lg:justify-end ">
            <img
              src={DevAgency}
              alt="Code Nation - Website Design Agency"
              className="w-full max-w-xl object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
