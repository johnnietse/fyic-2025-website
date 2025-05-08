"use client";

import { Typography, Button } from "@material-tailwind/react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import "../globals.css";



export function AboutAgenda() {
  return (
    <>

      {/* First Section */}
      <div className="relative w-full bg-[url('/image/agenda.png')] bg-cover bg-no-repeat">
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

          <Typography variant="h1" className="text-center" color="white" className="lg:max-w-3xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Itinerary
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

export default AboutAgenda;
