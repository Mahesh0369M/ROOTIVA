// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple contact form handler (demo only)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Sending...';
    await new Promise(res => setTimeout(res, 800));
    statusEl.textContent = 'Thanks! We’ll get back to you shortly.';
    form.reset();
  });
}
