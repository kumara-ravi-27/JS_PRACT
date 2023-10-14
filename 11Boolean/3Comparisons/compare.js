function Vote(){
  
  let age=document.getElementById('age').value;
  let voter=(age<18)? "Not Eligible for Vote":"Eligible for vote";

document.getElementById('d1').innerHTML="Voter is " +voter;
}


function Name(){
  
  let name=null;
  //let name='Ravi';

  let txt='Missing'
  let result= name?? txt;

document.getElementById('d2').innerHTML='The Name is ' + result;
}



function Car(){

  const car={company:'Tata', model:'Latest', color:'white'};

  let details= car?.color;

  document.getElementById('d3').innerHTML=details;
     
}
