"use client";

import { Typography, Button } from "@material-tailwind/react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import AboutCard from "@/components/about-card";
import "./globals.css";


// const EVENT_INFO = [
//   {
//     title: "Cutting-Edge Insights!",
//     description:
//       "Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. ",
//     subTitle: "Presentation",
//   },
//   {
//     title: "Practical Knowledge!",
//     description:
//       "Attend workshops and hands-on sessions to acquire practical skills that you can apply immediately.",
//     subTitle: "Workshops",
//   },
// ];

export function AboutEvent() {
  return (
    <>
      {/* First Section */}

      <div className="relative w-full bg-[url('/image/aboutusmain.png')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
        <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-16" id="about-us">
          {/* <Typography variant="h6" className="text-center mb-2" color="orange">
            About the event
          </Typography> */}
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <Typography variant="h1" className="text-center" color="white" className="lg:max-w-3xl">
            About Us
          </Typography>

          <br>
          </br>
          <br>
          </br>

          <Typography
            variant="lead"
            className="mt-2 lg:max-w-8xl mb-8 w-full text-left font-Montserrat text-white"
          >
            The First Year Integration Conference (FYIC) is a unique, province-wide initiative that brings together first-year engineering students from over 15 universities across Ontario. Our goal is to ease the transition into university life by providing a welcoming and inspiring space where students can build connections, develop leadership skills, and gain valuable insight into the world of engineering.
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            Through a dynamic lineup of interactive workshops, seminars, and dedicated industry networking events, FYIC empowers students to explore their academic and professional potential. By connecting with peers and industry professionals alike, participants begin their engineering journey with confidence, curiosity, and community.
          
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            
            <span className="font-bold">When:</span> November 29, 2025

            <br>
            </br>
            <br>
            </br>
            
            <span className="font-bold">Where:</span> Holiday Inn Kingston Waterfront – 2 Princess St, Kingston, ON, K7L 1A2

          </Typography>
          {/* <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {EVENT_INFO.map((props, idx) => (
              <AboutCard key={idx} {...props} />
            ))}
            <div className="md:col-span-2">
              <AboutCard
                title="Networking!"
                subTitle="Community"
                description="Connect with industry leaders, AI experts, and fellow enthusiasts to build valuable professional relationships."
              />
            </div>
          </div> */}

          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>

        </section>
      </div>



      {/* Second Section */}
      <div className="relative w-full bg-[url('/image/ourvision.png')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
        <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-16">
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>

          <Typography variant="h1" className="text-center" color="white" className="lg:max-w-3xl">
            Our Vision
          </Typography>

          <br>
          </br>
          <br>
          </br>

          
          <Typography
            variant="lead"
            className="mt-2 lg:max-w-10xl mb-8 w-full text-left font-Montserrat text-white"
          >
            <p className="mb-4">
              At FYIC, we envision a thriving community of future engineers equipped with the tools, confidence, and network to succeed in both their academic and professional pursuits.
            </p>

            <br>
            </br>
            <br>
            </br>
            

            <p>

              <span className="font-bold">Mission Statement</span>
              <br>
              </br>
              Our mission is to integrate first-year engineering students into the broader engineering community by fostering leadership, breaking down barriers, and providing meaningful opportunities for growth and career exploration.
            </p>
          </Typography>
          
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>

        </section>
      </div>




      {/* Third Section */}
      <div className="relative w-full bg-[url('/image/sponsors.png')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
        <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-16">
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <Typography variant="h1" className="text-center" color="white">
            Our Sponsors
          </Typography>

          
          <br>
          </br>
          <br>
          </br>

          <Typography
            variant="lead"
            className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-Montserrat text-white"
          >
            <p className="mb-4">
              Sponsor FYIC 2025!
            </p>

          </Typography>

          <a href="/sponsors" target="_self">
            <Button color="white" variant="filled"   className="bg-gray-200 text-black hover:bg-gray-400 transition-all duration-500 ease-in-out transform hover:scale-105 mt-8">

              Sponsorship Page
            </Button>
          </a>


          





          
          


          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>

        </section>
      </div>



      {/* Fourth Section */}
      <div className="relative w-full bg-[url('/image/team.png')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
        <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-16">
          <br>
          </br>
          <br>
          </br>

          <Typography variant="h1" className="text-center" color="white">
            Our Team
          </Typography>

          <br>
          </br>
          <br>
          </br>

          <Typography
            variant="lead"
            className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-Montserrat text-white"
          >
            <p className="mb-4">
              FYIC 2025 is fully run and organized by students. 
            </p>
            
            <p className="mb-4">
              The executive team consists of a passionate group of Smith Engineering students (from all disciplines) dedicated to delivering an inspiring and impactful conference experience for first-year delegates across Ontario.
            </p>

          </Typography>






          <a href="/team" target="_self">
            <Button color="white" variant="filled"   className="bg-gray-200 text-black hover:bg-gray-400 transition-all duration-500 ease-in-out transform hover:scale-105 mt-8">

              Our Team
            </Button>
          </a>


          <br>
          </br>
          <br>
          </br>
          
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://www.instagram.com/fyic2025?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_self" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-pink-400 text-3xl transition duration-300" />
            </a>
            <a href="https://linkedin.com" target="_self" rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-blue-400 text-3xl transition duration-300" />
            </a>
            <a href="https://facebook.com" target="_self" rel="noopener noreferrer">
              <FaFacebook className="text-white hover:text-blue-500 text-3xl transition duration-300" />
            </a>
          </div>


          
          <br>
          </br>
          <br>
          </br>
        </section>
      </div>




    </>

  );
}

export default AboutEvent;
