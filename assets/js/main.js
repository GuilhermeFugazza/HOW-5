(() => {
  'use strict';

  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('is-open'));
    document.querySelectorAll('.nav__menu a').forEach(a =>
      a.addEventListener('click', () => nav.classList.remove('is-open'))
    );
  }

  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__menu a[data-page]').forEach(a => {
    if (a.getAttribute('data-page') === current) a.classList.add('is-active');
  });

  const filters = document.querySelectorAll('[data-filter]');
  const products = document.querySelectorAll('[data-category]');
  filters.forEach(f => {
    f.addEventListener('click', () => {
      filters.forEach(x => x.classList.remove('is-active'));
      f.classList.add('is-active');
      const cat = f.dataset.filter;
      products.forEach(p => {
        const show = cat === 'all' || p.dataset.category === cat;
        p.style.display = show ? '' : 'none';
      });
    });
  });

  const form = document.querySelector('[data-form]');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const msg = form.querySelector('.form__msg');
      if (msg) {
        msg.classList.add('is-visible');
        setTimeout(() => msg.classList.remove('is-visible'), 5000);
      }
      form.reset();
    });
  }
})();
