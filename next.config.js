/** @type {import('next').NextConfig} */
const path = require('path');
const postcss = require('postcss')


const nextConfig = {
  //swcMinify: true,
  reactStrictMode: true,

  experimental: {
    appDir: true,
  },

  //image base url
  images: {
    domains: ['www.flashscore.com'],
  },
  
  //include scss variables each scss file
  sassOptions: {
    includePaths: [path.join(__dirname)],
    prependData: `@import "@/styles/_variables.scss";`
  },

  //includes autoprixer
  postcssLoaderOptions: {
    implementation: postcss,
    postcssOptions: {
      plugins: ['autoprefixer']
    }
  }
}

module.exports = nextConfig
