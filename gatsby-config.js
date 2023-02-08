/**
 * @type {import('gatsby').GatsbyConfig}
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `CybercomWeb`,
    siteUrl: `http://192.168.0.204:1330/graphql`,
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
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `Bearer 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`,
        },
      },
    },
  ],
}
