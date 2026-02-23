/* ===========================
   My Inner Window - Results Display
   =========================== */

(function() {
  const container = document.getElementById('resultsContainer');
  if (!container) return;

  // Get type from URL param or sessionStorage
  const urlParams = new URLSearchParams(window.location.search);
  const typeFromURL = urlParams.get('type');
  let result = null;
  let typeCode = null;

  if (typeFromURL && MBTI_TYPES[typeFromURL.toUpperCase()]) {
    typeCode = typeFromURL.toUpperCase();
    // Try to load full result data from sessionStorage
    try {
      const saved = JSON.parse(sessionStorage.getItem('miw_result'));
      if (saved && saved.type === typeCode) {
        result = saved;
      }
    } catch(e) { /* ignore */ }
  } else {
    // Try sessionStorage
    try {
      result = JSON.parse(sessionStorage.getItem('miw_result'));
      if (result) typeCode = result.type;
    } catch(e) { /* ignore */ }
  }

  if (!typeCode || !MBTI_TYPES[typeCode]) {
    container.innerHTML = `
      <div style="text-align:center; padding: var(--space-4xl) 0;">
        <h2>No Results Found</h2>
        <p style="color: var(--text-muted); margin: var(--space-lg) 0;">Take the personality test first to see your results.</p>
        <a href="test.html" class="btn btn--primary btn--lg">Take the Test</a>
      </div>
    `;
    return;
  }

  const typeData = MBTI_TYPES[typeCode];
  const isPremium = localStorage.getItem('miw_premium') === 'true';

  // Save to profile if logged in (deferred so auth.js is loaded first)
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof saveResult === 'function') {
      saveResult({ test: 'mbti', label: typeCode, name: typeData.name, emoji: typeData.emoji, url: 'results.html?type=' + typeCode });
    }
  });

  // Update page title
  document.title = `You are ${typeCode} — ${typeData.name} | My Inner Window`;

  // Build dichotomy bars HTML
  let dichotomyHTML = '';
  if (result && result.dichotomies) {
    dichotomyHTML = `
      <div class="dichotomy-section">
        <h2>Your <span class="text-gradient">Dimensions</span></h2>
        ${result.dichotomies.map(d => {
          const [a, b] = d.poles;
          const pctA = d.percentages[a];
          const pctB = d.percentages[b];
          const aWins = d.winner === a;

          const poleNames = {
            E: 'Extraversion', I: 'Introversion',
            S: 'Sensing', N: 'Intuition',
            T: 'Thinking', F: 'Feeling',
            J: 'Judging', P: 'Perceiving'
          };

          return `
            <div class="dichotomy">
              <div class="dichotomy__labels">
                <span class="dichotomy__pole ${aWins ? 'dichotomy__pole--active' : 'dichotomy__pole--inactive'}">
                  ${a} — ${poleNames[a]}
                </span>
                <span class="dichotomy__pole ${!aWins ? 'dichotomy__pole--active' : 'dichotomy__pole--inactive'}">
                  ${poleNames[b]} — ${b}
                </span>
              </div>
              <div class="dichotomy__bar">
                <div class="dichotomy__fill" data-width="${pctA}"></div>
              </div>
              <div class="dichotomy__percentages">
                <span class="dichotomy__pct ${aWins ? 'dichotomy__pct--active' : ''}">${pctA}%</span>
                <span class="dichotomy__pct ${!aWins ? 'dichotomy__pct--active' : ''}">${pctB}%</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // Build premium content (shown blurred)
  const premium = typeData.premium;

  container.innerHTML = `
    <!-- Type Header -->
    <div class="type-header">
      <span class="type-header__emoji">${typeData.emoji}</span>
      <h1 class="type-header__code"><span>${typeCode}</span></h1>
      <p class="type-header__name">${typeData.name}</p>
      <p class="type-header__tagline">${typeData.tagline}</p>
    </div>

    <!-- Dichotomy Bars -->
    ${dichotomyHTML}

    <!-- Free Content: Overview -->
    <div class="result-section">
      <h2 class="result-section__title">Overview</h2>
      <p class="result-section__text">${typeData.free.overview}</p>
    </div>

    <!-- Strengths: title + first item visible, rest fades -->
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
            <h2 class="result-section__title">Top Career Paths for ${typeCode}</h2>
            <div class="trait-list">
              ${premium.careers.slice(0, 3).map((c, i) =>
                `<div class="trait-list__item trait-list__item--strength"><strong>${i + 1}.</strong> ${c}</div>`
              ).join('')}
            </div>
          </div>

          <!-- Romantic compatibility -->
          <div class="result-section">
            <h2 class="result-section__title">Most Compatible Romantic Partners</h2>
            <div class="compat-grid">
              ${premium.compatibility.slice(0, 3).map(t => {
                const mate = MBTI_TYPES[t];
                return `
                  <div class="compat-card">
                    <span class="compat-card__emoji">${mate ? mate.emoji : '✦'}</span>
                    <span class="compat-card__type">${t}</span>
                    <span class="compat-card__name">${mate ? mate.name : t}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Relationships & growth -->
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
        <p class="premium-overlay__text">Unlock your complete ${typeCode} deep-dive — career paths, romantic compatibility, relationship advice, and personal growth roadmap.</p>
        <div class="premium-overlay__price">$1.99</div>
        <p class="premium-overlay__price-note">One-time payment — lifetime access</p>
        <ul class="premium-features">
          <li>Top career paths ranked for your type</li>
          <li>Romantic compatibility breakdown</li>
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

    <!-- Email Results -->
    <div class="email-results-section">
      <h3>📧 Email My Results</h3>
      <p>Send a copy of your results to your inbox.</p>
      <form class="input-group" id="emailResultsForm">
        <input type="email" class="input" placeholder="your@email.com" required id="emailResultsInput">
        <button type="submit" class="btn btn--primary">Send</button>
      </form>
      <p class="email-results__feedback" id="emailResultsFeedback"></p>
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
      <a href="test.html" class="btn btn--ghost">Retake Test</a>
    </div>

    <!-- Ad Slot -->
    <div class="ad-slot">
      <span class="ad-slot__label">Advertisement</span>
    </div>
  `;

  // Wire up email results form
  if (typeof initEmailResultsForm === 'function') {
    initEmailResultsForm({
      testName:   'MBTI',
      typeLabel:  typeCode,
      typeName:   typeData.name,
      typeEmoji:  typeData.emoji,
      tagline:    typeData.tagline,
      overview:   typeData.free.overview,
      resultsUrl: getShareURL(),
    });
  }

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

  // Animate dichotomy bars after render
  setTimeout(() => {
    document.querySelectorAll('.dichotomy__fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
  }, 300);

  // ---- Share Functions ---- //
  function getShareURL() {
    const base = window.location.origin + window.location.pathname;
    return `${base}?type=${typeCode}`;
  }

  window.shareToX = function() {
    const text = encodeURIComponent(`I'm an ${typeCode} (${typeData.name})! Discover your personality type:`);
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
      // Fallback
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      showToast('Link copied to clipboard!');
    });
  };

  // Inline toast if app.js hasn't loaded yet
  if (typeof showToast === 'undefined') {
    window.showToast = function(msg) {
      alert(msg);
    };
  }
})();
