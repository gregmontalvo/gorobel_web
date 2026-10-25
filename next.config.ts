import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gorobelgara.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    // Old WordPress-era articles: pointed at the closest new article, or the list.
    const oldPosts: Array<[string, string]> = [
      ["sala-musculacion-llodio-2026", "/blog"],
      ["crossfit-principiantes-amurrio", "/blog/empezar-a-entrenar-desde-cero"],
      ["mejor-gimnasio-llodio", "/blog/empezar-a-entrenar-desde-cero"],
      ["kickboxing-beneficios", "/blog"],
      ["crossfit-open-2026-llodio", "/blog"],
    ];
    return oldPosts.map(([slug, destination]) => ({
      source: `/blog/${slug}`,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
