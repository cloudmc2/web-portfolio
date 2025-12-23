import './styles/style.css'
import $ from 'jquery'; // <--- YOU MUST ADD THIS LINE


//loader //jquery
$(window).on('load', function() {
  $('.loader').delay(500).fadeOut('slow');
  $('.load-wrapper').delay(500).fadeOut('slow');
});

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


// scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('show');

  } else{
    entry.target.classList.remove('show');
    
  }

});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => {
  observer.observe(el);
});