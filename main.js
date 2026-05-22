// ===== MAIN JS FILE =====

// --- Hamburger Menu ---
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  // Highlight active page link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

// --- Contact Form Validation ---
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    // Clear previous errors
    document.querySelectorAll('.error-msg').forEach(function (el) {
      el.style.display = 'none';
    });

    // Name validation
    const name = document.getElementById('name');
    if (!name.value.trim()) {
      document.getElementById('nameError').style.display = 'block';
      valid = false;
    }

    // Email validation
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      document.getElementById('emailError').style.display = 'block';
      valid = false;
    }

    // Phone validation (optional but if filled must be digits)
    const phone = document.getElementById('phone');
    if (phone && phone.value.trim() !== '') {
      const phonePattern = /^[0-9]{9,15}$/;
      if (!phonePattern.test(phone.value.trim())) {
        document.getElementById('phoneError').style.display = 'block';
        valid = false;
      }
    }

    // Project type
    const projectType = document.getElementById('projectType');
    if (projectType && projectType.value === '') {
      document.getElementById('projectTypeError').style.display = 'block';
      valid = false;
    }

    // Message
    const message = document.getElementById('message');
    if (!message.value.trim() || message.value.trim().length < 10) {
      document.getElementById('messageError').style.display = 'block';
      valid = false;
    }

    if (valid) {
      document.getElementById('successMsg').style.display = 'block';
      form.reset();
      setTimeout(function () {
        document.getElementById('successMsg').style.display = 'none';
      }, 5000);
    }
  });
}

// --- Team Names Random Shuffle (JS requirement) ---
function shuffleTeam() {
  const list = document.getElementById('teamList');
  if (!list) return;

  const items = Array.from(list.children);

  // Fisher-Yates shuffle
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    list.appendChild(items[j]);
    items.splice(j, 1);
    items.splice(i, 0, list.children[i]);
  }
}

// Run on page load
window.onload = function () {
  initNav();
  initContactForm();
  shuffleTeam();
};
