var havenondemand = require('havenondemand');
var client = new havenondemand.HODClient('a18b21db-7694-45a3-8741-6c955b545969', 'v1');

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