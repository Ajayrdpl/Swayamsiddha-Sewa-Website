import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import EventsSection from "../components/EventsSection";
import GallerySection from "../components/GallerySection";
import Hero from "../components/Hero";
import InitiativesSection from "../components/InitiativesSection";
import MessageSection from "../components/MessageSection";
import UpcomingEvents from "../components/UpcomingEvents";
// import InterviewsSection from "../components/InterviewsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <EventsSection />
      {/* <InterviewsSection/> */}
      <GallerySection />
      <InitiativesSection />
      <MessageSection />
      <UpcomingEvents />
      <ContactSection />
    </>
  );
};

export default Home;
