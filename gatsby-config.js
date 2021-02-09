const env = require('dotenv');

module.exports = {
  plugins: [
    `gatsby-plugin-recaptcha`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
         process.env.GA_TRACKING_ID,
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
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
