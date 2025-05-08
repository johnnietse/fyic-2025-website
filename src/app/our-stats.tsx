"use client";

// import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

import dynamic from 'next/dynamic';

const Typography = dynamic(
  () => import('@material-tailwind/react').then((mod) => mod.Typography),
  { ssr: false }
);

const STATS = [
  {
    count: "100+",
    title: "Participants",
  },
  {
    count: "10",
    title: "Speakers",
  },
  {
    count: "10+",
    title: "Workshops",
  },
  {
    count: "3",
    title: "Days",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <Typography variant="h6" color="orange" className="mb-6 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}   {...({} as any)} >
          Our Stats
        </Typography>
        <Typography
          className="text-5xl font-bold leading-tight lg:w-3/4"
          color="blue-gray"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          {...({} as any)}  // Apply type override here

        >
          Conference Highlights
        </Typography>
        <Typography
          variant="lead"
          className="mt-3 w-full !text-gray-500 lg:w-9/12"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          {...({} as any)}  // Apply type override here

        >
          This three-day conference convenes outstanding first-year engineering students, esteemed professionals, and leading organizations across Ontario to foster meaningful dialogue, professional development, and long-lasting connections.

          {/* Get ready for three days of excitement, inspiration, and connection as FYIC 2025 brings together driven first-year engineers, industry leaders, and pioneering companies for an unforgettable experience filled with opportunity and growth. */}



        </Typography>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
