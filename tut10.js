// Functions in Javascript



console.log("welcome to tut10");
// let name = 'Wizard';
// function greet(name, thank="Thank You"){ // we use thank="thank You"because incase i forgot to write the thank you message in line number 7<- here or any other. It will automatically asign the default msg *Thank You*.
//     console.log(`Wishing you a very Good Morning! ${name}  A new blessing, a new hope, a new light and a new day is waiting for you to conquer it. ${thank}`)
//     return "hi";
// }
// //console.log(greet)
// greet(name,"thank you!");

// let val = greet(name,"thanks");// Here if i do console.log then it will show undefined but if i do in return [any msg ] then it will asign that msg in the console.log inplace of undefined value.
// console.log(val)

// let name2 = "**Nice**"

// function greet(name2, thank="Thank You"){ 
// let msg = `Wishing you a very Good Morning! ${name2}  A new blessing, a new hope, a new light and a new day is waiting for you to conquer it. ${thank}`
//     return msg;
//     let hi = "hey gusssss"
//     return hi;
   
// }
// //console.log(greet)
// greet(name2,"thank you!");
// let val2 = greet(name2,"thanks");
// console.log(val2)

// let name3 = "Moidul"

// const mygreet = function(name3, thank="Thank You"){let msg = `Wishing you a very Good Morning! ${name3}  A new blessing, a new hope, a new light and a new day is waiting for you to conquer it. ${thank}`
// return msg;
// let hi = "hey gusssss"
// return hi;
// }
// let valll = mygreet(name3)
// console.log(valll)


// const myobject = {
//     name:"Wizard",
//     game: function(){
//         return "Pokemon Unite, Brawl Stars , COC, Pokemon GO"
//     }
// }
// console.log(myobject.game());

// arr = ["fruits","vegetables","ice cream","etc."]

// arr.forEach(function(element, array, index) {

//     console.log(element,array,index)
//     });
 

/// Scopes !
if(2){
var i = 2; /// let/Const has block Level Scope But Var has function level Scope!!
console.log(i);
}

console.log(i)
function hoi(name){
    let i = 23;
    console.log(i)
    return `This is ${name} hoi`
}
console.log(hoi("Wizard"),i)
















 
