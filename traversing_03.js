let val;

const list = document.querySelector('ul.collection');
const listItem= document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;

// Get Child node
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// Type of nodes
// 1 = Element
// 2 = Attribute
// 3 = textNode
// 8 = Comment
// 9 = Document itself
// 10 = docType

// How we can get children element node

val = list.children;
val = list.children[0];
val = list.children[0].textContent='hello';

// To get access to children of children
val = list.children[3].children[0];

// firstChild
val = list.firstChild;
val = list.firstElementChild;

// lastChild
val = list.lastChild;
val = list.lastElementChild;

// Count the child elements
val = list.childElementCount;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Get prev siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
