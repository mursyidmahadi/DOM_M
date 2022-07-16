// document.querySelector('.card-title').addEventListener('click',function(){
//     console.log('Card title clicked');
// })

// document.querySelector('.card-content').addEventListener('click',function(){
//     console.log('Card content clicked');
// })

// document.querySelector('.card').addEventListener('click',function(){
//     console.log('Card clicked');
// })

// document.querySelector('.row').addEventListener('click',function(){
//     console.log('Row clicked');
// })

// document.querySelector('.container').addEventListener('click',function(){
//     console.log('Container clicked');
// })

// Event delegation

const delItem = document.querySelector('.delete-item');

document.body.addEventListener('click',deleteItem);

function deleteItem(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove()
    }
}