function set1(){

  var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10;
  var a,b,c,d,e,f,g,h,i,j;

  a=new Date();
  t1=a.setFullYear(2020);

  b=new Date();
  t2=b.setFullYear(2020,1,14);

  c=new Date();
  t3=c.setMonth(0);

  d=new Date();
  t4=d.setDate(18);

  e=new Date();
  t5=e.setDate(e.getDate() + 20);

  f=new Date();
  t6=f.setHours(8);

  g=new Date();
  t7=g.setMinutes(35);

  h=new Date();
  t8=h.setSeconds(14);

  i=new Date();
  t9=i.setMilliseconds(420);   // it is not imp bcz not displays

/*
Mon Oct 05 2020 21:58:57 GMT+0530 (India Standard Time)
Fri Feb 14 2020 21:58:57 GMT+0530 (India Standard Time)
Thu Jan 05 2023 21:58:57 GMT+0530 (India Standard Time)
Wed Oct 18 2023 21:58:57 GMT+0530 (India Standard Time)
Wed Oct 25 2023 21:58:57 GMT+0530 (India Standard Time)
Thu Oct 05 2023 08:58:57 GMT+0530 (India Standard Time)
Thu Oct 05 2023 21:35:57 GMT+0530 (India Standard Time)
Thu Oct 05 2023 21:58:14 GMT+0530 (India Standard Time)
Thu Oct 05 2023 21:58:57 GMT+0530 (India Standard Time)
*/

  
    document.getElementById('d1').innerHTML=a +'<br>' +b +'<br>' +c +'<br>' +d +'<br>' +e +'<br>' +f+'<br>' +g +'<br>' +h +'<br>' +i +'<br>';
    
}

function compare(){

  let text='';

  var today=new Date();
  var someday=new Date();

  someday.setFullYear(2020,1,14);

  if(someday>today){
    text='It is Future date';
  }else{
    text='It is past date';
  }

  document.getElementById('d2').innerHTML=text;
  
}
