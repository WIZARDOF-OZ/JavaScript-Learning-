// If , Else Conditionals & Switches in Javascript

console.log(`Welcome to Tut 8 `);
// const patientage = 27;
// const patientage2 = 39;
 const patientage3 = 18;
// const patientage4 = 10;
// const patientage5 = 7;
// const canDrive = true;
// const canDrive2 = false;
// const vari = 29;
// const age3 = 45;
// const age2 = 99;
// const age = 15; // single =(equal to) is use to assign the value

// if(age != 19) {  // double ==(equal to) is use to compare the given value and if we use !=(not equal to) then it will not evaluate the else statement as well as it will make the statement false.
//     console.log(`Age is not 19`)
// }


// //  if(age === 65) { // Here we use triple ===(equal to) so we it can check both the type and value that is given
// //       console.log(`Age is 65`)
// //      }

// if(age2 !== 99) { // if the both type and value doesn't match then evaluated it as true
//     console.log(`Age is not 99`)
// }

// else{

//     console.log(`Age is not 99`)

// }

// // else {
// //     console.log(`Age is not 65`)
// // }


// if (typeof  vari !== 'undefined') { // to check whether the variable is exist or not
//     console.log(`Vari is defined`);
// } else{

//     console.log(`Vari is not Defined`);
// }

// if (canDrive && age >18 ) { // When we use &&(and) the both condition should be true or it will show false
//     console.log(`You can drive`);
// } else{
//     console.log("You can't Drive");
// }

// if(age2 || vari >18) { // When we use ||(Or) then if one of condition is true then it show true
//     console.log(`You can drive`); 
//     } 
    
//     else{ 
//         console.log(`You can't drive`);
//     }


// if(patientage4 || patientage2> 18) {
//     console.log("The patient is age is above 18");
// }

// else {
//     console.log("The patient is age is not above 18")
// }

// if(patientage && patientage2 > 18) {
//     console.log("The patient is age is above 18");
// }

//  else {
//      console.log("The patient is age is not above 18")
// }

// if(patientage4 != 18) {
//     console.log("The patient is age is not above 18")
// }

// if(patientage5==8) {
//     console.log("The patient is age is not above 77")
// }

// else if(patientage5 ==7) {
//     console.log("The patient is age is above 7")
// }

// Ternary Operator

// console.log(age3== 45? 'Age is 45': 'Age is not 45')

// Switch Case Statements

switch (patientage3) {
    case 18:
    console.log("You are 18"); // if the age is 18 then it will show this message
break;

case 28:
    console.log("You are 28"); //if the age is 28 then it will show this message
break;

case 38:
    console.log("You are 38"); //if the age is 38 then it will show this message
break;

default: // If the upper statement doesn't match then it will show this message

    console.log("You are unknown age");
break;


}
