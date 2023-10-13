function myFun1(){
let a,b,c,d,e,f,g,h,i,j,k,l,m;
let x=100 ,y=50,z=2;

a=x+y;
b=x-y;
c=x*y;      
//m=Math.pow(2,3);//exponentiation
d=x/y;
e=(x%y); //modulo operator
f=-(x);

g=x++;   //here g value as 100 and x increments +1
h=g;     
i=x;           //incremented x prints

j=++y;
k=j;
l=y;
m=Math.pow(y,z);

x+=y;  //same as x=x+y;
x-+y;  //same as x=x-y;
x*=y;   // x=x*y;
x/=y;   //x=x/y;
 //u can see below egs


const Results=[a,b,c,d,e,f,g,h,i,j,k,l,m];
//150,50,5000,2,0,-100,100,100,101,51,51,51,2601
document.getElementById('demo').innerHTML=Results;


let n,o,p,q;
 
n=2;
o=4;
p=6;
q=2;

n+=o;   //here n=6
p/=q;   //here p=3
o-=p;  //here o=1
q*=n;  //here q=12


const Results2=[n,o,p,q];
//6,1,3,12

document.getElementById('demo2').innerHTML=Results2;



}
