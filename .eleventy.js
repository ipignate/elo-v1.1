module.exports = function (eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('src/assets/css');
    eleventyConfig.addPassthroughCopy('src/assets/fonts');
    eleventyConfig.addPassthroughCopy('src/assets/img');
    eleventyConfig.addPassthroughCopy('src/assets/js');

    return {
        dir: {
            layouts: '_includes/layouts',
            input: 'src',
            output: '_site',
        },
    }
 };