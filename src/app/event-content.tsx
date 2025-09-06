// // "use client";

// // import {
// //   Tab,
// //   Tabs,
// //   TabsHeader,
// // } from "@material-tailwind/react";

// // import EventContentCard from "@/components/event-content-card";


// // const EVENT_CONTENT = [
// //   {
// //     title: "AI's Role in Shaping the Future",
// //     des: "Discover how AI is revolutionizing industries, creating new possibilities, and addressing global challenges. Gain a deep understanding of the pivotal role AI plays in driving innovation, sustainability, and progress in our rapidly evolving world.",
// //     name: "Marcell Glock",
// //     position: "Chief Executive, Spotify",
// //     panel: "Panel Discussion",
// //     img: "/image/avatar1.jpg",
// //   },
// //   {
// //     title: "Introduction to Machine Learning",
// //     des: "Explore the basic principles, algorithms, and applications of Machine Learning. Through hands-on exercises and practical examples, you'll develop a solid understanding of how Machine Learning powers AI-driven solutions.",
// //     name: "Marcell Glock",
// //     position: "Chief Executive, Spotify",
// //     panel: "Workshop",
// //     img: "/image/avatar2.jpg",
// //   },
// //   {
// //     title: "AI in Healthcare: Revolutionizing Patient Care",
// //     des: "This session is a must-attend for healthcare professionals, AI enthusiasts, and anyone interested in the intersection of technology and well-being. Join us as we discuss how AI is bringing about positive changes in healthcare.",
// //     name: "Marcell Glock",
// //     position: "Chief Executive, Spotify",
// //     panel: "Workshop",
// //     img: "/image/avatar3.jpg",
// //   },
// // ];

// // export function EventContent() {
// //   return (
// //     <section className="py-8 px-8 lg:py-20">
// //       <Tabs value="Day1" className="mb-8">
// //         <div className="w-full flex mb-8 flex-col items-center">
// //           <TabsHeader className="h-12 w-72 md:w-96">
// //             <Tab value="Day1" className="font-medium">
// //               Day 1
// //             </Tab>
// //             <Tab value="Day2" className="font-medium">
// //               Day 2
// //             </Tab>
// //             <Tab value="Day3" className="font-medium">
// //               Day 3
// //             </Tab>
// //           </TabsHeader>
// //         </div>
// //       </Tabs>
// //       <div className="mx-auto container">
// //         {EVENT_CONTENT.map((props, idx) => (
// //           <EventContentCard key={idx} {...props} />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // export default EventContent;


// ////



// "use client";

// import { useState } from "react";

// const EVENTS_BY_DAY = {
//   "Day 1": [
//     {
//       date: "November 29 2025",
//       time: "8:00 AM – 10:00 PM",
//       title: "FYIC 2025: First Year Integration Conference 2025",
//       location: "Holiday Inn Kingston Waterfront, 2 Princess St, Kingston",
//       description:
//         "EARLY BIRD PRICING – $15 TICKETS UNTIL DECEMBER 31, 2024. (Regular price: $25) The First Year Integration Conference (FYIC) is hosting its annual conference on January 25th at the Holiday Inn Kingston – Waterfront! Join us for a day of workshops, speaker sessions, and networking – all focused on kickstarting …",
//       price: "$15",
//     },

//     {
//       date: "January 29 2025",
//       time: "10:30 AM – 12:00 PM",
//       title: "Keynote: Engineering the Future – AI & Sustainability",
//       location: "Holiday Inn Kingston Waterfront, Conference Room A",
//       description:
//         "Join industry leader Dr. Maya Singh as she explores the intersection of artificial intelligence and sustainable infrastructure, and how engineers can lead the way toward a greener future.",
//       price: "Included with registration",
//     },
//     {
//       date: "January 29 2025",
//       time: "1:00 PM – 2:30 PM",
//       title: "Workshop: Strategic Networking for Engineers",
//       location: "Holiday Inn Kingston Waterfront, Room B2",
//       description:
//         "This interactive workshop will give students practical tools for building professional relationships, making the most out of conferences, and developing a personal brand.",
//       price: "",
//     },
    



