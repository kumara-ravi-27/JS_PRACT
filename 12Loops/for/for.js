function myFun1(){

  const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let txt='';

for(i=0;i<cars.length;i++){

  txt +=cars[i] +'<br>';
}
document.getElementById('d1').innerHTML=txt;
}


function myFun2(){
  
  let i,txt,len;
  for(i=0,txt='',len=6; i<len; i++){   //observe , and ;
    txt+='the number is '+i + '<br>';

  }
  document.getElementById('d2').innerHTML=txt;
}



function myFun3(){
  
  let i=0,txt='',len=6;
  for(; i<len; i++){   //observe , and ; we can alse give 1st expression before loop
    txt+='the number is '+i + '<br>';

  }
  document.getElementById('d3').innerHTML=txt;
}

function myFun4(){
  var i=5;
  for(var i=0;i<10;i++){

    document.getElementById('d4').innerHTML=i;  //here i=9
  }
  document.getElementById('d5').innerHTML=i;  //here i=10
}

function myFun5(){

  const numbers = [45, 4, 9, 16, 25];
  let txt='';
  for(let x in numbers){

    txt +=numbers[x] +'<br>';
  }
  document.getElementById('d6').innerHTML=txt;
}

function myFun6(){
  const numbers = [45, 4, 9, 16, 25];
  let txt='';
  for(let x of numbers){

    txt +=x +'<br>';
  }
  document.getElementById('d7').innerHTML=txt;

}

function myFun7(){
  const cars = ['tata','volvo','BMW'];
  let txt='';
  for(let x of cars){

    txt +=x +'<br>';
  }
  document.getElementById('d8').innerHTML=txt;

}

function myFun8(){
  const name = 'ravi';
  let txt='';
  for(let x of name){

    txt +=x +'<br>';
  }
  document.getElementById('d9').innerHTML=txt;

}


function myFun9(){
  const numbers = [45, 4, 9, 16, 25];

  txt='';
  numbers.forEach(myFunction);
  document.getElementById('d10').innerHTML=txt;

  function myFunction(value,index,array){

 txt +=value +'<br>';
 //we can also use forEach method but better to use for loop
  }

}








