import { ArrowUpRight } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "FinTrack Dashboard",
      category: "Web Application",
      image: "https://picsum.photos/800/600?random=10",
      description:
        "A comprehensive financial analytics dashboard for enterprise clients to track real-time data.",
    },
    {
      title: "EcoMarket Mobile App",
      category: "Mobile Development",
      image: "https://picsum.photos/800/600?random=11",
      description:
        "An iOS and Android marketplace application connecting sustainable brands with eco-conscious consumers.",
    },
    {
      title: "HealthPlus Telemed",
      category: "Healthcare Platform",
      image: "https://picsum.photos/800/600?random=12",
      description:
        "Secure HIPAA-compliant video consultation platform for remote patient monitoring.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-green-600 font-bold tracking-wider text-sm uppercase mb-3 block">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
            Recent Projects
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore a selection of our recent work. We treat every project as an
            opportunity to create something unique and impactful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-60">
                <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-dark-900/10 transition-colors z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-green-600 transition-colors flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight
                    size={20}
                    className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-green-600"
                  />
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                <button className="inline-block text-sm font-semibold text-green-600 hover:text-green-700 border-b-2 border-transparent hover:border-green-600 transition-all">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
