// "use client";

// import { Typography } from "@material-tailwind/react";
// import { useState } from "react";

// export function AttendeesSection() {
//   const [activeImage, setActiveImage] = useState(0);
  
//   // Sample images - replace with your actual image paths
//   const conferenceImages = [
//     "/image/past-conference-1.png",
//     "/image/past-conference-2.png",
//     "/image/past-conference-3.png"
//   ];

//   const nextImage = () => {
//     setActiveImage((prev) => (prev === conferenceImages.length - 1 ? 0 : prev + 1));
//   };

//   const prevImage = () => {
//     setActiveImage((prev) => (prev === 0 ? conferenceImages.length - 1 : prev - 1));
//   };

//   return (
//     <div className="relative w-full bg-white">
//       <section className="container mx-auto px-4 py-16">
//         <br>
//         </br>
//         <br>
//         </br>
//         <div className="text-center mb-12">
//           <Typography 
//             variant="h1" 
//             className="text-center mb-4 text-gray-900" 
//             style={{ fontFamily: 'Montserrat, sans-serif' }}
//             {...({} as any)}
//           >
//             Information for Attendees
//           </Typography>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Left Column */}
//           <div className="space-y-8">
//             <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
//               <Typography
//                 variant="h3"
//                 color="blue-gray"
//                 className="mb-4 border-b border-gray-300 pb-2"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Our Commitment to Delegates
//               </Typography>
//               <Typography
//                 color="gray-800"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Our top priority for FYIC 2025 is creating a space where everyone in attendance feels welcomed and safe. Our upcoming delegate package will provide specific details about the accessibility of our spaces, the intensity of our activities, the available emergency and non-emergency contacts in Kingston, and safe spaces available on campus. If you have any questions or additional requests, please don't hesitate to contact us before or during the conference and we will support you to the best of our ability.
//               </Typography>
//             </div>

//             <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
//               <Typography
//                 variant="h3"
//                 color="blue-gray"
//                 className="mb-4 border-b border-gray-300 pb-2"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 What Makes a Good Delegate?
//               </Typography>
//               <Typography
//                 color="gray-800"
//                 className="mb-4"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Given the theme of this year's FYIC, <span className="font-semibold">A Present for the Future</span>, our Organizing Committee has put together a set of guidelines to help in selecting delegates. FYIC 2025 at Queen's University will encourage first-year engineering students to think critically about sustainability, both in engineering practices and in the future of our communities.
//               </Typography>
//               <Typography
//                 color="gray-800"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 This conference is designed to help delegates gain new perspectives, explore sustainable solutions, and grow as leaders within their schools and EngSoc communities. Delegates will be challenged to reflect on how their decisions today can shape a more sustainable and innovative tomorrow.
//               </Typography>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-8">
//             <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
//               <Typography
//                 variant="h3"
//                 color="blue-gray"
//                 className="mb-4 border-b border-blue-200 pb-2"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Delegate Fees & Inclusions
//               </Typography>
              
//               <div className="mb-4">
//                 <Typography
//                   variant="h5"
//                   color="blue-gray"
//                   className="mb-2"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Full Delegate Fee:
//                 </Typography>
//                 <Typography
//                   variant="h4"
//                   color="blue-700"
//                   className="font-bold"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   $152.62
//                 </Typography>
//               </div>

//               <Typography
//                 variant="h5"
//                 color="blue-gray"
//                 className="mb-2"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 What's Included:
//               </Typography>
//               <ul className="list-disc list-inside space-y-2 mb-4">
//                 <li>Hotel accommodations (2 nights: Friday, Nov 7 – Saturday, Nov 8)</li>
//                 <li>2 dinners, 2 lunches, 2 breakfasts + snacks!</li>
//                 <li>Access to all stations and workshops</li>
//                 <li>Entrance to case competition</li>
//                 <li>Full participation to Friday evening social</li>
//                 <li>Full participation in Saturday night banquet</li>
//                 <li>FYIC 2025 merch (includes T-shirt, tote bag, patch, etc.)</li>
//                 <li>FYIC 2025 sponsor merch (includes sustainable sponsor branded merchandise)</li>
//               </ul>

