function myFun1(){

  const fruits=new Map([

    ['apples',100],
    ['bananas',200],
    ['cust',300]
  ])
  document.getElementById('d1').innerHTML=fruits.get('apples');
  
}


function myFun2(){

  var a,b,c,d,e;
  const fruits=new Map([

    ['apples',100],
    ['bananas',200],
    ['cust',300]
  ])

  fruits.set('apples',400)

  a=fruits.get('apples');
  b=fruits.size;
  c=fruits.has('apples');

  
  fruits.delete('apples')
  d=fruits.size;
  e=fruits.has('apples');
  
  document.getElementById('d2').innerHTML= a+'<br>'+b+'<br>'+c+'<br>'+d+'<br>'+e;
  
}


function myFun3(){

  const fruits=new Map();

  fruits.set('apples',100);
  fruits.set('bananas',200);
  fruits.set('cust',300);


  document.getElementById('d3').innerHTML=fruits.get('apples');
}


function myFun4(){

  const fruits=new Map([

    ['apples',100],
    ['bananas',200],
    ['cust',300]
  ])

  txt='';

  fruits.forEach(function(value, key){

    txt +=key +'='+value+'<br>';
  })

  document.getElementById('d4').innerHTML=txt;
}


function myFun5(){

  const fruits=new Map([

    ['apples',100],
    ['bananas',200],
    ['cust',300]
  ])

  let txt='';
  for(const x of fruits){

    txt += x +'<br>';
  }
  document.getElementById('d5').innerHTML=txt;
}

