/* ============================================
   BAUHAUS ARQUITETURA — JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── HEADER SCROLL ───
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // ─── ACTIVE NAV LINK ───
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ─── MENU HAMBÚRGUER ───
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Fechar ao clicar em link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── ANIMAÇÕES FADE-UP (Intersection Observer) ───
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // ─── FORMULÁRIO DE CONTATO ───
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.btn');
      const success = document.querySelector('.form-success');
      
      btn.innerHTML = '<span>Enviando...</span>';
      btn.disabled = true;

      setTimeout(() => {
        form.reset();
        btn.innerHTML = '<span>Enviar Mensagem</span>';
        btn.disabled = false;
        if (success) {
          success.style.display = 'block';
          setTimeout(() => success.style.display = 'none', 5000);
        }
      }, 1500);
    });
  }

});
