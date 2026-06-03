// Year
document.getElementById('yr').textContent = new Date().getFullYear();

// Burger menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
if(burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  document.querySelectorAll('.mob-link').forEach(l => {
    l.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { 
    if (e.isIntersecting) { 
      e.target.classList.add('visible'); 
      obs.unobserve(e.target); 
    } 
  });
}, { threshold: 0.1 });
revealEls.forEach(el => obs.observe(el));

// Form handler
window.handleSubmit = function(e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.style.display = 'block';
  msg.textContent = '✓ Thank you — we\'ll be in touch within 48 hours.';
  e.target.reset();
}