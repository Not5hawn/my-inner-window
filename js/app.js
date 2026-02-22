/* ===========================
   My Inner Window - App (Shared)
   =========================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initSmoothScroll();
  setActiveNavLink();
  if (typeof initAuth === 'function') initAuth();
});

/* ---- Theme Toggle ---- */
function initTheme() {
  const saved = localStorage.getItem('miw_theme');
  let theme;

  if (saved) {
    theme = saved;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    theme = 'light';
  } else {
    theme = 'dark';
  }

  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('miw_theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.textContent = theme === 'dark' ? '\u{1F319}' : '\u{2600}\u{FE0F}';
  }
}

/* ---- Mobile Nav Toggle ---- */
function initNav() {
  const hamburger = document.querySelector('.nav__hamburger');
  const navLinks = document.querySelector('.nav__links');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close on link click
  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    }
  });
}

/* ---- Smooth Scroll for Anchor Links ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Highlight test cards when scrolling to #tests
        if (href === '#tests') {
          setTimeout(() => {
            target.querySelectorAll('.test-card').forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('card--highlight');
                setTimeout(() => card.classList.remove('card--highlight'), 800);
              }, i * 150);
            });
          }, 500);
        }
      }
    });
  });
}

/* ---- Highlight Current Page in Nav ---- */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });
}

/* ---- Toast Notification ---- */
function showToast(message, type = 'success', duration = 3000) {
  // Remove existing toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
