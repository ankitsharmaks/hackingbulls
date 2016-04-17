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
exports.convertNewsJsonHodIndexJson = function convertNewsJsonHodIndexJson(data){
	//console.log(data)
	//console.log(data.response.docs)

	data.document = data.response.docs;
	delete data.response

	for(var i=0; i<data.document.length; i++) {
		value = data.document[i];
		console.log("converting data for news: "+value.headline.main)
		value["title"] = value.headline.main;
		value["myfield"] = ["snippet", "source","title","lead_paragraph"];
		//console.log(value);
	}
	/*
	$.each(data, function(index, value) {
		value[0]["title"] = value[0].headline.main;
		value[0]["myfield"] = ["snippet", "source","title","lead_paragraph"];
	});*/
	delete data.status;
	delete data.copyright;
	return data;
	/*var responseTextInput = document.getElementById("responseText");
    responseTextInput.innerHTML = JSON.stringify(data);*/
}

function convertHodSearchJsonToTimeline(data){
	data.timeline = data.document;
	delete data.document
}