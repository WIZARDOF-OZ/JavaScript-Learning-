// HTML Element Selectors In JavaScript 


console.log('this is tut14');

/*
element selectors:

1. Single element selector,
2. Multiple element selectors


*/

// 1. Single element selector

let wizard  = document.getElementById('myfirst')
// wizard = wizard.className;
// wizard = wizard.childNodes;
// wizard = wizard.parentNode;
wizard.style.color = 'red'
wizard.style.background = 'blue'
wizard.innerText = 'wizard is op'
wizard.innerHTML = '<h1>wizard is op</h1>'

// console.log(wizard)

let sel = document.querySelector('#myfirst')
 sel = document.querySelector('.child')
 sel = document.querySelector('div')
 sel.style.color = 'green'

// console.log(sel)

// 2. Multiple wizard selectors

let elemens = document.getElementsByClassName('child')
 elemens = document.getElementsByClassName('container')
elemens = document.getElementsByTagName('div')
console.log(elemens)

// for (let index = 0; index < elemens.length; index++) {
//     const element = elemens[index];
//     console.log(element)
//     element.style.color = 'pink';
// }

 Array.from(elemens).forEach(element => {
     console.log(element)
     element.style.color = 'pink';
   element.style.background = 'black';
     element.style.text = 'pink';


 });
console.log(elemens[0].getElementsByClassName('child'))