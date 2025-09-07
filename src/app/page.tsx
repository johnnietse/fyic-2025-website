// components
import { Navbar, Footer } from "@/components";
// import { ReactLenis } from "lenis/react";
// import { ReactLenis } from "@studio-freight/lenis/react";
import { EmergencyContact } from "@/app/emergency-contact";
import { TransportationSection } from "@/app/transportation-section";
import { HotelInfoSection } from "@/app/hotel-info-section";
import { TimelineSection } from "@/app/timeline-section";
import { AttendeesSection } from "@/app/attendees-section";





import AnimatedSection from "@/components/AnimatedSection";




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
      <AnimatedSection delay={0}>
        <Navbar />
      </AnimatedSection>

      {/* <Animation> */}

      <AnimatedSection delay={0.3}>
        <Hero />
      </AnimatedSection>

      {/* <SponsoredBy /> */}

      <AnimatedSection delay={0.6}>
        <AboutEvent />
      </AnimatedSection>

      <AnimatedSection delay={0.9}>
      <AttendeesSection />
      </AnimatedSection>


      <AnimatedSection delay={1.2}>
        <TimelineSection />
      </AnimatedSection>

      <AnimatedSection delay={1.5}>
        <HotelInfoSection />
      </AnimatedSection>

      <AnimatedSection delay={1.8}>
        <TransportationSection />
      </AnimatedSection>

      <AnimatedSection delay={2.1}>
        <OurStats />
      </AnimatedSection>

      {/* <EventContent /> */}


      <AnimatedSection delay={2.4}>
        <Faq />
      </AnimatedSection>

      <main className="w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 bg-white">
        <Contact /> 
      </main>

      {/* </Animation> */}

      
      <AnimatedSection delay={2.7}>
        <EmergencyContact />
      </AnimatedSection>


      <AnimatedSection delay={3.0}>
        <Footer />
      </AnimatedSection>
    </>
  );
}
