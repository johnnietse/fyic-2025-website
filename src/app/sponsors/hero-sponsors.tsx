"use client";

import { Typography, Button } from "@material-tailwind/react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import "../globals.css";



export function AboutSponsors() {
  return (
    <>

      {/* First Section */}
      <div className="relative w-full bg-[url('/image/sponsor.png')] bg-cover bg-no-repeat">
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
          <br>
          </br>

          <Typography variant="h1" className="text-center lg:max-w-3xl" color="white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Sponsorship
          </Typography>

        
          
          <br>
          </br>
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







    </>

  );
}

export default AboutSponsors;
