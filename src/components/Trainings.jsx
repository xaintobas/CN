import React from "react";
import {
  Monitor,
  Smartphone,
  PenTool,
  Database,
  Users,
  Award,
  Briefcase,
  CheckCircle,
} from "lucide-react";

const Trainings = () => {
  const courses = [
    {
      title: "Full Stack Web Development",
      icon: <Monitor className="w-8 h-8 text-green-600" />,
      description:
        "Master frontend and backend technologies. Build dynamic, responsive websites using React, Node.js, and modern databases.",
      duration: "12 Weeks",
      level: "Beginner to Advanced",
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      description:
        "Create stunning cross-platform mobile applications for iOS and Android using Flutter and React Native.",
      duration: "10 Weeks",
      level: "Intermediate",
    },
    {
      title: "UI/UX Design Masterclass",
      icon: <PenTool className="w-8 h-8 text-pink-600" />,
      description:
        "Learn to design user-centric interfaces. Master Figma, prototyping, and design systems fundamentals.",
      duration: "8 Weeks",
      level: "Beginner Friendly",
    },
    {
      title: "Data Science & Analytics",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      description:
        "Transform data into actionable insights. Learn Python, SQL, and data visualization tools like PowerBI.",
      duration: "14 Weeks",
      level: "All Levels",
    },
  ];

  const features = [
    {
      icon: <Briefcase className="w-6 h-6 text-green-400" />,
      title: "Project-Based Learning",
      text: "Build real-world projects that go directly into your portfolio.",
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: "Expert Mentorship",
      text: "Learn from senior engineers currently working in the industry.",
    },
    {
      icon: <Award className="w-6 h-6 text-green-400" />,
      title: "Career Support",
      text: "CV reviews, mock interviews, and job placement assistance.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-green-600 font-bold tracking-wider text-sm uppercase mb-3 block">
            Code Nation Academy
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
            Launch Your Tech Career <br /> With Industry Experts
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Don't just learn syntax. Learn how to build. Our immersive training
            programs are designed to take you from novice to job-ready developer
            in months.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col sm:flex-row gap-6 group"
            >
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-green-50 transition-colors">
                  {course.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-green-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full border border-green-100 flex items-center gap-1">
                    <CheckCircle size={12} /> {course.duration}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full border border-gray-200">
                    {course.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Us / Stats */}
        <div className="bg-stone-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl">
          {/* Abstract Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-600 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -ml-32 -mb-32"></div>

          <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center md:text-left items-center">
            <div className="md:col-span-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Why train with us?
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We bridge the gap between theoretical knowledge and practical
                application. Get certified and get hired.
              </p>
              <button className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-600/30 transform hover:-translate-y-0.5">
                View Syllabus & Fees
              </button>
            </div>

            <div className="md:col-span-2 grid sm:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center md:items-start p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-green-400 ring-1 ring-white/20">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainings;
