/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}
const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()
module.exports = nextConfig
module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
            config.resolve.fallback = {
                fs: false
            }
        }

        return config;
    }
}
