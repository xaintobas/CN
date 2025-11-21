function Stats() {
  const stats = [
    { label: "Projects Completed", value: "120+" },
    { label: "Happy Clients", value: "85+" },
    { label: "Client Satisfaction", value: "99%" },
    { label: "Years in Business", value: "8" },
  ];

  return (
    <section className="bg-green-900 py-16 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-green-600">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold mb-2 block text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-green-200 text-sm md:text-base font-medium uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Stats;
