// answer1
    
function showHint(str) {
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        // when PHP is working:
        // xmlhttp.open("GET", "php/gethint.php?q=" + str, true);
        xmlhttp.open("GET", "ajaxtestfile.txt?q=" + str, true);
        xmlhttp.send();
    }
}


// answer2

/*
$(document).ready(function () {
    $('#name').blur(function () {
        //alert("blur worked");
        $.ajax({
            type: "GET",
            url: "php/hw8.php",
            dataType: "JSON",
            success: function (responses) {
                document.getElementById("time").value = responses.time;
                alert(responses.time);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("XMLHttpRequest: " + XMLHttpRequest + " textStatus: " + textStatus + " errorThrown: " + errorThrown);
            }
        });
    });
});

*/

$(document).ready(function () {
    $('#name').blur(function () {
        //alert("blur worked");
      
        $.get("php/hw8.php", function (data) {

            var responses = jQuery.parseJSON(data);
            document.getElementById("time").value = responses.time;
            document.getElementById("dayDate").value = responses.dayDate;
            document.getElementById("date").value = responses.date;
        });
    });
});


// answer3
$(document).ready(function () {

    $(function () {
        $("#datepicker").datepicker();
    });

    var respData = {
        yes: 0,
        no: 0,
        pctYes: 0,
        pctNo: 0,
        total: 0
    };

    var chart = document.getElementById('chartContainer').getContext("2d");
    var barData = {
        labels: ["Yes", "No"],
        datasets: [
            {
                fillColor: "#fff",
                strokeColor: "#fff",
                data: [respData.yes]
            },
            {
            fillColor: "#333",
            strokeColor: "#333",
            data: [respData.no]
            }
        ]
    }

    $("#yes").click(function () {
        respData.yes ++ ;
        $.get("php/hw8_3.php", { yesCount: respData.yes, noCount: respData.no }, function (data) {
            
            respData = jQuery.parseJSON(data);
            //new Chart(chart).Bar(barData);
            document.getElementById("display").innerHTML = "Yes: " + respData.yes + "<br/>" +
                                                            "No: " + respData.no + "<br/>" +
                                             "Percentage Yes: " + respData.pctYes.toFixed(2) + "<br/>" +
                                                "Percentage No: " + respData.pctNo.toFixed(2) + "<br/>" +
                                                    "Total Votes: " + respData.total;
        });
    });

    $("#no").click(function () {
        respData.no++;
        $.get("php/hw8_3.php", { yesCount: respData.yes, noCount: respData.no }, function (data) {
            respData = jQuery.parseJSON(data);
            //new Chart(chart).Bar(barData);
            document.getElementById("display").innerHTML = "Yes: " + respData.yes + "<br/>" +
                                                           "No: " + respData.no + "<br/>" +
                                            "Percentage Yes: " + respData.pctYes.toFixed(2) + "<br/>" +
                                            "Percentage No: " + respData.pctNo.toFixed(2) + "<br/>" +
                                             "Total Votes: " + respData.total;
        });
    });

});


//answer4


function enterCode(userIn) {
    
    stcode = userIn.toUpperCase();

    $.get("php/hw8_4.php", { stcode: stcode }, function (data) {

        var ids = ["stateCap", "stateName", "statePop"];

        var respData = data.split(",");

        //Color warning text red
        if (respData[0] == "state code error")
        {
            for (i = 0; i < ids.length; i++)
            {
                document.getElementById(ids[i]).style.color = "red";
            }    
        }
        else
        {
            for (i = 0; i < ids.length; i++) {
                document.getElementById(ids[i]).style.color = "";
            }
        }

        // send data to view
        document.getElementById('stateName').value = respData[0];
        document.getElementById('stateCap').value = respData[1];
        document.getElementById('statePop').value = respData[2];


    });
}