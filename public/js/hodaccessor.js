var havenondemand = require('havenondemand');
var client = new havenondemand.HODClient('5799741a-d1cf-4d31-bccd-e67bbd335700', 'v1');

callAddToIndexAPI();

function callAddToIndexAPI() {
	var text = 'I love puppies';
	var data = {text: text};

	client.call('analyzesentiment', data, function(err, resp, body){
	var sentiment = body.aggregate.sentiment;
	var score = body.aggregate.score;
	console.log(text + " | " + sentiment + " | " + score);
	});
}