import { Code, Globe, Smartphone } from "lucide-react";
import { OurServices } from "../assets/Assets";

function Services() {
  const servicesList = [
    {
      icon: <Code size={24} />,
      title: "Custom Software Development",
      description:
        "Scalable and secure software built to meet your unique business needs using modern architectures.",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      icon: <Globe size={24} />,
      title: "Website Design & Development",
      description:
        "Beautiful, responsive, and user-friendly websites that convert visitors into loyal customers.",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile App Development",
      description:
        "Engaging iOS and Android applications tailored for your customers on the go.",
      color: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Content Left */}
          <div className="flex-1 w-full">
            <span className="text-green-600 font-bold tracking-wider text-sm uppercase mb-2 block">
              Our Services
            </span>
            <h2 className="text-4xl font-bold text-dark-900 mb-6">
              What We Do Best
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              From initial concept to final launch, we provide a complete suite
              of digital services to bring your ideas to life efficiently and
              effectively.
            </p>

            <div className="flex flex-col gap-8">
              {servicesList.map((service, index) => (
                <div key={index} className="flex gap-5 group">
                  <div
                    className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${service.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-green-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Right */}
          <div className="flex-1 w-full">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={OurServices}
                alt="Our Services Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
