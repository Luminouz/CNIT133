//part2
function process2()
{
    var number1, number2, number3, n1, n2, n3, sum, arvg, poi, max, min;

    number1 = document.forms["myform"].elements["num1"].value;
    number2 = document.forms["myform"].elements["num2"].value;
    number3 = document.forms["myform"].elements["num3"].value;

    n1 = parseInt(number1);
    n2 = parseInt(number2);
    n3 = parseInt(number3);

    sum = n1 + n2 + n3; alert("The sum of the numbers is " + sum);
    arvg = sum / 3; alert("The average of the numbers is" + arvg);
    poi = n1 * n2 * n3; alert("The product of the numbers is" + poi)
    max = Math.max(n1, n2, n3); alert("the highest number is" + max)
    min = Math.min(n1, n2, n3); alert("the smallest number is" + min)
}

//part3
function process3()
{
    var numbers = [{}, {}, {}, {}, {}], product = 1, negativeCount = 0, zeroCount = 0, positiveCount = 0, displayArr="";

for (i=0; i<numbers.length; ++i)
{
    numbers[i] = parseInt(document.getElementById('num'+i).value);																	
if (numbers[i] < 0)
{
    negativeCount++;
}

else if (numbers[i] == 0)
{
    zeroCount++;
}

else 
{
    positiveCount++;
}                          
; 
}  

document.myform.result.value = (
    +  negativeCount + " negative number\n" + 
    +  zeroCount + " zero number\n" + 
    + positiveCount + " positive number")
}

//part4


document.getElementById("container").innerHTML += '</table>';
function generate(){
    
document.getElementById("display2").innerHTML += "<tr><th>Number</th><th>Square</th><th>Cube</th></tr>";
    
for(var i=7; i <= 10;i++){
document.getElementById("display2").innerHTML += ('<tr><td>' + i + '</td><td>' + i * i +"</td><td>" + i*i*i +"</td></tr>");
}

}