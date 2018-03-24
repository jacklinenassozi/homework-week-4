//initialises x:
var x=5;
document.getElementById("x").innerHTML="varible of x is" +" "+ x
var roundOff=Number((7.25).toFixed(1)); // 1 instead of 7.25
console.log("The nearest integer of 7.25 is", roundOff);
document.getElementById("integer").innerHTML="The nearest integer of 7.25 is" +" "+ roundOff
//array of colors:
var colors = ["red", "green", "blue"];
document.getElementById("colors").innerHTML="array of colors contains" +" "+ colors

//checking length:
console.log(colors.length);
document.getElementById("length").innerHTML="string length is" +" "+ colors.length
//checking variables with same type:
let u=9;
let v="Hello";

if (typeof u==typeof v){
    console.log("SAME TYPE");
}
else{
    console.log("DIFFERENT TYPE");
}
document.getElementById("sametype").innerHTML="u is "+ typeof u +" & " + "v is "+ typeof v +" They are not same type";
//value of x:
x=7;
x = x % 3
console.log("New value of x=" +" "+ x);
document.getElementById("reminder").innerHTML="new value of x is" +" "+ x
//checking if an array takes multipletypes:
let array=[1,"Bob"];
let multipleTypes=array.includes(1&&"Bob");
console.log(multipleTypes);
document.getElementById("multipletypes").innerHTML="It is" +" "+ multipleTypes  +" "+ "for an array stores multipletypes"
/*
var d=7;
var c=7;
if (d===c){
    console.log("true");
}
else {
    console.log("false");
}*/

//compare Infinities
if(6/0 == 10/0){
    console.log("true")
}
else {
    console.log("false")
};



    $(document).ready(function(){
        $(".btn1").click(function(){
            $("p").fadeOut(4000)
        });
        $(".btn2").click(function(){
            $("p").fadeIn(10000);
        });
    });
   