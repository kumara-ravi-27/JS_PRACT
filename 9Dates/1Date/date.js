function date(){

  var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10;
 var a,b;
  a =Date();   //returns todays date
  b=a.toString();
  c=new Date('1998-11-27');  //return date as it is with day, time 5:30 always greenwich
  
  t1= new Date();
  t2=new Date('Nov 27,2000 07:27:00');
  t3=new Date(1997,0,27,7,21,12,0);  // jan=0 ; dec=11; >12 overflows
  t4=new Date(2023,1,35,7,21,12,0);  //date over flows change into nxt month
  t5=new Date(2023,2,5,7,21,12,0);   //it is same as above
  t6=new Date(2023,3,5,7,21,12);
  t7=new Date(2023,4,5,7,21);
  t8=new Date(2023,5,5,7);   // we can also reduce up to month
  t9=new Date(2023,0);
  t10=new Date(2022);   //if we give only year it treats as millisecs


  document.getElementById('a').innerHTML=a;  //date converted into string
  document.getElementById('b').innerHTML=b;
  document.getElementById('c').innerHTML=typeof(a);


  document.getElementById('d1').innerHTML=t1 +'<br>' +t2 +'<br>' +t3 +'<br>' +t4 +'<br>' +t5 +'<br>' +t6 +'<br>' +t7 +'<br>' +t8 +'<br>' +t9 +'<br>' +t10 +'<br>';
    

//Sat Dec 27 1997 07:21:12 GMT+0530 (India Standard Time)

}

function AdvanceDates(){

  var t11,t12,t13,t14,t15,t16,t17,t18,t19,t20;
  var n=new Date();

t11=new Date(98,0,21);  //double or single digit yr taken as previous century
t12=new Date(9,1,28);
t13=new Date(1000000000); //it calc millisec from 1970 jan 1
t14=new Date(-1000000000);  // calc millisec back to 1970 jan 1
t15=new Date(2*24*60*60*1000);  //can take as milli secs
t16=new Date(172800000);  //same as above 2*24*60*60*1000=172800000
t17=new Date(0); //returns 1970 jan 1 5:30
t18=n.toDateString();  //date to a more readable format:
t19=n.toUTCString();    //date to a string using the UTC standard:
t20=n.toISOString();
  document.getElementById('d2').innerHTML= t11 +'<br>' +t12 +'<br>' +t13 +'<br>' +t14 +'<br>' +t15 +'<br>' +t16 +'<br>' +t17 +'<br>' +t18 +'<br>' +t19 +'<br>' +t20;

}
