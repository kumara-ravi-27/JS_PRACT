function myFun1(){

  let t1, t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12;
  let a,b,c,d,e;
  t1=9;
  t2=3.14;
  t3=123e2;
  t4=123e-5;

  t5=999999999999999;
  t6=99999999999999999;  //greater than 15 will be 100..
  t7= (t1*5)/3;
  t8=(0.2 * 100) / 5;

   
  t9=0.1+0.2;
  t10=.3+0.6;  //Floating point arithmetic is not always 100% accurate:
  t11=0.2+0.5;  

  a=60;
  b=40;
  c='40';
  d='60';
  e='10';
  t12=a+b; //adding numbers
  t13=c+d;//concat strings
  t14=a+c;//adding num+str gives str
  t15=a+b+c;
  t16=c+b+a;

  t17=a-c; //num-str=num
  t18=d-b; //str-num=num
  t19=a/e; //will work 
  t20=a*e; //will work



  
  document.getElementById('d1').innerHTML=t1 +'<br>' +t2 +'<br>' +t3 +'<br>' +t4 +'<br>' +t5 +'<br>' +t6 +'<br>' +t7 +'<br>' +t8 +'<br>' +t9 +'<br>' +t10 +'<br>' +t11 +'<br>' +t12 +'<br>' +t13 +'<br>' +t14 +'<br>' +t15 +'<br>' +t16 +'<br>' +t17 +'<br>' +t18 +'<br>' +t19 +'<br>' +t20 +'<br>';

}

function myFun2(){

let t21,t22,t23,t24,t25,t26,t27,t28,t29,t30;
let f,g,h,i,j;

f=100/'apple';
g=NaN;
h= 500;
i=new Number(500);
j=new Number(500);

t21=isNaN(f);
t22=5+g;             //If you use NaN in a mathematical operation, the result will also be NaN
t23=NaN+'5';   //concat
t24= typeof(g);   //NaN is a number
t25=typeof g;
t26=typeof Infinity;
t27=2/0;

t28=(h==i);    //true
t29=(h===i);   //false
t30=(i==j);    // we cannot compare objects ,returns same for this (i===j) false


document.getElementById('d2').innerHTML=t21 +'<br>' +t22 +'<br>' +t23 +'<br>' +t24 +'<br>' +t25 +'<br>' +t26 +'<br>' +t27 +'<br>' +t28 +'<br>' +t29 +'<br>' +t30 

}

function myFun3(){   //has to look after

  let t31,t32,t33;

   t31 = 0xFF;   //Numeric constants, preceded by 0x, are interpreted as hexadecimal
document.getElementById("d3").innerHTML = "0xFF = " + t31;


let myNumb = 2; 
let txt = "";
while (myNumb != Infinity) {
   myNumb = myNumb * myNumb;
   txt = txt + myNumb + "<br>";
}
document.getElementById("d4").innerHTML = txt;


let myNumber = 32;
document.getElementById("d5").innerHTML =
"Decimal 32 = " + "<br><br>" + 

"Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
"Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
"Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
"Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
"Decimal (base 10): " + myNumber.toString(10) + "<br>" +
"Octal (base 8): " + myNumber.toString(8) + "<br>" +
"Binary (base 2): " + myNumber.toString(2);
  
 
}
