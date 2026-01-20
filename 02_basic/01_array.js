//The Array object, as with arrays in other programming languages, 
//enables storing a collection of multiple items under a single variable name, 
//and has members for performing common array operations

//In JavaScript ,arrays are not primitives

//JavaScript arrays are resizable and can contain a mix of different data types. 

//JavaScript arrays are not associative arrays
//so, array elements cannot be accessed using arbitrary strings as indexes, 
// but must be accessed using nonnegative integers (or their respective string form) as indexes

//JavaScript arrays are zero-indexed
// the first element of an array is at index 0,
//the second is at index 1, and so on

//JavaScript array-copy operations create shallow copies. 
//A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. 

const firstArray=[1,2,3,4,5]
console.log(firstArray[0]);

const myheros=["superman","ironman","spiderman"]
console.log(myheros[1]);

const secondArray=new Array(1,2,3,4,5,6,"Arati")
console.log(secondArray[6]);


