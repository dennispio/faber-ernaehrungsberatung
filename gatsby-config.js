/* eslint-disable */
module.exports = {
	siteMetadata: {
		siteUrl: `https://www.ernaehrungsberatung-faber.de/`,
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sass",
		{
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-145257759-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
      },
    },
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/static/img`,
				name: "uploads",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/pages`,
				name: "pages",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/img`,
				name: "images",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-relative-images",
						options: {
							name: "uploads",
						},
					},
					{
						resolve: "gatsby-remark-images",
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048,
						},
					},
					{
						resolve: "gatsby-remark-copy-linked-files",
						options: {
							destinationDir: "static",
						}
					}
				],
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				exclude: ["/danke/", `/newsletter/`],
				query: `
					{
						site {
							siteMetadata {
								siteUrl
							}
						}
	
						allSitePage {
							edges {
								node {
									path
								}
							}
						}
				}`
			}
		},
		{
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.ernaehrungsberatung-faber.de/',
        sitemap: 'https://www.ernaehrungsberatung-faber.de/',
        policy: [{ userAgent: '*', allow: '/', disallow: ['/danke', '/newsletter'] }]
      }
    },
		{
			resolve: "gatsby-plugin-netlify-cms",
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
		{
      resolve: 'gatsby-plugin-purgecss',
      options: {
        ignore: [
          '/node_modules/slick-carousel/slick/slick.css',
          '/node_modules/slick-carousel/slick/slick-theme.css'
        ]
      }
    },		"gatsby-plugin-netlify", // make sure to keep it last in the array
	],
}
