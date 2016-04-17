function queryIndex(searchkey) {
	var baseURL = "https://api.havenondemand.com/1/api/sync/querytextindex/v1?";
	var urlString = baseURL + "text=" + encodeURIComponent(searchkey) + "&ignore_operators=false&indexes=angel&print_fields=title&promotion=false&sort=date&total_results=true&apikey=" + "a18b21db-7694-45a3-8741-6c955b545969";
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
	var jsonString = "{\r\n    \"title\": {\r\n        \"media\": {\r\n          \"url\": \"\/\/www.flickr.com\/photos\/tm_10001\/2310475988\/\",\r\n          \"caption\": \"Whitney Houston performing on her My Love is Your Love Tour in Hamburg.\",\r\n          \"credit\": \"flickr\/<a href=\'http:\/\/www.flickr.com\/photos\/tm_10001\/\'>tm_10001<\/a>\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"Whitney Houston<br\/> 1963 - 2012\",\r\n          \"text\": \"<p>Houston\'s voice caught the imagination of the world propelling her to superstardom at an early age becoming one of the most awarded performers of our time. This is a look into the amazing heights she achieved and her personal struggles with substance abuse and a tumultuous marriage.<\/p>\"\r\n        }\r\n    },\r\n    \"events\": [\r\n      {\r\n        \"media\": {\r\n          \"url\": \"{{ static_url }}\/img\/examples\/houston\/family.jpg\",\r\n          \"caption\": \"Houston\'s mother and Gospel singer, Cissy Houston (left) and cousin Dionne Warwick.\",\r\n          \"credit\": \"Cissy Houston photo:<a href=\'http:\/\/www.flickr.com\/photos\/11447043@N00\/418180903\/\'>Tom Marcello<\/a><br\/><a href=\'http:\/\/commons.wikimedia.org\/wiki\/File%3ADionne_Warwick_television_special_1969.JPG\'>Dionne Warwick: CBS Television via Wikimedia Commons<\/a>\"\r\n        },\r\n        \"start_date\": {\r\n          \"month\": \"8\",\r\n          \"day\": \"9\",\r\n          \"year\": \"1963\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"A Musical Heritage\",\r\n          \"text\": \"<p>Born in New Jersey on August 9th, 1963, Houston grew up surrounded by the music business. Her mother is gospel singer Cissy Houston and her cousins are Dee Dee and Dionne Warwick.<\/p>\"\r\n        }\r\n      },\r\n      {\r\n        \"media\": {\r\n          \"url\": \"https:\/\/youtu.be\/fSrO91XO1Ck\",\r\n          \"caption\": \"\",\r\n          \"credit\": \"<a href=\\\"http:\/\/unidiscmusic.com\\\">Unidisc Music<\/a>\"\r\n        },\r\n        \"start_date\": {\r\n          \"year\": \"1978\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"First Recording\",\r\n          \"text\": \"At the age of 15 Houston was featured on Michael Zager\'s song, Life\'s a Party.\"\r\n        }\r\n      },\r\n      {\r\n        \"media\": {\r\n          \"url\": \"https:\/\/youtu.be\/_gvJCCZzmro\",\r\n          \"caption\": \"A young poised Whitney Houston in an interview with EbonyJet.\",\r\n          \"credit\": \"EbonyJet\"\r\n        },\r\n        \"start_date\": {\r\n          \"year\": \"1978\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"The Early Years\",\r\n          \"text\": \"As a teen Houston\'s credits include background vocals for Jermaine Jackson, Lou Rawls and the Neville Brothers. She also sang on Chaka Khan\'s, \'I\'m Every Woman,\' a song which she later remade for the <i>Bodyguard<\/i> soundtrack which is the biggest selling soundtrack of all time. It sold over 42 million copies worldwide.\"\r\n        }\r\n      },\r\n      {\r\n        \"media\": {\r\n          \"url\": \"https:\/\/youtu.be\/H7_sqdkaAfo\",\r\n          \"caption\": \"I\'m Every Women as performed by Whitney Houston.\",\r\n          \"credit\": \"Arista Records\"\r\n        },\r\n        \"start_date\": {\r\n          \"year\": \"1978\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"Early Album Credits\",\r\n          \"text\": \"As a teen Houston\'s credits include background vocals for Jermaine Jackson, Lou Rawls and the Neville Brothers. She also sang on Chaka Khan\'s, \'I\'m Every Woman,\' a song which she later remade for the <i>Bodyguard<\/i> soundtrack which is the biggest selling soundtrack of all time. It sold over 42 million copies worldwide.\"\r\n        }\r\n      },\r\n      {\r\n        \"media\": {\r\n          \"url\": \"https:\/\/youtu.be\/A4jGzNm2yPI\",\r\n          \"caption\": \"Whitney Houston and Clive Davis discussing her discovery and her eponymous first album.\",\r\n          \"credit\": \"Sony Music Entertainment\"\r\n        },\r\n        \"start_date\": {\r\n          \"year\": \"1983\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"Signed\",\r\n          \"text\": \"Houston is signed to Arista Records after exec Clive Davis sees her performing on stage with her mother in New York.\"\r\n        }\r\n      },\r\n      {\r\n        \"media\": {\r\n          \"url\": \"https:\/\/youtu.be\/m3-hY-hlhBg\",\r\n          \"caption\": \"The \'How Will I Know\' video showcases the youthful energy that boosted Houston to stardom.\",\r\n          \"credit\": \"Arista Records Inc.\"\r\n        },\r\n        \"start_date\": {\r\n          \"year\": \"1985\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"Debut\",\r\n          \"text\": \"Whitney Houston\'s self titled first release sold over 12 million copies in the U.S. and included the hit singles \'How Will I Know,\' \'You Give Good Love,\' \'Saving All My Love For You\' and \'Greatest Love of All.\'\"\r\n        }\r\n      },\r\n      {\r\n        \"media\": {\r\n          \"url\": \"https:\/\/youtu.be\/v0XuiMX1XHg\",\r\n          \"caption\": \"Dionne Warwick gleefully announces cousin, Whitney Houston, the winner of the Best Female Pop Vocal Performance for the song Saving All My Love.\",\r\n          \"credit\": \"<a href=\'http:\/\/grammy.org\'>The Recording Academy<\/a>\"\r\n        },\r\n        \"start_date\": {\r\n          \"year\": \"1986\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"\'The Grammys\'\",\r\n          \"text\": \"In 1986 Houston won her first Grammy for the song Saving All My Love. In total she has won six Grammys, the last of which she won in 1999 for It\'s Not Right But It\'s Okay.\"\r\n        }\r\n      },\r\n      {\r\n        \"media\": {\r\n          \"url\": \"https:\/\/youtu.be\/eH3giaIzONA\",\r\n          \"caption\": \"I Wanna Dance With Somebody\",\r\n          \"credit\": \"Arista Records Inc.\"\r\n        },\r\n        \"start_date\": {\r\n          \"year\": \"1987\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"\'Whitney\'\",\r\n          \"text\": \"Multiplatinum second album sells more than 20 million copies worldwide. With \'Whitney\', Houston became the first female artist to produce four number 1 singles on one album including \\\"I Wanna Dance With Somebody,\' \'Didn\'t We Almost Have It All,\' \'So Emotional\' and \'Where Do Broken Hearts Go.\'\"\r\n        }\r\n      },\r\n      {\r\n        \"media\": {\r\n          \"url\": \"https:\/\/youtu.be\/96aAx0kxVSA\",\r\n          \"caption\": \"\\\"One Moment In Time\\\" - Theme song to the 1988 Seoul Olympics\",\r\n          \"credit\": \"Arista Records Inc.\"\r\n        },\r\n        \"start_date\": {\r\n          \"year\": \"1988\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"\\\"One Moment In Time\\\"\",\r\n          \"text\": \"The artist\'s fame continues to skyrocket as she records the theme song for the Seoul Olympics, \'One Moment In Time.\'\"\r\n        }\r\n      },\r\n      {\r\n        \"media\": {\r\n          \"url\": \"\",\r\n          \"caption\": \"\",\r\n          \"credit\": \"\"\r\n        },\r\n        \"start_date\": {\r\n          \"year\": \"1989\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"Bobby Brown\",\r\n          \"text\": \"Houston and Brown first meet at the Soul Train Music Awards. In an interview with Rolling Stone Magazine, Houston admitted that it was not love at first sight. She turned down Brown\'s first marriage proposal but eventually fell in love with him.\"\r\n        }\r\n      },\r\n      {\r\n        \"media\": {\r\n          \"url\": \"https:\/\/youtu.be\/5Fa09teeaqs\",\r\n          \"caption\": \"CNN looks back at Houston\'s iconic performance of the national anthem at Superbowl XXV.\",\r\n          \"credit\": \"CNN\"\r\n        },\r\n        \"start_date\": {\r\n          \"year\": \"1991\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"Super Bowl\",\r\n          \"text\": \"Houston\'s national anthem performance captures the hearts and minds of Americans ralllying behind soldiers in the Persian Guf War.\"\r\n        }\r\n      },\r\n      {\r\n        \"media\": {\r\n          \"url\": \"https:\/\/youtu.be\/h9rCobRl-ng\",\r\n          \"caption\": \"\\\"Run To You\\\" from the 1992 \\\"Bodyguard\\\" soundtrack..\",\r\n          \"credit\": \"Arista Records\"\r\n        },\r\n        \"start_date\": {\r\n          \"year\": \"1992\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"\\\"The Bodyguard\\\"\",\r\n          \"text\": \"Houston starred opposite Kevin Costner in the box office hit, The Bodyguard. The soundtrack to the movie sold over 44 million copies worldwide  garnering 3 Grammy\'s for the artist.\"\r\n        }\r\n      },\r\n      {\r\n        \"media\": {\r\n          \"url\": \"https:\/\/youtu.be\/5cDLZqe735k\",\r\n          \"caption\": \"Bobby Brown performing \\\"My Prerogrative,\\\" from his \\\"Don\'t be Cruel\\\" solo album. Bobby Brown first became famous with the R&B group, New Edition.\",\r\n          \"credit\": \"\"\r\n        },\r\n        \"start_date\": {\r\n          \"year\": \"1992\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"Married Life\",\r\n          \"text\": \"<p>After three years of courtship, Houston marries New Edition singer Bobby Brown. Their only child Bobbi Kristina Brown was born in 1993.<\/p><p>In 2003 Brown was charged with domestic violence after police responded to a domestic violence call. Houston and Brown were featured in the reality show, \\\"Being bobby Brown,\\\" and divorced in 2007.<\/p>\"\r\n        }\r\n      },\r\n      {\r\n        \"media\": {\r\n          \"url\": \"\/\/upload.wikimedia.org\/wikipedia\/commons\/d\/dd\/ABC_-_Good_Morning_America_-_Diane_Sawyer.jpg\",\r\n          \"caption\": \"Diane Sawyer \",\r\n          \"credit\": \"flickr\/<a href=\'http:\/\/www.flickr.com\/photos\/23843757@N00\/194521206\/\'>Amanda Benham<\/a>\"\r\n        },\r\n        \"start_date\": {\r\n          \"year\": \"2002\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"Crack is Whack\",\r\n          \"text\": \"<p>Houston first publicly admitted to drug use in an interview with Diane Sawyer. The singer coined the term \\\"Crack is Whack,\\\" saying that she only used more expensive drugs.<\/p>\"\r\n        }\r\n      },\r\n      {\r\n        \"media\": {\r\n          \"url\": \"https:\/\/youtu.be\/KLk6mt8FMR0\",\r\n          \"caption\": \"Addiction expert, Dr. Drew, talks about Whitney\'s death and her struggle with addiction.\",\r\n          \"credit\": \"CNN\"\r\n        },\r\n        \"start_date\": {\r\n          \"year\": \"2004\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"Rehab\",\r\n          \"text\": \"<p>Houston entered rehab several times beginning in 2004. She declared herself drug free in an interview with Oprah Winfrey in 2009 but returned to rehab in 2011.<\/p>\"\r\n        }\r\n      },\r\n      {\r\n        \"media\": {\r\n          \"url\": \"\",\r\n          \"caption\": \"\",\r\n          \"credit\": \"\"\r\n        },\r\n        \"start_date\": {\r\n          \"year\": \"2005\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"Being Bobby Brown\",\r\n          \"text\": \"<p>Being Bobby Brown was a reality show starring Brown and wife Whitney Houston. Houston refused to sign for a second season. A clip of her telling Brown to \\\"Kiss my ass,\\\" became a running gag on The Soup.<\/p>\"\r\n        }\r\n      },\r\n      {\r\n        \"media\": {\r\n          \"url\": \"\",\r\n          \"caption\": \"\",\r\n          \"credit\": \"\"\r\n        },\r\n        \"start_date\": {\r\n          \"year\": \"2010\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"A Rocky Comeback\",\r\n          \"text\": \"<p>Houston\'s comeback tour is cut short due to a diminished voice damaged by years of smoking. She was reportedly devastated at her inability to perform like her old self.<\/p>\"\r\n        }\r\n      },\r\n      {\r\n        \"media\": {\r\n          \"url\": \"\/\/upload.wikimedia.org\/wikipedia\/commons\/0\/0f\/Flickr_Whitney_Houston_performing_on_GMA_2009_4.jpg\",\r\n          \"caption\": \"Houston, performing on Good Morning America in 2009.\",\r\n          \"credit\": \"<a href=\'http:\/\/commons.wikimedia.org\/wiki\/File%3AFlickr_Whitney_Houston_performing_on_GMA_2009_4.jpg\'>Asterio Tecson<\/a> via Wikimedia\"\r\n        },\r\n        \"start_date\": {\r\n          \"month\": \"2\",\r\n          \"day\": \"11\",\r\n          \"year\": \"2012\"\r\n        },\r\n        \"text\": {\r\n          \"headline\": \"Whitney Houston<br\/> 1963-2012\",\r\n          \"text\": \"<p>Houston, 48, was discovered dead at the Beverly Hilton Hotel on  on Feb. 11, 2012. She is survived by her daughter, Bobbi Kristina Brown, and mother, Cissy Houston.<\/p>\"\r\n        }\r\n      }\r\n    ]\r\n}";
	var jsonStringObj = JSON.parse(jsonString);
	timeline = new TL.Timeline('timeline-embed',
		jsonStringObj);
	window.dispatchEvent(new Event('resize'));
	//alert(JSON.stringify(responseJSON));
}

function handleSearchError(data) {
	//Code to handle the failure case
	alert("error !");
}