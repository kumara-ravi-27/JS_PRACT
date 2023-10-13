function myFun1(){
let t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12;
let a,b;
a=123456789876543234567n;
b=5n;

t1=99999999999999999999999n;  //bigInt we use "n"
t2=BigInt(99999999999999999999999);  //not working
t3=typeof t1;
t4=a*t1;
t5=Number(b)/2;   //bigInt not contain decimals
t6=Number.MAX_SAFE_INTEGER;
t7=Number.MIN_SAFE_INTEGER;
t8=Number.MAX_VALUE;
t9=Number.MIN_VALUE;
t10=Number.isInteger(10);
t11=Number.isInteger(10.5);
t12=Number.isSafeInteger(1234567890123456);

document.getElementById('d1').innerHTML=t1 +'<br>' +t2 +'<br>' +t3 +'<br>' +t4 +'<br>' +t5 +'<br>' +t6 +'<br>' +t7 +'<br>' +t8 +'<br>' +t9 +'<br>' +t10 +'<br>'+t11 +'<br>' +t12 +'<br>' ;
}


/*
notes
Up to +- 9007199254740991 +(253-1)
BigInt is the second numeric data type in JavaScript (after Number).

With BigInt the total number of supported data types in JavaScript is 8:
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object
*/
