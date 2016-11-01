// answer1a

$(document).ready(function(){
	'use strict'; 
	
$("#ethnicity").change(function(){
    $("#order").submit();
});

$("#survey").validate({
// Rules for each input item
rules: 
{
	name: { required: true },
	gender: { required: true },
	ethnicity: { required: true },
	age: { required: true }
}, 
messages: {
	 name: {
		required: " Please enter your name. "
	},
	 gender: {
		required: " You must select your gender. "
	},
	ethnicity: {
		required: " You must select your ethnicity. "
	}, 
	age: {
		required: " You must select your age range. "
	}
	
	}, 
	
errorPlacement: function(error, element) {
	
	var item = element.attr("name"); 
	
	switch (item) {
		
		case "name": 
			error.appendTo("#nameError"); 
			break;
		case "gender": 
			error.appendTo("#genderError"); 
			break;  
		case "ethnicity": 
			error.appendTo("#ethnicityError"); 
			break;
		case "age": 
			error.appendTo("#ageError"); 
			break;
		default: 
		  error.appendTo("#error");
		
	}
}
	
});


$("#clear").click(function() {
	var validator = $("#survey").validate(); 
	validator.resetForm("#survey");
}); 


});

// answer1b

function goToNewPage(myForm) {
	'use strict'; 
	
	var mydest = myForm.destList.options[myForm.destList.selectedIndex].value;
	window.location = mydest;
	     
}
// answer2

$(document).ready(function(){
	'use strict'; 

    $("#hideshow").click(function(){
        $("#instructions").slideToggle("slow");
    });
	
	});
	
	
	var states = new Array(new Array()); 
	
	states[0] = ["AL", "Alabama", "Montgomery", "4,779,736"]; 
	states[1] = ["AK", "Alaska", "Juneau", "710,231"]; 
	states[2] = ["AZ", "Arizona", "Phoenix", "6,392,017"]; 
	states[3] = ["AR", "Arkansas", "Little Rock", "2,915,918"]; 
	states[4] = ["CA", "California", "Sacramento", "37,253,956"]; 
	states[5] = ["CO", "Colorado", "Denver", "5,029,196"]; 

function process() {
	'use strict'; 
	
	var _input, input, errormsg, validator; 
	
	validator = 0; 
	
	_input = document.forms["states"].elements["input"].value; 
	
	input = _input.toUpperCase(); 
	
	errormsg = "Please enter correct spelling for state name or abbreviation.";
	
	
	for (var i = 0; i < states.length; i++) {
	
	if ((input == states[i][0]) || (input == states[i][1].toUpperCase())) {
		validator = 1; 
		var index = i; 
		printResults(index); 
		}
	}
	
	if (validator == 0) {
	document.getElementById("error").innerHTML = "<br>" + errormsg; 	
	}
}

function clearError() {
		'use strict'; 
		
		document.getElementById("error").innerHTML = ""; 
		
	}
	
function printResults(index) {
	'use strict'; 
		
		var j = index; 
	
		document.forms["states"].elements["abbr"].value = states[j][0]; 
		document.forms["states"].elements["name"].value = states[j][1]; 
		document.forms["states"].elements["cap"].value = states[j][2];
		document.forms["states"].elements["pop"].value = states[j][3];
}


// answer3

var base, commission; 
base = 200; 
commission = 0.09; 

var counter = new Array(9); 
counter = [0,0,0,0,0,0,0,0,0]; 

$(document).ready(function(){
	'use strict'; 
	
	$("#input").validate({
	rules: 
	{
		sales: {required: true, number: true}
	}, 
	
	errorPlacement: function(error, element) {
    error.appendTo("#error"); // <- the default
	}
	}); 
	
$("#clear").click(function() {
	var validator = $("#input").validate(); 
	validator.resetForm();
	$("#error").html(""); 
}); 

}); 

function process() {
	'use strict'; 
	
	if ($("#input").valid()) { 
	
	var _sales, sales,  _salary, salary; 
	_sales = document.getElementById("sales").value; 
	sales = parseFloat(_sales); 

	_salary = calcSalary(sales); 	
	salary = _salary.toFixed(2); 
	addSalaryRange(salary); 
	document.getElementById("output").innerHTML = salary; 

	}
}

function addSalaryRange(salary) {
	'use strict'; 
	
	var pay = salary; 
	
	switch (true) {
	
	case (pay < 299.99): 
	  
		counter[0] += 1;   
		document.forms["input"].elements["two"].value = counter[0];
		break; 
		
	case (pay < 399.99): 
	  
	  	counter[1] += 1;  
		document.forms["input"].elements["three"].value = counter[1];
		break; 
		
	case (pay < 499.99): 
	  	
		counter[2] += 1;  
		document.forms["input"].elements["fourhundred"].value = counter[2];
		break;
		
	case (pay < 599.99): 
	  	
		counter[3] += 1;  
		document.forms["input"].elements["fivehundred"].value = counter[3];
		break; 
	
	case (pay < 699.99): 
	  
		counter[4] += 1;  
		document.forms["input"].elements["sixhundred"].value = counter[4];
		break; 
		
	case (pay < 799.99): 
	  
	  	counter[5] += 1;  
		document.forms["input"].elements["sevenhundred"].value = counter[5];
		break; 
	
	case (pay < 899.99): 
	  
	  	counter[6] += 1;  
		document.forms["input"].elements["eighthundred"].value = counter[6];
		break; 
	
	case (pay < 999.99): 
	  
	  	counter[7] += 1;  
		document.forms["input"].elements["ninehundred"].value = counter[7];
		break; 
		
	case (pay > 1000.00): 
	  
	  	counter[8] += 1;  
		document.forms["input"].elements["thousand"].value = counter[8];
		break; 
	
	
	default:
		break; 
	
	}
}