//               <div className="bg-white p-4 rounded border border-blue-100 mt-4">
//                 <Typography
//                   variant="h6"
//                   color="blue-gray"
//                   className="mb-2"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Payment Information:
//                 </Typography>
//                 <Typography
//                   color="gray-800"
//                   className="text-sm"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Payment details will be included at the time of delegate registration. Delegate fees will be due PRIOR to arrival at the conference via cheque or electronic transfer. Payments will be accepted at the absolute latest at the time of check-in at the conference. Should payment terms not be met, participation in the conference may be revoked. The organizing committee of the conference will attempt to accommodate specific circumstances on a case-by-case basis. Should you require payment accommodation, please reach out BEFORE the delegate registration period closes.
//                 </Typography>
//               </div>
//             </div>

//             <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
//               <Typography
//                 variant="h3"
//                 color="blue-gray"
//                 className="mb-4 border-b border-gray-300 pb-2"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Delegate Selection Tips
//               </Typography>
//               <Typography
//                 color="gray-800"
//                 className="mb-4"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Here are some possible questions to ask your delegates in the selection process:
//               </Typography>
//               <ul className="list-disc list-inside space-y-2">
//                 <li>Why are you interested in exploring sustainability and how it connects to the future of engineering?</li>
//                 <li>What do you hope to learn or take away from FYIC, and how will it shape the way you approach your first year and beyond?</li>
//                 <li>How will you share your experience and insights from this conference with your peers and student community?</li>
//                 <li>What past experiences (academic, extra curricular, or personal) have shaped your interest in leadership or sustainability?</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Photo Gallery Section */}
//         <div className="mt-16 max-w-4xl mx-auto">
//           <Typography
//             variant="h2"
//             color="blue-gray"
//             className="text-center mb-8"
//             style={{ fontFamily: 'Montserrat, sans-serif' }}
//             {...({} as any)}
//           >
//             Memories from Past Conferences
//           </Typography>

//           <div className="relative bg-gray-100 p-4 rounded-lg">
//             {/* Main Image Display */}
//             <div className="h-64 md:h-96 rounded-lg overflow-hidden mb-4">
//               <img 
//                 src={conferenceImages[activeImage]} 
//                 alt={`Past conference ${activeImage + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Navigation Arrows */}
//             <button 
//               onClick={prevImage}
//               className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//             <button 
//               onClick={nextImage}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>

//             {/* Thumbnail Navigation */}
//             <div className="flex justify-center space-x-4 mt-4">
//               {conferenceImages.map((img, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveImage(index)}
//                   className={`w-16 h-16 rounded overflow-hidden border-2 ${activeImage === index ? 'border-blue-500' : 'border-transparent'}`}
//                 >
//                   <img 
//                     src={img} 
//                     alt={`Thumbnail ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//         <br>
//         </br>
//         <br>
//         </br>
//       </section>
//     </div>
//   );
// }

// export default AttendeesSection;








"use client";

import { Typography } from "@material-tailwind/react";
import { useState } from "react";