//   ],
//   "Day 2": [
//     {
//       date: "November 30 2025",
//       time: "6:00 PM – 8:00 PM",
//       title: "Taster Event",
//       location: "Rose Innovation Hub – Mitchell Hall, 69 Union St, Kingston",
//       description: "",
//       price: "",
//     },
//     {
//       date: "November 30 2025",
//       time: "10:00 AM – 12:00 PM",
//       title: "Engineering Innovation Panel",
//       location: "Dupuis Hall, Room 215, Queen's University",
//       description:
//         "Join us for a discussion with alumni innovators who have launched startups and led cutting-edge engineering projects. Great for students interested in entrepreneurship and tech leadership.",
//       price: "Free",
//     },
//     {
//       date: "November 30 2025",
//       time: "1:00 PM – 3:00 PM",
//       title: "Leadership in Tech Workshop",
//       location: "Beamish-Munro Hall, Room 313",
//       description:
//         "An interactive workshop focusing on communication, team dynamics, and leading design teams. Open to all engineering students.",
//       price: "$5",
//     },
    
//   ],
//   "Day 3": [
//     {
//       date: "December 1 2025",
//       time: "7:00 PM – 10:00 PM",
//       title: "Industry Night: Finance and Consulting in STEM",
//       location: "Clark Hall Pub, 30 5 Field Company Lane, Kingston",
//       description:
//         "Curious about how your STEM skills can open doors to careers in finance and consulting? This event is an opportunity to get prepared for the busy hiring season ahead! First Year Integration Conference (FYIC) is collaborating with EngSoc Professional Development (PD) and CREO Solutions for Industry Night! EngSoc PD will …",
//       price: "",
//     },
//     {
//       date: "December 1 2025",
//       time: "9:00 AM – 11:00 AM",
//       title: "Breakfast with Industry: Civil and Mining Engineering",
//       location: "Ellis Hall Lobby, Queen’s University",
//       description:
//         "Network over breakfast with industry representatives from Hatch, SNC-Lavalin, and other leading firms in civil and mining. Bring your resumes!",
//       price: "Free with RSVP",
//     },
//     {
//       date: "December 1 2025",
//       time: "2:00 PM – 4:00 PM",
//       title: "Resume & Cover Letter Critique Booths",
//       location: "Walter Light Hall Atrium",
//       description:
//         "Get instant feedback on your resume and cover letter from upper-year students and engineering alumni. First come, first served.",
//       price: "",
//     },
    
//   ],
// };

// export function EventContent() {
//   // const [activeDay, setActiveDay] = useState("Day 1");
//   const [activeDay, setActiveDay] = useState<keyof typeof EVENTS_BY_DAY>("Day 1");


//   return (
//     <section className="py-12 px-6 md:px-12">
//       {/* Tabs */}
//       {/* <div className="flex justify-center mb-8 gap-4">
//         {Object.keys(EVENTS_BY_DAY).map((day) => (
//           <button
//             key={day}
//             onClick={() => setActiveDay(day)}
//             className={`px-4 py-2 rounded-full border ${
//               activeDay === day
//                 ? "bg-blue-900 text-white border-blue-900"
//                 : "bg-white text-blue-900 border-blue-300"
//             }`}
//           >
//             {day}
//           </button>
//         ))}
//       </div> */}

//       <div className="flex justify-center mb-8 gap-2 bg-gray-100 rounded-full p-1 max-w-fit mx-auto">
//         {/* {Object.keys(EVENTS_BY_DAY).map((day) => (
//           <button
//             key={day}
//             onClick={() => setActiveDay(day)}
//             className={`px-4 py-2 rounded-full transition font-medium ${
//               activeDay === day
//                 ? "bg-white text-black shadow"
//                 : "text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             {day}
//           </button>
//         ))} */}

//         {(Object.keys(EVENTS_BY_DAY) as (keyof typeof EVENTS_BY_DAY)[]).map((day) => (
//           <button
//             key={day}
//             onClick={() => setActiveDay(day)}
//             className={`px-4 py-2 rounded-full transition font-medium ${
//               activeDay === day
//                 ? "bg-white text-black shadow"
//                 : "text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             {day}
//           </button>
//         ))}

//       </div>


