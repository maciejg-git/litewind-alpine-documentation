const markdownIt = require("markdown-it");
const hljs = require('highlight.js');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("output.css")
  eleventyConfig.addPassthroughCopy("alpine-components/**/*.js");
  eleventyConfig.addPassthroughCopy("styles/**/*.css");
  eleventyConfig.addPassthroughCopy("stores/**/*.js");

  let options = {
		html: true,
		highlight: function(s, language) {
		  return hljs.highlight(s, { language: language }).value
    }
	};

	eleventyConfig.setLibrary("md", markdownIt(options));
};
