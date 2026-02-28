import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoomsSection from "@/components/RoomsSection";
import ServicesSection from "@/components/ServicesSection";
import MeetingRoomsSection from "@/components/MeetingRoomsSection";
import SpaSection from "@/components/SpaSection";
import RestaurantSection from "@/components/RestaurantSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
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
        <ServicesSection />
        <MeetingRoomsSection />
        <SpaSection />
        <RestaurantSection />
        <TestimonialsSection />
        <FAQSection />
        <ReservationForm />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