//       {/* Events */}
//       <div className="space-y-10 max-w-4xl mx-auto">
//         {EVENTS_BY_DAY[activeDay].map((event, idx) => (
//           <div key={idx} className="flex gap-6 items-start">
//             {/* Date Block */}
//             <div className="text-center w-16 shrink-0">
//               <div className="text-sm font-medium uppercase text-gray-500">
//                 {event.date.split(" ")[0]}
//               </div>
//               <div className="text-2xl font-bold text-blue-900 leading-none">
//                 {event.date.split(" ")[1]}
//               </div>
//               <div className="text-sm text-gray-500">
//                 {event.date.split(" ")[2]}
//               </div>
//             </div>

//             {/* Event Info */}
//             <div className="flex-1">
//               <p className="text-sm text-gray-600">{event.time}</p>
//               <h3 className="text-lg font-bold text-black mt-1">{event.title}</h3>
//               <p className="text-sm text-gray-700 italic">{event.location}</p>
//               {event.description && (
//                 <p className="text-sm text-gray-700 mt-2">{event.description}</p>
//               )}
//               {event.price && (
//                 <p className="text-sm font-semibold text-gray-800 mt-1">
//                   {event.price}
//                 </p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//       <br>
//       </br>
//       <br>
//       </br>
//       <br>
//       </br>
//       <br>
//       </br>
//     </section>
//   );
// }

// export default EventContent;










// ///// SECOND PART OF THE CODE

// // "use client";

// // import {
// //   Tab,
// //   Tabs,
// //   TabsHeader,
// //   TabsBody,
// //   TabPanel,
// // } from "@material-tailwind/react";

// // import EventContentCard from "@/components/event-content-card";

// // // Group events by day
// // const EVENT_CONTENT_BY_DAY = {
// //   Day1: [
// //     {
// //       title: "AI's Role in Shaping the Future",
// //       des: "Discover how AI is revolutionizing industries, creating new possibilities, and addressing global challenges...",
// //       name: "Marcell Glock",
// //       position: "Chief Executive, Spotify",
// //       panel: "Panel Discussion",
// //       img: "/image/avatar1.jpg",
// //     },
// //   ],
// //   Day2: [
// //     {
// //       title: "Introduction to Machine Learning",
// //       des: "Explore the basic principles, algorithms, and applications of Machine Learning...",
// //       name: "Marcell Glock",
// //       position: "Chief Executive, Spotify",
// //       panel: "Workshop",
// //       img: "/image/avatar2.jpg",
// //     },
// //   ],
// //   Day3: [
// //     {
// //       title: "AI in Healthcare: Revolutionizing Patient Care",
// //       des: "This session is a must-attend for healthcare professionals, AI enthusiasts...",
// //       name: "Marcell Glock",
// //       position: "Chief Executive, Spotify",
// //       panel: "Workshop",
// //       img: "/image/avatar3.jpg",
// //     },
// //   ],
// // };

// // export function EventContent() {
// //   return (
// //     <section className="py-8 px-8 lg:py-20">
// //       <Tabs value="Day1" className="mb-8">
// //         {/* Tab Navigation */}
// //         <div className="w-full flex mb-8 flex-col items-center">
// //           <TabsHeader className="h-12 w-72 md:w-96">
// //             <Tab value="Day1" className="font-medium">
// //               Day 1
// //             </Tab>
// //             <Tab value="Day2" className="font-medium">
// //               Day 2
// //             </Tab>
// //             <Tab value="Day3" className="font-medium">
// //               Day 3
// //             </Tab>
// //           </TabsHeader>
// //         </div>

// //         {/* Content for each tab */}
// //         <TabsBody>
// //           {Object.entries(EVENT_CONTENT_BY_DAY).map(([day, events]) => (
// //             <TabPanel key={day} value={day}>
// //               <div className="mx-auto container space-y-6">
// //                 {events.map((props, idx) => (
// //                   <EventContentCard key={idx} {...props} />
// //                 ))}
// //               </div>
// //             </TabPanel>
// //           ))}
// //         </TabsBody>
// //       </Tabs>
// //     </section>
// //   );
// // }

// // export default EventContent;






















// "use client";

// import { useState } from "react";

