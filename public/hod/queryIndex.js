function queryIndex(searchkey) {
	var baseURL = "https://api.havenondemand.com/1/api/sync/querytextindex/v1?";
	var urlString = baseURL + "text=" + encodeURIComponent(searchkey) + "&ignore_operators=false&indexes=angel&print_fields=title&promotion=false&sort=date&total_results=true&print=all&apikey=" + "a18b21db-7694-45a3-8741-6c955b545969";
	var callback = function(data, status) {
		if(status == "success") {
			handleSearchResponse(data);
		} else {
			handleSearchError(data);
		}
	}
	$.get(urlString, callback);
}

function handleSearchResponse(responseJSON) {
	// Remove this line below and replace with code to handle the success case
	var jsonString;
	if (responseJSON.documents.length != 0) {
		jsonString = convertHodSearchJsonToTimeline(responseJSON);
		timeline = new TL.Timeline('timeline-embed', jsonString);
		window.dispatchEvent(new Event('resize'));
	} else {
		$('#timeline-goback').click();
		$('#error').show().delay(2500).fadeOut();
	}
}

function handleSearchError(data) {
	//Code to handle the failure case
	alert("error !");
}

function convertHodSearchJsonToTimeline(data){
	// console.log(stringdata)
	//var data = JSON.parse(stringdata);
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
		var url = "";
		if (dates[i].multimedia != null){
		    url = "http://www.nytimes.com/" + dates[i].multimedia[0].url;
		}
		if (i == 0) {
		result.events = [{"start_date" : {"month": d.getMonth() + 1, "day" : d.getDate(), "year" : d.getFullYear()},
			"text" : {"headline" : dates[i].title, "text" : dates[i].snippet[0]},
			"media" : {"url" : url}}];
		}
		else {
			result.events.push({"start_date" : {"month": d.getMonth() + 1, "day" : d.getDate(), "year" : d.getFullYear()},
			"text" : {"headline" : dates[i].title, "text" : dates[i].snippet[0]},
			"media" : {"url" : url}});
		}
		// data.events[i].start_Date = {"month": d.getMonth() + 1, "day" : d.getDate(), "year" : d.getFullYear()};
		

		// data.events[i].endDate = dates[i].pub_date;
		// data.events[i].text= {"headline" : dates[i].title, "text" : dates[i].snippet[0]};
	}
	console.log(JSON.stringify(result))
	return result;
}