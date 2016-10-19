/* answer 1*/
// JavaScript Document

$(document).ready(function(){
	'use strict'; 

	$( ".draggable" ).draggable({
  		opacity: 0.20
		});
});


function processForLoop() {
	'use strict'; 

var product=1; 
var sum=0; 

	for (var number = 5; number <= 20; number += 3) {	
		product *= number;
		sum += number;
	}
	
	document.forms["forloop"].elements["result1"].value = ("The product is " + product + ".\n The sum is " + sum + "."); 
}

function processWhileLoop() {
	'use strict'; 

var number = 3; 
var product = 1; 
var sum = 0; 

	while (number <= 31) {
		product *= number;
		sum += number;  
		number += 4; 
	}
	
	document.forms["whileloop"].elements["result2"].value = ("The product is " + product + ".\n The sum is " + sum + "."); 
}


/* answer 2*/
function calculateSales() {
	var num1, num2, num3, num4, total, revenue;
	num1 = parseInt(document.forms["sales"].elements["num1"].value);
	num2 = parseInt(document.forms["sales"].elements["num2"].value);
	num3 = parseInt(document.forms["sales"].elements["num3"].value);
	num4 = parseInt(document.forms["sales"].elements["num4"].value);

	if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
		alert("Please enter a numeric amount");
	} else {

		total = (239.99*num1)+(129.75*num2)+(99.95*num3)+(350.89*num4);
		revenue = 200+0.09*total;
		document.forms["sales"].elements["result"].value = "Total Sales: "+total.toFixed(2) +"\nTotal earned: "+revenue.toFixed(2);
	}

}

/* answer 3*/
function checkPal() {
	var num;
	num = document.forms["palindrome"].elements["pal"].value;
	console.log(num);
	if (isNaN(parseInt(num)) || num.length !== 5) {
		alert("Please enter a 5 digit number");
	} else if (num.charAt(0) === 0) {
		alert("The number cannot start with 0");
	} else {
		if (num.charAt(4)=== num.charAt(0) && num.charAt(1) === num.charAt(3)) {
			alert("The number is a palindrome!");
		} else {
			alert("The number is not a palindrome!");
		}

	}
}

/* answer 4*/
function convert() {
	var c, f, calcC, calcF;
	c = parseInt(document.forms["temp"].elements["celsius"].value);
	f = parseInt(document.forms["temp"].elements["fahrenheit"].value);

	if (!isNaN(c)) {
		calcC = c;
		calcF = (9/5 * c) + 32

	} else if (!isNaN(f)) {
		calcF = f;
		calcC = 5/9 * (f - 32) 
	}
	document.forms["temp"].elements["celsius"].value = calcC;
	document.forms["temp"].elements["fahrenheit"].value = calcF;


}

/* answer 5*/
function multiply() {

	var input = parseInt(document.forms["multi"].elements["answer"].value);
	var answer = random1 * random2;

	while (answer !== input) {
		alert("No, please try again.");
		input = parseInt(document.forms["multi"].elements["answer"].value);
		answer = random1 * random2;


	}

	alert("Very good!");
	generateNumbers();
	document.forms["mutli"].elements["answer"].value = "";

}

function generateNumbers() {
	random1 = Math.floor(Math.random()*10);
	random2 = Math.floor(Math.random()*10);
	document.getElementById("question").innerHTML = "What is "+random1 + " * "+random2;
}


/* answer 6*/
function calculateCredit() {
	var account = parseInt(document.forms["credit"].elements["account"].value);
	var balance = parseInt(document.forms["credit"].elements["balance"].value);
	var charges = parseInt(document.forms["credit"].elements["charges"].value);
	var credit = parseInt(document.forms["credit"].elements["credit"].value);
	var limit = parseInt(document.forms["credit"].elements["limit"].value);
	var newBalance = 0;
	var difference = 0;

	if (account === null) {
		alert("Please enter an account number");		
	} else if (isNaN(balance) || isNaN(charges) || isNaN(credit) || isNaN(limit)) {
		alert("Please enter a numeric amount");
	} else {
		newBalance = balance + charges - credit;
		difference = limit - newBalance;
		if (difference >= 0) {
			document.forms["credit"].elements["result"].value = "New Balance: "+newBalance+"\nCredit Available: "+difference;

		} else {
			document.forms["credit"].elements["result"].value = "New Balance: "+newBalance+"\nCredit Exceeded:"+Math.abs(difference);
		}
	}
}