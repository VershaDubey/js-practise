// primitive 
// 7types : String, number, boolean , null,undefined,symbol,bigint
//call by value jo original value unka copy kr kr diya jata h aur jo changes hote h vo copy mai hota h sare changes


// referance type -> memory mai eska refernce value diractly allocate kiya jata h aapko 
// arrays, objects,functions

const heros =["doga", "minu"];//array
let myobj = {//objects
    name: "min",
    age:89,
}
const myFunction = function(){//function
    console.log("hello w");
}
console.log()