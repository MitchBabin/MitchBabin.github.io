module.exports = function(eleventyConfig) {

    // eleventyConfig.addCollection("doc", (collection) =>
    //     collection.getFilteredByGlob("documentation/*.md").sort((a, b) => {
    //         return b.position - a.position;
    //     })
    // );

    eleventyConfig.addCollection("doc", function(collection) {
        var temp = collection.getFilteredByTag("documentation");
        return temp.sort((a,b) => {
            return a.data.position - b.data.position;
        })
    });


    eleventyConfig.addPassthroughCopy('Images');
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('admin');
}