console.log("js is connected")
let num1 = 0;
let num2 = 0;
let num3 = 0;
document.getElementById("btn1").onclick = function() {
    console.log("btn1 on click")
    num1 = num1 + 1;
    console.log(num1)
    document.getElementById("num1").innerHTML = num1
}
document.getElementById("btn2").onclick = function() {
    console.log("btn2 on click")
    num1 = 0;
    console.log(num1)
    document.getElementById("num1").innerHTML = num1
}
document.getElementById("btn3").onclick = function() {
    console.log("btn3 on click")
    num1 = num1 - 1;


    console.log(num1)
    document.getElementById("num1").innerHTML = num1
}
document.getElementById("btn4").onclick = function() {
    console.log("btn4 on click")
    num2 = num2 + 1;
    console.log(num2)
    document.getElementById("num2").innerHTML = num2
}
document.getElementById("btn5").onclick = function() {
    console.log("btn5 on click")
    num2 = 0;
    console.log(num2)
    document.getElementById("num2").innerHTML = num2
}
document.getElementById("btn6").onclick = function() {
    console.log("btn6 on click")

    num2 = num2 - 1;
    console.log(num2)
    document.getElementById("num2").innerHTML = num2
}
document.getElementById("btn7").onclick = function() {
    console.log("btn7 on click")
    num3 = num1 + num2;
    console.log(num3)
    document.getElementById("num3").innerHTML = num3
}
document.getElementById("btn8").onclick = function() {
    console.log("btn8 on click")
    num3 = 0;
    console.log(num3)
    document.getElementById("num3").innerHTML = num3
}
document.getElementById("btn9").onclick = function() {
    console.log("btn9 on click")
    num3 = num1 - num2;
    console.log(num3)
    document.getElementById("num3").innerHTML = num3
}