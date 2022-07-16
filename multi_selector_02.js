// document.getElementsByClassName
// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[1]);
// items[1].style.color='red';

// document.getElementsByTagName()

// const lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[1]);
// lis[3].style.color='red';

// how to convert html collection to an array
// const lisArr = Array.from(lis);
// let val = lisArr.reverse();
// console.log(val);

// document.querySelectorAll()
// return node list

const items = document.querySelectorAll('li.collection-item');

console.log(items);

items.forEach(function(item,index){
    item.textContent= `${index}:Hello`;
});

const liOdd = docuemnt.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.background = '#CCC';
})    

for (let i = 0 ; i <liEven.length ; i++){
    liEvent[i].style.background='#f4f4f4';
}