// // Updated event data structure to match the calendar view
// const SCHEDULE_BY_DAY = {
//   "Friday": {
//     streams: ["All Streams"],
//     events: [
//       { time: "8:00", allStreams: ""},
//       { time: "9:00", allStreams: ""},
//       { time: "10:00", allStreams: ""},
//       { time: "11:00", allStreams: ""},
//       { time: "11:45", allStreams: "Arrival and Hotel Check In"},
//       { time: "12:00", allStreams: ""},
//       { time: "13:00", allStreams: ""},
//       { time: "14:00", allStreams: ""},
//       { time: "15:00", allStreams: ""},
//       { time: "16:00", allStreams: ""},
//       { time: "17:00", allStreams: ""},
//       { time: "17:30", allStreams: "Travel to Campus"},
//       { time: "18:00", allStreams: "Dinner"},
//       { time: "19:00", allStreams: "Opening Ceremony"},
//       { time: "20:00", allStreams: ""},
//       { time: "20:45", allStreams: "Social"},
//       { time: "21:00", allStreams: "Social"},
//       { time: "22:00", allStreams: "Social"},
//     ]
//   },
//   "Saturday": {
//     streams: ["All Streams", "Stream A", "Stream B", "Stream C"],
//     events: [
//       { time: "8:00", allStreams: "Walk/Shuttle to Campus", streamA: "", streamB: "", streamC: "" },
//       { time: "9:00", allStreams: "Breakfast", streamA: "", streamB: "", streamC: "" },
//       { time: "10:00", allStreams: "", streamA: "Workshop 1A", streamB: "Workshop 1B", streamC: "" },
//       { time: "11:00", allStreams: "", streamA: "Workshop 2A", streamB: "Workshop 2B", streamC: "VPX Stream" },
//       { time: "12:00", allStreams: "", streamA: "Workshop 3A", streamB: "Workshop 3B", streamC: "" },
//       { time: "13:00", allStreams: "Lunch & Networking Session", streamA: "", streamB: "", streamC: "VPX Stream" },
//       { time: "14:00", allStreams: "", streamA: "Panel A", streamB: "Panel B", streamC: "" },
//       { time: "15:00", allStreams: "", streamA: "Gold Sponsor Workshop", streamB: "", streamC: "VPX Stream" },
//       { time: "16:00", allStreams: "Lunch", streamA: "", streamB: "", streamC: "" },
//       { time: "17:00", allStreams: "Down Time", streamA: "", streamB: "", streamC: "" },
//       { time: "18:00", allStreams: "", streamA: "", streamB: "", streamC: "" },
//       { time: "19:00", allStreams: "Dinner/Banquet", streamA: "", streamB: "", streamC: "" },
//       { time: "20:00", allStreams: "", streamA: "", streamB: "", streamC: "" },
//       { time: "21:00", allStreams: "", streamA: "", streamB: "", streamC: "" },
//       { time: "22:00", allStreams: "", streamA: "", streamB: "", streamC: "" },
//     ]
//   },
//   "Sunday": {
//     streams: ["All Streams", "Stream A", "Stream B", "Stream C"],
//     events: [
//       { time: "8:00", allStreams: "", streamA: "", streamB: "", streamC: "" },
//       { time: "9:00", allStreams: "Breakfast", streamA: "", streamB: "", streamC: "" },
//       { time: "10:00", allStreams: "Speaker", streamA: "", streamB: "", streamC: "" },
//       { time: "11:00", allStreams: "", streamA: "", streamB: "", streamC: "VPX Stream" },
//       { time: "12:00", allStreams: "", streamA: "", streamB: "", streamC: "Case Competition" },
//       { time: "13:00", allStreams: "", streamA: "", streamB: "", streamC: "VPX Stream" },
//       { time: "14:00", allStreams: "Closing Ceremony", streamA: "", streamB: "", streamC: "" },
//       { time: "15:00", allStreams: "", streamA: "", streamB: "", streamC: "VPX Stream" },
//       { time: "16:00", allStreams: "", streamA: "", streamB: "", streamC: "" },
//       { time: "17:00", allStreams: "", streamA: "", streamB: "", streamC: "" },
//       { time: "18:00", allStreams: "", streamA: "", streamB: "", streamC: "" },
//       { time: "19:00", allStreams: "", streamA: "", streamB: "", streamC: "" },
//       { time: "20:00", allStreams: "", streamA: "", streamB: "", streamC: "" },
//       { time: "21:00", allStreams: "", streamA: "", streamB: "", streamC: "" },
//       { time: "22:00", allStreams: "", streamA: "", streamB: "", streamC: "" },
//     ]
//   }
// };

