// "use client";

// import { Typography } from "@material-tailwind/react";

// export function TransportationSection() {
//   return (
//     <div className="relative w-full bg-[url('//image/transportation-bg.png')] bg-cover bg-no-repeat bg-fixed">
//       <div className="absolute inset-0 h-full w-full bg-gray-900/70" />
//       <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-16">
//         {/* Section Header */}
//         <Typography 
//           variant="h1" 
//           className="text-center mb-12 mt-8" 
//           color="white" 
//           style={{ fontFamily: 'Montserrat, sans-serif' }}
//           {...({} as any)}
//         >
//           Getting to Kingston
//         </Typography>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
//           {/* Left Column - Transportation Options */}
//           <div className="space-y-6">
//             <Typography
//               variant="h3"
//               color="white"
//               className="mb-6 border-b border-blue-400 pb-2"
//               style={{ fontFamily: 'Montserrat, sans-serif' }}
//               {...({} as any)}
//             >
//               Transportation Options
//             </Typography>
            
//             <div className="space-y-4">
//               <div className="bg-blue-900/30 p-4 rounded-lg backdrop-blur-sm">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-2"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Mega Bus
//                 </Typography>
//                 <Typography
//                   color="blue-100"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Affordable bus service with multiple daily departures from various locations.
//                 </Typography>
//               </div>
              
//               <div className="bg-blue-900/30 p-4 rounded-lg backdrop-blur-sm">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-2"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   FlixBus
//                 </Typography>
//                 <Typography
//                   color="blue-100"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Comfortable bus service connecting Kingston to major cities.
//                 </Typography>
//               </div>
              
//               <div className="bg-blue-900/30 p-4 rounded-lg backdrop-blur-sm">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-2"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Via Rail
//                 </Typography>
//                 <Typography
//                   color="blue-100"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Train service with Kingston located on the Ontario-Quebec route.
//                 </Typography>
//               </div>
//             </div>
            
//             <Typography
//               color="white"
//               className="mt-8 bg-gray-800/50 p-4 rounded-lg"
//               style={{ fontFamily: 'Montserrat, sans-serif' }}
//               {...({} as any)}
//             >
//               When you arrive in Kingston, both the Megabus and Via Rail stations have bus routes that can take you to your hotel.
//             </Typography>
//           </div>
          
//           {/* Right Column - Map and Additional Info */}
//           <div className="space-y-8">
//             <div className="bg-gray-800/50 p-6 rounded-lg">
//               <Typography
//                 variant="h4"
//                 color="white"
//                 className="mb-4 text-center"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Conference Location
//               </Typography>
              
//               {/* Space for your location image */}
//               <div className="bg-gray-700/30 h-64 rounded-lg flex items-center justify-center mb-4">
//                 <Typography
//                   color="blue-100"
//                   className="text-center"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   [Insert Map Image Here]
//                   <br />
//                   <span className="text-sm">Holiday Inn Kingston Waterfront</span>
//                   <br />
//                   <span className="text-sm">2 Princess St, Kingston, ON</span>
//                 </Typography>
//               </div>
              
//               <Typography
//                 color="white"
//                 className="text-center"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 2 Princess St, Kingston, ON K7L 1A2
//               </Typography>
//             </div>
            
//             <div className="bg-blue-900/30 p-6 rounded-lg backdrop-blur-sm">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-4"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Via Rail Cities
//               </Typography>
//               <Typography
//                 color="blue-100"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Kingston is located on the Ontario-Quebec route for ViaRail. Cities that have train stations are shown in the figure below.
//               </Typography>
              
//               {/* Space for your Via Rail map image */}
//               <div className="bg-gray-700/30 h-48 rounded-lg flex items-center justify-center mt-4">
//                 <Typography
//                   color="blue-100"
//                   className="text-center"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   <img 
//                     src="/image/map.png" 
//                     alt="Conference Location Map" 
//                     className="w-full h-64 object-cover rounded-lg"
//                   />
//                 </Typography>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Additional Transportation Info */}
//         <div className="mt-16 w-full max-w-4xl bg-gray-800/50 p-8 rounded-lg">
//           <Typography
//             variant="h4"
//             color="white"
//             className="mb-6 text-center border-b border-blue-400 pb-2"
//             style={{ fontFamily: 'Montserrat, sans-serif' }}
//             {...({} as any)}
//           >
//             Local Transportation in Kingston
//           </Typography>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-blue-900/30 p-4 rounded-lg">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-2"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Kingston Transit
//               </Typography>
//               <Typography
//                 color="blue-100"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 The local bus service can take you from transportation hubs to your accommodation and the conference venue.
//               </Typography>
//             </div>
            
