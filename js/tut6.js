// String: Properties, Methods & Template Literals

console.log('we are at tut 6');

const name = 'Wizard';
const idk = "hola"
const greeting = ',Good Morning There 🖐';
console.log( idk+ ' ' + name + greeting); // '' is use to give space between the value

let html;
html = "<h1> This Is My Heading</h1>"+
      "<p> this is paragraph </p>";

html = html.concat('hmmm',`sdfd`)  // concat is use to add strings in the existing strings
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html[0]);
// console.log(html[2]);
console.log(html.indexOf('This')); 
console.log(html.indexOf('sdbdsajfsdf'));
console.log(html.lastIndexOf('<')) ;
console.log(html.charAt(1));
console.log(html.endsWith('sdfd'));
console.log(html.endsWith('dasfdf'));
console.log(html.includes('This')); 
console.log(html.includes('fhfgh'));
console.log(html.substring(1,6));
console.log(html.slice(0,4));
console.log(html.split(" ")); 
console.log(html.split(">")); 
console.log(html.replace('This' , 'It'));

// Template Literals

let fruit = ['orange, apple, mangoes']

let fruit2 = ['watermelon','dates','lemon']

let myhtml = `Hello ${name}

<h1>I like ${fruit}, but i like ${fruit2} also </h1>


<div> this is div </div>`
 
document.body.innerHTML = myhtml

