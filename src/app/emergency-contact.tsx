"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

const EMERGENCY_CONTACTS = [
  {
    title: "Campus Security Emergency Response",
    contact: "613-533-6111",
    type: "phone"
  },
  {
    title: "Campus Security Non-Emergencies (e.g. Safe Walk)",
    contact: "613-533-6080",
    type: "phone"
  },
  {
    title: "Life-Threatening Emergency Response",
    contact: "911",
    type: "phone"
  },
  {
    title: "Abbie Houlding - Relationships Director",
    contact: "+1 (807) 630-7454",
    email: "fyic.relationships@engsoc.queensu.ca",
    type: "person"
  },
  {
    title: "Jaden Belliveau - Co-Chair",
    contact: "+1 (647) 939-4853",
    email: "fyic@essco.ca",
    type: "person"
  },
  {
    title: "Flaminia Testa - Co-Chair",
    contact: "+1 (613) 883-0319",
    email: "fyic@essco.ca",
    type: "person"
  }
];

export function EmergencyContact() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography 
            variant="h1" 
            color="blue-gray" 
            className="mb-4" 
            style={{ fontFamily: 'Montserrat, sans-serif' }}  
            {...({} as any)}
          >
            Emergency Contact
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            In case of emergency during the event, please use the following contact information. For immediate, life-threatening emergencies, always call 911 first.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Emergency Services Column */}
            <div>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Emergency Services
              </Typography>
              
              {EMERGENCY_CONTACTS.filter(contact => contact.type !== 'person').map(({ title, contact }, index) => (
                <div key={index} className="mb-6">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    {title}
                  </Typography>
                  <Typography
                    color="blue"
                    className="font-medium text-lg"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    {contact}
                  </Typography>
                </div>
              ))}
            </div>

            {/* Event Staff Column */}
            <div>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Event Staff Contacts
              </Typography>
              
              {EMERGENCY_CONTACTS.filter(contact => contact.type === 'person').map(({ title, contact, email }, index) => (
                <div key={index} className="mb-6">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    {title}
                  </Typography>
                  <Typography
                    color="blue"
                    className="font-medium text-lg mb-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    {contact}
                  </Typography>
                  <a 
                    href={`mailto:${email}`}
                    className="text-blue-500 underline font-medium"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmergencyContact;
