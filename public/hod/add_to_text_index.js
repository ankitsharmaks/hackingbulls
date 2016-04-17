var havenondemand = require('havenondemand');
//var jsonfile = require('./file.json');
var client = new havenondemand.HODClient('5799741a-d1cf-4d31-bccd-e67bbd335700', 'v1');

//callAddToIndexAPI(JSON.stringify(jsonfile));

exports.callAddToIndexAPI = function callAddToIndexAPI(jsonObj, delegateCallback) {
	//var data = {json:"{\"document\":[ {\"url\":\"http://www.yahoo.com\",\"snippet\":\"some snippet test\",\"source\":\"some source\", \"title\":\"some long title about this index\"}]}",
				//index:'test'};
	data = {};
	data.json = jsonObj;
	data.index = "hackingbulls"

	console.log(jsonObj)
	console.log("Started call add to index API")
	client.call('addtotextindex', data, function(err, resp, body){
		console.log("addtotextindex callback body:");
		console.log(body);
		/*console.log("addtotextindex callback resp:");
		console.log(resp);*/
		console.log("addtotextindex callback error:");
		console.log(err);
		delegateCallback(body.document);
	});
}