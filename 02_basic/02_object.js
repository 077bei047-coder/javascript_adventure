//Template literals are strings written using backticks (` ) instead of quotes.
//They let you write strings on multiple lines and insert values (variables) directly inside the string.
//They are also called template strings because they act like a template, 
//where placeholders are filled with actual values to create the final string.

//The Singleton pattern ensures that a class has only one instance
//  and provides a global point of access to it.

//That object can be reused wherever needed, 
//making it useful for things like:
//Configuration managers
//Database connections
//Logging services
//Global state management


//object literals
const keyvalue=Symbol("key1")//AS SYMBOL OR key value
const user={
    name:"Arati",
    age:20,
    email:"aratigoogle.com",
    isloggedIn:false,
}
console.log(user["email"]);//yo correct syntax
console.log(user.email);//yo incorrect syntax
console.log(user[keyvalue]);
//malai email change grna mannlago
user.email="aratichatgtp.com"
//to freeze the change of user,espaxi kunei ko value change grna mildeina
//Object.freeze(user)
user.email="aratimicrosoft.com"

console.log(user);

//to add greeting ,simply add function
user.greeting= function(){
    console.log("hello user");
    
}

console.log(user.greeting());

//now using singleton







