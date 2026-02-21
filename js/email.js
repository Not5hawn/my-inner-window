/* ===========================
   My Inner Window - Email Capture (MVP)
   Saves to localStorage + shows success message
   =========================== */

(function() {
  const form = document.getElementById('emailForm');
  const input = document.getElementById('emailInput');
  const success = document.getElementById('emailSuccess');

  if (!form) return;

  // Check if already subscribed
  const saved = localStorage.getItem('miw_email');
  if (saved) {
    form.style.display = 'none';
    success.classList.add('show');
    success.textContent = `You're subscribed as ${saved}. We'll keep you in the loop!`;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = input.value.trim();
    if (!email) return;

    // Save to localStorage (MVP — replace with real API later)
    localStorage.setItem('miw_email', email);

    // Collect for future export
    try {
      const list = JSON.parse(localStorage.getItem('miw_email_list') || '[]');
      list.push({ email, date: new Date().toISOString() });
      localStorage.setItem('miw_email_list', JSON.stringify(list));
    } catch(e) { /* ignore */ }

    // Show success
    form.style.display = 'none';
    success.classList.add('show');

    if (typeof showToast === 'function') {
      showToast('Thanks for subscribing!', 'success');
    }
  });
})();
