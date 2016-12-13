/*
	jQuery Navigation Plugin
	Copyright (c) 2011 Daniel Thomson
	
	Licensed under the MIT license:
	http://www.opensource.org/licenses/mit-license.php
*/

(function(c){c.fn.navPlugin=function(a){var b=c.extend(true,{},{itemWidth:150,itemHeight:50,navEffect:"fade",speed:200},a);this.each(function(){var d=c(this);d.toprow=d.children("li");d.submenu=d.children("li.toprow").children("ul");d.stack=d.find("li:has(ul)");c.fn.navPlugin.addClasses(d);c.fn.navPlugin.addCss(d,b);c.fn.navPlugin.addTopRowEffect(d,b);c.fn.navPlugin.addSubMenuEffect(d,b)});return this};c.fn.navPlugin.addClasses=function(a){a.toprow.addClass("toprow");a.submenu.addClass("submenu"); a.stack.addClass("stack")};c.fn.navPlugin.addCss=function(a,b){a.css({display:"inline"});a.find("li").css({display:"block",width:b.itemWidth+"px",height:b.itemHeight+"px","float":"left",position:"relative"});a.find("li").find("a").css({height:b.itemHeight-2+"px",width:b.itemWidth-2+"px",display:"block","line-height":b.itemHeight-2+"px"});a.find("li").find("ul").css({"margin-left":"0px",position:"absolute",top:"-1px",left:"0px",display:"block",height:"0px",width:"0px"});a.stack.css({position:"relative"}); a.stack.find("ul").css({position:"absolute",top:"-1px",left:"0px"});a.toprow.css({"float":"left"});a.toprow.find("ul").css({"margin-top":b.itemHeight+1+"px"});a.toprow.find("ul").find("li").css({position:"relative",display:"none"});a.toprow.find("ul").find("li").find("ul").css({left:b.itemWidth+"px",top:"0px",position:"absolute","margin-top":"0px"});a.toprow.find("ul").find("li").find("ul").find("li").css({"margin-top":"0px"});a.submenu.find("li").css({display:"none"})};c.fn.navPlugin.addTopRowEffect= function(a,b){a.children("li.toprow").mouseover(function(){clearTimeout(a.timer);c(this).addClass("hover");var d=c(this).children("ul").children("li"),e=c(this).siblings("li").children("ul").children("li");if(b.navEffect=="slide"){d.slideDown(b.speed);e.slideUp(b.speed)}else{d.css("display","block");e.fadeOut(b.speed)}d.children("ul").css("display","none");return false});a.children("li.toprow").mouseout(function(){c(this).removeClass("hover");c.fn.navPlugin.setTimer(a,b);return false})};c.fn.navPlugin.addSubMenuEffect= function(a,b){a.children("li.toprow").find("li").mouseover(function(){clearTimeout(a.timer);c(this).addClass("hover");c(this).children("ul").css("display","block");var d=c(this).children("ul").children("li"),e=c(this).siblings("li").children("ul").children("li");if(b.navEffect=="slide"){d.slideDown(b.speed);e.slideUp(b.speed)}else{d.css("display","block");e.fadeOut(b.speed)}d.children("ul").css("display","none");return false});a.find("li.toprow").find("li").mouseout(function(){c(this).removeClass("hover"); c.fn.navPlugin.setTimer(a,b);return false})};c.fn.navPlugin.setTimer=function(a,b){clearTimeout(a.timer);a.timer=setTimeout(function(){c.fn.navPlugin.hideNav(a,b)},500)};c.fn.navPlugin.hideNav=function(a,b){var d=a.find("li.toprow ul");if(b.navEffect=="slide"){d.children("li").slideUp(b.speed);d.children("ul").slideUp(b.speed)}else{d.children("li").fadeOut(b.speed);d.children("ul").fadeOut(b.speed)}}})(jQuery);



$(document).ready(function() {
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
	$("input[name='format_bold']").change(function(){
        if (this.checked) {
            $("#words").css("font-weight", "bold");
        } else {
            $("#words").css("font-weight", "");
        }
 	});
    
    $("input[name='format_underline']").change(function(){
        if (this.checked) {
            $("#words").css("text-decoration", "underline");
        } else {
            $("#words").css("text-decoration", "");
        }
    });
    
 	$("input[name='color']").change(function(){
 		$("#words").css("color", $(this).val());
 	});
 	$("select[name='size']").change(function(){
 		$("#words").css("font-size", $(this).val());

 	});

 	$("#revert").click(function() {
 		$("#words").css({ 'font-weight' : '', 'text-decoration' : '', 'color' : '', 'font-size' : '' });
        $("input[name='format_bold']").prop('checked', false);
        $("input[name='format_underline']").prop('checked', false);
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

//

$(document).ready(function () {

	$(document).ready(function () {
		$("#navigation").navPlugin({
			'itemWidth': 101,
			'itemHeight': 30,
			'navEffect': "slide",
			'speed': 600
		});
	}); // end ready
});

//jquery for the info box
$("#flip").click(function () {
	$("#panel").slideToggle("slow");
});