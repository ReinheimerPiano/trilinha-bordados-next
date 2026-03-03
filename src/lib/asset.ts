const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const basePath = rawBasePath
  ? `${rawBasePath.startsWith("/") ? rawBasePath : `/${rawBasePath}`}`.replace(
      /\/+$/,
      ""
    )
  : "";

export function asset(path: string): string {
  if (!path) return path;
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (!basePath) return normalizedPath;
  if (normalizedPath === basePath || normalizedPath.startsWith(`${basePath}/`)) {
    return normalizedPath;
  }

  return `${basePath}${normalizedPath}`;
}
