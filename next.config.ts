import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a minimal self-contained server (.next/standalone) for the Docker image.
  output: "standalone",
  // Pin the workspace root to this project — there are sibling lockfiles higher
  // up the tree, and Next would otherwise infer the wrong root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
