// Arrays and Objects in javascript


console.log('we are at tut 7.js and lets discuss about arrays');

let marks = [24, 34, 78, 56, 68, 90];
const fruits = ['Orange','Apple','Pineapple','Mango'];
const mixed = ['string',88,[3,5]];

const arr = new Array(23,44,55,121,'Orange');
console.log(arr +  mixed + fruits + marks)
console.log(arr);
console.log(mixed);
console.log(marks);
console.log(fruits[1]);
console.log(arr.length);
console.log(Array.isArray(arr)); // We can use this feature to check whether it is array or not

fruits[0] = 'Banana';
console.log(fruits);
let fruitselement = fruits[0];
console.log('element:', fruitselement);

let value = marks.indexOf(90);
console.log(value)


// Mutating or Modifying Arrays

 //marks.push('nice'); // Push is use to add new elements to the end of an array, and returns the new length of the array.
//marks.unshift(565); // Inserts new elements at the start of an array, and returns the new length of the array.
//marks.pop() // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
//marks.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
//marks.splice(0,4) //splice(start: number, deleteCount?: number): number[]. The zero-based location in the array from which to start removing elements.Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//marks.reverse() // Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
let marks2 = [1,2,3,4]
marks = marks.concat(marks2)
console.log(marks);

let Myobject = {
    'first name': "Wizard",
    Learning: "Javascript",
    IsActive: true ,
    marks: [3,5,7,8]
}
console.log(Myobject ,(typeof Myobject));
console.log(Myobject.IsActive);
console.log(Myobject['first name'])
console.log(Myobject.Learning)


