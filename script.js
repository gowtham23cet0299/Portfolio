// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('themeToggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  if (document.body.classList.contains('light-theme')) {
    themeToggleBtn.textContent = '🌙 Dark';
  } else {
    themeToggleBtn.textContent = '☀️ Light';
  }
});

// Toggle Project Extra Details
function toggleProject(projectId) {
  const details = document.getElementById(projectId);
  if (details.classList.contains('hidden')) {
    details.classList.remove('hidden');
  } else {
    details.classList.add('hidden');
  }
}

// Skill Filtering (Technical vs Soft Skills)
function filterSkills(category) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  const techSkills = document.querySelectorAll('.skill-tag.tech');
  const softSkills = document.querySelectorAll('.skill-tag.soft');

  if (category === 'all') {
    techSkills.forEach(el => el.style.display = 'inline-block');
    softSkills.forEach(el => el.style.display = 'inline-block');
  } else if (category === 'tech') {
    techSkills.forEach(el => el.style.display = 'inline-block');
    softSkills.forEach(el => el.style.display = 'none');
  } else if (category === 'soft') {
    techSkills.forEach(el => el.style.display = 'none');
    softSkills.forEach(el => el.style.display = 'inline-block');
  }
}

// Formspree AJAX Submission Handling
const form = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

form.addEventListener('submit', async function(e) {
  e.preventDefault();
  const data = new FormData(form);
  
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  });
  
  if (response.ok) {
    formResponse.innerHTML = "<p style='color: var(--primary); margin-top: 10px;'>Message sent successfully!</p>";
    form.reset();
  } else {
    formResponse.innerHTML = "<p style='color: red; margin-top: 10px;'>Oops! There was a problem submitting your form</p>";
  }
});
