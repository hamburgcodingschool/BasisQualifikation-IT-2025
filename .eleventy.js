module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/_assets/normalize.css');
  eleventyConfig.addPassthroughCopy('src/_assets/styles.css');
};
