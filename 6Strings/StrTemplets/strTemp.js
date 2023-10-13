function myFun1(){

  let t1='my name is ravi';
  let t2=`my name 'is' ravi`; //here we can use ' " inside the string
  let t3=`my 
  name 
  is 
  ravi` ;// here we can have multiple line in a single string.
  let firstName=`ravi` ,lastName=`kumar`;
  let t4='my name is ${firstName} ${lastName}'
  let t5=`my name is ${firstName} ${lastName}`;




  document.getElementById('d1').innerHTML=t1;
  document.getElementById('d2').innerHTML=t2;
  document.getElementById('d3').innerHTML=t3;
  document.getElementById('d4').innerHTML=t4;
  document.getElementById('d5').innerHTML=t5;
  
}
/*
notes:
${...}  string interpolation method=allows variables into string
*/

function myFun2(){

  let cp=200 , sp=300;
  let profit=`profit: ${sp-cp}`;
  document.getElementById('d6').innerHTML=profit;
  
 let f=100;
 let c1=`c: ${(5/9)*(f-32)}`;
 let c2=`c: ${((5/9)*(f-32)).toFixed(2)}`;   //fixed method entire fraction ,decimal=2
 document.getElementById('d7').innerHTML=c1;
 document.getElementById('d8').innerHTML=c2;
}

function myFun3(){

  //html templates pending
}




/*
Template Literals
Template Strings
String Templates
Back-Tics Syntax
*/
