module.exports = {
    siteUrl: 'https://www.nallipop.com',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://www.nallipop.com/server-sitemap.xml',
        ],
    },
}
