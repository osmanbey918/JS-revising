// When a web page is loaded, the browser creates a Document Object Model of the page.
// What is the DOM?
// The DOM is a W3C (World Wide Web Consortium) standard.

// The DOM defines a standard for accessing documents:

// "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

// The W3C DOM standard is separated into 3 different parts:

// Core DOM - standard model for all document types
// XML DOM - standard model for XML documents
// HTML DOM - standard model for HTML documents


// starting 
// All methods to access Html elements

// Most common method BY id
document.getElementById('firstDiv').innerHTML = 'Hello, i am Div accessed by ID';

// accessing by CLassName
const myclass = document.getElementsByClassName('accessingByClass');
myclass[0].innerHTML = 'Hello, i am accessed by my ClassName'

// accessing by TagNAme
const element = document.getElementsByTagName("span");
element[0].innerHTML= 'Hello, i am accessed by TagName'
// Remember by classname and tagname we get elements in array collection form that we get each by iterating

const x = document.querySelectorAll(".query");
(x).forEach(queue => {
    queue.innerHTML = 'I am accessing by query selector<br>';
});
// querySelectorAll method is different we can access elements by all the selectors in css