"use client";

import { Typography } from "@material-tailwind/react";

export function TransportationSection() {
  return (
    <div className="relative w-full bg-[url('//image/transportation-bg.png')] bg-cover bg-no-repeat bg-fixed">
      <div className="absolute inset-0 h-full w-full bg-gray-900/70" />
      <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-16">
        {/* Section Header */}
        <Typography 
          variant="h1" 
          className="text-center mb-12 mt-8" 
          color="white" 
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          {...({} as any)}
        >
          Getting to Kingston
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
          {/* Left Column - Transportation Options */}
          <div className="space-y-6">
            <Typography
              variant="h3"
              color="white"
              className="mb-6 border-b border-blue-400 pb-2"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              Transportation Options
            </Typography>
            
            <div className="space-y-4">
              <div className="bg-blue-900/30 p-4 rounded-lg backdrop-blur-sm">
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Mega Bus
                </Typography>
                <Typography
                  color="blue-100"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Affordable bus service with multiple daily departures from various locations.
                </Typography>
              </div>
              
              <div className="bg-blue-900/30 p-4 rounded-lg backdrop-blur-sm">
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  FlixBus
                </Typography>
                <Typography
                  color="blue-100"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Comfortable bus service connecting Kingston to major cities.
                </Typography>
              </div>
              
              <div className="bg-blue-900/30 p-4 rounded-lg backdrop-blur-sm">
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Via Rail
                </Typography>
                <Typography
                  color="blue-100"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Train service with Kingston located on the Ontario-Quebec route.
                </Typography>
              </div>
            </div>
            
            <Typography
              color="white"
              className="mt-8 bg-gray-800/50 p-4 rounded-lg"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              When you arrive in Kingston, both the Megabus and Via Rail stations have bus routes that can take you to your hotel.
            </Typography>
          </div>
          
          {/* Right Column - Map and Additional Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <Typography
                variant="h4"
                color="white"
                className="mb-4 text-center"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Conference Location
              </Typography>
              
              {/* Space for your location image */}
              <div className="bg-gray-700/30 h-64 rounded-lg flex items-center justify-center mb-4">
                <Typography
                  color="blue-100"
                  className="text-center"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  [Insert Map Image Here]
                  <br />
                  <span className="text-sm">Holiday Inn Kingston Waterfront</span>
                  <br />
                  <span className="text-sm">2 Princess St, Kingston, ON</span>
                </Typography>
              </div>
              
              <Typography
                color="white"
                className="text-center"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                2 Princess St, Kingston, ON K7L 1A2
              </Typography>
            </div>
            
            <div className="bg-blue-900/30 p-6 rounded-lg backdrop-blur-sm">
              <Typography
                variant="h5"
                color="white"
                className="mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Via Rail Cities
              </Typography>
              <Typography
                color="blue-100"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Kingston is located on the Ontario-Quebec route for ViaRail. Cities that have train stations are shown in the figure below.
              </Typography>
              
              {/* Space for your Via Rail map image */}
              <div className="bg-gray-700/30 h-48 rounded-lg flex items-center justify-center mt-4">
                <Typography
                  color="blue-100"
                  className="text-center"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  <img 
                    src="/image/map.png" 
                    alt="Conference Location Map" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </Typography>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Transportation Info */}
        <div className="mt-16 w-full max-w-4xl bg-gray-800/50 p-8 rounded-lg">
          <Typography
            variant="h4"
            color="white"
            className="mb-6 text-center border-b border-blue-400 pb-2"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            Local Transportation in Kingston
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-900/30 p-4 rounded-lg">
              <Typography
                variant="h5"
                color="white"
                className="mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Kingston Transit
              </Typography>
              <Typography
                color="blue-100"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                The local bus service can take you from transportation hubs to your accommodation and the conference venue.
              </Typography>
            </div>
            
            <div className="bg-blue-900/30 p-4 rounded-lg">
              <Typography
                variant="h5"
                color="white"
                className="mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Taxi & Ride-Sharing
              </Typography>
              <Typography
                color="blue-100"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Taxis and ride-sharing services are readily available throughout Kingston.
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TransportationSection;
