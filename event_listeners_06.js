// Select an element and add event listener

document.querySelector('.clear-tasks').addEventListener('click',runEvent);

function runEvent(e){
    // console.log('clicked');
    let val;
    val = e;
    console.log(val);

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    // Event Type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // Coord events related to the window
    val = e.clientY;
    val = e.clientX;

    // // Coord events related to the element
    val = e.offSetY;
    val = e.offSetX;

    console.log(val)
}