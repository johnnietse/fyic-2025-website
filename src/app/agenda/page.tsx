// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "../hero";
import SponsoredBy from "../sponsored-by";
import AboutSponsors from "../sponsors/hero-sponsors";
import AboutAgenda from "../agenda/hero-agenda";
import OurStats from "../our-stats";
import EventContent from "../event-content";
// import Contact from "@/components/contact";
import Faq from "../faq";
import { ConferenceStreams } from "@/app/conference-streams";

export const runtime = "edge";



export default function Page() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      {/* <AboutSponsors />*/}
      <AboutAgenda />
      {/* <SponsoredBy />  */}
      {/* <AboutEvent /> */}
      {/* <OurStats /> */}
      <ConferenceStreams />
      <EventContent />
      {/* <Faq /> */}
      {/* <main className="w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 bg-white">
        <Contact />
      </main> */}
      <Footer />
    </>
  );
}

