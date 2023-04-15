import type { GatsbyConfig } from "gatsby";

//load env
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

//prismic types
const routes = [
  {
    type: "pag",
    path: "/pag/:uid",
  }
];

const config: GatsbyConfig = {
  siteMetadata: {
    title: `tucker-lemos`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: 'gatsby-source-prismic',
    options: {
      repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
      routes
    },
  }]
};

export default config;
