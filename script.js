/* script.js */
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
  const href = link.getAttribute('href');
  if (href.startsWith('#')) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

  });
});

// Prevent form reload
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Message sent! (This is a placeholder)');
    });
  }
});

// Scroll to Top/Bottom
document.addEventListener('DOMContentLoaded', () => {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const scrollBottomBtn = document.getElementById('scrollBottomBtn');
  const form = document.querySelector('form');

  // Prevent form reload
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Message sent! (This is a placeholder)');
    });
  }

  // Scroll buttons always visible
  if (scrollTopBtn && scrollBottomBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    scrollBottomBtn.addEventListener('click', () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
  }
});

