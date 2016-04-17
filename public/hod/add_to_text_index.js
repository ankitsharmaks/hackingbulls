var havenondemand = require('havenondemand');
var client = new havenondemand.HODClient('7dd39070-b873-4c60-8f5d-6a8c8508a966', 'v1');

exports.callAddToIndexAPI = function callAddToIndexAPI(jsonObj) {
	var data = {json:jsonObj,
				index:'hackingbulls'};
	/*var data = {};
	data['json'] = jsonObj;
	data.index = 'indextest';*/

	console.log(JSON.stringify(data))
	console.log("Started call add to index API")
	client.call('addtotextindex', data, function(err, resp, body){
		console.log("addtotextindex callback body:");
		console.log(body);
		console.log("addtotextindex callback resp:");
		console.log(resp);
		console.log("addtotextindex callback error:");
		console.log(err);
	});
}