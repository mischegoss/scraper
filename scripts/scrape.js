// Our scraping tools
var request = require("request");
var cheerio = require("cheerio");

//scrape articles from the New YorK Times
var scrape = function(callback) {

  var articlesArr = [];

  request("https://www.drudgereport.com/", function(error, response, html) {

      var $ = cheerio.load(html);


      $("a").each(function(i, element) {

          var result = {};

          // Add the text and href of every link, and save them as properties of the result object
          result.title = $(this).text();
          result.link = $(this).attr("href");

          if (result.title !== "" && result.link !== "") {
              articlesArr.push(result);
          }
      });
      callback(articlesArr);
  });

};

module.exports = scrape;
