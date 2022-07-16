// replace

// create element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// Add text node
newHeading.appendChild(document.createTextNode('Task-list'));

// Select old heading
const oldHeading = document.getElementById('task-title');

// Select parent element
const cardAction = document.querySelector('card-action');

// Replace method
cardAction.replaceChild(newHeading.oldHeading);

// Remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[2]);