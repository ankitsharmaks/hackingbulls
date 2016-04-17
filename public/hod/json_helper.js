/*$.getJSON("hod/json", function(data){
	console.log(data)

	data.document = data.documents;
	delete data.documents 
	$.each(data, function(index, value) {
		value[0]["title"] = value[0].headline.main;
		value[0]["myfield"] = ["snippet", "source","title","lead_paragraph"];
	});

	var responseTextInput = document.getElementById("responseText");
    responseTextInput.innerHTML = JSON.stringify(data);
});*/

exports.convertNewsJsonHodIndexJson = function convertNewsJsonHodIndexJson(data, searchTerm){
	//console.log(data)
	//console.log(data.response.docs)

	data.document = data.response.docs;
	delete data.response

	outputData = {};
	outputData.document = [];

	for(var i=0; i<data.document.length; i++) {
		var doc = {} ;//data.document[i];

		for(key in doc) {
			doc.key = data.document[i].key;
		}
		//console.log("converting data for news: " + doc.headline.main);
		//doc["title"] = doc.headline.main;
		doc.searchTerm = searchTerm;
		doc.myfield = '["snippet", "source","title","lead_paragraph", "searchTerm"]';
		//console.log(value);
		outputData.document.push(doc);
	}
	/*
	$.each(data, function(index, value) {
		value[0]["title"] = value[0].headline.main;
		value[0]["myfield"] = ["snippet", "source","title","lead_paragraph"];	
});*/
	delete data.status;
	delete data.copyright;
	//outputData["document"] = docList;
	return outputData;
	/*var responseTextInput = document.getElementById("responseText");
    responseTextInput.innerHTML = JSON.stringify(data);*/
}

function convertHodSearchJsonToTimeline(stringdata){
	// console.log(stringdata)
	var data = JSON.parse(stringdata);
	var result = {}
	result.title = {"text":{"headline":"Sh*t People Say"}};
	data.events = data.documents;
	result.events = {};

	dates = data.events;
	var i =0;
	var d = new Date(dates[i].pub_date);
	// result.events = [{"start_Date" : {"month": d.getMonth() + 1, "day" : d.getDate(), "year" : d.getFullYear()},
			// "text" : {"headline" : dates[i].title, "text" : dates[i].snippet[0]}}];
	// result = JSON.parse(result)
	//console.log(data.documents)
	dates = data.events;
	delete data.documents
	// console.log(result.events)
	for( var i=0; i<data.events.length; i++) {
		var d = new Date(dates[i].pub_date);
		if (i == 0) {
		result.events = [{"start_Date" : {"month": d.getMonth() + 1, "day" : d.getDate(), "year" : d.getFullYear()},
			"text" : {"headline" : dates[i].title, "text" : dates[i].snippet[0]}}];
		}
		else {
			result.events.push({"start_Date" : {"month": d.getMonth() + 1, "day" : d.getDate(), "year" : d.getFullYear()},
			"text" : {"headline" : dates[i].title, "text" : dates[i].snippet[0]}});
		}
		// data.events[i].start_Date = {"month": d.getMonth() + 1, "day" : d.getDate(), "year" : d.getFullYear()};
		

		// data.events[i].endDate = dates[i].pub_date;
		// data.events[i].text= {"headline" : dates[i].title, "text" : dates[i].snippet[0]};
	}

	console.log(JSON.stringify(result))
}