//Creating, Removing & Replacing Elements
console.log("welcome to tut16");

let element = document.createElement("li");
let mytext = document.createTextNode('I am a text node')
element.appendChild(mytext)
//add a class name to the li element
element.className = "childul";
element.id = "createdLi";
element.setAttribute("title", "mytitle");
// element.title = `this is title`;
// element.innerText = "<b>Hello this is made by wizard</b>"; // but using innerText it will asign the element as text.
// element.innerHTML = "<b>Hello this is made by wizard</b>";// by using innerHTML we can use elements in it.
let ul = document.querySelector("ul.this");
ul.appendChild(element);
// console.log(ul);
// console.log(element);

// how to replace a element

let element2 = document.createElement("h3")
element2.id = 'element2'
element2.className = 'this is element2'
let textnode = document.createTextNode("this is a text node")
element2.appendChild(textnode)

// now replacing the element with the element variable
element.replaceWith(element2);

let myul = document.getElementById("myul")
myul.replaceChild(element, document.getElementById('li1'));
myul.removeChild(document.getElementById("li5"));


let hoi = element2.getAttribute('id')
hoi = element2.getAttribute('class')
hoi = element2.hasAttribute('class')
hoi = element2.hasAttribute('sdgdsfg')
element2.removeAttribute("id")
// element2.textContent = 'hi , this is a new text'
// console.log(element2,hoi)


// quick quiz

// let qq = document.createElement("h1")
// let text = document.createTextNode("go to CodewithHarry")
// qq.setAttribute('href',"https://www.codewithharry.com")
// qq.className = 'this is class'
// qq.id = 'this is id'
// qq.appendChild(text)
// element2.replaceWith(qq)
// console.log(qq)

let div = document.querySelector('div')
console.log(div)

let element3 = document.createElement("a")
element3.setAttribute("href","https://www.codewithharry.com")

console.log(element3)
let element4 = document.createElement("h3")
let element5 = document.createElement("b")

element4.appendChild(element5)
console.log(element4)
element3.appendChild(element4)
let text = document.createTextNode("Go to codeWithHarry")
element5.appendChild(text)
console.log(element5)
// element3.appendChild(element5)
div.appendChild(element3)
// let elem3 = document.createElement('a');
// elem3.setAttribute('href', 'https://www.codewithharry.com');

// let elem4 = document.createElement('h2');

// let elem5 = document.createElement('I');
// elem4.appendChild(elem5);

// console.log(elem4);
// elem3.appendChild(elem4);
// console.log(elem3);

// let text1 = document.createTextNode('Go to CodeWithHarry');
// elem5.appendChild(text1)
// console.log(elem5);

// div.appendChild(elem3);


