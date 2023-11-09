/** @type {import('next').NextConfig} */

const DEV_PAGE_EXTENSIONS = ['page.tsx', 'page.ts', 'page.jsx', 'page.js', "dev.tsx", "dev.jsx"]
const PRD_PAGE_EXTENSIONS = ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
const pageExtensions = process.env.NODE_ENV === "production"
    ? PRD_PAGE_EXTENSIONS
    : DEV_PAGE_EXTENSIONS

const nextConfig = {
    pageExtensions,
}

module.exports = nextConfig
