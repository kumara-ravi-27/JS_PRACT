function Random(){
  let t1,t2,t3,t4,t5,t6,t7,t8,t9,t10;
  
  t1=Math.random();
  t2=Math.floor(Math.random());  //returns 0

  t3=Math.floor(Math.random()*10);  //returns 0-9 values
  t4=Math.floor(Math.random()*11);  //returns 0-10 values
  t5=Math.floor(Math.random()*10 +1);  //returns 0-10 values

    document.getElementById('d1').innerHTML=t1 +'<br>' +t2 +'<br>' +t3 +'<br>' +t4 +'<br>' +t5 +'<br>' +t6 +'<br>' +t7 +'<br>' +t8 +'<br>' +t9 +'<br>' +t10 +'<br>';
    
}


function Random2(){


function MaxMin(min,max){

  return Math.floor(Math.random() * (max - min + 1) ) + min;

  //return Math.floor(Math.random() * (max-min) + 1) +min;

// return Math.floor(Math.random() * (10-1) + 1) + 1;  //also we can write

}

document.getElementById('d2').innerHTML=MaxMin(1,10);

}

function Fisher(){

  //for arrays
  const numbers=[40, 100, 1, 5, 25, 10];

  for(let i=0; i<numbers.length-1;i++){

  let j=Math.floor(Math.random()*i);

  let k=numbers[j];
  numbers[j]=numbers[i];
  numbers[i]=k;

  }
  document.getElementById('d2').innerHTML=numbers;

}
