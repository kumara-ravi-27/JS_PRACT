function myFun1(){

  var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10;

  var a,b,c,d,e,f,g,h,x;

  a=0;
  b='';
  c=null;
  d=x;
  e=false;
  f=10/'car';   //Nan
  g=false;
  h=new Boolean(false);
  i=new Boolean(false);

const Array1=[(9<10), Boolean(9<10), Boolean(100), Boolean(10.15+7-6), Boolean('hello'), Boolean('false'), Boolean('0'), Boolean('1')];

const Array2=[(9>10), Boolean(false), Boolean(0), Boolean(-0), Boolean(''), Boolean(9>10), Boolean(a), Boolean(b), Boolean(c), Boolean(d), Boolean(e), Boolean(f)]

  t1=Array1;
  t2=Array2;
  t3=typeof(g);
  t4=typeof(h);
  t5=(g==h);
  t6=(g===h);
  t7=(h==i);
  t8=(h===i);
  t9=f;

    document.getElementById('d1').innerHTML=t1 +'<br>' +t2 +'<br>' +t3 +'<br>' +t4 +'<br>' +t5 +'<br>' +t6 +'<br>' +t7 +'<br>' +t8 +'<br>' +t9 +'<br>' +t10 +'<br>';
    
}
