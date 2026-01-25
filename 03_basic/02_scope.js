//Scope means where a variable can be used in your code.
//If a variable is inside a scope, you can use it there.
//If it is outside, you cannot access it.
//Code is divided into blocks (like functions or { })
//Variables declared inside a block are only usable inside that block
//Inner blocks (child scopes) can use variables from outer blocks (parent scopes)
//Outer blocks cannot use variables from inner blocks

//Global scope: The default scope for all code running in script mode.
//Module scope: The scope for code running in module mode.
//Function scope: The scope created with a function.

let a=20
if(true){
    let a=2
    console.log("Inner a: ",a);
  //a=2 ko scope yo braces vitra matra
    
}
console.log("outer a: ",a);

