function index(){

  const numbers = [45, 4, 9, 16, 25];

  let txt='';
  numbers.forEach(iteration)
  document.getElementById('d2').innerHTML=txt;

  function iteration(value,index,array){

    txt += index + '<br>';
  }
}

//maps

function map(){

  const number1 = [45, 4, 9, 16, 25];
  let number2=number1.map(iteration2);

  document.getElementById('d3').innerHTML=number2;

function iteration2(value,index,array){
  return value*2;
}
}

//flatMap

function flatMap(){

  const number1 = [45, 4, 9, 16, 25];
 const number2=number1.flatMap((x)=> x*2);

  document.getElementById('d4').innerHTML=number2;
}

function filter(){

  const number1 = [45, 4, 9, 16, 25];
 const number2=number1.filter(iteration3)

  document.getElementById('d5').innerHTML=number2;

  function iteration3(value,index,array){

    return value >9;

  }
}

function reduce(){

 // The total (the initial value / previously returned value)

  const number1 = [45, 4, 9, 16, 25];
 const number2=number1.reduce(iteration4)
 //const number2=number1.reduce(iteration4,100)  //we can also initiate total from 100

  document.getElementById('d6').innerHTML=number2;

  function iteration4(total,value,index,array){

    return total + value;
    
  }
}

function every(){

  // The every() method checks if all array values pass a test.
  
   const number1 = [45, 4, 9, 16, 25];
  const number2=number1.reduce(iteration5)
 
   document.getElementById('d7').innerHTML=number2;
 
   function iteration5(value,index,array){
 
     return value > 9;
     
   }
 }

 function some(){

  //checking every value is passed or not 

  const number1 = [45, 4, 9, 16, 25];
  const number2=number1.some(iteration6);

  document.getElementById('d7').innerHTML=number2;

  function iteration6(value,index,total){

    return value>16;
  }
 }

function find(){

//returns only starting greater value

  const number1 = [45, 4, 9, 16, 25];
  const number2=number1.find(iteration7);

  document.getElementById('d8').innerHTML=number2;

  function iteration7(value,index,array){

    return value>9;
  }
}

function findIndex(){

  //finding Index
  
    const number1 = [45, 4, 9, 16, 25];
    const number2=number1.findIndex(iteration8);
  
    document.getElementById('d9').innerHTML=number2;
  
    function iteration8(value,index,array){
  
      return value<9;
    }
  }

function arrayFrom(){

  //Return an array object from any object with a length property or any iterable object.

  const myArray=Array.from('ABCDEFG');

  document.getElementById('d10').innerHTML=myArray;


}
  
function keys(){

  const fruit = ["Banana", "Orange", "Apple", "Mango"];
  const keys=fruit.keys();

  let text = "";
for (let x of keys) {
  text += x + "<br>";
}
document.getElementById("d11").innerHTML = text;
}


function entries(){

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let y of f) {
  document.getElementById("d12").innerHTML += y + "<br>";
}
}

function includes(){

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("d13").innerHTML = fruits.includes("Mango");
}

function spread(){

  const q1=['jan','feb','mar','apr'];
  const q2=['may','jun','jul','aug'];
  const q3=['sep','oct','nov','dec'];

  var year=[...q1,...q2,...q3];

  document.getElementById('d14').innerHTML=year;

}

function sets(){

  // Create a Set
const letters = new Set(["a","b","c","d"]);

// List all Elements
let txt = "";

letters.forEach(myFunction);
document.getElementById("d15").innerHTML = txt;

function myFunction(value) {
  txt += value + "<br>"; 
}
}

function sets2(){
  
  //above code can also write like this.
const letters = new Set(["a","b","c","d"]);


let text = "";
letters.forEach (function(value) {
  text += value + "<br>";
})

document.getElementById("d16").innerHTML = text;
}

/*

 
*/
