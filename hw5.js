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


function goToNewPage(myForm) {
	var mydest = myForm.destList.options[myForm.destList.selectedIndex].value;
	window.location = mydest;
}


function stateInfo() {
	var x = (document.getElementById("part3answer").value).toUpperCase();
	var ab = ["AL", "AK", "AZ", "AR", "CA", "CO"];
	var full = ['ALABAMA', 'ALASKA', 'ARIZONA', 'ARKANSAS', 'CALIFORNIA', 'COLORADO'];
	var result = [['Alabama','Montgomery', '4,779,736'], ['Alaska', 'Juneau', '710,231'], ['Arizona','Phoenix','6,392,017'], ['Arkansas', 'Little Rock', '2,915,918'], ['California', 'Sacramento', '37,253,956'], ['Colorado','Denver','5,029,196']];

	for (var i = 0; i < 5; i++) {
		if (x == ab[i] || x == full[i]) {
			for (var j = 0; j < 3; j++) {
				document.getElementById("stateResult").innerHTML += result[i][j]+"<br>";
			}
			break;
		}
	}

}




// answer3

var a = 0; var b = 0; var c = 0; var d = 0; var e = 0; var f = 0; var g = 0; var h = 0; var i = 0;

var count = [a, b, c, d, e, f, g, h, i];

function salesStats() {
	var salary = parseInt(document.forms["sales"].elements["sales"].value);
	var total = 200 + 0.09 * salary;
	document.forms["sales"].elements["income"].value = total;

	if (total >= 200) {
		total -= 200;
	for (var i = 0; i < 9; i++) {
		total -= 99.99;
		if (total <= 0) {
			count[i]++;
			document.forms["sales"].elements["stats"].value = "$200-$299.99: "+count[0]+"\n$300-$399.99: "+count[1]+"\n$400-$499.99: "+count[2]+"\n$500-$599.99: "+count[3]+"\n$600-$699.99: "+count[4]+"\n$700-$799.99: "+count[5]+"\n$800-$899.99: "+count[6]+"\n$900-$999.99: "+count[7]+"\n$1000 and over: "+count[8];
			break;
		}
		}
	}
	

}

// answer4

function countDisplay() {
	var count = 0;
	var result = [];
	var current;
	for (var i = 1; i <= 10; i++) {
		current = parseInt(document.forms["count"].elements[i].value);
		if (current < 10 || current > 100) {
			alert("Please enter a valid number in the range 10-100");
			break;
		} else {
			count++;
			if (result.indexOf(current) == -1) {
				result.push(current);
			}

		}
		document.forms["count"].elements["countresult"].value = "Unique Numbers:"+result+"\nCount:"+count;

	}

}




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




