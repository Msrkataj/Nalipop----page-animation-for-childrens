module.exports = {
    siteUrl: 'https://nallipop.pl',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://nallipop.pl/server-sitemap.xml',
        ],
    },
}
