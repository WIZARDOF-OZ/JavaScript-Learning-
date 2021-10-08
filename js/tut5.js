// type  of coversion and type coercion


// Type Conversion
console.log('Welcome to tut5');

let myvar;
myvar = String(29);
console.log(myvar, (typeof myvar));

let BooleanVar = String(true);
console.log(BooleanVar, (typeof BooleanVar));

let date = String(new Date());
console.log(date, (typeof date));

let array = String([1,2,3,4,5,6]);
console.log(array.length, (typeof array));

let i = 69;
console.log(i.toString());

let stri = Number(('443'));
stri = Number(('44R3'));
stri = Number((true));
stri = Number((false));
stri = Number([1,2,3,4,5,6]);
console.log(stri, (typeof stri));

let number = parseInt("34.87");
console.log(number, (typeof number));

let number2 = Number("34.87");
console.log(number2, (typeof number2));


let number3 = parseFloat("34.31");
console.log(number3.toFixed(4), (typeof number3));


let number4 = parseFloat("34");
console.log(number4.toFixed(5), (typeof number4));



//Type Coercion

let mystr = "634";
let mynum = 34;
console.log(mystr + mynum);

let mystr2 = Number('698');
let mynum2 = 34;
console.log(mystr2 + mynum2);








