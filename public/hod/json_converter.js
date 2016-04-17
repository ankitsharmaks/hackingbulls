exports.convertNewsJsonHodIndexJson = function convertHodSearchJsonToTimeline(data){
    console.log("Parsing : " + data)
    //console.log(data.response.docs)

    data.document = data.response.docs;
    delete data.response

    var docList = [];
    var outputData = {};
    for(var i=0; i<data.document.length; i++) {
        value = data.document[i];
        console.log("converting data for news: "+value.headline.main)
        value["title"] = value.headline.main;
        value["content"] = 
        //value["myfield"] = ["snippet", "source","title","lead_paragraph"];
        data.document[i] = value;
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