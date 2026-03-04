/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const normalizedBasePath = rawBasePath
  ? `${rawBasePath.startsWith("/") ? rawBasePath : `/${rawBasePath}`}`.replace(
      /\/+$/,
      ""
    )
  : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? normalizedBasePath : "",
  assetPrefix: isProd ? normalizedBasePath : "",
  images: { unoptimized: true },
};

export default nextConfig;
