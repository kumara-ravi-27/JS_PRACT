function myFun1(){

  let txt='';
  let i=0;

  while(i<10){

    txt += 'the number is ' + i +'<br>';
    i++;

  }
  document.getElementById('d1').innerHTML=txt;

}


function myFun2(){
  let txt='';
  let i=0;
  
  do{

    txt += "the number is " +i+'<br>';
    //i++;
    //i =i+2;
    i +=2;

  }while(i<10);
  
  document.getElementById('d2').innerHTML=txt;
}

//comparing for loop and while loop
function myFun3(){

  const cars = ["BMW", "Volvo", "Saab", "Ford"];
  let txt='';
  let i=0;
  for (;cars[i];){
    txt +=cars[i]+'<br>';
    i++;
  }
  document.getElementById('d3').innerHTML=txt;
}


function myFun4(){

  const cars = ["BMW", "Volvo", "Saab", "Ford"];
  let txt='';
  let i=0;

  while(cars[i]){
  txt +=cars[i]+'<br>';
  i++;
  }
 document.getElementById('d4').innerHTML=txt;
}


function myFun5(){}
function myFun6(){}
function myFun7(){}
function myFun8(){}
function myFun9(){}
function myFun10(){}
