// For, While & Do while Loops in JavaScript
console.log(`Welcome to Tut 9 `);

// There are three General loops in Js: For, While and Do-While Loops

// For Loops

// let a = 34;
//  a += 1;
// a++
// console.log(a);


// for (let i = 0; i < 100;i++) { // First we assign *I* as 0 then after we do *<*(less than) sign then we add two numbers with *I* then we run it using console.log().
// // When it prints the number it goes upto 99 then its stop after stopping it adds two number , when it adds two number its make the statement false . Hence only upto  99 numbers are print;
//    console.log(i, typeof(i));
// }

// While Loops

// let j = 0;
// while (j<10) {
//     console.log(j+1);
//     j +=1; // don't forget to use +=1 when doing loop cuz if you forget then it go for infinity and you browser will stop working!!!!
// } 

// Do While

// let k = 110; // Do while is same like while loop , but the difference between do while and while loop is that if the given statement is false then also it will work for one time then it will stop but in above loop when the statement is wrong it stops.

// do {
//     console.log(k + 1);
//     k += 1;
// } while (k < 10);


// Break Statement

// let f = 0;
// do {
//     console.log(f+1);
//     if( f === 5) { // when the value will print 5 then given statment will break by using break it means it will jump out of the loop
//         break; // Meaning of break is The break statement terminates the current loop, switch , or label statement and transfers program control to the statement following the terminated statement.
//     }
//     f+=1;
// }while( f <10);

// console.log('done')
  


// let g = 0;
// do {
   
//     if( g === 5) { // when we use continue it stops the execution after continue and jump to other iteration.
//         g +=1; // it will skip this iteration
//         continue; // The continue statement in JavaScript is used to jumps over an iteration of the loop. Unlike the break statement, the continue statement breaks the current iteration and continues the execution of next iteration of the loop. It can be used in for loop, while loop, and do-while loop.
//     }
//     console.log(g+1);
//     g+=1;
// }while( g <10);

// loop in array(for each loop)
// let arr = [1,3,4,6,8,7,9];
 
// arr.forEach(function (element,index,array) {
//     console.log(element,index,array);
// })

// for (let i = 0; i< arr.length; i++) {
//   const element = arr[i];

//   console.log(element)
//     }
// console.log(`ok`)

// Loop in object

let obj = {
    name: "Wizard",
    age:"maybe 17 idk really",
    type: "Very Dangerous Programmer",
    os:"Windows"
}
for(let key in obj) {
    console.log(`The ${key} of object is ${obj[key]}`)
}

console.log('done')
