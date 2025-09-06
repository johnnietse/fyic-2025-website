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

import { useState, useEffect } from "react";

// Updated event data structure with precise time slots
const SCHEDULE_BY_DAY = {
  "Friday": [
    {
      id: 1,
      title: "Arrival and Hotel Check In",
      startTime: "11:45 AM",
      endTime: "5:30 PM",
      stream: "All Streams",
      location: "Holiday Inn Kingston Waterfront",
      duration: 345 // duration in minutes
    },
    {
      id: 2,
      title: "Travel to Campus",
      startTime: "5:45 PM",
      endTime: "6:00 PM",
      stream: "All Streams",
      location: "From hotel to campus",
      duration: 15
    },
    {
      id: 3,
      title: "Dinner",
      startTime: "6:15 PM",
      endTime: "7:00 PM",
      stream: "All Streams",
      location: "Campus Dining Hall",
      duration: 45
    },
    {
      id: 4,
      title: "Social",
      startTime: "7:15 PM",
      endTime: "9:15 PM",
      stream: "All Streams",
      location: "Student Commons",
      duration: 120
    }
  ],
  "Saturday": {
    "All Streams": [
      {
        id: 1,
        title: "Walk/Shuttle to Campus",
        startTime: "8:00 AM",
        endTime: "8:30 AM",
        location: "From hotel to campus",
        duration: 30
      },
      {
        id: 2,
        title: "Breakfast",
        startTime: "9:00 AM",
        endTime: "9:30 AM",
        location: "Campus Dining Hall",
        duration: 30
      },
      {
        id: 7,
        title: "Lunch and Networking Session",
        startTime: "1:30 PM",
        endTime: "2:15 PM",
        location: "Main Hall",
        duration: 45
      },
      {
        id: 15,
        title: "Down Time",
        startTime: "5:30 PM",
        endTime: "6:45 PM",
        location: "",
        duration: 75
      },
      {
        id: 16,
        title: "Dinner/Banquet",
        startTime: "7:30 PM",
        endTime: "9:45 PM",
        location: "Main Hall",
        duration: 135
      },
      {
        id: 17,
        title: "Shuttle From Campus to Hotel",
        startTime: "10:00 PM",
        endTime: "10:15 PM",
        location: "From campus to hotel",
        duration: 15
      }
    ],
    "Stream A": [
      {
        id: 3,
        title: "Workshop 1A",
        startTime: "10:00 AM",
        endTime: "10:30 AM",
        location: "Room 301",
        duration: 30
      },
      {
        id: 4,
        title: "Workshop 2A",
        startTime: "11:00 AM",
        endTime: "11:30 AM",
        location: "Room 301",
        duration: 30
      },
      {
        id: 5,
        title: "Workshop 3A",
        startTime: "12:00 PM",
        endTime: "1:00 PM",
        location: "Room 301",
        duration: 60
      },
      {
        id: 8,
        title: "Panel A",
        startTime: "2:30 PM",
        endTime: "3:15 PM",
        location: "Room 301",
        duration: 45
      },
      {
        id: 9,
        title: "Gold Sponsor Workshop",
        startTime: "3:30 PM",
        endTime: "4:45 PM",
        location: "Room 301",
        duration: 75
      },
      {
        id: 10,
        title: "Walk/Car Ride to Hotel",
        startTime: "5:00 PM",
        endTime: "5:15 PM",
        location: "From campus to hotel",
        duration: 15
      }
    ],
    "Stream B": [
      {
        id: 11,
        title: "Workshop 1B",
        startTime: "10:00 AM",
        endTime: "10:30 AM",
        location: "Room 302",
        duration: 30
      },
      {
        id: 12,
        title: "Workshop 2B",
        startTime: "11:00 AM",
        endTime: "11:30 AM",
        location: "Room 302",
        duration: 30
      },
      {
        id: 13,
        title: "Workshop 3B",
        startTime: "12:00 PM",
        endTime: "1:00 PM",
        location: "Room 302",
        duration: 60
      },
      {
        id: 14,
        title: "Panel B",
        startTime: "2:30 PM",
        endTime: "3:15 PM",
        location: "Room 302",
        duration: 45
      },
      {
        id: 15,
        title: "Gold Sponsor Workshop",
        startTime: "3:30 PM",
        endTime: "4:45 PM",
        location: "Room 302",
        duration: 75
      },
      {
        id: 16,
        title: "Walk/Car Ride to Hotel",
        startTime: "5:00 PM",
        endTime: "5:15 PM",
        location: "From campus to hotel",
        duration: 15
      }
    ],
    "Stream C": [
      {
        id: 17,
        title: "VPX Stream",
        startTime: "10:00 AM",
        endTime: "1:00 PM",
        location: "Room 303",
        duration: 180
      },
      {
        id: 18,
        title: "VPX Stream",
        startTime: "2:30 PM",
        endTime: "4:45 PM",
        location: "Room 303",
        duration: 135
      },
      {
        id: 19,
        title: "Walk/Car Ride to Hotel",
        startTime: "5:00 PM",
        endTime: "5:15 PM",
        location: "From campus to hotel",
        duration: 15
      }
    ]
  },
  "Sunday": {
    "All Streams": [
      {
        id: 1,
        title: "Walk/Shuttle to Campus",
        startTime: "8:00 AM",
        endTime: "8:30 AM",
        location: "From hotel to campus",
        duration: 30
      },
      {
        id: 2,
        title: "Breakfast",
        startTime: "9:00 AM",
        endTime: "10:00 AM",
        location: "Campus Dining Hall",
        duration: 60
      },
      {
        id: 7,
        title: "Closing Ceremony",
        startTime: "2:15 PM",
        endTime: "2:45 PM",
        location: "Main Auditorium",
        duration: 30
      },
      {
        id: 8,
        title: "Lunch",
        startTime: "3:00 PM",
        endTime: "3:30 PM",
        location: "Campus Dining Hall",
        duration: 30
      }
    ],
    "Stream A & B": [
      {
        id: 3,
        title: "Speaker",
        startTime: "10:30 AM",
        endTime: "11:15 AM",
        location: "Main Auditorium",
        duration: 45
      },
      {
        id: 4,
        title: "Case Competition",
        startTime: "11:30 AM",
        endTime: "1:45 PM",
        location: "Room 304",
        duration: 135
      }
    ],
    "Stream C": [
      {
        id: 5,
        title: "VPX Stream",
        startTime: "10:30 AM",
        endTime: "1:45 PM",
        location: "Room 303",
        duration: 135
      }
    ]
  }
};

