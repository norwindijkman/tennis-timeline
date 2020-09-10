module.exports = {
  siteMetadata: {
    title: "Portfolio v3",
    description: "Personal WebSite",
    author: "@amanhimself",
    siteUrl: `http://www.amanhimself.me`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Planning tennis",
        short_name: "Planning",
        start_url: "/",
        background_color: "#EBEBEB",
        theme_color: "#EBEBEB",
        display: "minimal-ui",
        icon: `src/assets/favicon.ico`,
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`
    }
  ]
};
