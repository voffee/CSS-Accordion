
// Declare Variables
const icon1 = document.querySelector('.icon-1')
const icon2 = document.querySelector('.icon-2')

// Add Event Listeners
icon1.addEventListener('click', switchingClass)
icon2.addEventListener('click', switchingClass)

// Create Functions
function switchingClass(e) {
    const grandparent = e.target.parentElement.parentElement;
    const targetElement = grandparent.firstElementChild.nextElementSibling;
    
    targetElement.classList.toggle('is-closed');
}
// Test Function
// alert("Hello World");