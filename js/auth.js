/* ===========================
   My Inner Window - Auth Module
   =========================== */

const AUTH_USERS_KEY = 'miw_users';
const AUTH_CURRENT_KEY = 'miw_current_user';

/* ---- SHA-256 Hashing via Web Crypto API ---- */
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/* ---- Storage Helpers ---- */
function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_USERS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
  const email = localStorage.getItem(AUTH_CURRENT_KEY);
  if (!email) return null;
  const users = getUsers();
  return users.find(u => u.email === email) || null;
}

function setCurrentUser(email) {
  localStorage.setItem(AUTH_CURRENT_KEY, email);
}

function clearCurrentUser() {
  localStorage.removeItem(AUTH_CURRENT_KEY);
}

/* ---- Validation ---- */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getPasswordRequirements(password) {
  return {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(password),
  };
}

function isPasswordValid(password) {
  const reqs = getPasswordRequirements(password);
  return Object.values(reqs).every(Boolean);
}

/* ---- Auth Actions ---- */
async function registerUser(name, email, password) {
  const users = getUsers();
  if (users.some(u => u.email === email.toLowerCase())) {
    return { ok: false, error: 'An account with this email already exists.' };
  }

  const hashed = await hashPassword(password);
  users.push({
    email: email.toLowerCase(),
    password: hashed,
    name: name.trim(),
    createdAt: new Date().toISOString(),
  });
  saveUsers(users);
  setCurrentUser(email.toLowerCase());
  return { ok: true };
}

async function loginUser(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email.toLowerCase());
  if (!user) {
    return { ok: false, error: 'No account found with this email.' };
  }

  const hashed = await hashPassword(password);
  if (user.password !== hashed) {
    return { ok: false, error: 'Incorrect password. Please try again.' };
  }

  setCurrentUser(email.toLowerCase());
  return { ok: true };
}

function logoutUser() {
  clearCurrentUser();
}

/* ---- UI: Update Nav Auth State ---- */
function updateAuthUI() {
  const container = document.getElementById('authButtons');
  if (!container) return;

  const user = getCurrentUser();

  if (user) {
    container.innerHTML = `
      <div class="nav__user">
        <span class="nav__user-greeting">Hi, <strong>${escapeHTML(user.name)}</strong></span>
        <button class="btn btn--logout" id="logoutBtn">Log Out</button>
      </div>`;
    document.getElementById('logoutBtn').addEventListener('click', () => {
      logoutUser();
      updateAuthUI();
      showToast('You have been logged out.');
    });
  } else {
    container.innerHTML = `
      <button class="btn btn--signup" id="signupBtn">Sign Up</button>
      <button class="btn btn--login" id="loginBtn">Log In</button>`;
    document.getElementById('loginBtn').addEventListener('click', () => openAuthModal('login'));
    document.getElementById('signupBtn').addEventListener('click', () => openAuthModal('register'));
  }
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ---- UI: Auth Modal ---- */
function openAuthModal(tab = 'login') {
  const overlay = document.getElementById('authOverlay');
  if (!overlay) return;
  overlay.classList.add('active');
  switchAuthTab(tab);
  clearAuthForms();
  document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
  const overlay = document.getElementById('authOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });
  document.querySelectorAll('.auth-form').forEach(f => {
    f.classList.toggle('active', f.id === `${tab}Form`);
  });
}

function clearAuthForms() {
  document.querySelectorAll('.auth-form input').forEach(i => {
    i.value = '';
    i.classList.remove('input--error');
  });
  document.querySelectorAll('.auth-error, .auth-form__error').forEach(e => {
    e.classList.remove('visible');
    e.textContent = '';
  });
  updatePasswordChecklist('');
}

/* ---- UI: Password Requirements Checklist ---- */
function updatePasswordChecklist(password) {
  const reqs = getPasswordRequirements(password);
  const map = {
    'req-length': reqs.length,
    'req-uppercase': reqs.uppercase,
    'req-lowercase': reqs.lowercase,
    'req-number': reqs.number,
    'req-special': reqs.special,
  };

  Object.entries(map).forEach(([id, met]) => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.toggle('met', met);
      const icon = el.querySelector('.pw-icon');
      if (icon) icon.innerHTML = met ? '&#10003;' : '';
    }
  });
}

/* ---- UI: Form Handlers ---- */
function initAuthForms() {
  // Tab switching
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      switchAuthTab(tab.dataset.tab);
      clearAuthForms();
    });
  });

  // Switch links
  document.querySelectorAll('[data-auth-switch]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchAuthTab(link.dataset.authSwitch);
      clearAuthForms();
    });
  });

  // Close modal
  const overlay = document.getElementById('authOverlay');
  const closeBtn = document.getElementById('authModalClose');

  if (closeBtn) closeBtn.addEventListener('click', closeAuthModal);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeAuthModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAuthModal();
  });

  // Register form
  const regForm = document.getElementById('registerForm');
  if (regForm) {
    const pwInput = regForm.querySelector('#regPassword');
    if (pwInput) {
      pwInput.addEventListener('input', () => {
        updatePasswordChecklist(pwInput.value);
      });
    }

    regForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const errorEl = regForm.querySelector('.auth-form__error');
      errorEl.classList.remove('visible');

      const name = regForm.querySelector('#regName').value.trim();
      const email = regForm.querySelector('#regEmail').value.trim();
      const password = regForm.querySelector('#regPassword').value;
      const confirm = regForm.querySelector('#regConfirm').value;

      // Validate
      if (!name) {
        showFormError(errorEl, 'Please enter your name.');
        return;
      }
      if (!isValidEmail(email)) {
        showFormError(errorEl, 'Please enter a valid email address.');
        return;
      }
      if (!isPasswordValid(password)) {
        showFormError(errorEl, 'Password does not meet all requirements.');
        return;
      }
      if (password !== confirm) {
        showFormError(errorEl, 'Passwords do not match.');
        return;
      }

      const result = await registerUser(name, email, password);
      if (!result.ok) {
        showFormError(errorEl, result.error);
        return;
      }

      closeAuthModal();
      updateAuthUI();
      showToast(`Welcome, ${name}! Account created successfully.`);
    });
  }

  // Login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const errorEl = loginForm.querySelector('.auth-form__error');
      errorEl.classList.remove('visible');

      const email = loginForm.querySelector('#loginEmail').value.trim();
      const password = loginForm.querySelector('#loginPassword').value;

      if (!email || !password) {
        showFormError(errorEl, 'Please fill in all fields.');
        return;
      }

      const result = await loginUser(email, password);
      if (!result.ok) {
        showFormError(errorEl, result.error);
        return;
      }

      closeAuthModal();
      updateAuthUI();
      const user = getCurrentUser();
      showToast(`Welcome back, ${user.name}!`);
    });
  }
}

function showFormError(el, message) {
  el.textContent = message;
  el.classList.add('visible');
}

/* ---- Init ---- */
function initAuth() {
  updateAuthUI();
  initAuthForms();
}
