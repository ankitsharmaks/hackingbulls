var tokenList = require('./tokenList').tokenList;
var crawler = require('../util/crawler');
var json_helper = require('./json_helper');
var addindex = require('./add_to_text_index');

/*
*	Iterate over all the tokens
*/
console.log(json_helper);

for (var i = tokenList.length - 1; i >= 0; i--) {
	var token = tokenList[i];
	console.log("Fetching data for token "+token);
	//var token ="elon musk";
	crawler.crawlNYTimes(token, "20150412", "20150413", function callback(response) {
		//console.log(response);
		console.log("Data from nytimes fetched for token "+token);
		var hodJson = json_helper.convertNewsJsonHodIndexJson(JSON.parse(response));

		setTimeout(function(){
						addindex.callAddToIndexAPI(JSON.stringify(hodJson));
		}, 2000);
	});
};