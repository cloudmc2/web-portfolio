import './styles/style.css'

// 1. Select the elements
const sidebar = document.querySelector('.nav-list');
const openBtn = document.querySelector('.open-button');
const closeBtn = document.querySelector('.close-button');

// 2. Add Event Listener to OPEN the menu
openBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevents the link from jumping to top of page
  sidebar.style.display = 'flex';
});

// 3. Add Event Listener to CLOSE the menu
closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  sidebar.style.display = 'none';
});