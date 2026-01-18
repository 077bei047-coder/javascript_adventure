//string contatination in javaScript

//can be done using different methods like
//using +
//using +=
//using concat()
//using template literals

//allowing developers to build dynamic string for various usecase like 
//user messages or URLs

//using + operator
let firstname="Arati"
let lastname="Shrestha"
let fullname= firstname+" "+lastname
console.log(fullname);

//using += operator
let name="Arati"
name+=" "
name+="Shrestha"
console.log(name);

//using concat()
let str1="Good"
let str2="morning"
let full=str1.concat(" ",str2)
console.log(full);

//using template literals
let age= 23;
let rollno= 8;
let sentence= `My age is ${age} and my rollno is ${rollno}.`;
console.log(sentence);

//templates literals preferred for their simplicity and cleaner syntax
//reduces error and make maintainable especially dealing with multiple variable
//and complex string



