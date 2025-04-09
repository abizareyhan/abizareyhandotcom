/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://abizareyhan.com",
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    additionalPaths: async (config) => {
        // Add blog post URLs
        const blogPosts = [
            "/why-silent-quick-fixes-hurt-your-team",
            "/google-play-in-app-updates-step-by-step",
            "/dynamic-app-icon-on-android",
            "/hide-and-seek-with-search-engine-using-robots-txt",
            "/understanding-the-important-of-accessibility",
            "/refactor-isnt-always-the-right-answer",
            "/the-tool-obsession-killing-tech-talent",
        ].map((path) => ({
            loc: `https://blog.abizareyhan.com${path}`,
            changefreq: "daily",
            priority: 0.7,
            lastmod: new Date().toISOString(),
        }));

        return blogPosts;
    },
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
    },
};
