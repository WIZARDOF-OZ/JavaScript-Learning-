//Understanding DOM & Creating a Website Layout 

console.log("Welcome to tut12");

let win = document;
// win = document.all;
// win = document.body;
// win = document.domain;
// win = document.forms;
// win = document.forms[0];
// Array.from(document).forEach(function (element) {
//     console.log(element);
// })
// win = document.links[0].href;
Array.from(document.images).forEach(function (element,index,array) {
    console.log(element,index,array)
})

Array.from(document.scripts).forEach(function (element,index,array) {
    console.log(element,index,array)
})

 console.log(win)