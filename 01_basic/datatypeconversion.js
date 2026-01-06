let score=20
console.log(typeof score);
//it give output number because the type of score is number

//if score value is given in string like
let age="20"
//since the number is in double quotation the java read it as string
let valueInNumber =Number(age)//here the string age is converted into number
console.log(typeof valueInNumber)

//"33" a number inside the double quotation can be change into number 
//but "33abc" cannot be change into number 
//if we try to change it into number it gives NaN(NOT A NUMBER)

let isLoggedIn=1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
//it convert the number 1 into true of boolean
//1=>true,0=>false,"Arati"=>true


let someNumber=24
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//HERE the 24 is number and we convert it into the string ,in type of stringnumber it shows it as a string

