function fisher(){

  const numbers=[40, 100, 1, 5, 25, 10];
  document.getElementById('d1').innerHTML= numbers;

  for(let i=numbers.length-1; i>0; i--){

    let j=Math.floor(Math.random()*(i));
  
    document.getElementById('d2').innerHTML=j;

    
    let k= numbers[i];
    numbers[i]=numbers[j];
    numbers[j]=k;
    document.getElementById('d3').innerHTML=j;
    document.getElementById('d4').innerHTML=numbers;



    let r=Math.floor(Math.random()*(i+1)); // returns 0 or 1   but y
    let a=Math.floor(Math.random()*(6));   // returns 0 to 5

    document.getElementById('d5').innerHTML=r +'<br>' +a;

  }
}

function random(){

  const number=[40, 100, 1, 5, 25, 10];
}
