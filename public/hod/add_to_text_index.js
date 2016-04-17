var havenondemand = require('havenondemand');
//var jsonfile = require('./file.json');
var client = new havenondemand.HODClient('a18b21db-7694-45a3-8741-6c955b545969', 'v1');

//callAddToIndexAPI(JSON.stringify(jsonfile));

exports.callAddToIndexAPI = function callAddToIndexAPI(jsonObj) {
	var data = {"json":jsonObj,
				"index":'hackingbulls'};
	/*data = {};
	data.json = jsonObj;
	data.index = "hackingbulls"*/

	console.log(JSON.stringify(data))
	console.log("Started call add to index API")
	client.call('addtotextindex', data, function(err, resp, body){
		console.log("addtotextindex callback body:");
		console.log(body);
		/*console.log("addtotextindex callback resp:");
		console.log(resp);*/
		console.log("addtotextindex callback error:");
		console.log(err);
	});
}