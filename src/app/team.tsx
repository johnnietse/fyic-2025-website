// pages/team.tsx
import TeamMemberCard from '@/components/TeamMemberCard';

const teamMembers = [
    {
        teamName: 'Co-Chairs',
        members: [
            {
                name: 'Flaminia Testa',
                role: 'Co-Chair',
                imageUrl: '/image/pfp.png',
                linkedInUrl: '#',
            },
            {
                name: 'Jaden Belliveau',
                role: 'Co-Chair',
                imageUrl: '/image/pfp.png',
                linkedInUrl: '#',
            },
        ],
    },
    {
        teamName: 'Logistics Team',
        members: [
            {
                name: 'Bronwyn Faulkner',
                role: 'Logistics Director',
                imageUrl: '/image/pfp.png',
                linkedInUrl: '#',
            },
            {
                name: 'Greyson Martyn',
                role: 'Logistics Coordinator',
                imageUrl: '/image/pfp.png',
                linkedInUrl: '#',

            },
            {
                name: 'Sachin Khandelwal',
                role: 'Logistics Coordinator',
                imageUrl: '/image/pfp.png',
                linkedInUrl: '#',

            },
            {
                name: 'Elizabeth Cox',
                role: 'Logistics Coordinator',
                imageUrl: '/image/pfp.png',
                linkedInUrl: '#',

            },

        ],
    },
    // ...more groups
    {
        teamName: 'Relationships Team',
        members: [
          {
            name: 'Abbie Houlding',
            role: 'Relationships Director',
            imageUrl: '/image/pfp.png',
            linkedInUrl: '#',
          },
          {
            name: 'Abby Rath',
            role: 'Relationships Coordinator',
            imageUrl: '/image/pfp.png',
            linkedInUrl: '#',
          },
        ],
    },

    {
        teamName: 'Sponsorships Team',
        members: [
          {
            name: 'Noah Del Rizzo',
            role: 'Sponsorship Director',
            imageUrl: '/image/pfp.png',
            linkedInUrl: '#',
          },

          {
            name: 'Luke Page',
            role: 'Sponsorship Coordinator',
            imageUrl: '/image/pfp.png',
            linkedInUrl: '#',
          },



        ],
    },

    {
        teamName: 'Communications Team',
        members: [
          {
            name: 'Grace Franklin',
            role: 'Communications Director',
            imageUrl: '/image/pfp.png',
            linkedInUrl: '#',
          },
          {
            name: 'Lauren Colaiacovo',
            role: 'Communications Coordinator',
            imageUrl: '/image/pfp.png',
            linkedInUrl: '#',
          },

          {
            name: 'Sydney Sharpe',
            role: 'Communications Coordinator',
            imageUrl: '/image/pfp.png',
            linkedInUrl: '#',
          },

          {
            name: 'Johnnie Tse',
            role: 'Webmaster',
            imageUrl: '/image/pfp.png',
            linkedInUrl: '#',
          },



        ],
    },


    {
        teamName: 'Finance Team',
        members: [
          {
            name: 'Grace Smerchinski',
            role: 'Finance Director',
            imageUrl: '/image/pfp.png',
            linkedInUrl: '#',
          },
        ],
    },

    {
        teamName: 'EDII Team',
        members: [
          {
            name: 'Kalena McCloskey',
            role: 'EDII Director',
            imageUrl: '/image/pfp.png',
            linkedInUrl: '#',
          },
        ],
    },


    

];

  
export default function Team() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>Meet Our Team</h1>
        {teamMembers.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">{section.teamName}</h2>
            <div className="flex justify-center">
              <div
                className={`flex flex-wrap justify-center gap-8 ${
                  section.members.length === 1
                    ? 'grid-cols-1'
                    : section.members.length === 2
                    ? 'grid-cols-2'
                    : 'md:grid-cols-3'
                }`}
              >
                {section.members.map((member, idx) => (
                  <TeamMemberCard key={idx} {...member} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );

    <br>
    </br>
}
  