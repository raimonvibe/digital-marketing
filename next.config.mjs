import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // There is a stray package-lock.json in the home directory above this project;
  // pin the root so Turbopack does not walk up and adopt it.
  turbopack: { root: dirname(fileURLToPath(import.meta.url)) },

  // Front-end only: no server, no database. Everything renders to flat files.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
