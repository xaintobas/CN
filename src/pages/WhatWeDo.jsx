import { CheckCircle2 } from "lucide-react";
import Services from "../components/Services";
import CallToAction from "../components/CallToAction";

function WhatWeDo() {
  const process = [
    {
      step: "01",
      title: "Discovery",
      desc: "We start by understanding your business goals, target audience, and unique challenges.",
    },
    {
      step: "02",
      title: "Strategy & Design",
      desc: "We create a comprehensive roadmap and design user-centric interfaces.",
    },
    {
      step: "03",
      title: "Development",
      desc: "Our engineers build your solution using modern, scalable technologies.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      desc: "Rigorous testing ensures a bug-free launch, followed by deployment.",
    },
  ];

  return (
    <div className="pt-0">
      <section className="bg-gray-900 text-white py-20 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-6">What We Do</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </div>
      </section>

      <Services />

      {/* Process Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-green-600 font-bold tracking-wider text-sm uppercase mb-2 block">
              Our Methodology
            </span>
            <h2 className="text-3xl font-bold text-dark-900 mb-6">
              How We Deliver Excellence
            </h2>
            <p className="text-gray-600">
              We follow a proven agile process to ensure your project is
              delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div
                key={i}
                className="relative p-6 border border-gray-100 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all"
              >
                <span className="text-6xl font-black text-gray-200 absolute top-4 right-4 select-none">
                  {p.step}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-dark-900 mb-3 mt-8">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-1 bg-dark-900 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-white text-lg font-medium opacity-60 mb-8 uppercase tracking-widest">
            Powered by Modern Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["React", "Node.js", "TypeScript", "Python", "AWS", "Flutter"].map(
              (tech, i) => (
                <span
                  key={i}
                  className="text-white font-bold text-xl md:text-2xl"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
export default WhatWeDo;
