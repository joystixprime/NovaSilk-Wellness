// ============================================
// NovaSilk Wellness - Main JavaScript
// Luxury Spa Booking Service
// ============================================

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// Active Navigation Link
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', setActiveNav);

// Form Validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return true;

  const inputs = form.querySelectorAll('input, textarea, select');
  let isValid = true;

  inputs.forEach(input => {
    const value = input.value.trim();

    if (!value && input.hasAttribute('required')) {
      input.style.borderColor = '#e74c3c';
      isValid = false;
    } else if (input.type === 'email' && value && !validateEmail(value)) {
      input.style.borderColor = '#e74c3c';
      isValid = false;
    } else {
      input.style.borderColor = '#ddd';
    }
  });

  return isValid;
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateForm('contactForm')) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Send email via FormSubmit (free service)
    fetch('https://formsubmit.co/novasilkwellness@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        alert('Thank you! We will get back to you soon.');
        contactForm.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
      });
  });
}

// Booking Form Submission
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateForm('bookingForm')) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    const formData = new FormData(bookingForm);
    const data = Object.fromEntries(formData);

    fetch('https://formsubmit.co/novasilkwellness@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        alert('Booking request submitted! We will confirm within 24 hours.');
        bookingForm.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting your booking. Please try again.');
      });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Service Filtering (if applicable)
const filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const filter = this.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const services = document.querySelectorAll('.service-item');
      services.forEach(service => {
        if (filter === 'all' || service.getAttribute('data-category') === filter) {
          service.style.display = 'block';
        } else {
          service.style.display = 'none';
        }
      });
    });
  });
}

// Lazy Loading for Images (Performance)
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Initialize AOS (Animate On Scroll) - if included
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  });
}

// Export for module usage if needed
window.app = {
  validateEmail,
  validateForm,
  setActiveNav,
};