//             <div className="bg-blue-900/30 p-4 rounded-lg">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-2"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Taxi & Ride-Sharing
//               </Typography>
//               <Typography
//                 color="blue-100"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Taxis and ride-sharing services are readily available throughout Kingston.
//               </Typography>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default TransportationSection;




























// "use client";

// import { Typography } from "@material-tailwind/react";

// export function TransportationSection() {
//   return (
//     <div className="relative w-full min-h-screen bg-[url('/image/transportation-bg.png')] bg-cover bg-center bg-no-repeat">
//       <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-blue-900/80 to-indigo-900/80" />
//       <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-16">
//         {/* Section Header */}
//         <Typography 
//           variant="h1" 
//           className="text-center mb-12 mt-8 text-white" 
//           style={{ fontFamily: 'Montserrat, sans-serif' }}
//           {...({} as any)}
//         >
//           Getting to Kingston
//         </Typography>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
//           {/* Left Column - Transportation Options */}
//           <div className="space-y-8">
//             <Typography
//               variant="h3"
//               color="white"
//               className="mb-6 text-center lg:text-left border-b-2 border-blue-300 pb-3"
//               style={{ fontFamily: 'Montserrat, sans-serif' }}
//               {...({} as any)}
//             >
//               Transportation Options
//             </Typography>
            
//             <div className="space-y-6">
//               <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-3 flex items-center gap-2"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   <span className="inline-block w-3 h-3 bg-blue-400 rounded-full"></span>
//                   Mega Bus
//                 </Typography>
//                 <Typography
//                   color="blue-50"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Affordable bus service with multiple daily departures from various locations.
//                 </Typography>
//               </div>
              
//               <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-3 flex items-center gap-2"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   <span className="inline-block w-3 h-3 bg-green-400 rounded-full"></span>
//                   FlixBus
//                 </Typography>
//                 <Typography
//                   color="blue-50"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Comfortable bus service connecting Kingston to major cities.
//                 </Typography>
//               </div>
              
//               <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-3 flex items-center gap-2"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   <span className="inline-block w-3 h-3 bg-purple-400 rounded-full"></span>
//                   Via Rail
//                 </Typography>
//                 <Typography
//                   color="blue-50"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Train service with Kingston located on the Ontario-Quebec route.
//                 </Typography>
//               </div>
//             </div>
            
//             <div className="bg-blue-800/40 backdrop-blur-sm p-6 rounded-xl border border-blue-400/30 mt-8">
//               <Typography
//                 color="white"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 When you arrive in Kingston, both the Megabus and Via Rail stations have bus routes that can take you to your hotel.
//               </Typography>
//             </div>
//           </div>
          
//           {/* Right Column - Via Rail Info */}
//           <div className="space-y-8">
//             <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-lg">
//               <Typography
//                 variant="h4"
//                 color="white"
//                 className="mb-6 text-center"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Via Rail Route
//               </Typography>
              
//               <Typography
//                 color="blue-50"
//                 className="mb-6 text-center"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Kingston is located on the Ontario-Quebec route for ViaRail. Cities that have train stations are shown in the figure below.
//               </Typography>
              
//               {/* Flexible image container */}
//               <div className="w-full rounded-xl overflow-hidden shadow-2xl">
//                 <img 
//                   src="/image/map.png" 
//                   alt="Via Rail Route Map" 
//                   className="w-full h-auto object-contain"
//                 />
//               </div>
              
//               <Typography
//                 color="blue-100"
//                 className="mt-6 text-center text-sm"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Map showing Via Rail stations along the Ontario-Quebec corridor
//               </Typography>
//             </div>
            
//             <div className="bg-indigo-800/40 backdrop-blur-sm p-6 rounded-xl border border-indigo-400/30">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-4 flex items-center justify-center gap-2"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                 </svg>
//                 Conference Venue
//               </Typography>
//               <Typography
//                 color="blue-50"
//                 className="text-center"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Holiday Inn Kingston Waterfront
//                 <br />
//                 2 Princess St, Kingston, ON K7L 1A2
//               </Typography>
//             </div>
//           </div>
//         </div>
        
