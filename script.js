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


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("memberModal");
  const modalName = document.getElementById("modalName");
  const modalInfo = document.getElementById("modalInfo");
  const closeBtn = document.querySelector(".modal-close");

  const members = {
    jaidan: {
      name: "Jaidan — Vocals",
      info: "Frontman with a taste for chaos, high notes, and late-night riffs."
    },
    rohit: {
      name: "Rohit — Guitar",
      info: "Lead guitar. Glam riffs, dirty solos, and controlled distortion."
    },
    shaurya: {
      name: "Shaurya — Bass",
      info: "Low-end backbone. Groove-first, volume always at 11."
    },
    adithya: {
      name: "Adithya — Drums",
      info: "Relentless tempo, heavy hands, zero mercy."
    }
  };

  document.querySelectorAll(".member-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.member;
      modalName.textContent = members[key].name;
      modalInfo.textContent = members[key].info;
      modal.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});
