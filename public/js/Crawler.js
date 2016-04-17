/**
 * Created by shail on 4/16/16.
 */

/**
 * uncomment the inline code to enable return by user input using create_record.html
 * @param topic
 * @param startDate
 * @param endDate
 */

function crawlNYTimes(topic, startDate, endDate)
{
    //var topic = document.getElementById("topic").value;
        //.value().split(' ').join('+');
    //var startDate = document.getElementById("datePicker1").value;
    //var endDate = document.getElementById("datePicker2").value;
    var apiKey = "0eadf8a8e685079f3f53202a194920f6:10:70223982";
    var NYTApi = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
    NYTApi = NYTApi+topic+"&begin_date="+startDate+"&end_date="+endDate+"&sort=newest&api-key="+apiKey;
    var responseJson = httpGet(NYTApi);
    //var responseTextInput = document.getElementById("responseText");
    //responseTextInput.setAttribute("value", responseJson);
    return responseJson;
}

function httpGet(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send();
    return xmlHttp.responseText;
}