function calcSalary(grSales) {
	'use strict'; 
	
	return base + (grSales * commission); 
	
}

// answer4

var count = new Array(10); 
	count = [0,0,0,0,0,0,0,0,0,0]; 
	
var counter = 0; 

$(document).ready(function(){
	'use strict'; 
	
	$("#numberreader").validate({
// Rules for each input item
rules: 
{
inputnum: { 
			required: true, 
			number: true,
			range: [10,100]
   		}
},
messages: {
	 inputnum: {
		range: "You must enter a number between 10 and 100."
	}
}, 

errorPlacement: function(error, element) {
    error.appendTo("#error"); // <- the default
}

});
	
$("#clear").click(function() {
	var validator = $("#numberreader").validate(); 
	validator.resetForm();
	$("#output").html(""); 
}); 

	
	
	
});

function process() {
	'use strict'; 
	
if ($("#numberreader").valid()) { 
	
	document.getElementById("output").innerHTML = ""; 

	if (counter === 10) {
	window.alert("You have already entered 10 numbers"); 	
	}
	
	var number, duplicate; 
	
	duplicate = false; 
	
	number = document.getElementById("inputnum").value; 
	
	for (var i = 0; i < count.length; i++ ) {
		if (number === count[i]) {
		document.getElementById("output").innerHTML = "THIS IS A DUPLICATE"; 
		duplicate = true;
		}
	}
	
	if (duplicate !== true) {

		count[counter] = number; 
		counter += 1; 
	
	}
	
	document.getElementById("result").innerHTML = ("You entered " + number + " as a number. You have entered " + counter + " numbers.");

}

}


// alternative parameter passing - for array? 
//<input type="button" value="Submit" onclick="onLoadConfigPress(document.forms[0].configname.value)" />


// answerExtra

var seats = new Array(10); 
seats = [0,0,0,0,0,0,0,0,0,0]; 

var firstSeat, secondSeat, seat, section; 
firstSeat = 0; 
secondSeat = 0; 
seat = 0; 
section = ""; 


$(document).ready(function(){
	'use strict'; 
//
 $("#reservation").validate({
// Rules for each input item

rules: 
{
	seat: { required: true, number: true, range: [1, 2] }, 

}, 
messages: {
	seat: {
		range: "You must select 1 or 2."
		} 
	}, 
errorPlacement: function(error, element) {
    error.appendTo('#error'); // <- the default
}
});

////
////
////
}); 




function process() {
	'use strict';
	
	if ($("#reservation").valid()) { 
	
	var _choice, choice;

	_choice = document.getElementById("seat").value;  
	choice = parseInt(_choice); 
	
	if ((choice === 1) && (firstSeat === 5) && (secondSeat < 10))  {
		document.getElementById("seat").value = ""; 
		if(window.confirm("The first class section is full. Would you like to be placed in the economy section?")){
		choice = 2; 
		}
		else {
			nextFlight();
		}
		
	}
	
	else if ((choice === 2) && (secondSeat === 10) && (firstSeat < 5)) {
	document.getElementById("seat").value = ""; 	
		if(window.confirm("The second class section is full. Would you like to be placed in the first class section?")){
			choice = 1; 
		} 
		else {
			nextFlight();
		}
	}
	
	else if (((choice === 2) || (choice === 1)) && (secondSeat === 10) && (firstSeat === 5)) {
		nextFlight(); 
	}

	assignSeat(choice); 
  }
}
	


function assignSeat(choice) {
	'use strict'; 
	
		if ((choice === 1) && (firstSeat < 5)) {
		for (var i = 0; i < 5; i++) {
			if (seats[i] !== 0) {
				continue; 
			}
			else if (seats[i] === 0){
				seats[i] = 1; 
				firstSeat = i+1; 
				section = "First Class"; 
				printBoardingPass(firstSeat, section); 
				document.getElementById("seat").value = "";  				
				break;
			}
		}
	}
	
	else if ((choice === 2) && (secondSeat < 10)){
		for (var j = 5; j < 10; j++) {
			if (seats[j] !== 0) {
				continue; 
			}
			else if (seats[j] === 0) { 
				seats[j] = 1;
				secondSeat = j + 1; 
				section = "Economy"; 
				printBoardingPass(secondSeat, section); 
				document.getElementById("seat").value = ""; 
				break;
			}
		}
	}

}



function printBoardingPass(seat, section) {
	'use strict'; 

  window.alert("BOARDING PASS:  Your assigned seat is " + seat + ". You are seated in the " + section + " section of the plane."); 
	
}

function nextFlight() {
	'use strict'; 

  window.alert("Next Flight Leaves in 3 Hours."); 
	
}




