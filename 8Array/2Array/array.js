function myFun1(){
  let t1,t2,t3,t4,t5,t6,t7,t8,t9,t10;

  var cars=['tata','bmw','volvo','suzi','tesla',27];
  t1=cars;
  t2=cars[0];
  cars[1]='fer';
  t3=cars;
  
  const veh=[];   //when indivusual items given
  veh[0]='van';
  veh[1]='lorry';
  veh[2]='bus';
  t4=veh;
  t5=veh.sort();  //sorted and array updated
  t6=veh[2]; // shows updated array listed
  t7=veh.length;
  t8=veh[veh.length-1]  //prints last element
  t9=cars.pop();
  t10=cars.push(27);

    document.getElementById('d1').innerHTML=t1 +'<br>' +t2 +'<br>' +t3 +'<br>' +t4 +'<br>' +t5 +'<br>' +t6 +'<br>' +t7 +'<br>' +t8 +'<br>' +t9 +'<br>' +t10 +'<br>';
    
}


function myFun2(){

  let t11,t12;

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
document.getElementById("d2").innerHTML = text;
  

const veg=["tamato","carrot","brinj","potato"];
t11=veg.length;

  t12="<ul>"
  for(let j=0; j<t11; j++){
    t12 +="<ul>" + veg[j] +"</ul>";
  }
  document.getElementById('d3').innerHTML=t12;

}

