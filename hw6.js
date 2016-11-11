// answer1

$(document).ready(function(){
	'use strict'; 
	
	//$.validator.addMethod("fourDecimals", function(value, element) {
//    return this.optional(element) || /^\d+(\.\d{0,3})?$/.test(value); 
//}, "Please enter a correct number, format xxxx.xxx");
//	
	$("#floatnum").validate({
	rules: 
	{
		input: {required: true, number: true}
	}, 
	
	errorPlacement: function(error, element) {
    error.appendTo("#error"); // <- the default
	}
	
	}); 
	
	
}); 

	

function process() {
	'use strict'; 
	
	if ($("#floatnum").valid()) { 
	
	var _number, number, roundInt, _sqRt, sqRt, _tenths, tenths, _hundredths, hundredths, _thousandths, thousandths; 

	_number	= document.getElementById("input").value; 
	number = parseFloat(_number); 
	
	roundInt = Math.round(number); 
	_sqRt = Math.sqrt(number); 
	sqRt = Math.round(_sqRt); 
	
	_tenths = Math.floor(number*10 + 0.5)/10; 
	tenths = _tenths.toFixed(1); 
	
	_hundredths = Math.floor(number*100 + 0.5)/100; 
	hundredths = _hundredths.toFixed(2); 
	
	_thousandths = Math.floor(number*1000 + 0.5)/1000; 
	thousandths = _thousandths.toFixed(3); 
	
	
	
	
	
	
	document.getElementById("results1").value = ("The inputted value was " + number + ".\nThe rounded number is " + roundInt + ". \nThe square root rounded to the nearest integer is " + sqRt + ". \nThe floating point number rounded to the nearest tenths position is " + tenths + ". \nThe floating point number rounded to the nearest hundredths position is " + hundredths + ". \nThe floating point number rounded to the nearest thousandths position is " + thousandths + "."); 
	
	}
}



// answer2


function process() {
	'use strict'; 
	
	//window.alert("Hey you clicked me!") 
	
	var text, searchChar, count; 
	
	text = document.getElementById("textinput").value; 
	searchChar = document.getElementById("searchChar").value; 
	count = 0; 
	
	for (var i = 0; i < text.length; i++) {
	
		if (text[i] == searchChar) {
			count += 1; 
		}	
	}
	
	if (count != 0) {
	
	document.getElementById("results").value = ("The character " + searchChar + " was found " + count + " times in the text string."); 
	
	}
	
	else {
	
	var noCharText = "<html>\n";
noCharText += "<head>\n";
noCharText += "<title>Search Character Not Found</title>\n";
noCharText += "</head>\n";
noCharText += "<body>\n";
noCharText += "<div align='center'>\n";
noCharText += "<p><b>Search character not found in text string!</p>\n";
//noCharText += "<input type='button' value='Close Window' onclick='window.close()'>\n";
noCharText += "</div>\n";
noCharText += "</body>\n";
noCharText += "</html>";

	var noSearchChar = window.open("No Char Found", "",
"width=300,height=100,top=350,left=500");


noSearchChar.document.write(noCharText);

noSearchChar.focus();
	
	
	}
	
}

// answer3

$(document).ready(function(){
	'use strict'; 
	
	  $("#phone").mask('(000) 000-0000');
	//$.validator.addMethod("fourDecimals", function(value, element) {
//    return this.optional(element) || /^\d+(\.\d{0,3})?$/.test(value); 
//}, "Please enter a correct number, format xxxx.xxx");
//	
	//$("#tel").validate({
//	rules: 
//	{
//		phone: {required: true, number: true}
//	}, 
//	
//	errorPlacement: function(error, element) {
//    error.appendTo("#error"); // <- the default
//	}
//	
//	}); 	
	
}); 


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


function process() {
	'use strict'; 
	
	//if ($("#tel").valid()) { 
	
	var phone, phoneSplit, localTel;
	
	phone = document.getElementById("phone").value; 
	phoneSplit = phone.split(")");
	localTel = phoneSplit[1].split("-"); 
	
	document.getElementById("areacode").value = phoneSplit[0] + ")"; 
	document.getElementById("telnum").value = localTel[0] + "-" + localTel[1]; 
	
	//}
}

// answer4


function process() {
	'use strict'; 

	var textInput, text, result;
	//var letters = new Array(); 
	var letters = ["A", "B", "C", "D", "E", "F"]; 
	var count = 0; 
	
	textInput = document.getElementById("textinput").value; 
	text = textInput.toUpperCase(); 
	
	// need to use indexOf
	
	for (var i = 0; i < letters.length; i++){
		for (var j = 0; j < text.length; j++) {
			if (text[j] = letters[i]) {
				
			}
		
		
		}
	}
	
	result = text; 
	document.getElementById("result").value = result; 
	
}

// answer extra

function process() {
	'use strict'; 
	
	window.alert("YOU HIT THE BUTTON"); 
}


