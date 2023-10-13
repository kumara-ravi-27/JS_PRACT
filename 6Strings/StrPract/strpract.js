function myFun1(){


let t1='0AbcdefghijklmNopQrstuvwxyz';
let t2='welcome ravi';
const a1=t2.split(' ')
let t4='all cats clever,Cats are pet animal';


document.getElementById('d1').innerHTML=t1.length;
document.getElementById('d2').innerHTML=t1.toUpperCase();
document.getElementById('d3').innerHTML=t1.toLowerCase();
document.getElementById('d4').innerHTML=t1.slice(4,8);
document.getElementById('d5').innerHTML=t1.slice(-12,-3);

document.getElementById('d6').innerHTML=t4;
document.getElementById('d7').innerHTML=t4.replace('cats','dogs');
document.getElementById('d8').innerHTML=t4.replace(/cats/g,'dogs');
document.getElementById('d9').innerHTML=t4.replaceAll(/Cats/g,'Dogs');
document.getElementById('d10').innerHTML=a1[1] + a1[0];

}

function myFun2(){

  
  let numb=27;
  let t3=numb.toString();
  let t5='     ravi   ';
  let t6=t5.trim();
  let t7=t5.trimStart();
  let t8=t5.trimEnd();
  let t9='raviKumar';

document.getElementById('d11').innerHTML=t3;
document.getElementById('d12').innerHTML=t3.padStart(4,'1');
document.getElementById('d13').innerHTML=t3.padEnd(4,'0');
document.getElementById('d14').innerHTML=t6.length;
document.getElementById('d15').innerHTML=t7.length;
document.getElementById('d16').innerHTML=t8.length;
document.getElementById('d17').innerHTML=t9.charAt(3);
document.getElementById('d18').innerHTML=t9.indexOf("i");
document.getElementById('d19').innerHTML=t9.charCodeAt(1);
document.getElementById('d20').innerHTML=t9.concat('',t8);



}
