import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Jean-Pierre Mukendi",
    role: "Homme d'affaires",
    location: "Kinshasa, RDC",
    rating: 5,
    comment: "Un très bon séjour au Park Hôtel. Le personnel est accueillant et les chambres sont propres. Je recommande pour tout voyage d'affaires à Lubumbashi.",
  },
  {
    name: "Marie Kabongo",
    role: "Touriste",
    location: "Bruxelles, Belgique",
    rating: 5,
    comment: "La cuisine est délicieuse, un vrai mélange de saveurs congolaises et européennes. L'emplacement au centre-ville est parfait pour découvrir la ville.",
  },
  {
    name: "Patrick Mwamba",
    role: "Consultant",
    location: "Johannesburg, Afrique du Sud",
    rating: 5,
    comment: "Bon rapport qualité-prix. Le bar est bien approvisionné et le service est fiable. Je reviens à chaque fois que je suis de passage.",
  },
  {
    name: "Sophie Kalala",
    role: "Entrepreneure",
    location: "Lubumbashi, RDC",
    rating: 5,
    comment: "J'organise souvent des rencontres professionnelles au restaurant de l'hôtel. L'ambiance est parfaite et le service toujours à la hauteur.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="section-padding bg-background">
      <div className="container-hotel">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Témoignages
          </span>
          <h2 className="title-section mt-3 mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="subtitle">
            La satisfaction de nos clients est notre plus grande fierté. 
            Découvrez leurs expériences au Park Hôtel.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="text-center">
              <p className="text-4xl font-display font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Clients satisfaits</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-4xl font-display font-bold text-primary">4.8</p>
              <p className="text-sm text-muted-foreground">Note moyenne</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-4xl font-display font-bold text-primary">77</p>
              <p className="text-sm text-muted-foreground">Chambres disponibles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
