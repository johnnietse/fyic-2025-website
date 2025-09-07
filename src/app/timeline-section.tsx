"use client";

import { Typography } from "@material-tailwind/react";

export function TimelineSection() {
  const timelineEvents = [
    {
      date: "September 7th",
      events: [
        "Pre-Delegate Package RELEASE",
        "Pre-Delegate Registration OPENS",
        "Delegate Registration date ANNOUNCED"
      ]
    },
    {
      date: "September 14th",
      events: [
        "Pre-Delegate Registration CLOSES"
      ]
    },
    {
      date: "September 22nd",
      events: [
        "Delegate Registration OPENS"
      ]
    },
    {
      date: "October 6th",
      events: [
        "Delegate Registration CLOSES"
      ]
    },
    {
      date: "October 7th",
      events: [
        "Delegate Package RELEASE"
      ]
    }
  ];

  return (
    <div className="relative w-full bg-[url('/image/timeline-bg.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Typography 
            variant="h1" 
            className="text-center mb-4 text-white" 
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            Conference Timeline
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mx-auto max-w-3xl"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            Important dates and deadlines for FYIC 2025
          </Typography>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 h-full border-l-2 border-dashed border-white/30 ml-4"></div>
            
            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-500 border-4 border-white flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-12 bg-white/10 backdrop-blur-sm p-6 rounded-lg w-full">
                    <Typography
                      variant="h3"
                      color="white"
                      className="mb-3 border-b border-white/20 pb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                      {...({} as any)}
                    >
                      {event.date}
                    </Typography>
                    
                    <ul className="space-y-2">
                      {event.events.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-white mr-2 mt-1">•</span>
                          <Typography
                            color="white"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                            {...({} as any)}
                          >
                            {item}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Note */}
        <div className="mt-12 max-w-3xl mx-auto bg-blue-800/40 p-6 rounded-lg backdrop-blur-sm text-center">
          <Typography
            color="white"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            All dates are subject to change. Please check back regularly for updates.
          </Typography>
        </div>
      </section>
    </div>
  );
}

export default TimelineSection;
