module.exports = {
    siteMetadata: {
        siteUrl: "https://example.com",
        siteName: "Example",
    },
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: "./content/blog/",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "assets",
                path: "./content/assets/",
            },
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                path: "./content/blog/",
            },
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 1200,
                            linkImagesToOriginal: false,
                            showCaptions: ["title"]
                        },
                    },
                ],
                defaultLayouts: {
                    default: require.resolve("./src/templates/BlogPost.js"),
                },
            },
        },
    ],
}
