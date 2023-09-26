// Do the below programs in anonymous function & IIFE

// 01. Print odd numbers in an array
//function
let a = [1,2,3,4,5,6,7,8,9];
let b = [9,11,12,13,14,15,16,17,18];
let c = [32,34,22,33,44,55,22,11,21,32,43];
console.log("Print odd numbers in an array in function");
function odd(u){
    for(var i = 0 ; i< u.length ; i++){
        if(u[i]%2!=0){
           console.log(u[i])
        } 
   }
}
odd(a);

//arrow function
console.log("Print odd numbers in an array in arrow function");
odd=(p)=>{
    for(var i = 0 ; i< p.length ; i++){
        if(p[i]%2!=0){
           console.log(p[i])
        } 
   }
}
odd(c);

//IIFE
console.log("Print odd numbers in an array in IIFE");
(function odd(l){
    for(var i = 0 ; i< l.length ; i++){
        if(l[i]%2!=0){
           console.log(l[i],[i]/* if need position */)
        } 
   }
})(b);

console.log("----------------------------------------------------");

// 02. Convert all the strings to title caps in a string array

let d = ["banana","orange","apple","mango"];
let qw = ["apple","mango","banana","orange"];
let wq = ["apple","orange","mango","banana"];

//function
console.log("Convert all the strings to title caps in a string array in function");
 function toProperCase(nam){
   for(let m = 0; m < nam.length ; m++){
        let kl = nam[m];
        dj =kl.charAt(0).toUpperCase()+kl.slice(1).toLowerCase();
        console.log(dj);
    } 
}
toProperCase(d);
8
//arrow function
console.log("Convert all the strings to title caps in a string array in arrow function");
toProperCase=(nam)=>{
   for(let m = 0; m < nam.length ; m++){
        let kl = nam[m];
        dj =kl.charAt(0).toUpperCase()+kl.slice(1).toLowerCase();
        console.log(dj);
    } 
}
toProperCase(wq);

//IIFE
console.log("Convert all the strings to title caps in a string array in IIFE");
 (function toProperCase(nam){
   for(let m = 0; m < nam.length ; m++){
        let kl = nam[m];
        dj =kl.charAt(0).toUpperCase()+kl.slice(1).toLowerCase();
        console.log(dj);
    } 
})(qw);


console.log("------------------------------------------------------");

// 03. Sum of all numbers in an array

let num = [1,2,3,4,5];
let umn = [3,4,5,6,7];
let mun = [5,6,7,8,9];

//function
console.log("Sum of all numbers in an array in function");
function sumOfAll(myNum){
    let sum = 0;
    for(i = 0; i<myNum.length;i++){
        sum +=myNum[i];
        console.log(sum);
    }
}
sumOfAll(num)

//arrow function
console.log("Sum of all numbers in an array in arrow function");
sumOfAll=(myNum)=>{
    let sum = 0;
    for(i = 0; i<myNum.length;i++){
        sum +=myNum[i];
        console.log(sum);
    }
}
sumOfAll(umn);

//IIFE
console.log("Sum of all numbers in an array in IIFE function");
(function sumOfAll(myNum){
    let sum = 0;
    for(i = 0; i<myNum.length;i++){
        sum +=myNum[i];
        console.log(sum);
    }
})(mun);

console.log("-------------------------------------------");

// 04. Return all the prime numbers in an array
let pri = [1,2,3,4,5,6,7,8,9,10];
let pri1 = [11,12,13,14,15,16,17,18,19,20];
let pri2 =[21,22,23,24,25,26,27,28,29,30];

