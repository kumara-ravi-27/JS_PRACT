function myFun1(){

  let t1="abcdefghijkLm,nopQRstuvwxyz";

  document.getElementById('d1').innerHTML=t1;
  document.getElementById('d2').innerHTML=t1.length;
  document.getElementById('d3').innerHTML=t1.slice(0,4);
  document.getElementById('d4').innerHTML=t1.substring(1,7);
  document.getElementById('d5').innerHTML=t1[8];
  document.getElementById('d6').innerHTML=t1.indexOf("e");
  document.getElementById('d7').innerHTML=t1.split(",");
  document.getElementById('d8').innerHTML=t1.toUpperCase();
  document.getElementById('d9').innerHTML=t1.toLowerCase();
  document.getElementById('d10').innerHTML=t1.replace(/a/,"A");
  
}
function slice(){

  let t2='apple,veg,juice';
  
  document.getElementById('d11').innerHTML=t2.length;
  document.getElementById('d12').innerHTML=t2.slice(3);
  document.getElementById('d13').innerHTML=t2.slice(-5);
  document.getElementById('d14').innerHTML=t2.slice(2,5);
  document.getElementById('d15').innerHTML=t2.slice(-5,-2);

  /*
le,veg,juice
juice
ple
jui
  */
 //document.getElementById('d14').innerHTML=t2.charAt(-5) ; //not //-1 last character of string
}
function replace(){

  let t3='please visit home and HOME!';

  document.getElementById('d21').innerHTML=t3;
  document.getElementById('d22').innerHTML=t3.replace('home','school');
  document.getElementById('d23').innerHTML=t3.replace('HOME','school');   //case sensitive
  document.getElementById('d24').innerHTML=t3.replace(/HOME/i,'school');
  document.getElementById('d25').innerHTML=t3.replace(/home/g,'school');  //global match

/*
please visit home and HOME!
please visit school and HOME!
please visit home and school!
please visit school and HOME!
please visit school and HOME!
  */
}
function replaceall(){

  let t4= 'people love cats.Cats are very clever';

  document.getElementById('d26').innerHTML=t4;
  document.getElementById('d27').innerHTML=t4.replaceAll('cats','dogs');
  document.getElementById('d28').innerHTML=t4.replaceAll('Cats','Dogs');
  document.getElementById('d29').innerHTML=t4.replaceAll(/cats/g,'dogs');
  document.getElementById('d30').innerHTML=t4.replaceAll(/Cats/g,'Dogs');

}
function pad(){

  let numb=5;
  let t5=numb.toString();  // t5='5';  we can also give directly
  let t6='welcome';
  document.getElementById('d31').innerHTML=t5.padStart(4,"x");
  document.getElementById('d32').innerHTML=t5.padStart(4,"1");
  document.getElementById('d33').innerHTML=t5.padEnd(4,'2');
  document.getElementById('d34').innerHTML=t6.charAt(1);
  //document.getElementById('d35').innerHTML=t6.charAt(-1);  //no neg has to give here
  document.getElementById('d35').innerHTML=t6[2];   //process same as charAt

}

function split(){

  let t7='0 a b c d e';
  const a1=t7.split(' ');
  let t8='0|a|b|c|d|e';
  const a2=t8.split('|');
  let t9='0,a,b,c,d,e';
  const a3=t9.split(',');

  document.getElementById('d36').innerHTML=a1[2];
  document.getElementById('d37').innerHTML=a2[3];
  document.getElementById('d38').innerHTML=a3[4];
  document.getElementById('d38').innerHTML=t7.charCodeAt(2);    //Ascii value shows
  
}

/*
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()  //removes all white spaces

String trimStart() //removes whitespaces at start of string
String trimEnd()   //removes whitespaces at end of string
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
*/
