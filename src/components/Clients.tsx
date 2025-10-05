const clients = [
  { name: "TechCorp", color: "from-cyan-500 to-blue-500" },
  { name: "InnovateCo", color: "from-purple-500 to-pink-500" },
  { name: "FutureApp", color: "from-orange-500 to-red-500" },
  { name: "DataFlow", color: "from-green-500 to-teal-500" },
  { name: "CloudScale", color: "from-indigo-500 to-purple-500" },
  { name: "DigitalWave", color: "from-pink-500 to-rose-500" },
];

const Clients = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "50px 50px" 
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold">
            <span className="text-gradient">Trusted By Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Partnering with industry innovators
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative aspect-square flex items-center justify-center"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl`}></div>
              <div className="relative w-full h-full border-2 border-border group-hover:border-primary rounded-2xl flex items-center justify-center transition-all duration-500 bg-card group-hover:scale-110">
                <span className="font-bold text-lg text-muted-foreground group-hover:text-gradient transition-all">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
