// Software Developer Portfolio Logic - Gowtham K

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Hamburger Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking nav item
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 2. Dark / Light Mode Switcher
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
  });

  // 3. Dynamic Skills Filter Engine
  const filterTabs = document.querySelectorAll('.filter-tab');
  const skillCards = document.querySelectorAll('.skill-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      skillCards.forEach(card => {
        if (filterValue === 'all') {
          card.style.display = 'flex';
        } else if (card.classList.contains(filterValue)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Formspree AJAX Submission Integration
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);

      formStatus.textContent = "Sending message...";
      formStatus.style.color = "var(--text-muted)";

      try {
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          formStatus.textContent = "✓ Message sent successfully! I'll get back to you soon.";
          formStatus.style.color = "var(--secondary-accent)";
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        formStatus.textContent = "❌ Submission failed. Please try emailing directly.";
        formStatus.style.color = "#ef4444";
      }
    });
  }

});

// Global Function to Toggle Project Details
function toggleDetails(elementId) {
  const details = document.getElementById(elementId);
  if (details) {
    details.classList.toggle('hidden');
  }
}
