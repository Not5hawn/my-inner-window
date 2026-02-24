/* ===========================
   My Inner Window - Email Results via EmailJS
   =========================== */

(function () {
  const EMAILJS_SERVICE    = 'service_q8de2rf';
  const EMAILJS_TEMPLATE   = 'template_z02jlu2';
  const EMAILJS_PUBLIC_KEY = 'PTctCDHcfBnajONzw';

  window.initEmailResultsForm = function (data) {
    const form     = document.getElementById('emailResultsForm');
    const feedback = document.getElementById('emailResultsFeedback');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Re-query input on each submit to avoid stale reference
      const input = document.getElementById('emailResultsInput');
      const to    = input ? input.value.trim() : '';
      console.log('[EmailResults] to:', to);
      if (!to) return;

      const btn = form.querySelector('button[type=submit]');
      btn.disabled    = true;
      btn.textContent = 'Sending…';
      feedback.textContent = '';
      feedback.className   = 'email-results__feedback';

      try {
        // Pass publicKey inline — more reliable than emailjs.init()
        await emailjs.send(
          EMAILJS_SERVICE,
          EMAILJS_TEMPLATE,
          {
            to_email:    to,
            test_name:   data.testName,
            type_label:  data.typeLabel,
            type_name:   data.typeName,
            type_emoji:  data.typeEmoji,
            tagline:     data.tagline,
            overview:    data.overview,
            results_url: data.resultsUrl,
          },
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
        feedback.textContent = '✓ Sent! Check your inbox.';
        feedback.classList.add('email-results__feedback--success');
        if (input) input.value = '';
      } catch (err) {
        console.error('[EmailResults] Error:', err.status, err.text);
        feedback.textContent = 'Failed to send. Please try again.';
        feedback.classList.add('email-results__feedback--error');
      } finally {
        btn.disabled    = false;
        btn.textContent = 'Send';
      }
    });
  };
})();
