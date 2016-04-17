var havenondemand = require('havenondemand');
var client = new havenondemand.HODClient('a18b21db-7694-45a3-8741-6c955b545969', 'v1');

function callAnalyzeSentimentAPI(inputText, delegatecallback) {
	var data = {text: inputText};

	client.call('analyzesentiment', data, function(err, resp, body) {
		response = {};
		response.sentiment = body.aggregate.sentiment;
		response.score = body.aggregate.score;
		delegatecallback.onSentimentResponse(response);
	});
}