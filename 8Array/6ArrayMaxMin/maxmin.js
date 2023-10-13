function MAX(){
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("d1").innerHTML = ArrayMax(points);

function ArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
}


function MIN(){

  const number = [40, 100, 1, 5, 25, 10];
  document.getElementById('d2').innerHTML=ArrayMin(number);

  function ArrayMin(arr){

    let leng=arr.length;
    let min= Infinity;

    while(leng--){
      if(arr[leng]<min){
      min=arr[leng];
      }
    }
  return min;
}
}

// we can use functions in fun
function myFun3(){

  let prod = myFun(3,3);
  document.getElementById('d3').innerHTML= prod;
  
  function myFun(p1,p2){
    return (p1+p2);
  }
}





function myFun4(){
// practice some other time
  const cars=[
    {type:'tata',year:2010},
    {type:'bmw',year:2005},
    {type:'tesla',year:2020}
  ];
  
  cars.sort(function(a,b){return a.year-b.year});
  function displayCars(){
  }

  
}
