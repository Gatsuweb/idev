/** @type {import('next').NextConfig} */

const nextConfig = {
  // Votre configuration actuelle
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Cache-Control", value: "no-store, max-age=0" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
