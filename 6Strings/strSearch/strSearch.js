function myFun1(){

  let text1='stump apple stick apple which going apple'
  const a1=text1.match('app');  // (/app/) (/app/g) (/app/gi)
  const a2=text1.matchAll('app'); //(/app/) (/app/g) (/app/gi)

  document.getElementById('d1').innerHTML=text1.indexOf('apple');
  document.getElementById('d2').innerHTML=text1.lastIndexOf('apple');
  document.getElementById('d3').innerHTML=text1.indexOf('cat');    //if text not found return -1
  document.getElementById('d4').innerHTML=text1.indexOf('apple',4);
  document.getElementById('d5').innerHTML=text1.indexOf('apple',11);
  document.getElementById('d6').innerHTML=text1.lastIndexOf('apple',16);  //it will work from last
  document.getElementById('d7').innerHTML=text1.search('stick');
  document.getElementById('d8').innerHTML=text1.search(/stick/);  //we can also give like this
  document.getElementById('d9').innerHTML=a1.length+ " "+a1;
  document.getElementById('d10').innerHTML=Array.from(a2);
  document.getElementById('d11').innerHTML=text1.includes('apple');  //  output=true or false
  document.getElementById('d12').innerHTML=text1.includes('apple',12);  //  search after nth bit
  document.getElementById('d13').innerHTML=text1.startsWith('apple');  //   output=true or false
  document.getElementById('d14').innerHTML=text1.startsWith('apple',6)  // starts from 6th
  document.getElementById('d15').innerHTML=text1.endsWith('apple');
  document.getElementById('d16').innerHTML=text1.endsWith('stick',17); //text1 = 17bits 
}





/*
6
36
-1
6
18
6
12
12
1 app
app,app,app
true
true
false
true
true
true
*/
/*
notes:indexOf and search both look similar?
The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
startsWith(),endsWith() method is not supported in Internet Explorer.
*/

/*
String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()
*/
