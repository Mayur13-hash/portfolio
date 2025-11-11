// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Back-to-top button
const backToTop = document.createElement('button');
backToTop.textContent = '↑';
backToTop.className = 'back-to-top';
document.body.appendChild(backToTop);
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backToTop.classList.add('visible');
  else backToTop.classList.remove('visible');
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// IntersectionObserver for reveal animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Navbar scroll background effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = '#ffffffee';
    navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
  } else {
    navbar.style.background = '#ffffffcc';
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
  }
});

// Contact form (mailto)
const footerForm = document.querySelector('#footerContact');
if (footerForm) {
  footerForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = footerForm.name.value.trim();
    const email = footerForm.email.value.trim();
    const message = footerForm.message.value.trim();
    if (!name || !email || !message) {
      alert('Please fill in all fields before submitting.');
      return;
    }
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:ashtankarmayur@gmail.com?subject=${subject}&body=${body}`;
    footerForm.reset();
  });
}
