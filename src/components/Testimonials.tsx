import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content: "Absolutely phenomenal work! They transformed our vision into reality with stunning design and flawless execution.",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Founder, StartupXYZ",
    content: "The attention to detail and creative solutions exceeded all our expectations. Highly recommended!",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Director, Innovation Labs",
    content: "Working with this team was a game-changer. They delivered beyond what we thought possible.",
    rating: 5,
    avatar: "ER",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold">
            <span className="text-gradient">Client Love</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-lg mb-6 text-foreground/90">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
