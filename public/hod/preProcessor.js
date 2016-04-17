var tokenList = require('./tokenList').tokenList;
var crawler = require('../util/crawler');
/*
*	Iterate over all the tokens
*/
for (var i = tokenList.length - 1; i >= 0; i--) {
	var token = tokenList[i];
	crawler.crawlNYTimes(token, "20150410", "20150413", function callback(response) {
		console.log(response);
		// Call function to add to index
	});
};