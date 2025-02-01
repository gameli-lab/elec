// js/script.js
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-in');
  const options = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => observer.observe(section));
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  // Get form data
  const formData = new FormData(this);

  // Send form data to the server (using Fetch API)
  fetch(this.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        this.reset(); // Clear the form
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Oops! Something went wrong. Please try again.');
    });
});