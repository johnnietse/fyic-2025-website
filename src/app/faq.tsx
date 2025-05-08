"use client";

import React from "react";
// import Hero from "@/components/hero";
// import AboutEvent from "@/components/about-event";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FAQS = [
  {
    title: "1. What types of sessions will be held at the conference?",
    desc: "The conference will offer a dynamic mix of sessions, including keynote talks, panel discussions, and interactive workshops. These sessions will explore themes such as building technical expertise, strengthening leadership abilities, and navigating the challenges of undergraduate life. You’ll gain valuable perspectives from industry professionals, upper-year students, and subject-matter experts dedicated to supporting your academic and personal growth throughout your engineering journey. To cap it all off, you'll have the chance to put your skills to the test in an exciting case competition on the final day of the conference.",
  },
  {
    title: "2. What is the dress code for the conference?",
    desc: "Attire varies throughout the conference. Casual wear is suitable for the opening ceremony and social. Business casual is expected during sessions on Days 2 and 3. For the gala, formal attire is encouraged to complement the event’s elegant ambiance.",
  },
  {
    title: "3. Will food and snacks be provided during the conference?",
    desc: "All meals will be provided, and light snacks will be available throughout the sessions.",
  },
  {
    title: "4. How can I prepare for the conference?",
    desc: "Before the conference, review the schedule and get to know the sessions in advance. Bring a device like a laptop or tablet for the case competition on Day 3, and be prepared to take notes during sessions. Arriving with thoughtful questions for speakers and panelists will help you make the most of your learning and networking experience.",
  },
  {
    title: "5. What should I do if I have additional questions?",
    desc: `Feel free to reach out by emailing us at 
      <a href="mailto:fyic@engsoc.queensu.ca" class="text-blue-500 underline">fyic@engsoc.queensu.ca</a> 
      with the subject line: “FYIC Inquiry – [Your Name]”, or send us a direct message on 
      Instagram at <a href="https://www.instagram.com/fyic2025/" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">@fyic2025</a>.`,
  },
  
];




export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}  {...({} as any)}>
            Frequently Asked Questions (FAQs)
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            Welcome to the FYIC 2025 FAQ section. We&apos;re here to
            address your most common queries and provide you with the
            information you need to make the most of your conference experience.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              <AccordionHeader className="text-left text-gray-900" {...({} as any)}>
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-Montserrat text-gray-500"
                  dangerouslySetInnerHTML={{ __html: desc }}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                />

              </AccordionBody>
            </Accordion>
          ))}
          
          
          {/* {FAQS.map(({ title, desc }, index) => (
            <Accordion key={index} open={open === index} {...({} as any)}>
              {
                <AccordionHeader
                  onClick={() => handleOpen(index)}
                  className="text-left text-gray-900"
                  {...({} as any)}
                >
                  {title}
                </AccordionHeader>
              }
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-Montserrat text-gray-500"
                  dangerouslySetInnerHTML={{ __html: desc }}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)} // Apply type override here

                />
              </AccordionBody>
            </Accordion>
          ))} */}







        </div>
      </div>
    </section>
  );
}


export default Faq;
