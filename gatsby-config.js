const env = require('dotenv');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful starter',
    menuLinks: [
      {
        name:'home',
        link:'/'
      },
      {
        name:'about',
        link:'/about'
      },
      {
        name:'guest book',
        link:'/guest-book'
      },
      {
        name:'portfolio',
        link:'/portfolio'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-recaptcha`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
         "GA-TRACKING_ID", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-functions`,
      options: {
        functionsSrc: `${__dirname}/functions`,
        functionsOutput: `${__dirname}/functions`,
      },
    },
    {
      resolve: 'gatsby-source-mongodb',
      options: {
        dbName: 'GuestBookDB',
        collection: 'guestbooks',
        server: {
          address: 'guestbook-shard-00-01.gbqd3.mongodb.net',
          port: 27017
        },
        auth: {
          user: 'ossian',
          password: 'hucfy3-kobvoc-giqwoD'
        },
        extraParams: {
          ssl: true,
          authSource: 'admin',
          retryWrites: true
        },
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `alata\:100,400,700`,
          `quicksand`
        ],
        display: 'swap'
      }
    }
  ],
}
