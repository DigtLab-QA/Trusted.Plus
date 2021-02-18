module.exports = {
  siteMetadata: {
    title: `Инструкция пользователя TRUSTED.PLUS`,
    description: `Start your new blog using markdown files`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
          extensions: [`.mdx`, `.md`],
          // globalScope: `
          //   import *  as Components from 'rebass'
          //   export default { 
          //     ...Components 
          //   }
          // `,
          gatsbyRemarkPlugins:[
            {
              resolve: `gatsby-remark-classes`,
              options: {
                classMap: {
                  "heading[depth=1]": "mystyle1",
                  "heading[depth=2]": "mystyle2",
                  "paragraph": "text-base"
                }
              }
            },
            `gatsby-remark-relative-images`,
        {
          resolve: `gatsby-remark-images`,
          options: {
           showCaptions: true,

          },
      },
          ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    
  ],
}
