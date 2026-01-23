//example of singleton
//enumerable vnekoo loop lagauna milne vneko hoo

const gmail={}
gmail.name="Arati Shrestha"
gmail.Id="123abc"
gmail.isLoggedIn="true"

console.log(gmail);

const regularuser={
    email:"someone@gmail.com",
    fullname:{
        userfirstname:"Arati",
        userlastname:"Shrestha"
    }
}
console.log(regularuser);

//for merging
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    2:"b"
}
const obj3=Object.assign(obj1,obj2)
const obj4=object.assign({},obj1,obj2)
const obj5=object.assign(...obj1,...obj2)
console.log(obj3);
console.log(obj4);
console.log(obj5);




