function myFun1(){
  let t1,t2,t3,t4,t5,t6,t7,t8,t9,t10;
  let a,b;

  a=123;
  b=9.656;

  
  t1=a.toString();
  t2=(123).toString();
  t3=(100+23).toString();

  t4=b.toExponential();   // we can also give (0)
  t5=b.toExponential(2);
  t6=b.toExponential(4);
  t7=b.toExponential(6);

  t8=b.toFixed();
  t9=b.toFixed(2);
  t10=b.toFixed(4);

    document.getElementById('d1').innerHTML=t1 +'<br>' +t2 +'<br>' +t3 +'<br>' +t4 +'<br>' +t5 +'<br>' +t6 +'<br>' +t7 +'<br>' +t8 +'<br>' +t9 +'<br>' +t10 +'<br>';
    
}

function myFun2(){

  let t11,t12,t13,t14,t15,t16,t17,t18,t19,t20;
  let a,b;

  a=123;
  b=9.656;

  t11=b.toPrecision();
  t12=b.toPrecision(2);
  t13=b.toPrecision(4);
  t14=b.toPrecision(6);

  t15=a.valueOf();
  
  t16= new Date("1970-01-01");  //yyyy-mm-dd  it will calc millisecs from that date(01-jan-1970)
  t17= new Date('1970-01-02'); // returns  millisecs from date(01-jan-1970)
  t18 = Number(t16);             // date can be changed into numb i.e., millisecs
  t19 = Number(t17);     //returns  millisecs from date(01-jan-1970) i.e., 86400000

  document.getElementById('d2').innerHTML=t11 +'<br>' +t12 +'<br>' +t13 +'<br>' +t14 +'<br>' +t15 +'<br>' +t16 +'<br>' +t17 +'<br>' +t18 +'<br>' +t19 +'<br>' +t20 +'<br>';
  
  }

  function myFun3(){

    document.getElementById("d3").innerHTML = 
    Number(true) + "<br>" +
    Number(false) + "<br>" +
    Number("10") + "<br>" + 
    Number("  10") + "<br>" +
    Number("10  ") + "<br>" +
    Number(" 10  ") + "<br>" +
    Number("10.33") + "<br>" + 
    Number("10,33") + "<br>" +
    Number("10 33") + "<br>" +
    Number("John");

    
    document.getElementById("d4").innerHTML = 
    parseInt("-10") + "<br>" +
    parseInt("-10.33") + "<br>" +
    parseInt("10") + "<br>" +
    parseInt("10.33") + "<br>" +
    parseInt("10 6") + "<br>" +  
    parseInt("10 years") + "<br>" +  
    parseInt("years 10");  

    document.getElementById("d5").innerHTML = 
    parseFloat("10") + "<br>" +
    parseFloat("10.33") + "<br>" +
    parseFloat("10 6") + "<br>" +  
    parseFloat("10 years") + "<br>" +
    parseFloat("years 10"); 

    document.getElementById("d6").innerHTML = 
    Number.parseFloat("10") + "<br>" +
    Number.parseFloat("10.33") + "<br>" +
    Number.parseFloat("10 20 30") + "<br>" +
    Number.parseFloat("10 years") + "<br>" +
    Number.parseFloat("years 10");

    document.getElementById("d7").innerHTML = 
    Number.parseInt("-10") + "<br>" +
    Number.parseInt("-10.33") + "<br>" +
    Number.parseInt("10") + "<br>" +
    Number.parseInt("10.33") + "<br>" +
    Number.parseInt("10 6") + "<br>" +  
    Number.parseInt("10 years") + "<br>" +  
    Number.parseInt("years 10");  

  }
  
  














  /*
  notes
  Up to +- 9007199254740991 +(253-1)
  BigInt is the second numeric data type in JavaScript (after Number).
  
  With BigInt the total number of supported data types in JavaScript is 8:
  1. String
  2. Number
  3. Bigint
  4. Boolean
  5. Undefined
  6. Null
  7. Symbol
  8. Object
 
Method       	Description
Number()    	Returns a number converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()  	Parses its argument and returns a whole number
 
  */
