
$(document).ready(function() {
	calculateSumProduct1();
	calculateSumProduct2();

	 $( "#draggable").draggable();
  	
	christmas();
	interest();

	$(".dropdown").click(function() {
		$(".hide").slideToggle("slow");
	});

	$("#part3container tr:even").css("background-color", "##fed766");
	$("#part3container tr:odd").css("background-color", "#ffffff");

	$("button").click(function(){
        var div = $("#animate");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });

    $("#list").validate({
    	rules: {
    		choose: {
    			required: true,
    			range: [1,3]
    		}
    	},

    	messages: {
    		choose: {
    			required: "Please enter a valid number",
    			range: "Please enter 1, 2, or 3"
    		}
    	}
    });
});
	
// answer 1

function calculateSumProduct1() {
	var sum = 0;
	var product = 1;
	var htmlOutput = "";
	for (var i = 5; i <= 20; i += 3) {
		sum += i;
		product *= i;
	}

	htmlOutput = "The sum of every 3rd number from 5-20 is "+sum + "<br>The product of every 3rd number from 5-20 is : "+product;
	
	document.getElementById("part1answer1").innerHTML = htmlOutput;

}

function calculateSumProduct2() {
	var i = 3;
	var sum = 0;
	var product = 1;
	var htmlOutput = "";
	while (i <= 31) {
		sum += i;
		product *= i;
		i += 4;
	}

	htmlOutput = "The sum of every 4th number from 3-31 is "+sum + "<br>The product of every 4th number from 3-31 is : "+product;
	
	document.getElementById("part1answer2").innerHTML = htmlOutput;

}

// answer 2

function calculateSalary() {

	var gross = "Gross Salary";
	document.getElementById(0).insertCell(-1).innerHTML = gross;
	var v1;
	var v2;
	var v3;

	for (var i = 1; i < 7; i++) {
		var hour = "e"+i+"a";
		var rate = "e"+i+"b";
		v1 = parseInt(document.forms["salary"].elements[hour].value);
		v2 = parseInt(document.forms["salary"].elements[rate].value);
		if (isNaN(v1) || isNaN(v2)) {
			alert("Please enter a numeric amount");
		} else if (v1 > 40) {
			v3 = (40 * v2 + (v1-40) * 1.5 * v2).toFixed(2);
		} else {
			v3 = (v1 * v2).toFixed(2);
		}
		
		var newCell = document.getElementById(i).insertCell(-1); 
		newCell.innerHTML="<td><input type='text' value='"+v3+"'size='10'></td>";
	}

}


function reset() {
	document.forms["salary"].reset();
}

function interest() {
	var htmlOutput ="";
	for (var i = 5; i < 11; i ++) {
		htmlOutput += "<table><tr><th>Year</th><th>Amount on Deposit</th><th>Interset Rate</th></tr>"
		var interest = i / 100;
		var amount = 1000;
		for (var j = 1; j < 11; j++) {
			
			amount = (1000* Math.pow(1+interest, j)).toFixed(2);;
			htmlOutput += "<tr><td>"+j+"</td><td>"+amount+"</td><td>"+interest+"</td></tr>";

		}
		htmlOutput += "</table><br>";
	}
	document.getElementById("part3container").innerHTML = htmlOutput;

}


function calculateSales() {
	var v1, v2, v3;
	var total = 0;
	for (var i = 1; i < 6; i++) {
		var product = "row"+i
		var amount = "row"+i+"qty";
		var rowTotal = "row"+i+"amount";
		v1 = parseInt(document.forms["sales"].elements[product].value);
		v2 = parseInt(document.forms["sales"].elements[amount].value);
		if (isNaN(v2)) {
			alert("Please enter a numeric amount");
		}
		switch(v1) {
			case 1:
				v3 = 2.98 * v2;
				break;
			case 2:
				v3 = 4.50 * v2;
				break;
			case 3: 
				v3 = 9.98 * v2;
				break;
			case 4:
				v3 = 4.49 * v2;
				break;
			case 5:
				v3 = 6.89 * v2;
				break;
		}
		total += v3;
		document.forms["sales"].elements[rowTotal].value = v3.toFixed(2);
		document.forms["sales"].elements["totalAmount"].value = total.toFixed(2);

	}

}

// answer 5

function findList() {
	var text = parseInt(document.forms["list"].elements["choose"].value);
	var output ="";
	var style = "";
	var selected = false;
	switch (text) {
		case 1:
		output = "<h2>Unordered List</h2>";
		style = '<ul style="list-style-type: square;">';
		selected = true;
		break;

		case 2:
		output= "<h2>Ordered Number List</h2>";
		style = '<ol>';
		selected = true;
		break;

		case 3:
		output = "<h2>Ordered Letter List</h2>";
		style = '<ol style="list-style-type: upper-alpha;">';
		selected = true;
		break;

		default:
		
	}
	if (selected) {
		for (var i = 1; i < 4; i++) {
			output += style+"List item "+i+style+"<br>";
		}
	document.getElementById("listResult").innerHTML = output;
	}

	

}

// answer 6

function christmas() {

	var number;
	var htmlOutput;

	for (var i = 1; i < 13; i++) {
		switch(i) {
			case 1:
			number = "first";
			break;

			case 2:
			number = "second";
			break;

			case 3:
			number = "third";
			break;

			case 4:
			number = "fourth";
			break;

			case 5:
			number = "fifth";
			break;

			case 6:
			number = "sixth";
			break;

			case 7:
			number = "seventh";
			break;

			case 8:
			number = "eighth";
			break;

			case 9:
			number = "ninth";
			break;

			case 10:
			number = "tenth";
			break;

			case 11:
			number = "eleventh";
			break;

			case 12:
			number = "twelfth";
			break;
		}
		htmlOutput = lyrics(number);
		document.getElementById("12days").innerHTML += htmlOutput;
		
	}
}
 

function lyrics(number) {

	var output = "On the "+number+" day of Christmas<br>"+"my true love sent to me: <br>";
	switch (number) {
		case "twelfth":
		output += "12 Drummers Drumming<br>";

		case "eleventh":
		output += "Eleven Pipers Piping<br>";

		case "tenth":
		output += "Ten Lords a Leaping<br>";

		case "ninth":
		output+= "Nine Ladies Dancing<br>";

		case "eighth":
		output += "Eight Maids a Milking<br>"

		case "seventh":
		output += "Seven Swans a Swimming<br>"

		case "sixth":
		output += "Six Geeze a Laying<br>";

		case "fifth":
		output += "Five Golden Rings<br>"

		case "fourth":
		output += "Four Calling Birds<br>";

		case "third":
		output += "Three French Hens<br>";

		case "second":
		output += "Two Turtle Doves<br>"

		case "first":
		output += "A Patridge in a Pear Tree<br><br>";

	}
	return output;
	}

