/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  //swcMinify: true

  experimental: {
    appDir: true,
  },

  //image base url
  /*images: {
    
  },*/
  
  //include scss variables each scss file
  sassOptions: {
    includePaths: [path.join(__dirname)],
    prependData: `@import "@/styles/_variables.scss";`
  },

}

module.exports = nextConfig
