//The Date object in JavaScript measures time by recording
//  how many milliseconds have elapsed since January 1, 1970 (UTC). 
//Think of it as JavaScript’s built-in calendar and clock combined into one.

let nowdate=new Date()//for current date and time
console.log(nowdate);

console.log(nowdate.toString());//monday january 19 2026 04:49:08 esto type ma ans
console.log(nowdate.toDateString());//monday january 19 2026
console.log(nowdate.toLocaleDateString());//1/19/2026



console.log(nowdate.getFullYear());//year
console.log(nowdate.getMonth());//month(0-11)since 0=january
console.log(nowdate.getDate());//day of month
console.log(nowdate.getHours());//now ko time

//likewise yo sabei documentation ma herne ,,
// dev ko documentation rmro xa

let userdate=new Date(2002,2,31,23,30)
console.log(userdate.toString());







