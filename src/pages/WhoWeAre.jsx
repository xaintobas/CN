import { Users, Target, Award, Heart } from "lucide-react";
import CallToAction from "../components/CallToAction";

function WhoWeAre() {
  const team = [
    {
      name: "Samason Ejiro",
      role: "Founder & CEO",
      img: "https://picsum.photos/400/400?random=20",
    },
    {
      name: "Sarah Moses",
      role: "Lead Developer",
      img: "https://picsum.photos/400/400?random=21",
    },
    {
      name: "Michael Osagie",
      role: "Creative Director",
      img: "https://picsum.photos/400/400?random=22",
    },
    {
      name: "Jessica Osas",
      role: "Project Manager",
      img: "https://picsum.photos/400/400?random=23",
    },
  ];

  const values = [
    {
      icon: <Target size={32} />,
      title: "Innovation",
      desc: "We constantly push the boundaries of what is possible with technology.",
    },
    {
      icon: <Heart size={32} />,
      title: "Passion",
      desc: "We love what we do, and that energy shines through in our work.",
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      desc: "We work closely with our clients as true partners in their success.",
    },
    {
      icon: <Award size={32} />,
      title: "Excellence",
      desc: "We are committed to the highest standards of code quality and design.",
    },
  ];

  return (
    <div className="pt-0">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-900/20 z-0"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6">Who We Are</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A team of dreamers, creators, and problem solvers dedicated to
            digital excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 relative">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/800/600?random=25"
                  alt="Office Life"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-xl shadow-xl max-w-xs hidden md:block">
                <p className="text-green-600 font-bold text-4xl mb-1">8+</p>
                <p className="text-gray-600 font-medium">
                  Years of delivering excellence in the tech industry.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <span className="text-green-600 font-bold tracking-wider text-sm uppercase mb-2 block">
                Our Story
              </span>
              <h2 className="text-4xl font-bold text-dark-900 mb-6">
                Building the Future, One Line of Code at a Time.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2016, Code Nation started with a simple mission: to
                make high-quality software development accessible to businesses
                of all sizes. What began as a small team of three passionate
                developers has grown into a full-service digital agency with a
                global footprint.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe that technology should solve real human problems. By
                combining aesthetic design with robust engineering, we create
                digital products that not only look good but perform flawlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {val.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">
              Meet The Minds
            </h2>
            <p className="text-gray-600">
              The talented individuals behind Code Nation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-bold">
                    {member.name}
                  </h3>
                  <p className="text-green-400 text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
export default WhoWeAre;
