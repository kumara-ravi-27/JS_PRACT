function myFun1(){

  const letters=new Set(['a','b','c','d','e']);

  document.getElementById('d1').innerHTML=letters; //diplays [object Set]
                                       // letters.value();   //returns [object Set Iterator]
  document.getElementById('d2').innerHTML=letters.size;
  
}


function myFun2(){

  const letters= new Set();

  let d='apple';
  let e='banana';

  //create values
  letters.add('a');
  letters.add('b');
  letters.add('c');
  letters.add('c');  //even u add same value it will take 1st one only
  letters.add('c');
  

  //adding variables
  letters.add(d);
  letters.add(e);

  document.getElementById('d3').innerHTML=letters.size;
}


function myFun3(){

  const letters =new Set(['a','b','c','d'])
  txt='';

  letters.forEach(myFun1);
  document.getElementById('d4').innerHTML=txt;

  function myFun1(value,index,array){
   txt += value +'<br>'
  }
}


function myFun4(){

  //above code can also write as follows
  const letters =new Set(['a','b','c','d']);
  txt='';

  letters.forEach(function(value){
    txt +=value +'<br>';
  })
  document.getElementById('d5').innerHTML=txt;

}


function myFun5(){

  const letters =new Set(['a','b','c','d']);
  txt='';

  for( const x of letters.values()){

    txt += x +'<br>'
  }
  document.getElementById('d6').innerHTML=txt;
}


function myFun6(){}
function myFun7(){}
function myFun8(){}
function myFun9(){}
function myFun10(){}
