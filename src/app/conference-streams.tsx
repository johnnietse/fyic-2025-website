"use client";

import { Typography } from "@material-tailwind/react";

export const runtime = "edge";

export function ConferenceStreams() {
  return (
    <div className="relative w-full bg-white py-16">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Typography 
            variant="h1" 
            className="text-center mb-4 text-gray-900" 
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            Conference Streams
          </Typography>
          
          <Typography
            variant="lead"
            color="gray-700"
            className="mx-auto max-w-4xl"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            FYIC 2025 workshops will be separated into two streams centered around our conference theme:
          </Typography>
          
          <Typography
            variant="h3"
            color="blue-700"
            className="mt-4 italic"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            "A Present for the Future"
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Present Stream */}
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500">
            <Typography
              variant="h2"
              color="blue-900"
              className="mb-6 text-center"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              PRESENT
            </Typography>
            
            <Typography
              color="gray-800"
              className="mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              The Present stream will include workshops relating to your experience in university over the next few years.
            </Typography>
            
            <Typography
              variant="h5"
              color="blue-800"
              className="mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              You can expect workshops that feature:
            </Typography>
            
            <ul className="list-disc list-inside space-y-3 text-gray-800">
              <li>University clubs and design teams</li>
              <li>Student government representatives</li>
              <li>Students who have completed a year of internship</li>
              <li>Professors with valuable insight on how to achieve academic success</li>
            </ul>
          </div>

          {/* Future Stream */}
          <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500">
            <Typography
              variant="h2"
              color="green-900"
              className="mb-6 text-center"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              FUTURE
            </Typography>
            
            <Typography
              color="gray-800"
              className="mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              The Future stream will feature workshops that relate to your next steps after university.
            </Typography>
            
            <Typography
              variant="h5"
              color="green-800"
              className="mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              You can expect to see:
            </Typography>
            
            <ul className="list-disc list-inside space-y-3 text-gray-800">
              <li>Industry professionals</li>
              <li>Professional development workshops</li>
              <li>Companies who work in sustainability and innovation</li>
              <li>Professors who can comment on what the future of engineering may look like</li>
            </ul>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg text-center">
          <Typography
            color="gray-700"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            Both streams are designed to provide valuable insights and skills that will benefit you throughout your engineering education and career.
          </Typography>
        </div>
      </section>
    </div>
  );
}

export default ConferenceStreams;
