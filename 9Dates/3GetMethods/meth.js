function method1(){
  var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10;
  var a,b,c;
  var date;

  a=new Date('2022-12-25');  months=0-12
//Fri Mar 25 2022 05:30:00 GMT+0530 (India Standard Time)

  //a=new Date(2022,11,22,3,40,30,0) // here months=1-12 
  //Tue Mar 22 2022 03:40:30 GMT+0530 (India Standard Time)

var months=['Jan','Feb','Mar','Apr','may','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

b=months[a.getMonth()];
c=days[a.getDay()];

  t1=a.getFullYear();
  t2=a.getMonth();
  t3=a.getDate();
  t4=a.getDay();
  t5=a.getHours();
  t6=a.getMinutes();
  t7=a.getSeconds();
  t8=a.getMilliseconds();
  t9=a.getTime();  //returns millisecs
  t10=Date.now();
  

  document.getElementById('d1').innerHTML=b +'<br>'+c +'<br>' ;
  
  document.getElementById('d2').innerHTML=a +'<br>' +t1 +'<br>' +t2 +'<br>' +t3 +'<br>' +t4 +'<br>' +t5 +'<br>' +t6 +'<br>' +t7 +'<br>' +t8 +'<br>' +t9 +'<br>' +t10 +'<br>';
    
}

function Years(){

  

  var min = 1000 * 60;
   hr = min* 60;
   day = hr * 24;
   yrs = day * 365;

  totalYrs=Math.round(Date.now() / yrs);

  document.getElementById('d3').innerHTML=totalYrs;

let d=new Date();
let e=d.getTimezoneOffset();    //difference (in minutes) between local time an UTC time:
document.getElementById('d4').innerHTML=e;

}
