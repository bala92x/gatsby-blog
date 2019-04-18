module.exports = {
    siteMetadata: {
        title: 'Gatsby Blog',
        author: 'Budavölgyi Bálint'
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/posts`
            }
        },
        'gatsby-transformer-remark'
    ]
}