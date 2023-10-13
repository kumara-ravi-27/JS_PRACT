function myFun1(){
  let t1,t2,t3,t4,t5,t6,t7,t8,t9,t10;
  let a,b;

  const fruits = ["Banana", "Orange", "Apple", "Mango","kiwi"];
  
  t1=fruits;
  document.getElementById('d1').innerHTML=t1;
  t2=fruits.pop();
  document.getElementById('d2').innerHTML=t2;
  t3=fruits;
  document.getElementById('d3').innerHTML=t3;
  t4=fruits.push("Kiwi");                        //returns length
  document.getElementById('d4').innerHTML=t4;
  t5=fruits;
  document.getElementById('d5').innerHTML=t5;
  t6=fruits.shift();
  document.getElementById('d6').innerHTML=t6;
  t7=fruits;
  document.getElementById('d7').innerHTML=t7;
  t8=fruits.unshift('grape');
  document.getElementById('d8').innerHTML=t8;
  t9=fruits;
  document.getElementById('d9').innerHTML=t9;
  fruits[fruits.length]='pine';                //last element will assign
  t10=fruits;
  document.getElementById('d10').innerHTML=t10;
  

   // document.getElementById('d1').innerHTML=t1 +'<br>' +t2 +'<br>' +t3 +'<br>' +t4 +'<br>' +t5 +'<br>' +t6 +'<br>' +t7 +'<br>' +t8 +'<br>' +t9 +'<br>' +t10 +'<br>';
    
}

function myFun2(){

  let t11,t12,t13,t14,t15,t16;
  
  const fruits = ["Banana", "Orange", "Apple", "Mango","kiwi"];
  const boys=['ravi','sam','kam'];
  const girls=['mali','gali','rani'];
  const child=boys.concat(girls);
  const all=fruits.concat(boys,girls);
  const numb=[1,2,3,[4,5],6,[7,8],9];

  t11=fruits;
  document.getElementById('d11').innerHTML=t11;
  delete fruits[0]
  t12=fruits;
  document.getElementById('d12').innerHTML=t12;
  t13=child;
  document.getElementById('d13').innerHTML=t13;
  t14=all;
  document.getElementById('d14').innerHTML=t14;
  t15=numb;
  document.getElementById('d15').innerHTML=t15;
  t16=numb.flat();
  document.getElementById('d16').innerHTML=t16;


  }

  function splice(){

    let t17,t18,t19,t20;
    let a;
    let berry=["apple","orange","banana","cherry","grape"]

  a=berry;
  document.getElementById('da').innerHTML=a;

  t17=berry.splice(2,1,'lemon','mango');      //in place of banana we will get 2 items
  document.getElementById('d17').innerHTML=t17;
  t18=berry;
  document.getElementById('d18').innerHTML=t18;
  t19=berry.splice(1,2);                          //2 gone
  document.getElementById('d19').innerHTML=t19;
  t20=berry;
  document.getElementById('d20').innerHTML=t20;

/*
fruits.splice(x, y, "Lemon", "Kiwi");
The first parameter (x) defines the position where new elements should be added (spliced in).
The second parameter (y) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
The splice() method returns an array with the deleted items:

fruits.slice(1, 2);
The first parameter (1) defines from which element have to remove
The second parameter (2) defines how many elements should be removed.
*/

  }

  function slice(){

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(0);
document.getElementById("d21").innerHTML = fruits + "<br><br>" + citrus;
const citru = fruits.slice(1);
document.getElementById("d22").innerHTML = fruits + "<br><br>" + citru;
const citr = fruits.slice(2);
document.getElementById("d23").innerHTML = fruits + "<br><br>" + citr;
const cit = fruits.slice(1,3);                          //it forms 1,2 elements
document.getElementById("d24").innerHTML = fruits + "<br><br>" + cit;

/*
slice creates new array using original 
if u give silce(x), it removes starting x elements
*/
  }

  function sort(){

    const things=['ball','dog','apple','cat'];
    const num=['5','3','1','2','4'];
    document.getElementById("d25").innerHTML =things.sort();
    document.getElementById("d26").innerHTML =things;
    document.getElementById("d27").innerHTML =things.reverse();
    document.getElementById("d28").innerHTML =num.sort();
    document.getElementById("d29").innerHTML =num.reverse();


  }

