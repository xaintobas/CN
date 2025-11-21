function Testimonials() {
  const testimonials = [
    {
      initials: "JS",
      name: "Jane Smith",
      role: "CEO, TechStart Inc.",
      text: '"CodeNation transformed our online presence. Their team understood our vision perfectly and delivered a product that exceeded our expectations. Our user engagement is up 50%!"',
    },
    {
      initials: "MD",
      name: "Mark Davis",
      role: "Founder, E-Shop Global",
      text: '"Working with CodeNation was a breeze. They are professional, responsive, and incredibly skilled. They built us a complex e-commerce platform that is both fast and secure."',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-wider text-sm uppercase mb-3 block">
            What Our Clients Say
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900">
            Trusted by Businesses Worldwide
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-bold text-dark-900">{item.name}</h4>
                  <span className="text-sm text-gray-500">{item.role}</span>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
