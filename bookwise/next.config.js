/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions:[
        'page.tsx',
        'api.ts',
        'api.tsx'
    ],
    images: {
        domains: ['*']
    },
}

module.exports = nextConfig
