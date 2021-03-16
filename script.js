var name ="yoyo";
alert("Hello" + name);

var name ="Chen";
var age = 18;
var isGirl = true;
var fruits = ["apple","banana","peach"];

alert(name);
alert(age);
alert(isGirl);
alert(fruits[1]);

function addition(num){
	return num+10;
}
var age = 18;
var trueage = addition(age);
alert(trueage);




function abc(de){
	return de+10;
}
var qwe = 1;
var rty = addition(qwe);
alert(rty);





document.getElementById("byid").innerHTML="我來自id";
document.getElementById("byid").style.color="red";

document.getElementsByClassName("byclass")[0].innerHTML="我來自Tag";
document.getElementsByClassName("byclass")[0].style.fontSize="30px";

document.getElementsByTagName("div")[2].innerHTML="我來自Tag";
document.getElementsByTagName("div")[2].style.fontFamily="微軟正黑體";


document.getElementsByTagName("p")[0].innerHTML="i am pretty";
document.getElementsByTagName("p")[0].style.color="red";
document.getElementsByTagName("p")[0].style.fontSize="30px";
