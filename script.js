// Change text content dynamically
document.querySelector('.hero h1').textContent = "Welcome to the Ultimate Burger Experience!";
document.querySelector('.hero p').textContent = "Taste the best burgers in town, crafted just for you.";
document.querySelector('.card h3').textContent = "Hungarian Burger";
// Modify CSS styles via JavaScript
const heroSection = document.querySelector('.hero');
heroSection.style.backgroundColor = '#ffe5b4'; // Light orange background
heroSection.style.padding = '3rem';
heroSection.style.borderRadius = '10px';


// Add or remove an element when a button is clicked
const contactSection = document.querySelector('.contact');
const form = contactSection.querySelector('form');

// Create a button to toggle the form visibility
const toggleButton = document.createElement('button');
toggleButton.textContent = "Toggle Contact Form";
toggleButton.style.marginTop = '1rem';
toggleButton.style.padding = '0.5rem 1rem';
toggleButton.style.backgroundColor = '#333';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';

// Append the button to the contact section
contactSection.appendChild(toggleButton);

// Add event listener to toggle the form visibility
toggleButton.addEventListener('click', () => {
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});