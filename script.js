// Personal Portfolio Functionality - Written by Gowtham K

document.addEventListener('DOMContentLoaded', () => {
  
  // Project Details Toggle Mechanism
  const toggleButtons = document.querySelectorAll('.toggle-btn');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const detailsElement = document.getElementById(targetId);

      if (detailsElement.style.display === 'block') {
        detailsElement.style.display = 'none';
        button.textContent = 'Details';
      } else {
        detailsElement.style.display = 'block';
        button.textContent = 'Close';
      }
    });
  });

  // Contact Form Submission Handler
  const contactForm = document.getElementById('portfolioContactForm');
  const feedbackToast = document.getElementById('feedbackMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('senderName').value;

      // Simulate form processing
      feedbackToast.textContent = `Thanks ${nameInput}, your message was captured!`;
      feedbackToast.style.color = '#38bdf8';

      // Reset Form fields
      contactForm.reset();

      // Clear feedback after 4 seconds
      setTimeout(() => {
        feedbackToast.textContent = '';
      }, 4000);
    });
  }

});
