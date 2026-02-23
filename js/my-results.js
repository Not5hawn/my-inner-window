/* ===========================
   My Inner Window - My Results Page
   =========================== */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('myResultsContainer');
  if (!container) return;

  const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;

  if (!user) {
    container.innerHTML = `
      <div style="text-align:center; padding: var(--space-4xl) 0;">
        <h2>Sign in to view your results</h2>
        <p style="color: var(--text-muted); margin: var(--space-lg) 0;">Create a free account to save your personality test results across all three tests.</p>
        <button class="btn btn--primary btn--lg" onclick="openAuthModal('login')">Log In</button>
        <span style="display:inline-block; margin: 0 var(--space-sm); color: var(--text-muted);">or</span>
        <button class="btn btn--ghost btn--lg" onclick="openAuthModal('register')">Sign Up Free</button>
      </div>
    `;
    return;
  }

  const results = typeof getUserResults === 'function' ? getUserResults() : {};

  const TESTS = [
    {
      key: 'mbti',
      label: 'MBTI',
      badgeClass: 'history-card__badge--mbti',
      takeUrl: 'test.html',
      takeName: 'Take MBTI Test',
    },
    {
      key: 'enneagram',
      label: 'Enneagram',
      badgeClass: 'history-card__badge--enneagram',
      takeUrl: 'enneagram.html',
      takeName: 'Take Enneagram Test',
    },
    {
      key: 'bigfive',
      label: 'Big Five',
      badgeClass: 'history-card__badge--bigfive',
      takeUrl: 'bigfive.html',
      takeName: 'Take Big Five Test',
    },
  ];

  function formatDate(isoString) {
    if (!isoString) return '';
    const d = new Date(isoString);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }

  const cardsHTML = TESTS.map(test => {
    const r = results[test.key];
    if (r) {
      return `
        <div class="history-card">
          <span class="history-card__badge ${test.badgeClass}">${test.label}</span>
          <div class="history-card__type">
            <span class="history-card__emoji">${r.emoji}</span>
            <span class="history-card__label">${r.label}</span>
          </div>
          <div class="history-card__name">${r.name}</div>
          <div class="history-card__date">Taken ${formatDate(r.date)}</div>
          <div class="history-card__actions">
            <a href="${r.url}" class="btn btn--primary">View Results</a>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="history-card">
          <span class="history-card__badge ${test.badgeClass}">${test.label}</span>
          <p class="history-card__empty">— Not taken yet —</p>
          <div class="history-card__actions">
            <a href="${test.takeUrl}" class="btn btn--ghost">${test.takeName}</a>
          </div>
        </div>
      `;
    }
  }).join('');

  container.innerHTML = `<div class="history-grid">${cardsHTML}</div>`;

  // Mark the My Results nav link as active
  const myResultsLink = document.getElementById('myResultsLink');
  if (myResultsLink) myResultsLink.classList.add('nav__link--active');
});