//         {/* Additional Transportation Info */}
//         <div className="mt-16 w-full max-w-4xl bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-lg">
//           <Typography
//             variant="h4"
//             color="white"
//             className="mb-8 text-center border-b border-blue-300 pb-3"
//             style={{ fontFamily: 'Montserrat, sans-serif' }}
//             {...({} as any)}
//           >
//             Local Transportation in Kingston
//           </Typography>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-blue-800/40 p-6 rounded-lg border border-blue-400/30">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-3 flex items-center gap-2"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
//                 </svg>
//                 Kingston Transit
//               </Typography>
//               <Typography
//                 color="blue-50"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 The local bus service can take you from transportation hubs to your accommodation and the conference venue.
//               </Typography>
//             </div>
            
//             <div className="bg-blue-800/40 p-6 rounded-lg border border-blue-400/30">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-3 flex items-center gap-2"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
//                   <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
//                 </svg>
//                 Taxi & Ride-Sharing
//               </Typography>
//               <Typography
//                 color="blue-50"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Taxis and ride-sharing services are readily available throughout Kingston.
//               </Typography>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default TransportationSection;
























"use client";

import { Typography } from "@material-tailwind/react";

export function TransportationSection() {
  return (
    <div className="relative w-full bg-[url('/image/transportation-bg.png')] bg-cover bg-center bg-no-repeat">
      {/* More translucent overlay */}
      <div className="absolute inset-0 h-full w-full bg-black/40" />

      <br>
      </br>          
      <br>
      </br>
                
      <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-12">
        {/* Section Header */}
        <Typography 
          variant="h1" 
          className="text-center mb-8 text-white" 
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          {...({} as any)}
        >
          Getting to Kingston
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
          {/* Left Column - Transportation Options */}
          <div className="space-y-4">
            <Typography
              variant="h3"
              color="white"
              className="mb-4 text-center lg:text-left border-b border-white/30 pb-2"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              Transportation Options
            </Typography>
            
            <div className="space-y-3">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Mega Bus
                </Typography>
                <Typography
                  color="white"
                  className="text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Affordable bus service with multiple daily departures from various locations.
                </Typography>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  FlixBus
                </Typography>
                <Typography
                  color="white"
                  className="text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Comfortable bus service connecting Kingston to major cities.
                </Typography>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Via Rail
                </Typography>
                <Typography
                  color="white"
                  className="text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Train service with Kingston located on the Ontario-Quebec route.
                </Typography>
              </div>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm mt-4">
              <Typography
                color="white"
                className="text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                When you arrive in Kingston, both the Megabus and Via Rail stations have bus routes that can take you to your hotel.
              </Typography>
            </div>
          </div>
          
          {/* Right Column - Via Rail Info */}
          <div className="space-y-4">
            <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
              <Typography
                variant="h4"
                color="white"
                className="mb-3 text-center"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Via Rail Route
              </Typography>
              
              <Typography
                color="white"
                className="mb-3 text-center text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Kingston is located on the Ontario-Quebec route for ViaRail. Cities that have train stations are shown in the figure below.
              </Typography>
              
              {/* Flexible image container */}
              <div className="w-full rounded-lg overflow-hidden mt-3">
                <img 
                  src="/image/map.png" 
                  alt="Via Rail Route Map" 
                  className="w-full h-auto max-h-64 object-contain"
                />
              </div>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <Typography
                variant="h5"
                color="white"
                className="mb-1 text-center"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Conference Venue
              </Typography>
              <Typography
                color="white"
                className="text-center text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Holiday Inn Kingston Waterfront
                <br />
                2 Princess St, Kingston, ON K7L 1A2
              </Typography>
            </div>
          </div>
        </div>
        
        {/* Additional Transportation Info */}
        <div className="mt-8 w-full max-w-4xl bg-white/10 p-5 rounded-lg backdrop-blur-sm">
          <Typography
            variant="h4"
            color="white"
            className="mb-4 text-center border-b border-white/30 pb-2"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            Local Transportation in Kingston
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/15 p-4 rounded-lg">
              <Typography
                variant="h5"
                color="white"
                className="mb-1"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Kingston Transit
              </Typography>
              <Typography
                color="white"
                className="text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                The local bus service can take you from transportation hubs to your accommodation and the conference venue.
              </Typography>
            </div>
            
            <div className="bg-white/15 p-4 rounded-lg">
              <Typography
                variant="h5"
                color="white"
                className="mb-1"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Taxi & Ride-Sharing
              </Typography>
              <Typography
                color="white"
                className="text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Taxis and ride-sharing services are readily available throughout Kingston.
              </Typography>
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

export default TransportationSection;