// export function EventContent() {
//   const [activeDay, setActiveDay] = useState<keyof typeof SCHEDULE_BY_DAY>("Friday");

//   return (
//     <section className="py-12 px-6 md:px-12">
//       {/* Day Navigation Tabs */}
//       <div className="flex justify-center mb-8 gap-2 bg-gray-100 rounded-full p-1 max-w-fit mx-auto">
//         {(Object.keys(SCHEDULE_BY_DAY) as (keyof typeof SCHEDULE_BY_DAY)[]).map((day) => (
//           <button
//             key={day}
//             onClick={() => setActiveDay(day)}
//             className={`px-6 py-2 rounded-full transition font-medium ${
//               activeDay === day
//                 ? "bg-blue-600 text-white shadow"
//                 : "text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             {day}
//           </button>
//         ))}
//       </div>

//       {/* Calendar View */}
//       <div className="overflow-x-auto rounded-lg shadow-lg">
//         <div className="min-w-[800px]">
//           {/* Header Row */}
//           <div className="grid grid-cols-5 bg-blue-800 text-white font-bold">
//             <div className="p-3 border-r border-blue-700">Time</div>
//             {SCHEDULE_BY_DAY[activeDay].streams.map((stream) => (
//               <div key={stream} className="p-3 text-center">
//                 {stream}
//               </div>
//             ))}
//           </div>

//           {/* Time Slots */}
//           {SCHEDULE_BY_DAY[activeDay].events.map((timeSlot, idx) => (
//             <div key={idx} className="grid grid-cols-5 even:bg-gray-50 hover:bg-blue-50 transition-colors">
//               {/* Time Column */}
//               <div className="p-3 font-medium border-r border-t border-gray-200">
//                 {timeSlot.time}
//               </div>
              
//               {/* All Streams Column */}
//               <div className={`p-3 border-t border-gray-200 ${timeSlot.allStreams ? "bg-blue-50" : ""}`}>
//                 {timeSlot.allStreams}
//               </div>
              
//               {/* Stream A Column */}
//               <div className={`p-3 border-t border-gray-200 ${timeSlot.streamA ? "bg-red-50" : ""}`}>
//                 {timeSlot.streamA}
//               </div>
              
//               {/* Stream B Column */}
//               <div className={`p-3 border-t border-gray-200 ${timeSlot.streamB ? "bg-green-50" : ""}`}>
//                 {timeSlot.streamB}
//               </div>
              
//               {/* Stream C Column (if applicable) */}
//               {SCHEDULE_BY_DAY[activeDay].streams.includes("Stream C") && (
//                 <div className={`p-3 border-t border-gray-200 ${timeSlot.streamC ? "bg-yellow-50" : ""}`}>
//                   {timeSlot.streamC}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Legend */}
//       <div className="mt-8 flex justify-center gap-6 flex-wrap">
//         <div className="flex items-center">
//           <div className="w-4 h-4 bg-blue-100 border-l-4 border-blue-500 mr-2"></div>
//           <span className="text-sm">All Streams</span>
//         </div>
//         <div className="flex items-center">
//           <div className="w-4 h-4 bg-red-100 border-l-4 border-red-500 mr-2"></div>
//           <span className="text-sm">Stream A</span>
//         </div>
//         <div className="flex items-center">
//           <div className="w-4 h-4 bg-green-100 border-l-4 border-green-500 mr-2"></div>
//           <span className="text-sm">Stream B</span>
//         </div>
//         <div className="flex items-center">
//           <div className="w-4 h-4 bg-yellow-100 border-l-4 border-yellow-500 mr-2"></div>
//           <span className="text-sm">Stream C</span>
//         </div>
//       </div>

//       {/* Add some spacing at the bottom */}
//       <div className="h-12"></div>
//     </section>
//   );
// }

// export default EventContent;























"use client";

import { useState } from "react";

