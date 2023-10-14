function myFun1(){

  txt='';

  for (let i=0;i<10;i++){
    if(i===3){break;}  

    txt +='the number is '+i+'<br>';
  }
  document.getElementById('d1').innerHTML=txt;
}




function myFun2(){

txt='';
for (let i=0;i<10;i++){
  if(i===3){continue;}    //continue is like skip 

  txt +='the number is '+i+'<br>';
}
document.getElementById('d2').innerHTML=txt;
}

function myFun3(){

  //javascript break

  const cars = ["BMW", "Volvo", "Saab", "Ford"];
  let text='';

  list:{

  text += cars[0] + "<br>"; 
  text += cars[1] + "<br>";
  text += cars[2] + "<br>"; 
  break list;
  text += cars[3] + "<br>"; 

  }
  document.getElementById('d3').innerHTML=text;
}


function myFun4(){}
function myFun5(){}
function myFun6(){}
function myFun7(){}
function myFun8(){}
function myFun9(){}
function myFun10(){}
