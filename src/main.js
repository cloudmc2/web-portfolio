import './styles/style.css'
import $, { grep } from 'jquery'; // <--- YOU MUST ADD THIS LINE


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

//contact form 


const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // 🔐 CAPTCHA CHECK FIRST
  const captchaResponse = grecaptcha.getResponse();

  if (!captchaResponse) {
    alert('Please complete the captcha.');
    return;
  }

  const formData = new FormData(form);
  formData.append("access_key", "2b42f558-d9ed-49b5-853f-156799e7d156");
  formData.append("g-recaptcha-response", captchaResponse);

  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Success! Your message has been sent.");
      form.reset();
      grecaptcha.reset(); // reset captcha
    } else {
      alert("Error: " + data.message);
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});
