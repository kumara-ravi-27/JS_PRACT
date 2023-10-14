function goodDay(){

  if(new Date().getHours()<18){

    document.getElementById("d1").innerHTML = "GoodDay!";
  }
}


function goodDay2(){

  var hour=new Date().getHours();
  let greeting;

  if(hour<18){

    greeting = "GoodDay!";
  }else{
    greeting = "GoodEvening!";
  }
  document.getElementById("d2").innerHTML = greeting;

}

function goodDay3(){

  var hour=new Date().getHours();
  let greeting;

  if(hour<10){
    greeting = "GoodMorning!";
  }else if(hour<20){
    greeting = "GoodDay!";
  }else{
    greeting = "GoodEvening!";
  }

  document.getElementById("d3").innerHTML = greeting;

}
