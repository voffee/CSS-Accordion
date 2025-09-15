
// Declare Variables
const icon1 = document.querySelector('.icon-1')
const icon2 = document.querySelector('.icon-2')
const nthChildPosition = 2;

// Add Event Listeners
icon1.addEventListener('click', switchingClass)
icon2.addEventListener('click', switchingClass)

// Create Functions
function switchingClass(e) {
    // console.log(e.target.parentElement.parentElement.querySelector(`:nth-child(${nthChildPosition})`));

    const grandparent = e.target.parentElement.parentElement;
    const targetElement = grandparent.firstElementChild.nextElementSibling;
    console.log(e.target.parentElement.parentElement);
    console.log(targetElement);

    // e.target.parentElement.parentElement.querySelector(`:nth-child(${nthChildPosition})`).classList.toggle('is-closed');
    
    targetElement.classList.toggle('is-closed');
}
// Test Function
// alert("Hello World");