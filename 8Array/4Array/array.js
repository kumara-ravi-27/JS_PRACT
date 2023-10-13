function myFun1(){
  let t1,t2,t3,t4,t5,t6,t7,t8,t9,t10;
  
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("d1").innerHTML = points;            
document.getElementById("d2").innerHTML = points.sort();  //sorting alphabetically
points.sort(function(a, b){return a - b});           //using comparing function for accending
document.getElementById("d3").innerHTML = points;

points.sort(function(a, b){return b - a});           //using comparing function for decending
document.getElementById("d4").innerHTML = points;

document.getElementById("d5").innerHTML = points[0];  //highest value
document.getElementById("d6").innerHTML = points[points.length-1];  //lowest value


//Math.random() is below //Fisher Yates shuffle is best method
points.sort(function(){return 0.5-Math.random()});
document.getElementById("d7").innerHTML = points;


}

/*
comparing function

function(a,b){return a-b};

if result is neg 'a' is sorted before 'b'
id result is pos  'b' is sorted before 'a'
if result is '0'  no changes



*/
