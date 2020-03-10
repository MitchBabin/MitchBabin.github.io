module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('Images');
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('admin');
}