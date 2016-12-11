
$(document).ready(function() {
	$("#accordion").accordion();
	$("#open").click(function () {
        var openElem = $(this);
        var loginForm = $("#login form");

        if (loginForm.css("display") == "none") {
            loginForm.slideDown(300, function () {
                openElem.addClass("close");
            })
        } else {
            loginForm.fadeOut(600, function () {
                openElem.removeClass("close");
            })
        }
    });
    $("#submitBtn").click(function() {
    	console.log(document.getElementById("password").value);
    	if (document.getElementById("password").value == "obama") {
    		window.location = "password.html";
    	} else {
    		alert("The password is incorrect!");
    	}
    });
    $("#go").mouseover(function() {
    	$(this).parent().css("background-color","green");
	});
	$('#go').mouseout(function() {
		$(this).parent().css("background-color","#e6e6ea");
	});
	 $("#caution").mouseover(function() {
    	$(this).parent().css("background-color","yellow");
	});
	$('#caution').mouseout(function() {
		$(this).parent().css("background-color","#e6e6ea");
	});
	 $("#stop").mouseover(function() {
    	$(this).parent().css("background-color","red");
	});
	$('#stop').mouseout(function() {
		$(this).parent().css("background-color","#e6e6ea");
	});

	$('nav li ul').hide().removeClass('fallback');
	$('nav li').hover(
	  function () {
	    $('ul', this).stop().slideDown(100);
	  },
	  function () {
	    $('ul', this).stop().slideUp(100);
	  }
	);
	$(".fancybox").fancybox();

	// $('input[name="weight']).click(function () { 
 //    $('input:checked').css('background','#FF0000');
 //    $('input:checked+label').css('background','#ff0000');
	$("input[name='weight']").change(function(){
 		$("#words").css("font-weight", $(this).val());
 	});
 	$("input[name='color']").change(function(){
 		$("#words").css("color", $(this).val());
 	});
 	$("select[name='size']").change(function(){
 		$("#words").css("font-size", $(this).val());

 	});

 	$("#revert").click(function() {
 		$("#words").css({ 'font-weight' : '', 'color' : '', 'font-size' : '' });
 	})

});



function time() {
	var d = new Date();
	document.getElementById("time").innerHTML += "<p>Current Time: " +d.toString();
	document.getElementById("time").innerHTML += "\n"+ d.toLocaleString();
	document.getElementById("time").innerHTML += "\n"+ d.toUTCString()+"</p>";
	var differentPST = d.getTimezoneOffset() / 60;
	var differentEST = d.getTimezoneOffset() / 60 - 3;
	document.getElementById("time").innerHTML += "<p>Hours difference between PST and UTC: "+differentPST+"</p>";
	document.getElementById("time").innerHTML += "<p>Hours difference between EST and UTC: "+differentEST+"</p>";
}

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


function countFrequency() {
	var string = document.forms["count"].elements["string"].value;
	string = string.toLowerCase();
	var array = [];
	var seen = [];
	var count = 0;
	var pos = -1;
	for (var i = 0; i < string.length; i++) {
		if (!seen.includes(string.charAt(i))) {
		pos = i;
		while (pos != -1) {
			count++;
			pos = string.indexOf(string.charAt(i), pos+1);
		}
		seen.push(string.charAt(i));
		var item = "Character "+string.charAt(i)+": "+count;
		array.push(item);
		count = 0;
	}
}
	console.log(array);
	document.forms["count"].elements["result"].value = array;
}

