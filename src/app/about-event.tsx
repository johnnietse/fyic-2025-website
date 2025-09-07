"use client";

import { Typography, Button } from "@material-tailwind/react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import AboutCard from "@/components/about-card";
import "./globals.css";
import { TypographyProps } from "@material-tailwind/react";



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
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h1" className="text-center lg:max-w-3xl" color="white" {...({} as any)}>
            About Us
          </Typography>

          <br />
          <br />
          <br />

          <Typography
            variant="lead"
            className="mt-2 lg:max-w-8xl mb-8 w-full text-left font-Montserrat text-white"      
            {...({} as any)}
          >
            A conference hosted by engineering students, for engineering students.
            <br />
            <br />
            Presented by the Ontario Society of Professional Engineers (OSPE), FYIC gives first-year engineering students from across Ontario the opportunity to connect with peers from around the province and participate in sessions designed to develop leadership skills, break down first-year barriers, and advance their career exploration. Attended by over 130 first-year and upper-year students from 18 universities across Ontario, this conference serves to inspire students and build connections to last their whole careers.
            <br />
            <br />
            Hosted with the Engineering Student Societies' Council of Ontario (ESSCO), FYIC 2025 will take place at Queen's University, a world-renowned institution and a leader in engineering research and innovation.
            <br />
            <br />
            The First Year Integration Conference (FYIC) is a unique, province-wide initiative that brings together first-year engineering students from over 15 universities across Ontario. Our goal is to ease the transition into university life by providing a welcoming and inspiring space where students can build connections, develop leadership skills, and gain valuable insight into the world of engineering.
            <br />
            <br />
            Through a dynamic lineup of interactive workshops, seminars, and dedicated industry networking events, FYIC empowers students to explore their academic and professional potential. By connecting with peers and industry professionals alike, participants begin their engineering journey with confidence, curiosity, and community.
            <br />
            <br />
            This year, our theme is 'A Present for the Future'. We aim to inspire the next generation of bright minds to design sustainable solutions that will benefit generations to come. With additional emphasis on personal development, delegates will learn skills that will help them grow into the engineers they want to be.
          </Typography>
          
          <br />
          <br />
          <br />
          <br />
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

          <Typography variant="h1" className="text-center lg:max-w-3xl" color="white"  {...({} as any)}>
            Our Vision
          </Typography>

          <br>
          </br>
          <br>
          </br>

          
          <Typography
            variant="lead"
            className="mt-2 lg:max-w-10xl mb-8 w-full text-left font-Montserrat text-white"
            {...({} as any)}>
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
          <Typography variant="h1" className="text-center font-Montserrat" color="white" {...({} as any)}>
            Our Sponsors
          </Typography>

          
          <br>
          </br>
          <br>
          </br>

          <Typography
            variant="lead"
            className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-Montserrat text-white"
            {...({} as any)}>
            <p className="mb-4">
              Sponsor FYIC 2025!
            </p>

          </Typography>

          <a href="/sponsors" target="_self">
            <Button color="white" variant="filled" className="bg-gray-200 text-black hover:bg-gray-400 transition-all duration-500 ease-in-out transform hover:scale-105 mt-8" {...({} as any)}>

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

          <Typography variant="h1" className="text-center font-Montserrat" color="white" {...({} as any)}>
            Our Team
          </Typography>

          <br>
          </br>
          <br>
          </br>

          <Typography
            variant="lead"
            className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-Montserrat text-white"
            {...({} as any)}>
            <p className="mb-4">
              FYIC 2025 is fully run and organized by students. 
            </p>
            
            <p className="mb-4">
              The executive team consists of a passionate group of Smith Engineering students (from all disciplines) dedicated to delivering an inspiring and impactful conference experience for first-year delegates across Ontario.
            </p>

          </Typography>






          <a href="/team" target="_self">
            <Button color="white" variant="filled" className="bg-gray-200 text-black hover:bg-gray-400 transition-all duration-500 ease-in-out transform hover:scale-105 mt-8" {...({} as any)}>
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




