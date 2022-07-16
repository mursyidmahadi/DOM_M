// document.getElementById()
// It is going to select single element by its Id/

// const taskTitle = document.getElementById('task-title');
// console.log(taskTitle);

// Get access to info about the element
let val = taskTitle.id;

// // change the style of it
taskTitle.style.background='#333';
taskTitle.style.color='#fff';
taskTitle.style.padding='5px';

// // change the text content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText='By Tasks';
// textTitle.innerHTML= '<span>tasks</span>';

// // document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color='red';
// document.querySelector('ul li').style.color='green';

// // css pseudo selectors
// document.querySelector('li:last-child').style.color='blue';
// document.querySelector('li:nth-last-child(3)').style.color='pink';
// document.querySelector('li:nth-last-child(4)').style.color='Hello from DOM';
// document.querySelector('li:nth-last-child(odd)').style.color='#ccc';
// document.querySelector('li:nth-child(even)').style.color='#f4f4f4';

console.log(val);