/* ===========================
   My Inner Window - Enneagram Results Display
   =========================== */

(function() {
  const container = document.getElementById('resultsContainer');
  if (!container) return;

  // Get type from URL param or sessionStorage
  const urlParams = new URLSearchParams(window.location.search);
  const typeFromURL = urlParams.get('type'); // e.g., "4w5"
  let result = null;
  let dominant = null;
  let wing = null;
  let typeLabel = null;

  // Parse type label from URL (e.g., "4w5" -> dominant=4, wing=5)
  function parseTypeLabel(label) {
    const match = label.match(/^(\d)w(\d)$/);
    if (!match) return null;
    return { dominant: parseInt(match[1]), wing: parseInt(match[2]) };
  }

  if (typeFromURL) {
    const parsed = parseTypeLabel(typeFromURL);
    if (parsed && ENNEAGRAM_TYPES[parsed.dominant]) {
      dominant = parsed.dominant;
      wing = parsed.wing;
      typeLabel = typeFromURL;
      // Try to load full result data from sessionStorage
      try {
        const saved = JSON.parse(sessionStorage.getItem('miw_enneagram_result'));
        if (saved && saved.dominantType === dominant) {
          result = saved;
        }
      } catch(e) { /* ignore */ }
    }
  }

  if (!dominant) {
    // Try sessionStorage directly
    try {
      result = JSON.parse(sessionStorage.getItem('miw_enneagram_result'));
      if (result) {
        dominant = result.dominantType;
        wing = result.wing;
        typeLabel = result.label;
      }
    } catch(e) { /* ignore */ }
  }

  if (!dominant || !ENNEAGRAM_TYPES[dominant]) {
    container.innerHTML = `
      <div style="text-align:center; padding: var(--space-4xl) 0;">
        <h2>No Results Found</h2>
        <p style="color: var(--text-muted); margin: var(--space-lg) 0;">Take the Enneagram test first to see your results.</p>
        <a href="enneagram.html" class="btn btn--primary btn--lg">Take the Test</a>
      </div>
    `;
    return;
  }

  const typeData = ENNEAGRAM_TYPES[dominant];
  const wingData = ENNEAGRAM_TYPES[wing];
  const isPremium = localStorage.getItem('miw_premium') === 'true';

  // Save to profile if logged in (deferred so auth.js is loaded first)
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof saveResult === 'function') {
      saveResult({ test: 'enneagram', label: typeLabel, name: typeData.name, emoji: typeData.emoji, url: 'enneagram-results.html?type=' + typeLabel });
    }
  });

  // Update page title
  document.title = `You are Type ${typeLabel} — ${typeData.name} | My Inner Window`;

  // Build type score bars HTML
  let typeScoresHTML = '';
  if (result && result.typeScores) {
    typeScoresHTML = `
      <div class="dichotomy-section">
        <h2>Your <span class="text-gradient">Type Scores</span></h2>
        ${result.typeScores.map(ts => {
          const typeInfo = ENNEAGRAM_TYPES[ts.type];
          const isDominant = ts.type === dominant;
          const isWing = ts.type === wing;
          return `
            <div class="dichotomy">
              <div class="dichotomy__labels">
                <span class="dichotomy__pole ${isDominant ? 'dichotomy__pole--active' : 'dichotomy__pole--inactive'}">
                  Type ${ts.type} — ${typeInfo.name}${isDominant ? ' ★' : ''}${isWing ? ' (Wing)' : ''}
                </span>
                <span class="dichotomy__pct ${isDominant ? 'dichotomy__pct--active' : ''}">${ts.percentage}%</span>
              </div>
              <div class="dichotomy__bar">
                <div class="dichotomy__fill" data-width="${ts.percentage}"
                  ${!isDominant ? 'style="background: var(--accent-teal);"' : ''}></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // Build premium content
  const premium = typeData.premium;

  container.innerHTML = `
    <!-- Type Header -->
    <div class="type-header">
      <span class="type-header__emoji">${typeData.emoji}</span>
      <h1 class="type-header__code"><span>Type ${typeLabel}</span></h1>
      <p class="type-header__name">${typeData.name}</p>
      <p class="type-header__tagline">${typeData.tagline}</p>
    </div>

    <!-- Wing Callout -->
    ${wingData ? `
      <div style="text-align:center; padding: var(--space-lg); margin-bottom: var(--space-xl); background: var(--gradient-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
        <p style="color: var(--text-secondary); margin: 0;">
          Your wing is <strong style="color: var(--accent-teal);">Type ${wing} — ${wingData.name}</strong>.
          This means you blend your core Type ${dominant} traits with ${wingData.name} characteristics.
        </p>
      </div>
    ` : ''}

    <!-- Type Score Bars -->
    ${typeScoresHTML}

    <!-- Free Content: Overview -->
    <div class="result-section">
      <h2 class="result-section__title">Overview</h2>
      <p class="result-section__text">${typeData.free.overview}</p>
    </div>

    <!-- Strengths: first item visible -->
    <div class="result-section">
      <h2 class="result-section__title">Strengths</h2>
      <div class="trait-list">
        <div class="trait-list__item trait-list__item--strength">${typeData.free.strengths[0]}</div>
      </div>
    </div>

    <!-- Premium Teaser + Paywall -->
    <div class="premium-section">
      <div class="premium-teaser">
        <div class="premium-teaser__fade">
          <!-- Remaining strengths -->
          <div class="result-section">
            <div class="trait-list">
              ${typeData.free.strengths.slice(1).map(s =>
                `<div class="trait-list__item trait-list__item--strength">${s}</div>`
              ).join('')}
            </div>
          </div>

          <!-- Growth areas -->
          <div class="result-section">
            <h2 class="result-section__title">Growth Areas</h2>
            <div class="trait-list">
              ${typeData.free.weaknesses.map(w =>
                `<div class="trait-list__item trait-list__item--weakness">${w}</div>`
              ).join('')}
            </div>
          </div>

          <!-- Top careers -->
          <div class="result-section">
            <h2 class="result-section__title">Top Career Paths for Type ${dominant}</h2>
            <div class="trait-list">
              ${premium.careers.slice(0, 3).map((c, i) =>
                `<div class="trait-list__item trait-list__item--strength"><strong>${i + 1}.</strong> ${c}</div>`
              ).join('')}
            </div>
          </div>

          <!-- Compatibility -->
          <div class="result-section">
            <h2 class="result-section__title">Most Compatible Types</h2>
            <div class="compat-grid">
              ${premium.compatibility.slice(0, 3).map(t => {
                const mate = ENNEAGRAM_TYPES[t];
                return `
                  <div class="compat-card">
                    <span class="compat-card__emoji">${mate ? mate.emoji : '✦'}</span>
                    <span class="compat-card__type">Type ${t}</span>
                    <span class="compat-card__name">${mate ? mate.name : 'Type ' + t}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Relationships -->
          <div class="result-section">
            <h2 class="result-section__title">Relationships & Love</h2>
            <p class="result-section__text">${premium.relationships}</p>
          </div>
        </div>
      </div>

      <!-- Paywall overlay -->
      <div class="premium-overlay">
        <div class="premium-overlay__icon">🔒</div>
        <h2 class="premium-overlay__title">Want the Full Breakdown?</h2>
        <p class="premium-overlay__text">Unlock your complete Type ${dominant} deep-dive — career paths, compatibility, relationship advice, and personal growth roadmap.</p>
        <div class="premium-overlay__price">$1.99</div>
        <p class="premium-overlay__price-note">One-time payment — lifetime access</p>
        <ul class="premium-features">
          <li>Top career paths ranked for your type</li>
          <li>Type compatibility breakdown</li>
          <li>In-depth relationship & love guide</li>
          <li>Personalized growth roadmap</li>
        </ul>
        <button class="btn btn--premium btn--lg" onclick="goToPremium()">
          Unlock Full Report — $1.99
        </button>
      </div>
    </div>

    <!-- Share Section -->
    <div class="share-section">
      <h3>Share Your Results</h3>
      <div class="share-buttons">
        <button class="share-btn share-btn--x" onclick="shareToX()">
          𝕏 Share on X
        </button>
        <button class="share-btn share-btn--facebook" onclick="shareToFacebook()">
          f Share on Facebook
        </button>
        <button class="share-btn share-btn--copy" onclick="copyResultLink()">
          🔗 Copy Link
        </button>
      </div>
    </div>

    <!-- Email Capture -->
    <div class="email-capture" id="emailCapture">
      <h3>Get More Personality Insights</h3>
      <p>Join our newsletter for tips, new tests, and exclusive content.</p>
      <form class="input-group" id="emailForm">
        <input type="email" class="input" placeholder="your@email.com" required id="emailInput">
        <button type="submit" class="btn btn--primary">Subscribe</button>
      </form>
      <p class="email-capture__success" id="emailSuccess">Thanks for subscribing! We'll keep you in the loop.</p>
    </div>

    <!-- Retake -->
    <div class="retake-banner">
      <a href="enneagram.html" class="btn btn--ghost">Retake Test</a>
    </div>

    <!-- Ad Slot -->
    <div class="ad-slot">
      <span class="ad-slot__label">Advertisement</span>
    </div>
  `;

  // Unlock premium content if already purchased
  if (isPremium) {
    const premiumSection = container.querySelector('.premium-section');
    if (premiumSection) premiumSection.classList.add('premium-unlocked');
  }

  // Redirect to Lemon Squeezy checkout
  window.goToPremium = function() {
    sessionStorage.setItem('miw_unlock_return', window.location.href);
    window.location.href = 'https://myinnerwindow.lemonsqueezy.com/checkout/buy/3d517452-fd04-4bb6-82e1-7f969d139043';
  };

  // Animate bars after render
  setTimeout(() => {
    document.querySelectorAll('.dichotomy__fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
  }, 300);

  // ---- Share Functions ---- //
  function getShareURL() {
    const base = window.location.origin + window.location.pathname;
    return `${base}?type=${typeLabel}`;
  }

  window.shareToX = function() {
    const text = encodeURIComponent(`I'm a ${typeLabel} (${typeData.name})! Discover your Enneagram type:`);
    const url = encodeURIComponent(getShareURL());
    window.open(`https://x.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=550,height=420');
  };

  window.shareToFacebook = function() {
    const url = encodeURIComponent(getShareURL());
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=550,height=420');
  };

  window.copyResultLink = function() {
    const url = getShareURL();
    navigator.clipboard.writeText(url).then(() => {
      showToast('Link copied to clipboard!');
    }).catch(() => {
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      showToast('Link copied to clipboard!');
    });
  };

  if (typeof showToast === 'undefined') {
    window.showToast = function(msg) {
      alert(msg);
    };
  }
})();
