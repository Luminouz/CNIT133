
$(document).ready(function() {
	time();


});

//answer1
function round() {
	var input = parseFloat(document.forms["rounding"].elements["number"].value);
	var decimalsPlaces = (document.forms["rounding"].elements["number"].value).split(".")[1].length;
	var nearestInt = 0;
	var nearestSqrt = 0;
	var nearestTen = 0;
	var nearestHun = 0
	var nearestThou = 0;
	if (decimalsPlaces < 4) {
		alert("Please enter a number with at least 4 decimal places");
	} else {
		nearestInt = (Math.round(input))
		nearestSqrt = (Math.round(Math.sqrt(input)))
		nearestTen = (Math.floor( input * 10 + .5 ) / 10).toFixed(2); 
		nearestHun = (Math.floor( input * 100 + .5 ) / 100).toFixed(3); 
		nearestThou = (Math.floor( input * 1000 + .5 ) / 1000).toFixed(4); 
	}
	document.forms["rounding"].elements["result"].value = "Original number: "+input+"\nRounded to nearest integer: "+nearestInt+"\nSquare root: "+nearestSqrt+ "\nRound to the nearest tenth: "+nearestTen+ "\nRound to the nearest hundred: "+nearestHun+ "\nRound to the nearest thousand: "+nearestThou;

}


//answer2

function searchLetter() {
	var character = document.forms["search"].elements["char"].value;
	var string = document.forms["search"].elements["string"].value;
	var count = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) == character) {
			count++;
		}
	}
	if (count == 0) {
		string = "Search character '"+character+"'' not found in text string!";
	} else {
		string = "Search character '"+character+"' found in text string "+count+" times";
	}

	var newWindow = window.open("","", "width=300,height=100,top=150,left=50");
	newWindow.focus();
	newWindow.document.write("<p>"+string+"</p>");
}


//answer3

window.onload=function() {
'use strict'; 

	dateformat(); 
}; 



function dateformat() {
	'use strict'; 
	
	var date, stringdate, localstringdate, utcstringdate; 
	
	date = new Date();
	stringdate = date.toString();
	localstringdate = date.toLocaleString();
	utcstringdate = date.toUTCString();
	
	document.getElementById("string").value = stringdate; 
	document.getElementById("localestring").value = localstringdate; 
	document.getElementById("UTCstring").value = utcstringdate; 
	
	// code to calculate difference in time zones 
	
	var pstDiffMin, pstDiffHours, estOffset;
	 
	
	pstDiffMin = date.getTimezoneOffset();
	pstDiffHours = pstDiffMin/60; 
	estOffset = pstDiffHours - 3; 

	document.getElementById("PSTdiff").innerHTML = "Time difference between UTC and PST is " + pstDiffMin + " minutes or " + pstDiffHours + " hours."; 
	document.getElementById("ESTdiff").innerHTML = "Time difference between UTC and EST is " + estOffset + " hours."; 
	
}

	

function extract() {
	var phoneString = document.forms["phone"].elements["input"].value;
	phoneString = phoneString.replace("(","");
	phoneString = phoneString.replace(")","");
	phoneString = phoneString.replace("-"," ");
	phoneString = phoneString.split(" ");
	console.log(phoneString);
	document.forms["phone"].elements["area"].value = phoneString[0];
	document.forms["phone"].elements["rest"].value = phoneString[1]+phoneString[2];
}



//answer4

function countFrequency() {
	var string = document.forms["count"].elements["string"].value;
	string = string.toLowerCase();
	var array = [];
	var count = 0;
	var pos = -1;
	for (var i = 0; i < string.length; i++) {
		pos = i;
		while (pos != -1) {
			count++;
			pos = string.indexOf(string.charAt(i), pos+1);
		}
		var item = "Character "+string.charAt(i)+": "+count;
		array.push(item);
	}
	console.log(array);
	document.forms["count"].elements["result"].value = array;
}

//answer extra


function process() {
	'use strict'; 
	
	window.alert("YOU HIT THE BUTTON"); 
}




