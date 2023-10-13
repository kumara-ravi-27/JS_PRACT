function myFun1(){

  let q = myFun(3,3);
  document.getElementById('d2').innerHTML= q;
  
  function myFun(p1,p2){
    return (p1*p2);
  }
}


function span(){
  
let name='kumara_ravi_27';
const points = [40, 100, 1, 5, 25, 10];

document.getElementById("d3").innerHTML =name;
document.getElementById("d4").innerHTML =points;

}


function myFun2(){

  let x,y,z;
  let a,b,c,d,e,f;
  x=999.14
  y=5050;
  z=4020;
  t=3.14;
  u= -3.14;

  a=Math.round(x);
  b=Math.floor(x);     //always round down
  c=Math.ceil(x)   //always round up
  d=Math.sqrt(x)
  e=Math.max(x,y,z);
  f=Math.min(x,y,z);
  g=Math.abs(t);   //distance from 0
  h=Math.abs(u);  
  const array=[a,b,c,d,e,f,g,h];

  document.getElementById("d5").innerHTML=array;
  document.getElementById("d6").innerHTML=a +'<br>'+ b +'<br>'+ c +'<br>'+ d +'<br>'+ e +'<br>'+ f +'<br>'+g +'<br>'+ h;

}




/*
//not working in js file

function myFun2(p1,p2){

  return (p1+p2);
}

let x = myFun2(3,3);
document.getElementById('d2').innerHTML= x;

*/

