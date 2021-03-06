
var request = require("request");
var cheerio = require("cheerio");


var scrape = function(callback) {

  var articlesArr = [];

  request("https://www.drudgereport.com/", function(error, response, html) {

      var $ = cheerio.load(html);


      $("a").each(function(i, element) {

          var result = {};   
          result.title = $(this).text();
          result.link = $(this).attr("href");

          if (result.title !== "" && result.link !== "" && result.title.toUpperCase !== result.title) {
              articlesArr.splice(0, 0, result);
          }
      });
      callback(articlesArr);
  });

};

module.exports = scrape;
