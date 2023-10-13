// strings part

function myFun1(){

  let t1="we have to improve 'coding' skills ";
  let t2="we have to improve \"coding\" skills";
  let t3="we have to improve \'coding\' skills"
  let t4="we have to improve \coding\ skills"
  let t5="its\'s alright"
  let t6="my name \\ ravi"
  let t7="my name \\\\ ravi"
  let t8="my name \\\\\\ ravi"
  let t9="what\s problem here"
  let t10="what\\s problem here "
  
  const array1=[t1,t2,t3,t4,t5,t6,t7,t8,t9,t10];
  document.getElementById('a1').innerHTML=array1;

  document.getElementById('d1').innerHTML=t1;
  document.getElementById('d2').innerHTML=t2;
  document.getElementById('d3').innerHTML=t3;
  document.getElementById('d4').innerHTML=t4;
  document.getElementById('d5').innerHTML=t5;
  document.getElementById('d6').innerHTML=t6;
  document.getElementById('d7').innerHTML=t7;
  document.getElementById('d8').innerHTML=t8;
  document.getElementById('d9').innerHTML=t9;
  document.getElementById('d10').innerHTML=t10;
  
}
function myFun2(){
  let t11="my name \b ravi"
  let t12="my name \f ravi"
  let t13="my name \n ravi"
  let t14="my name \r ravi"
  let t15="my name \t ravi"
  let t16="my name \v ravi"

  
const array2=[t11,t12,t13,t14,t15,t16];
document.getElementById('a2').innerHTML=array2;

  document.getElementById('a2').innerHTML=array2;
  document.getElementById('d11').innerHTML=t11;
  document.getElementById('d12').innerHTML=t12;
  document.getElementById('d13').innerHTML=t13;
  document.getElementById('d14').innerHTML=t14;
  document.getElementById('d15').innerHTML=t15;
  document.getElementById('d16').innerHTML=t16;

/*
Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
*/
}
