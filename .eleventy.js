const markdownIt = require("markdown-it");
const hljs = require('highlight.js');
const markdownItAnchor = require("markdown-it-anchor")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("output.css")
  eleventyConfig.addPassthroughCopy("styles/**/*.css");
  eleventyConfig.addPassthroughCopy("stores/**/*.js");
  eleventyConfig.addPassthroughCopy("images/**/*.jpg")
  eleventyConfig.addPassthroughCopy("node_modules/litewind-alpine")
  eleventyConfig.addPassthroughCopy("examples/**/*.js")
  eleventyConfig.addPassthroughCopy("_redirects")

  let options = {
		html: true,
		highlight: function(s, language) {
		  return hljs.highlight(s, { language: language }).value
    }
	};

  eleventyConfig.amendLibrary("md", (markdownit) => markdownit.use(markdownItAnchor))
	eleventyConfig.setLibrary("md", markdownIt(options));
};
