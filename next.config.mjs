// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**",
//       },
//     ],
//   },

  
// };

// // module.exports = nextConfig, { 
// //   experimental: {
// //     optimizeCss: false
// //   },

//   // next.config.js
// module.exports = {
//   webpack: (config) => {
//     config.optimization.minimize = false
//     return config
//   },

//   experimental: {
//     optimizePackageImports: ['@material-tailwind/react']
//   },

//   typescript: {
//     ignoreBuildErrors: true,
//   },

//   eslint: {
//     ignoreDuringBuilds: true,
//   },

// };

  
//   // webpack: (config) => {
//   //   config.optimization.minimize = false
//   //   return config
//   // }
  
// // };



// next.config.mjs
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

import { createRequire } from 'module';

// Create a require function for use in ESM
const require = createRequire(import.meta.url);


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
  webpack: (config) => {
    config.optimization.minimize = false;
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      fs: false,
      path: false,
    };
    return config;
  },
  experimental: {
    optimizePackageImports: ['@material-tailwind/react']
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Add this to fix the lockfile warning
  outputFileTracingRoot: process.cwd(),

};

// Cloudflare development platform setup (development only)
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default nextConfig;
