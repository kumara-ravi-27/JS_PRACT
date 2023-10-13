
function myFun1(){
    const car={type:'vehicle',wheel:'four',color:'white'};

    document.getElementById('demo1').innerHTML='The car type is ' + car.type;
    alert(car.type+' '+car.color);
}

function myFun2(){

  const person={
firstName:"ravi",
lastName:'thota',
age:27,
eyeColor:'black',
fullName:function(){
  return this.firstName +' '+ this.lastName;
}
  }
  document.getElementById('demo2').innerHTML= 'the age of Person is '+ person['age'];
  document.getElementById('demo3').innerHTML =person.fullName();
  document.getElementById('demo4').innerHTML =person.fullName;
  
}
x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object
