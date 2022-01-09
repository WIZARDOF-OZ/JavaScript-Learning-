console.log('tut13' + 'exercise no.1' );

let links = document.links;
let variable = 'github';
Array.from(links).forEach(function (element, index ,array) {
 if (element.href.includes(variable)) {
     console.log(element.href)
 }
})
