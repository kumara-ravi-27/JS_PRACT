

function myFun1(){

  let day;

 switch(new Date().getDay()){

    case 0:
      day='sunday';
      break;

    default:
      day='monday';
      break; 

    case 2:
      day='tuesday';
      break;

    case 3:
      day='wednesday';
      break;

    case 4:
      day='thursday';
        break; 
  
    case 5:
      day='friday';
        break;
  
    case 6:
      day='saturday';
        break;
  }

  document.getElementById('d1').innerHTML='Today is ' + day;
}


function myFun2(){

  let txt;
  let x=new Date().getDay();

  switch(x){

    case 0:
      txt='Today is sunday';
    break;
    case 6:
      txt='Today is saturday';
    break;
    default:
      txt='waiting for week end'
  }
  document.getElementById('d2').innerHTML= txt;
}

function myFun3(){


  switch('Banana') {
    case "Banana":
      alert("Hello")
      break;
    case "Apple":
      alert("Welcome")
      break;
    
  default:
      alert("Neither");
  }

}

