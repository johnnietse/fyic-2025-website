/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  
};

// module.exports = nextConfig, { 
//   experimental: {
//     optimizeCss: false
//   },

  // next.config.js
module.exports = {
  webpack: (config) => {
    config.optimization.minimize = false
    return config
  },


  eslint: {
    ignoreDuringBuilds: true,
  },

};

  
  // webpack: (config) => {
  //   config.optimization.minimize = false
  //   return config
  // }
  
// };
