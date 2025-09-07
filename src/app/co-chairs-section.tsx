"use client";

import { Typography } from "@material-tailwind/react";

export function CoChairsSection() {
  return (
    <div className="relative w-full bg-white">
      {/* Background image that overlays the white background */}
      <div 
        className="absolute inset-0 bg-[url('/image/co-chairs-bg.png')] bg-cover bg-center bg-no-repeat opacity-20"
        style={{ zIndex: 1 }}
      />
      
      
      <section className="relative z-10 container mx-auto px-4 py-16" style={{ zIndex: 2 }}>

        <br>
        </br>
        <br>
        </br>
        
        <div className="text-center mb-12">
          <Typography 
            variant="h1" 
            className="text-center mb-4 text-gray-900" 
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            MEET THE FYIC 2025 CO-CHAIRS
          </Typography>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Content Card */}
          <div className="bg-[#e4e9ff] p-6 md:p-8 rounded-lg shadow-xl mb-8">
            <Typography
              color="gray-800"
              className="mb-6 text-justify"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              Dear Future Delegates,
              <br /><br />
              On behalf of our organizing team, we are delighted to welcome you to the First Year Integration Conference (FYIC) 2025, hosted at Queen's University. This year's conference, themed "A Present for the Future," will bring together over one hundred first-year engineering students from across Ontario for a weekend of growth, connection, and inspiration.
              <br /><br />
              FYIC is more than just a conference—it is an opportunity to meet peers from 17 universities across the province, gain valuable leadership and professional skills, and immerse yourself in a community dedicated to shaping the future of engineering. Through interactive workshops, thought-provoking sessions, and meaningful networking opportunities, you will have the chance to discover new perspectives and forge your path forward as both a student and a future professional.
              <br /><br />
              This year's program has been thoughtfully designed to provide an engaging balance of learning, collaboration, and celebration. You can look forward to hearing from industry experts and academic leaders, participating in an exciting case competition, and joining in discussions that highlight creativity, sustainability, and innovation. Alongside this, you will experience the supportive, vibrant spirit of Queen's Engineering—a spirit that we cannot wait to share with you.
              <br /><br />
              We are thrilled to welcome you to campus and to be part of the beginning of your engineering journey. Together, let's make FYIC 2025 an unforgettable experience that sparks lasting friendships, inspires bold ideas, and equips you with skills that will benefit you throughout your career.
              <br /><br />
              We can't wait to meet you this November!
            </Typography>

            <div className="mt-8 text-right">
              <Typography
                color="gray-800"
                className="mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Warm regards,
              </Typography>
              <Typography
                color="gray-800"
                className="text-2xl"
                style={{ fontFamily: "'Parisienne', cursive" }}
                {...({} as any)}
              >
                Jaden Belliveau and Flaminia Testa
              </Typography>
            </div>
          </div>

          {/* Combined Headshot and Name Tags */}
          <div className="flex flex-col items-center">
            {/* Combined Headshot */}
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 bg-white">
              <img 
                src="/image/co-chairs-headshot.png" 
                alt="Jaden Belliveau and Flaminia Testa" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Combined Name Tag */}
            <div className="bg-[#afbbff] px-6 py-3 rounded-full">
              <Typography
                color="black"
                className="font-semibold text-center"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Flaminia Testa (she/her) & Jaden Belliveau (he/him)
              </Typography>
            </div>
          </div>
        </div>
        <br>
        </br>
        <br>
        </br>
      </section>

      {/* Add font import for signature style */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');
        .font-feeling-passionate {
          font-family: 'Parisienne', cursive;
        }
      `}</style>
    </div>
  );
}

export default CoChairsSection;













