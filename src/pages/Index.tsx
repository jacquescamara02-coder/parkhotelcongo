import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoomsSection from "@/components/RoomsSection";
import RestaurantSection from "@/components/RestaurantSection";
import ReservationForm from "@/components/ReservationForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <RoomsSection />
        <RestaurantSection />
        <ReservationForm />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
