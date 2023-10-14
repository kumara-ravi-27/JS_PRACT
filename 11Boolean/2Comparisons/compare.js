function compare(){
  let t1,t2,t3,t4,t5,t6,t7,t8,t9,t10;
  let a,b;

 a=5;

const array1=[(a==8), (a==5), (a=='5'), (a===8), (a===5), (a==='5')];
const array2=[(a!=8), (a!=5), (a!='4'), (a!==8), (a!==5), (a!=='5')];
const array3=[(a>8), (a>5), (a>'5'), (a<8), (a<5), (a<'2')];
const array4=[(a>=8), (a>=5), (a>='5'), (a<=8), (a<=5), (a<='5')];
const array5=[(2<12), (2<'12'), (2<'john'), (2>'john'), ('2'<'12'), ('2'>'12'),('12'==='12')];
//true,true,false,false,false,true,true

t1=array1;
t2=array2;
t3=array3;
t4=array4;
t5=array5;

t6=(1<2 && 4>3) +'<br>'+(5>6 && 7<8);
t7=(1<2 || 4>3) +'<br>'+(5>6 || 7<8);
t8=(!(6===5)) +'<br>'+(!(6>5));


  
    document.getElementById('d1').innerHTML=t1 +'<br>' +t2 +'<br>' +t3 +'<br>' +t4 +'<br>' +t5 +'<br>' +t6 +'<br>' +t7 +'<br>' +t8 +'<br>' +t9 +'<br>' +t10 +'<br>';
    
/*

== equal to
=== equal value and equal type
!= not equal to
!== not equal( value and type)

*/
}