export function AttendeesSection() {
  const [activeImage, setActiveImage] = useState(0);
  
  // Sample images - replace with your actual image paths
  const conferenceImages = [
    "/image/past-conference-1.png",
    "/image/past-conference-2.png",
    "/image/past-conference-3.png"
  ];

  const nextImage = () => {
    setActiveImage((prev) => (prev === conferenceImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? conferenceImages.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full bg-[url('/image/attendee-bg.png')] bg-cover bg-center bg-no-repeat">
      {/* Overlay for better readability */}
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      
      <section className="relative z-10 container mx-auto px-4 py-16">
        <br>
        </br>
        <br>
        </br>
        <div className="text-center mb-12">
          <Typography 
            variant="h1" 
            className="text-center mb-4 text-white" 
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            Information for Attendees
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <Typography
                variant="h3"
                color="white"
                className="mb-4 border-b border-white/30 pb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Our Commitment to Delegates
              </Typography>
              <Typography
                color="white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Our top priority for FYIC 2025 is creating a space where everyone in attendance feels welcomed and safe. Our upcoming delegate package will provide specific details about the accessibility of our spaces, the intensity of our activities, the available emergency and non-emergency contacts in Kingston, and safe spaces available on campus. If you have any questions or additional requests, please don't hesitate to contact us before or during the conference and we will support you to the best of our ability.
              </Typography>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <Typography
                variant="h3"
                color="white"
                className="mb-4 border-b border-white/30 pb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                What Makes a Good Delegate?
              </Typography>
              <Typography
                color="white"
                className="mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Given the theme of this year's FYIC, <span className="font-semibold">A Present for the Future</span>, our Organizing Committee has put together a set of guidelines to help in selecting delegates. FYIC 2025 at Queen's University will encourage first-year engineering students to think critically about sustainability, both in engineering practices and in the future of our communities.
              </Typography>
              <Typography
                color="white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                This conference is designed to help delegates gain new perspectives, explore sustainable solutions, and grow as leaders within their schools and EngSoc communities. Delegates will be challenged to reflect on how their decisions today can shape a more sustainable and innovative tomorrow.
              </Typography>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-blue-900/40 backdrop-blur-sm p-6 rounded-lg border border-blue-400/30">
              <Typography
                variant="h3"
                color="white"
                className="mb-4 border-b border-blue-300/50 pb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Delegate Fees & Inclusions
              </Typography>
              
              <div className="mb-4">
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Full Delegate Fee:
                </Typography>
                <Typography
                  variant="h4"
                  color="white"
                  className="font-bold"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  $152.62
                </Typography>
              </div>

              <Typography
                variant="h5"
                color="white"
                className="mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                What's Included:
              </Typography>
              <ul className="list-disc list-inside space-y-2 mb-4 text-white">
                <li>Hotel accommodations (2 nights: Friday, Nov 7 – Saturday, Nov 8)</li>
                <li>2 dinners, 2 lunches, 2 breakfasts + snacks!</li>
                <li>Access to all stations and workshops</li>
                <li>Entrance to case competition</li>
                <li>Full participation to Friday evening social</li>
                <li>Full participation in Saturday night banquet</li>
                <li>FYIC 2025 merch (includes T-shirt, tote bag, patch, etc.)</li>
                <li>FYIC 2025 sponsor merch (includes sustainable sponsor branded merchandise)</li>
              </ul>

              <div className="bg-white/20 p-4 rounded border border-white/30 mt-4">
                <Typography
                  variant="h6"
                  color="white"
                  className="mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Payment Information:
                </Typography>
                <Typography
                  color="white"
                  className="text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Payment details will be included at the time of delegate registration. Delegate fees will be due PRIOR to arrival at the conference via cheque or electronic transfer. Payments will be accepted at the absolute latest at the time of check-in at the conference. Should payment terms not be met, participation in the conference may be revoked. The organizing committee of the conference will attempt to accommodate specific circumstances on a case-by-case basis. Should you require payment accommodation, please reach out BEFORE the delegate registration period closes.
                </Typography>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <Typography
                variant="h3"
                color="white"
                className="mb-4 border-b border-white/30 pb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Delegate Selection Tips
              </Typography>
              <Typography
                color="white"
                className="mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Here are some possible questions to ask your delegates in the selection process:
              </Typography>
              <ul className="list-disc list-inside space-y-2 text-white">
                <li>Why are you interested in exploring sustainability and how it connects to the future of engineering?</li>
                <li>What do you hope to learn or take away from FYIC, and how will it shape the way you approach your first year and beyond?</li>
                <li>How will you share your experience and insights from this conference with your peers and student community?</li>
                <li>What past experiences (academic, extra curricular, or personal) have shaped your interest in leadership or sustainability?</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Typography
            variant="h2"
            color="white"
            className="text-center mb-8"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            Memories from Past Conferences
          </Typography>

          <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
            {/* Main Image Display */}
            <div className="h-64 md:h-96 rounded-lg overflow-hidden mb-4">
              <img 
                src={conferenceImages[activeImage]} 
                alt={`Past conference ${activeImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white text-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white text-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center space-x-4 mt-4">
              {conferenceImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-16 h-16 rounded overflow-hidden border-2 ${activeImage === index ? 'border-blue-400' : 'border-transparent'}`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        <br>
        </br>
        <br>
        </br>
      </section>
    </div>
  );
}

export default AttendeesSection;
