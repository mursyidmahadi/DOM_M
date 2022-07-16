// We can create an element from the scratch with js

// create element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Create text node and append it as a child

li.append(document.createTextNode('hello from js'));

// Add id

li.id = 'new';

// Create a link

const link = document.createElement('a');

// Add class to link
link.className='delete-item-secondary-content';

// Add icon 
link.innerHTML='<i class="fa fa-remove"></i>'

// Append the link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);


console.log(li);

