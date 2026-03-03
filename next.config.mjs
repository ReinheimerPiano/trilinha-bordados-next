/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoFromEnv = process.env.NEXT_PUBLIC_BASE_PATH || "";
const repoFromGithub =
  process.env.GITHUB_REPOSITORY?.split("/")?.[1] || "";
const rawBasePath = repoFromEnv || (repoFromGithub ? `/${repoFromGithub}` : "");
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
