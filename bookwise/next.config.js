/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions:[
        'page.tsx',
        'api.ts',
        'api.tsx'
    ],
    images: {
        domains: ['images.unsplash.com/', 'lh3.googleusercontent.com', 'avatars.githubusercontent.com']
    },
}

module.exports = nextConfig
