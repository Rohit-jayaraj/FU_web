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

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // stop default redirect

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    }).then(() => {
      alert("Message sent!");
      form.reset();
    }).catch(() => {
      alert("Error sending message. Try again.");
    });
  });
});



// Scroll to Top/Bottom
document.addEventListener('DOMContentLoaded', () => {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const scrollBottomBtn = document.getElementById('scrollBottomBtn');
  const form = document.querySelector('form');


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

