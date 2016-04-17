function queryIndex(searchkey) {
	var baseURL = "https://api.havenondemand.com/1/api/sync/querytextindex/v1?";
	var urlString = baseURL + "text=" + encodeURIComponent(searchkey) + "&ignore_operators=false&indexes=news_eng&print_fields=title&promotion=false&sort=date&total_results=true&apikey=" + "5799741a-d1cf-4d31-bccd-e67bbd335700";
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
	alert(JSON.stringify(responseJSON));
}

function handleSearchError(data) {
	//Code to handle the failure case
	alert("error !");
}