// Event data structure with start and end times
const SCHEDULE_BY_DAY = {
  "Friday": [
    {
      id: 1,
      title: "Walk/Shuttle to Campus",
      startTime: "8:00",
      endTime: "9:00",
      stream: "All Streams",
      location: "From hotel to campus"
    },
    {
      id: 2,
      title: "Breakfast",
      startTime: "9:00",
      endTime: "10:00",
      stream: "All Streams",
      location: "Campus Dining Hall"
    },
    {
      id: 3,
      title: "Arrival and Hotel Check In",
      startTime: "14:00",
      endTime: "15:00",
      stream: "All Streams",
      location: "Holiday Inn Kingston Waterfront"
    },
    {
      id: 4,
      title: "Walk/Car Ride to Hotel",
      startTime: "16:00",
      endTime: "17:00",
      stream: "All Streams",
      location: "From campus to hotel"
    },
    {
      id: 5,
      title: "Travel to Campus",
      startTime: "17:00",
      endTime: "18:00",
      stream: "All Streams",
      location: "From hotel to campus"
    },
    {
      id: 6,
      title: "Dinner",
      startTime: "18:00",
      endTime: "19:00",
      stream: "All Streams",
      location: "Campus Dining Hall"
    },
    {
      id: 7,
      title: "Opening Ceremony",
      startTime: "19:00",
      endTime: "20:00",
      stream: "All Streams",
      location: "Main Auditorium"
    },
    {
      id: 8,
      title: "Social",
      startTime: "20:00",
      endTime: "22:00",
      stream: "All Streams",
      location: "Student Commons"
    },
    {
      id: 9,
      title: "Shuttle From Campus to Hotel",
      startTime: "22:00",
      endTime: "23:00",
      stream: "All Streams",
      location: "From campus to hotel"
    }
  ],
  "Saturday": [
    {
      id: 10,
      title: "Walk/Shuttle to Campus",
      startTime: "8:00",
      endTime: "9:00",
      stream: "All Streams",
      location: "From hotel to campus"
    },
    {
      id: 11,
      title: "Breakfast",
      startTime: "9:00",
      endTime: "10:00",
      stream: "All Streams",
      location: "Campus Dining Hall"
    },
    {
      id: 12,
      title: "Workshop 1A",
      startTime: "10:00",
      endTime: "11:00",
      stream: "Stream A",
      location: "Room 301"
    },
    {
      id: 13,
      title: "Workshop 1B",
      startTime: "10:00",
      endTime: "11:00",
      stream: "Stream B",
      location: "Room 302"
    },
    {
      id: 14,
      title: "Workshop 2A",
      startTime: "11:00",
      endTime: "12:00",
      stream: "Stream A",
      location: "Room 301"
    },
    {
      id: 15,
      title: "Workshop 2B",
      startTime: "11:00",
      endTime: "12:00",
      stream: "Stream B",
      location: "Room 302"
    },
    {
      id: 16,
      title: "VPX Stream",
      startTime: "11:00",
      endTime: "13:00",
      stream: "Stream C",
      location: "Room 303"
    },
    {
      id: 17,
      title: "Workshop 3A",
      startTime: "12:00",
      endTime: "13:00",
      stream: "Stream A",
      location: "Room 301"
    },
    {
      id: 18,
      title: "Workshop 3B",
      startTime: "12:00",
      endTime: "13:00",
      stream: "Stream B",
      location: "Room 302"
    },
    {
      id: 19,
      title: "Lunch & Networking Session",
      startTime: "13:00",
      endTime: "14:00",
      stream: "All Streams",
      location: "Main Hall"
    },
    {
      id: 20,
      title: "Panel A",
      startTime: "14:00",
      endTime: "15:00",
      stream: "Stream A",
      location: "Room 301"
    },
    {
      id: 21,
      title: "Panel B",
      startTime: "14:00",
      endTime: "15:00",
      stream: "Stream B",
      location: "Room 302"
    },
    {
      id: 22,
      title: "Gold Sponsor Workshop",
      startTime: "15:00",
      endTime: "16:00",
      stream: "Stream A",
      location: "Room 301"
    },
    {
      id: 23,
      title: "Lunch",
      startTime: "16:00",
      endTime: "17:00",
      stream: "All Streams",
      location: "Campus Dining Hall"
    },
    {
      id: 24,
      title: "Down Time",
      startTime: "17:00",
      endTime: "19:00",
      stream: "All Streams",
      location: ""
    },
    {
      id: 25,
      title: "Dinner/Banquet",
      startTime: "19:00",
      endTime: "21:00",
      stream: "All Streams",
      location: "Main Hall"
    }
  ],
  "Sunday": [
    {
      id: 26,
      title: "Breakfast",
      startTime: "9:00",
      endTime: "10:00",
      stream: "All Streams",
      location: "Campus Dining Hall"
    },
    {
      id: 27,
      title: "Speaker",
      startTime: "10:00",
      endTime: "11:00",
      stream: "All Streams",
      location: "Main Auditorium"
    },
    {
      id: 28,
      title: "VPX Stream",
      startTime: "11:00",
      endTime: "12:00",
      stream: "Stream C",
      location: "Room 303"
    },
    {
      id: 29,
      title: "Case Competition",
      startTime: "12:00",
      endTime: "13:00",
      stream: "Stream C",
      location: "Room 304"
    },
    {
      id: 30,
      title: "VPX Stream",
      startTime: "13:00",
      endTime: "14:00",
      stream: "Stream C",
      location: "Room 303"
    },
    {
      id: 31,
      title: "Closing Ceremony",
      startTime: "14:00",
      endTime: "15:00",
      stream: "All Streams",
      location: "Main Auditorium"
    },
    {
      id: 32,
      title: "VPX Stream",
      startTime: "15:00",
      endTime: "16:00",
      stream: "Stream C",
      location: "Room 303"
    }
  ]
};

