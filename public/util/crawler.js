/**
 * Created by shail on 4/16/16.
 */

/**
 * uncomment the inline code to enable return by user input using create_record.html
 * @param topic
 * @param startDate
 * @param endDate
 */
var http = require('http');

exports.crawlNYTimes = function crawlNYTimes(topic, startDate, endDate, delegateCallback) {
    var apiKey = "0eadf8a8e685079f3f53202a194920f6:10:70223982";
    var baseURL = "api.nytimes.com";
    var pathString = "/svc/search/v2/articlesearch.json?q=";
    pathString = pathString + encodeURIComponent(topic) + "&begin_date="+startDate+"&end_date="+endDate+"&sort=newest&api-key="+apiKey;

    var options = {
        host: baseURL,
        path: pathString
    };
    var jsonResponse = "";

    callback = function(response) {
        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function (chunk) {
           jsonResponse += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function () {
            //console.log(jsonResponse);
            delegateCallback(jsonResponse, topic);
        });
    }
    console.log(options);
    http.get(options, callback);
}