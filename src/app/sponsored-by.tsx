"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export const runtime = "edge";


const SPONSORS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export function SponsoredBy() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">

      <Typography variant="h2" color="blue-gray" className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}   {...({} as any)}>
          2025 FYIC Sponsors
        </Typography>
        <br>
        </br>
        <br>
        </br>
        <Typography variant="lead" color="gray" className="mb-8 max-w-4xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}   {...({} as any)}>
          FYIC 2025 is proudly presented by OSPE. Thank you to our sponsors – TBD!
{/*           DDQIC, Suncor, Tatham Engineering, Circle5, Toromont CAT, Smith Engineering
          Faculty of Chemical Engineering, Stroud, CIBC Capital Markets, Queen’s
          University Faculty of Education, Isaac, INVISTA, Bounce, and Teck Resources Limited. */}
        </Typography>

        <br>
        </br>
        <br>
        </br>
        
        <Typography variant="h4" color="blue-gray" className="mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}   {...({} as any)} >
          SPONSORED BY
        </Typography>
{/*         <div className="flex flex-wrap items-center justify-center gap-6">
          {SPONSORS.map((logo, key) => (
            <Image
              width={256}
              height={256}
              key={key}
              src={`/logos/logo-${logo}.svg`}
              alt={logo}
              className="w-40"
            />
          ))}
        </div> */}
      </div>

      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>

    </section>
  );
}

export default SponsoredBy;
