import './styles/style.css'
import $, { grep } from 'jquery'; // <--- YOU MUST ADD THIS LINE


//loader //jquery
$(window).on('load', function() {
  $('.loader').delay(500).fadeOut('slow');
  $('.load-wrapper').delay(500).fadeOut('slow');
});


//links error handling
const instagram = document.getElementById('instagram');

if (instagram) {
  instagram.addEventListener('click', function (e) {
    e.preventDefault();
    alert("This link is not available yet");
  });
}

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

//contact form 

const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', (e) => {
  // 🔐 CAPTCHA CHECK FIRST - with better validation
  
  // Check if grecaptcha is loaded
  if (typeof grecaptcha === 'undefined') {
    e.preventDefault();
    alert('reCAPTCHA is still loading. Please wait a moment and try again.');
    return;
  }

  const captchaResponse = grecaptcha.getResponse();

  // Check if captcha is actually completed
  if (!captchaResponse || captchaResponse.length === 0) {
    e.preventDefault();
    alert('Please complete the captcha before submitting.');
    return;
  }

  // If captcha is valid, show sending state and allow form to submit naturally
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;
  
  // Form will submit to FormSubmit.co via the action attribute
});

