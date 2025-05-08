"use client";

import {
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";

import { Typography, Button } from "@material-tailwind/react";


import EventContentCard from "@/components/event-content-card";


const SPEAKERS_CONTENT = [
  {
    title: "AI's Role in Shaping the Future",
    des: "Discover how AI is revolutionizing industries, creating new possibilities, and addressing global challenges. Gain a deep understanding of the pivotal role AI plays in driving innovation, sustainability, and progress in our rapidly evolving world.",
    name: "Marcell Glock",
    position: "Chief Executive, Spotify",
    panel: "Panel Discussion",
    img: "/image/avatar1.jpg",
    
  },
  {
    title: "Introduction to Machine Learning",
    des: "Explore the basic principles, algorithms, and applications of Machine Learning. Through hands-on exercises and practical examples, you'll develop a solid understanding of how Machine Learning powers AI-driven solutions.",
    name: "Marcell Glock",
    position: "Chief Executive, Spotify",
    panel: "Workshop",
    img: "/image/avatar2.jpg",
  },
  {
    title: "AI in Healthcare: Revolutionizing Patient Care",
    des: "This session is a must-attend for healthcare professionals, AI enthusiasts, and anyone interested in the intersection of technology and well-being. Join us as we discuss how AI is bringing about positive changes in healthcare.",
    name: "Marcell Glock",
    position: "Chief Executive, Spotify",
    panel: "Workshop",
    img: "/image/avatar3.jpg",
  },
];

export function SpeakersContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="mx-auto container">
        {SPEAKERS_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}


        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        
        <div className="mt-12 text-center">
          <Typography variant="h3" color="blue-gray" className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Contacting Us
          </Typography>
          <Typography variant="paragraph" color="gray" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            If you would like to learn more or are interested in speaking at the conference, please contact us at{" "}
            <a href="mailto:cirque@engsoc.queensu.ca" className="text-blue-600 underline">
              fyic@engsoc.queensu.ca
            </a>.
          </Typography>
        </div>


      </div>

        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>

    </section>
  );
}

export default SpeakersContent;


//