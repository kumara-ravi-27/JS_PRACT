function properties(){
  let t1,t2,t3,t4,t5,t6,t7,t8,t9,t10;
  

  t1='Math.E: '+Math.E;
  t2='Math.PI: '+Math.PI;
  t3='Math.SQRT2: '+Math.SQRT2;
  t4='Math.SQRT1_2: '+Math.SQRT1_2;
  t5='Math.LN2: '+Math.LN2;
  t6='Math.LN10: '+Math.LN10;
  t7='Math.LOG2E: '+Math.LOG2E;
  t8='Math.LOG10E: '+Math.LOG10E;

  t9='Math.max(10,3,54,6,50,): ' +Math.max(10,3,54,6,50,);
  t10='Math.min(10,3,54,6,50,): '+Math.min(10,3,54,6,50,);


    document.getElementById('d1').innerHTML=t1 +'<br>' +t2 +'<br>' +t3 +'<br>' +t4 +'<br>' +t5 +'<br>' +t6 +'<br>' +t7 +'<br>' +t8 +'<br>' +t9 +'<br>' +t10 +'<br>';

}

function mathObj(){

  let t11,t12,t13,t14,t15,t16,t17,t18,t19,t20;
  let ta,tb;
  
  t11='round 4.4,4.5,4.6'+'<br>'+Math.round(4.4) +'<br>'+Math.round(4.5)+'<br>'+Math.round(4.6);
  t12='ceil 4.4,4.5,4.6'+'<br>'+Math.ceil(4.4) +'<br>'+Math.ceil(4.5)+'<br>'+Math.ceil(4.6);
  t13='floor 4.4,4.5,4.6'+'<br>'+Math.floor(4.4) +'<br>'+Math.floor(4.5)+'<br>'+Math.floor(4.6);
  t14='trunc 4.4,4.5,4.6'+'<br>'+Math.trunc(4.4) +'<br>'+Math.trunc(4.5)+'<br>'+Math.trunc(4.6);
  t15='sign -4.4,0,4.6'+'<br>'+Math.sign(-4.4) +'<br>'+Math.sign(0)+'<br>'+Math.sign(4.6);
  t16='sqrt 16,25,64'+'<br>'+Math.sqrt(16) +'<br>'+Math.sqrt(25)+'<br>'+Math.sqrt(64);
  t17='pow (2,4),(8,2),(10,2)'+'<br>'+Math.pow(2,4) +'<br>'+Math.pow(8,2)+'<br>'+Math.pow(10,2);
  t18='abs (-4.4),(0),(4.4)'+'<br>'+Math.abs(-4.4) +'<br>'+Math.abs(0)+'<br>'+Math.abs(4.4);
  t19='log 1,2,3'+'<br>'+Math.log(1) +'<br>'+Math.log(2)+'<br>'+Math.log(3);
  t20='log 10'+'<br>'+Math.log(10) ;  //Math.E and Math.log() are twins. //not clarity

  ta='log2() 2,4,8'+'<br>'+Math.log2(2) +'<br>'+Math.log2(4)+'<br>'+Math.log2(8);
  tb='log10() 10,100,1000'+'<br>'+Math.log10(10) +'<br>'+Math.log10(100)+'<br>'+Math.log10(1000);


  document.getElementById('d2').innerHTML=t11 +'<br>' +t12 +'<br>' +t13 +'<br>' +t14 +'<br>' +t15 +'<br>' +t16 +'<br>' +t17 +'<br>' +t18 +'<br>' +t19 +'<br>' +t20 +'<br>'+ta +'<br>' +tb ;
  
}

function Trigonometry(){

  let t21,t22,t23,t24,t25,t26,t27,t28,t29,t30;

  t21='sin 0,45,90,135,180'+'<br>'+Math.sin(0*Math.PI/180)+'<br>'+Math.sin(45*Math.PI/180)+'<br>'+Math.sin(90*Math.PI/180);

  t22='cos 0,45,90,135,180'+'<br>'+Math.cos(0*Math.PI/180)+'<br>'+Math.cos(45*Math.PI/180)+'<br>'+Math.cos(90*Math.PI/180);


  document.getElementById('d3').innerHTML=t21 +'<br>' +t22 +'<br>' +t23 +'<br>' +t24 +'<br>' +t25 +'<br>' +t26 +'<br>' +t27 +'<br>' +t28 +'<br>' +t29 +'<br>' +t30 

}
