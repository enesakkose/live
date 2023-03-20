/** @type {import('next').NextConfig} */
const path = require('path');


const nextConfig = {
  experimental: {
    appDir: true,
  },

  sassOptions: {
    includePaths: [path.join(__dirname)],
    prependData: `@import "@/styles/_variables.scss";`
  }

  
}

module.exports = nextConfig
