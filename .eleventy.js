const embedYouTube = require("eleventy-plugin-youtube-embed");

module.exports = function (eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('src/assets/css');
    eleventyConfig.addPassthroughCopy('src/assets/fonts');
    eleventyConfig.addPassthroughCopy('src/assets/img');
    eleventyConfig.addPassthroughCopy('src/assets/js');
    eleventyConfig.addPlugin(embedYouTube);

    return {
        dir: {
            layouts: '_includes/layouts',
            input: 'src',
            output: '_site',
        },
    }
 };