// Generate time slots from 8:00 to 23:00
const TIME_SLOTS = [];
for (let hour = 8; hour <= 23; hour++) {
  TIME_SLOTS.push(`${hour}:00`);
}

export function EventContent() {
  const [activeDay, setActiveDay] = useState<keyof typeof SCHEDULE_BY_DAY>("Friday");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  // Function to find events at a specific time
  const getEventsAtTime = (time: string) => {
    return SCHEDULE_BY_DAY[activeDay].filter(event => 
      event.startTime === time
    );
  };

  // Function to check if an event spans multiple time slots
  const isEventOngoing = (event: any, time: string) => {
    const timeValue = parseInt(time.split(':')[0]);
    const startValue = parseInt(event.startTime.split(':')[0]);
    const endValue = parseInt(event.endTime.split(':')[0]);
    
    return timeValue > startValue && timeValue < endValue;
  };

  // Function to get event color based on stream
  const getEventColor = (stream: string) => {
    switch (stream) {
      case "All Streams": return "bg-blue-100 border-blue-500";
      case "Stream A": return "bg-red-100 border-red-500";
      case "Stream B": return "bg-green-100 border-green-500";
      case "Stream C": return "bg-yellow-100 border-yellow-500";
      default: return "bg-gray-100 border-gray-500";
    }
  };

  return (
    <section className="py-12 px-6 md:px-12">
      {/* Day Navigation Tabs */}
      <div className="flex justify-center mb-8 gap-2 bg-gray-100 rounded-full p-1 max-w-fit mx-auto">
        {(Object.keys(SCHEDULE_BY_DAY) as (keyof typeof SCHEDULE_BY_DAY)[]).map((day) => (
          <button
            key={day}
            onClick={() => {
              setActiveDay(day);
              setSelectedEvent(null);
            }}
            className={`px-6 py-2 rounded-full transition font-medium ${
              activeDay === day
                ? "bg-blue-600 text-white shadow"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Calendar View */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-0">
          {/* Time Column */}
          <div className="bg-gray-50 p-4 font-medium border-r border-b border-gray-200 hidden md:block">
            Time
          </div>
          <div className="bg-gray-50 p-4 font-medium border-r border-b border-gray-200 md:col-span-5 grid grid-cols-5">
            <div className="text-center">All Streams</div>
            <div className="text-center">Stream A</div>
            <div className="text-center">Stream B</div>
            <div className="text-center">Stream C</div>
            <div className="text-center">Details</div>
          </div>

          {/* Time Slots */}
          {TIME_SLOTS.map((time) => {
            const events = getEventsAtTime(time);
            const ongoingEvents = SCHEDULE_BY_DAY[activeDay].filter(event => 
              isEventOngoing(event, time)
            );
            
            return (
              <>
                {/* Time label */}
                <div key={`time-${time}`} className="p-3 bg-gray-50 border-r border-b border-gray-200 font-medium hidden md:block">
                  {time}
                </div>
                
                {/* Event cells */}
                <div className="p-1 border-b border-gray-200 md:col-span-5 grid grid-cols-5 min-h-16">
                  {/* All Streams */}
                  <div className="border-r border-gray-200 p-1">
                    {[...events, ...ongoingEvents]
                      .filter(event => event.stream === "All Streams")
                      .map(event => (
                        <div
                          key={event.id}
                          className={`p-2 rounded text-xs cursor-pointer border-l-4 ${getEventColor(event.stream)}`}
                          onClick={() => setSelectedEvent(event)}
                        >
                          {event.startTime === time ? event.title : "↳ Ongoing"}
                        </div>
                      ))}
                  </div>
                  
                  {/* Stream A */}
                  <div className="border-r border-gray-200 p-1">
                    {[...events, ...ongoingEvents]
                      .filter(event => event.stream === "Stream A")
                      .map(event => (
                        <div
                          key={event.id}
                          className={`p-2 rounded text-xs cursor-pointer border-l-4 ${getEventColor(event.stream)}`}
                          onClick={() => setSelectedEvent(event)}
                        >
                          {event.startTime === time ? event.title : "↳ Ongoing"}
                        </div>
                      ))}
                  </div>
                  
                  {/* Stream B */}
                  <div className="border-r border-gray-200 p-1">
                    {[...events, ...ongoingEvents]
                      .filter(event => event.stream === "Stream B")
                      .map(event => (
                        <div
                          key={event.id}
                          className={`p-2 rounded text-xs cursor-pointer border-l-4 ${getEventColor(event.stream)}`}
                          onClick={() => setSelectedEvent(event)}
                        >
                          {event.startTime === time ? event.title : "↳ Ongoing"}
                        </div>
                      ))}
                  </div>
                  
                  {/* Stream C */}
                  <div className="border-r border-gray-200 p-1">
                    {[...events, ...ongoingEvents]
                      .filter(event => event.stream === "Stream C")
                      .map(event => (
                        <div
                          key={event.id}
                          className={`p-2 rounded text-xs cursor-pointer border-l-4 ${getEventColor(event.stream)}`}
                          onClick={() => setSelectedEvent(event)}
                        >
                          {event.startTime === time ? event.title : "↳ Ongoing"}
                        </div>
                      ))}
                  </div>
                  
                  {/* Time label for mobile */}
                  <div className="p-2 text-xs text-gray-500 md:hidden flex items-center justify-center">
                    {time}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-2">{selectedEvent.title}</h3>
            <div className="flex items-center mb-2">
              <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                selectedEvent.stream === "All Streams" ? "bg-blue-500" :
                selectedEvent.stream === "Stream A" ? "bg-red-500" :
                selectedEvent.stream === "Stream B" ? "bg-green-500" : "bg-yellow-500"
              }`}></span>
              <span className="text-sm font-medium">{selectedEvent.stream}</span>
            </div>
            <p className="text-gray-600 mb-2">
              <strong>Time:</strong> {selectedEvent.startTime} - {selectedEvent.endTime}
            </p>
            {selectedEvent.location && (
              <p className="text-gray-600 mb-4">
                <strong>Location:</strong> {selectedEvent.location}
              </p>
            )}
            <button
              onClick={() => setSelectedEvent(null)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-8 flex justify-center gap-6 flex-wrap">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-100 border-l-4 border-blue-500 mr-2"></div>
          <span className="text-sm">All Streams</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-100 border-l-4 border-red-500 mr-2"></div>
          <span className="text-sm">Stream A</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-100 border-l-4 border-green-500 mr-2"></div>
          <span className="text-sm">Stream B</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-yellow-100 border-l-4 border-yellow-500 mr-2"></div>
          <span className="text-sm">Stream C</span>
        </div>
      </div>

      {/* Add some spacing at the bottom */}
      <div className="h-12"></div>
    </section>
  );
}

export default EventContent;