// Generate time slots from 8:00 AM to 10:00 PM in 15-minute intervals
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 8; hour <= 22; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const period = hour >= 12 ? "PM" : "AM";
      const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      slots.push(`${displayHour}:${minute === 0 ? "00" : minute} ${period}`);
    }
  }
  return slots;
};

const TIME_SLOTS = generateTimeSlots();

export function EventContent() {
  const [activeDay, setActiveDay] = useState<keyof typeof SCHEDULE_BY_DAY>("Friday");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Function to convert time to minutes for comparison
  const timeToMinutes = (timeStr: string) => {
    const [time, period] = timeStr.split(" ");
    const [hours, minutes] = time.split(":").map(Number);
    let totalMinutes = hours * 60 + minutes;
    if (period === "PM" && hours !== 12) totalMinutes += 12 * 60;
    if (period === "AM" && hours === 12) totalMinutes -= 12 * 60;
    return totalMinutes;
  };

  // Function to get event color based on stream
  const getEventColor = (stream: string) => {
    switch (stream) {
      case "All Streams": return "bg-blue-100 border-blue-500 text-blue-800";
      case "Stream A": return "bg-red-100 border-red-500 text-red-800";
      case "Stream B": return "bg-green-100 border-green-500 text-green-800";
      case "Stream C": return "bg-yellow-100 border-yellow-500 text-yellow-800";
      case "Stream A & B": return "bg-purple-100 border-purple-500 text-purple-800";
      default: return "bg-gray-100 border-gray-500 text-gray-800";
    }
  };

  // Function to get events for a specific stream and day
  const getEventsForStream = (day: string, stream: string) => {
    if (day === "Friday") {
      return SCHEDULE_BY_DAY[day].filter(event => event.stream === stream);
    } else {
      return SCHEDULE_BY_DAY[day][stream] || [];
    }
  };

  // Get all streams for the active day
  const getStreamsForDay = () => {
    if (activeDay === "Friday") return ["All Streams"];
    if (activeDay === "Saturday") return ["All Streams", "Stream A", "Stream B", "Stream C"];
    return ["All Streams", "Stream A & B", "Stream C"];
  };

  // Function to calculate how many time slots an event spans
  const getEventSpan = (event: any) => {
    const startMinutes = timeToMinutes(event.startTime);
    const endMinutes = timeToMinutes(event.endTime);
    const duration = endMinutes - startMinutes;
    return Math.max(1, Math.ceil(duration / 15)); // Each time slot is 15 minutes
  };

  // Function to get the starting position of an event
  const getEventStartPosition = (event: any) => {
    const firstSlotMinutes = timeToMinutes("8:00 AM");
    const eventStartMinutes = timeToMinutes(event.startTime);
    return ((eventStartMinutes - firstSlotMinutes) / 15) + 1; // +1 for the header row
  };

  return (
    <section className="py-4 md:py-8 px-2 md:px-6 lg:px-12">
      {/* Day Navigation Tabs */}
      <div className="flex justify-center mb-4 md:mb-8 gap-1 md:gap-2 bg-gray-100 rounded-full p-1 max-w-full mx-auto overflow-x-auto">
        {(Object.keys(SCHEDULE_BY_DAY) as (keyof typeof SCHEDULE_BY_DAY)[]).map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-3 md:px-6 py-1 md:py-2 rounded-full transition font-medium text-xs md:text-sm whitespace-nowrap ${
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
        <div className="grid grid-cols-1 md:grid-cols-6 gap-0 relative">
          {/* Time Column */}
          <div className="bg-gray-50 p-2 md:p-4 font-medium border-r border-b border-gray-200 hidden md:block text-sm md:text-base">
            Time
          </div>
          
          {/* Stream Headers */}
          <div className="bg-gray-50 p-2 md:p-4 font-medium border-r border-b border-gray-200 md:col-span-5 grid grid-cols-5 text-xs md:text-sm">
            {getStreamsForDay().map((stream) => (
              <div key={stream} className="text-center truncate px-1">
                {stream}
              </div>
            ))}
          </div>

          {/* Time Slots */}
          {TIME_SLOTS.map((time, index) => (
            <div key={time} className="contents">
              {/* Time label */}
              <div className="p-1 md:p-2 bg-gray-50 border-r border-b border-gray-200 font-medium hidden md:block text-xs md:text-sm">
                {time}
              </div>
              
              {/* Empty cells for time slots */}
              <div className="p-0.5 md:p-1 border-b border-gray-200 md:col-span-5 grid grid-cols-5 min-h-[20px] md:min-h-[24px]">
                {getStreamsForDay().map((stream) => (
                  <div key={`${stream}-${time}`} className="border-r border-gray-200 p-0.5 md:p-1 relative"></div>
                ))}
              </div>
            </div>
          ))}

          {/* Event overlays - positioned absolutely */}
          {getStreamsForDay().map((stream, streamIndex) => {
            const events = getEventsForStream(activeDay, stream);
            return events.map((event: any) => {
              const startPosition = getEventStartPosition(event);
              const span = getEventSpan(event);
              
              return (
                <div
                  key={event.id}
                  className={`p-1 md:p-2 rounded text-xs cursor-pointer border-l-4 absolute ${getEventColor(stream)}`}
                  style={{
                    gridColumn: `${streamIndex + 2}`,
                    gridRow: `${startPosition} / span ${span}`,
                    zIndex: 10,
                    width: `calc(100% / 5 - 0.5rem)`,
                    left: `${(streamIndex) * (100 / 5)}%`,
                    margin: '0.25rem'
                  }}
                >
                  <div className="font-semibold truncate leading-tight">{event.title}</div>
                  <div className="text-[10px] md:text-xs opacity-80 truncate mt-1">
                    {event.startTime} - {event.endTime}
                  </div>
                  {event.location && (
                    <div className="text-[10px] md:text-xs opacity-70 truncate mt-1">
                      {event.location}
                    </div>
                  )}
                </div>
              );
            });
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 md:mt-8 flex justify-center gap-3 md:gap-6 flex-wrap">
        <div className="flex items-center">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-100 border-l-4 border-blue-500 mr-1 md:mr-2"></div>
          <span className="text-xs md:text-sm">All Streams</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-red-100 border-l-4 border-red-500 mr-1 md:mr-2"></div>
          <span className="text-xs md:text-sm">Stream A</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-green-100 border-l-4 border-green-500 mr-1 md:mr-2"></div>
          <span className="text-xs md:text-sm">Stream B</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-100 border-l-4 border-yellow-500 mr-1 md:mr-2"></div>
          <span className="text-xs md:text-sm">Stream C</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-purple-100 border-l-4 border-purple-500 mr-1 md:mr-2"></div>
          <span className="text-xs md:text-sm">Stream A & B</span>
        </div>
      </div>

      {/* Instructions for mobile users */}
      {isMobile && (
        <div className="mt-4 text-center text-xs text-gray-500">
          Scroll horizontally to view all time slots
        </div>
      )}

      {/* Add some spacing at the bottom */}
      <div className="h-6 md:h-12"></div>
    </section>
  );
}

export default EventContent;
