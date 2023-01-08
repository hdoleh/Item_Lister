//examine the document Object;
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title); document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all1);
console.log(document.all1[10]);
document.all1[10].textContent = "Heba Doleh";
console.log(document.forms);
console.log(document.links);
console.log(document.images);
console.log(document.getElementById("header-title"));

let headerTitle = document.getElementById("header-title");
let header = document.getElementById("main-header");
console.log(headerTitle);

headerTitle.textContent = "Hello";
headerTitle.innerText = "Goodbye";
console.log(headerTitle.innerText);
headerTitle.innerHTML = "<h3>Hello</h3>"
headerTitle.style.borderBottom = "solid 3px #220";

//GETELEMENTSBYCLASSNAME //
// let items = document.getElementByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
items[1].textContent = 'Hello';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundcolor = 'yellow';
// //gives error
//items.style.backgroundcolor = '#f4f4f4';

for(let i = 0; i < items.lenght; i++){
     items[i].style.backgroundcolor = '#f4f4f4';
}
// GETELEMENTBYTAGNAME //
let items100 = docment.getElementByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundcolor = 'yellow';
//gives error
items100.style.backgroundcolor = '#f4f4f4';

for(let i = 0; i < li.lenght; i++){
     li[i].style.backgroundcolor = '#f4f4f4';
}
// QUERYSELECTOR //
let header1 = docoment.querySelector("main-header");
header.style.borderBottom = "solid 4px #ccc";

let input = docoment.querySelector('input');
input.value = 'Hello World'

let submit = document.querySelector('input[type="submit"]');
submit.value = "SEND"

//let item = document.querySelector('.list-group-item');
//item.style.color = 'red';

let item = document.querySelector('.list-group-item:last-child');
item.style.color = 'blue';

let item1 = document.querySelector('.list-group-item:nth-child(2)');
item.style.color = 'coral';

// querySelector //
let title = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';
let odd = document.querySelectorAll('li:nth-child(odd)');
let enen = document.querySelectorAll('li:nth-child(even)');

for(let i =0; i < odd.lenth; i++){
    odd[i].style.backgroundcolor = '#f4f4f4';
    even[i].style.backgroundcolor = '#ccc';
}


//TRAVERSING THE DOM //
let itemList = document.querySelector('#itemes');
paraentElment
console.lo(itemList.parentElement);
itemList.parentElement.style.backgroundcolor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
consle.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[i]);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
consle.log(itemList.childNodes);

//console.log(itemList.children);
console.log(itemList.children[i]);
itemList.children[i].style.backgroundColor = 'yellow';

//FirstChild
console,log(itemList.firstChild);
// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello';


// LastChild
console,log(itemList.lastChild);
// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello4';


// nextSibling

consle.log(itemList.nextSibling)
// nextElementSibling
consle.log(itemList.nextElementSibling);

// previousSibling
consle.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

// createElement

// create a div

let newDiv = docment.createElement('div');

// Add class
newDiv.className = "hello";


// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title','Hello Div')

// create text node
let newDivText =document.createTextNode('Hellow World');

// Add text to div
newDiv.appendChild(newDivText);


let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');


consle.log(newDiv);

newDiv.style.fontsize = '30px';

container.insertBefore(newDiv, h1);

let button = document.getElementById('button').addEventListener
('click', function(){
    console,log(123);
});


function buttonClick(e){
console.log('button clicked');
document.getElementById('header-title').textContent = 'Changed';
document.querySelector('main').style.backgroundColor =
 '#f4f4f4';
 console.log(e);
console.log(e.target);
console.log(e.target.id);
console.log(e.target.className);
console.log(e.target.classList);
let output = document.getElementById('output');
output.innerHTML = '<h3>'+e.target.id+ '</h3>';

console.log(e.type);

console.log(e.clinentx);
console.log(e.clinenty);
console.log(e.offsetx);
console.log(e.offsety);

console.log(e.altKey);
console.log(e.ctrlkey);
console.log(e.shiftkey);
}
let button1 = document.getElementById('button');
let box = document.getElementById('box');


button1.addEventListener('click', runEvent);
button1.addEventListener('dblclick', runEvent);
button1.addEventListener('mousedown', runEvent);
button1.addEventListener('mouseup', runEvent);

box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);
box.addEventListener('mouseover', runEvent);
box.addEventListener('mouseout', runEvent);
box.addEventListener('mousemove', runEvent);



function runEvent(e){
   console.log('EVENT TYPE: ' +e.type);

   output.innerHTML= '<h3>Mouseex: '+e.offsetx+' </h3><h3>MouseY:'+e.offsety + '</h3>';

   document.body.style.backgroundColor = 'rgb('+e.offsetx+','+e.offsety+', 40)';
}




