///note plz refer the notes

function myFun1(){

  let myName,add ,subt,x,y,z,a,b,c;

  myName="Ravi";
  myName += "Kumar";

  add="2";
  add +=6;

  subt="5";
  subt -=3;   //here subtraction doing so 5 string converts into number and 5-3 happen

  x= 15;   //  15=1111   shifts left 1111.  111100  ==4+8+16+32 
x <<=2;  //left shift operator

y= 15;   // 15=1111   shifts right  1111   0011
y >>=2;  //right shift operator

z= 15;   // 15=1111   shifts right  1111   0011
z >>>=2; ///Unsigned Right Shift Assignment Operator

a= -11; 
a <<2;

b= -11;
b>>=2;

c= -11; // see in notes 
c>>>=2;


  const results0=[myName,add,subt,x,y,z];
  const results1=[a,b,c]
//RaviKumar,26,2,60,3,3,-11,-3,1073741821
  document.getElementById('demo').innerHTML= results0 + "////" + results1;

}

function myFun2(){

let d,e,f,h,i,j,k,l;

  d=100;
  d &=5;  //and

  e =10;
  e |=5; //or

  f=10;
  f ^5; //xor

  h ??=5; //previously given then compares both and gives h value else take 5

  
  i=10;
  i &&=5;

  j=10;
  j ||=5;

  k= 27e5;   // e5= 1*100000

  l=27e-5; // -e5 =1/100000


  const results2=[d,e,f,h];
  const results3=[i,j,k,l]
  /*4,15,10,5
5,10,2700000,0.00027*/
  document.getElementById("demo2").innerHTML=results2 + '<br>' + results3;


}

function myFun3(){

  let results4,results5,results6;

  results4= BigInt('123456789012345678901234567890');  // need to get big numbers as it is;
  results5= BigInt(1234567890123456);         //upto 16 came as same 
  results6= BigInt(123456789012345678901234567890);    // it is greater tha 16 bit notknow to me will know;
/* 123456789012345678901234567890
   1234567890123456
   123456789012345677877719597056*/

  document.getElementById("demo3").innerHTML=results4 + '<br>' + results5 + '<br>' + results6;
}










