/**
 * @type {import('gatsby').GatsbyConfig}
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `CybercomWeb`,
    siteUrl: `https://api.cybercomcreation.com/graphql`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify",
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'zxx'
      },
      options: {
        apiKey: process.env.API_KEY,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.cybercomcreation.com/graphql`,
      
      },
    },
  ],
}
