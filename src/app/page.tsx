// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
// import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
// import EventContent from "./event-content";
import Contact from "@/components/contact";
import Faq from "./faq";

export default function Portfolio() {
  
  
  return (
    <>
      <Navbar />
      <Hero />
      {/* <SponsoredBy /> */}
      <AboutEvent />
      <OurStats />
      {/* <EventContent /> */}
      <Faq />
      <main className="w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 bg-white">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
