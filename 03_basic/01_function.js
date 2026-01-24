//A function is a reusable block of code that performs a specific task.
//It can take input values (called arguments), do some work, and give back a result (return a value).
//In JavaScript, functions are also objects.
//What makes them special is that they can be called to run code.
//Functions are called “first-class” objects, which means they can be used just like other values.

//For example:
//A function can be stored in a variable
//A function can be passed to another function as an argument
//A function can be returned from another function

function myname(){
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("I");
}
//myname//function ko reference matra vayo
myname()//aabachai execution ma gayo
//Ans:
//A
//R
//A
//T
//I

function addtwonumber(number1,number2){//number1 and number2 parameter
    console.log(number1 + number2);
    
}
addtwonumber(3,4)//3,4 argument ho
//ans:
//7
//function ko vitra defination bauna jj input linu hunxa sabei parameters ho.
//function call grda deko value lai argument vnininxa

function subtractTwoNumber(Number1,Number2){
  let result=Number1-Number2
  return result  
}
const result= subtractTwoNumber(8,2)
console.log("Result:",result);
//ans:
//Result: 6

function userLoggedIn(userName){
    return`${userName} just logged in!`
}
console.log(userLoggedIn("Arati"));
//ans:
//Arati just logged in!

