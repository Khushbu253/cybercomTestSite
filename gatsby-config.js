/**
 * @type {import('gatsby').GatsbyConfig}
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `CybercomWeb`,
    siteUrl: `https://cybercom-test-site.vercel.app/page-data/index/page-data.json`,
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
     "gatsby-plugin-image",
     "gatsby-plugin-sharp",
    // "gatsby-plugin-netlify",
    // "gatsby-plugin-html-attributes",
    // {
    //   resolve: 'gatsby-plugin-html-attributes',
    //   options: {
    //     lang: 'zxx'
    //   },
    //   options: {
    //     apiKey: process.env.API_KEY,
    //   },
    // },
  ],
  
}
