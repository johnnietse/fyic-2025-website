"use client";

import { Typography } from "@material-tailwind/react";

export const runtime = "edge";

export function HotelInfoSection() {
  return (
    <div className="relative w-full bg-[url('/image/accommodation-bg-blur.png')] bg-cover bg-center bg-no-repeat">
      {/* Overlay for better text readability */}
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
            Accommodation Details
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mx-auto max-w-3xl"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            All conference delegates will be staying at the Holiday Inn Kingston Waterfront
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Hotel Information */}
          <div className="space-y-6">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Typography
                variant="h3"
                color="white"
                className="mb-4 border-b border-white/30 pb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Hotel Information
              </Typography>
              
              <div className="space-y-4">
                <div>
                  <Typography
                    variant="h6"
                    color="white"
                    className="mb-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    Address
                  </Typography>
                  <Typography
                    color="white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    2 Princess Street<br />
                    Kingston, Ontario<br />
                    K7L 1A2 Canada
                  </Typography>
                </div>
                
                <div>
                  <Typography
                    variant="h6"
                    color="white"
                    className="mb-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    Front Desk
                  </Typography>
                  <Typography
                    color="white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    +1 (613) 549-8400
                  </Typography>
                </div>
                
                <div>
                  <Typography
                    variant="h6"
                    color="white"
                    className="mb-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    Accessibility
                  </Typography>
                  <Typography
                    color="white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    Accessible rooms are available. Delegate applications will include space for accessibility requests and requests for alternate rooming preferences.
                  </Typography>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Typography
                variant="h3"
                color="white"
                className="mb-4 border-b border-white/30 pb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Room Details
              </Typography>
              
              <Typography
                color="white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Rooming assignments will be 4 delegates per room. Each room has 2 queen-size beds. Rooming preferences and accessibility requests in your registration will be accommodated to the fullest extent possible. Delegates who have requested their own room or a room with only two people will receive invoices for additional payment for their own room.
              </Typography>
            </div>
          </div>
          
          {/* Right Column - Check-in/Check-out Information */}
          <div className="space-y-6">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Typography
                variant="h3"
                color="white"
                className="mb-4 border-b border-white/30 pb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Check-In
              </Typography>
              
              <div className="space-y-4">
                <div>
                  <Typography
                    variant="h6"
                    color="white"
                    className="mb-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    Time
                  </Typography>
                  <Typography
                    color="white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    3:00 PM Friday, November 7
                  </Typography>
                </div>
                
                <div>
                  <Typography
                    variant="h6"
                    color="white"
                    className="mb-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    Process
                  </Typography>
                  <Typography
                    color="white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    A member of the FYIC 2025 Executive Team will greet delegates at the hotel for conference check-in and will be happy to answer any questions and concerns at the time of check-in.
                  </Typography>
                </div>
                
                <div>
                  <Typography
                    variant="h6"
                    color="white"
                    className="mb-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    Early/Late Arrival
                  </Typography>
                  <Typography
                    color="white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    If arriving before 12:00 PM or after 6:00 PM, please reach out to the FYIC Executive Team at (807) 630-7454.
                  </Typography>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Typography
                variant="h3"
                color="white"
                className="mb-4 border-b border-white/30 pb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Check-Out
              </Typography>
              
              <div className="space-y-4">
                <div>
                  <Typography
                    variant="h6"
                    color="white"
                    className="mb-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    Time
                  </Typography>
                  <Typography
                    color="white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    11:00 AM (latest)
                  </Typography>
                </div>
                
                <div>
                  <Typography
                    variant="h6"
                    color="white"
                    className="mb-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    Luggage Storage
                  </Typography>
                  <Typography
                    color="white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    A locked room will be available on-campus for delegates to store their bags during the Sunday conference events.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </section>

      <br>
      </br>
      <br>
      </br>
    
    </div>
  );
}

export default HotelInfoSection;
