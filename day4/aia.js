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
//Function
//Return all the prime numbers in an array in function
let pri = [1,2,3,4,5,6,7,8,9,10];
var z = pri;
var prime = [];

function isPrime(prim) {
    var id = prim / 2;
      for (var j = 2; j <= id; j++) {
       if ((prim % j) == 0) { 
        return false;
       } 
     }
     return true;
}
for (var i = 0; i < z.length; i++) {
  if (isPrime(z[i])) {
      prime.push(z[i])
  }
}
console.log(prime);

//arrow function
//Return all the prime numbers in an array in arrow function
let pri1 = [11,12,13,14,15,16,17,18,19,20];
var x = pri1;
var prim = [];

isPrime=(primea)=> {
    var id = primea / 2;
      for (var j = 2; j <= id; j++) {
       if ((primea % j) == 0) { 
        return false;
       } 
     }
     return true;
}
for (var i = 0; i < x.length; i++) {
  if (isPrime(x[i])) {
      prim.push(x[i])
  }
}
console.log(prim);

//IIFE
//Return all the prime numbers in an array in IIFE
let pri2 =[21,22,23,24,25,26,27,28,29,30];
var w = pri2;
var prme = [];

(function isPrime(prm) {
    var id = prm / 2;
      for (var j = 2; j <= id; j++) {
       if ((prm % j) == 0) { 
        return false;
       } 
     }
     return true;
})
for (var i = 0; i < w.length; i++) {
  if (isPrime(w[i])) {
      prme.push(w[i])
  }
}
console.log(prme);

console.log("--------------------------------------------");

// 05. Return all the palindromes in an array
//function
//Return all the palindromes in an array function
const ara = ['carecar', 1344, 12321, 'did', 'cannot','mom', 'dad', 'abcde', 'racecar', 'momom'];
function isPalindrome(elm){
   const strg = String(elm);
   let i = 0;
   let j = strg.length - 1;
   while(i < j) {
      if(strg[i] === strg[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = ara => {
   return ara.filter(elm => isPalindrome(elm));
};
console.log(findPalindrome(ara));


//arrow
//Return all the palindromes in an array in arrow

const aray = ['did', 'cannot','mom','carecar', 1344, 12321, 'dad', 'abcde', 'racecar', 'momom'];
const isPalinrome = elmn => {
   const strg = String(elmn);
   let i = 0;
   let j = strg.length - 1;
   while(i < j) {
      if(strg[i] === strg[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalinrome = aray => {
   return aray.filter(elmn => isPalinrome(elmn));
};
console.log(findPalinrome(aray));

//Remove duplicates from an array
//function
let anyArr = [1,2,3,3,3,4,5,5];

function arr (array){
    let duplicate = [...new Set(array)];
    console.log(duplicate);
}
arr(anyArr);

//IIFE
let anyAr = [6,7,7,7,8,6,9,10,6,7];
(function(array){
    let duplicate = [...new Set(array)];
    console.log(duplicate);
})(anyAr);