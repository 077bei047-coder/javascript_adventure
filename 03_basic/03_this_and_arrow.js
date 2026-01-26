//The ++++this+++++ keyword refers to the context where a piece of code, such as a function's body, 
//is supposed to run.
// Most typically, it is used in object methods,
// where this refers to the object that the method is attached to, 
// thus allowing the same method to be reused on different objects.

const user={
        userName:"Arati",
        websiteName:"Edit Away",
        message:function(){
               console.log(`${this.userName},"welcome to the Edit Away website"`);
        }
}
user.message()
//RESULT:
//Arati,"welcome to the Edit Away website"



//this lai object sangei use grna sajilo hunxa ,
//function sanga garo hunxa,garnei sakideina


//+++++++ARROW FUNCTION++++++++++//
//syntax of arrow function
//()=>{}

const addTwo=(a,b)=>{
    return a+b;
}
console.log(addTwo(5,8))
//result:
//13

//another way also by using implicit conversion
//Implicit Type Conversion (Coercion):
//Implicit Type Conversion occurs automatically by the JavaScript.
//javascript ley aafei manxa ki tyo return garna khojeko ho ra teslai programmer ley vanirakhnu pardeina
const Two=(a,b)=> a+b;

console.log(Two(5,8))
//result:
//13


