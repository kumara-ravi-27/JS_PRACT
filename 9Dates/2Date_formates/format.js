function ISO(){

  var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10;
t1=new Date('2022-03-20');
t2=new Date('2022-03');  //with out day
t3=new Date('2022'); //without month
t4=new Date('2022-03-20T12:00:00Z');
t5=new Date("2015-03-25T12:00:00-06:30");  //not getting the format

t6=new Date('02/20/2022');  //js short dates
t7=new Date('feb ,20 2022'); //js long dates  or(feb/20/2022)
t8=new Date('20 feb 2022');  // mmm<=>dd
t9=Date.parse("March 21, 2012"); //parse converts into millisec
t10= new Date(1332268200000);

  document.getElementById('d1').innerHTML=t1 +'<br>' +t2 +'<br>' +t3 +'<br>' +t4 +'<br>' +t5 +'<br>' +t6 +'<br>' +t7 +'<br>' +t8 +'<br>' +t9 +'<br>' +t10 +'<br>';
    
}
