/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          net: false,
          dns: false,
          tls: false,
          fs: false,
          request: false,
        },
      };
    }
    return config;
  },
};

export default nextConfig;
// webpack: (config) => {
//   config.externals = [...config.externals, "bcrypt"];

//   return config;
// },
// serverComponentsExternalPackages: ["bcrypt"],
