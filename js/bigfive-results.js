/* ===========================
   My Inner Window - Big Five Results Display
   =========================== */

(function() {
  const container = document.getElementById('resultsContainer');
  if (!container) return;

  // Get profile from URL param or sessionStorage
  const urlParams = new URLSearchParams(window.location.search);
  const profileFromURL = urlParams.get('profile'); // e.g., "O78-C45-E62-A81-N33"
  let result = null;
  let dimensions = null;

  if (profileFromURL) {
    // Reconstruct from URL profile code
    dimensions = parseProfileCode(profileFromURL);
    // Try to load full result data from sessionStorage
    try {
      const saved = JSON.parse(sessionStorage.getItem('miw_bigfive_result'));
      if (saved && saved.profileCode === profileFromURL) {
        result = saved;
        dimensions = result.dimensions;
      }
    } catch(e) { /* ignore */ }
  } else {
    // Try sessionStorage directly
    try {
      result = JSON.parse(sessionStorage.getItem('miw_bigfive_result'));
      if (result) {
        dimensions = result.dimensions;
      }
    } catch(e) { /* ignore */ }
  }

  if (!dimensions || dimensions.length !== 5) {
    container.innerHTML = `
      <div style="text-align:center; padding: var(--space-4xl) 0;">
        <h2>No Results Found</h2>
        <p style="color: var(--text-muted); margin: var(--space-lg) 0;">Take the Big Five test first to see your results.</p>
        <a href="bigfive.html" class="btn btn--primary btn--lg">Take the Test</a>
      </div>
    `;
    return;
  }

  const profileCode = result ? result.profileCode : profileFromURL;

  // Update page title
  document.title = 'Your Big Five Profile | My Inner Window';

  // Build dimension bars HTML
  let dimensionBarsHTML = `
    <div class="dichotomy-section">
      <h2>Your <span class="text-gradient">Big Five Profile</span></h2>
      ${dimensions.map(dim => {
        const profile = BIGFIVE_PROFILES[dim.key];
        if (!profile) return '';
        return `
          <div class="dichotomy">
            <div style="text-align:center; margin-bottom: var(--space-xs);">
              <span style="font-size: var(--fs-sm); font-weight: 600; color: var(--text-primary);">
                ${profile.emoji} ${profile.label}
              </span>
            </div>
            <div class="dichotomy__labels">
              <span class="dichotomy__pole ${dim.percentage < 50 ? 'dichotomy__pole--active' : 'dichotomy__pole--inactive'}">
                ${profile.poles[0]}
              </span>
              <span class="dichotomy__pole ${dim.percentage >= 50 ? 'dichotomy__pole--active' : 'dichotomy__pole--inactive'}">
                ${profile.poles[1]}
              </span>
            </div>
            <div class="dichotomy__bar">
              <div class="dichotomy__fill" data-width="${dim.percentage}"></div>
            </div>
            <div class="dichotomy__percentages">
              <span class="dichotomy__pct ${dim.percentage < 50 ? 'dichotomy__pct--active' : ''}">${100 - dim.percentage}%</span>
              <span class="dichotomy__pct ${dim.percentage >= 50 ? 'dichotomy__pct--active' : ''}">${dim.percentage}%</span>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Split dimensions: first 1 free (Openness), remaining 4 behind paywall
  const freeDimensions = dimensions.slice(0, 1);
  const premiumDimensions = dimensions.slice(1);

  // Build free interpretive text (first 3 dimensions with full summaries + all traits)
  let interpretiveHTML = freeDimensions.map(dim => {
    const profile = BIGFIVE_PROFILES[dim.key];
    if (!profile) return '';
    const levelData = profile.free[dim.level];
    if (!levelData) return '';
    return `
      <div class="result-section">
        <h2 class="result-section__title">${profile.emoji} ${profile.label}</h2>
        <p class="result-section__text">${levelData.summary}</p>
        <div class="trait-list">
          ${levelData.traits.map(t =>
            `<div class="trait-list__item trait-list__item--strength">${t}</div>`
          ).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Build premium teaser content (remaining dimensions + careers + growth for all)
  let premiumDimensionsHTML = premiumDimensions.map(dim => {
    const profile = BIGFIVE_PROFILES[dim.key];
    if (!profile) return '';
    const levelData = profile.free[dim.level];
    if (!levelData) return '';
    return `
      <div class="result-section">
        <h2 class="result-section__title">${profile.emoji} ${profile.label}</h2>
        <p class="result-section__text">${levelData.summary}</p>
        <div class="trait-list">
          ${levelData.traits.map(t =>
            `<div class="trait-list__item trait-list__item--strength">${t}</div>`
          ).join('')}
        </div>
      </div>
    `;
  }).join('');

  let premiumCareersHTML = dimensions.map(dim => {
    const profile = BIGFIVE_PROFILES[dim.key];
    if (!profile) return '';
    const premData = profile.premium[dim.level];
    if (!premData) return '';
    return `
      <div class="result-section">
        <h2 class="result-section__title">Career Paths — ${profile.label}</h2>
        <div class="trait-list">
          ${premData.careers.slice(0, 3).map((c, i) =>
            `<div class="trait-list__item trait-list__item--strength"><strong>${i + 1}.</strong> ${c}</div>`
          ).join('')}
        </div>
      </div>
    `;
  }).join('');

  let premiumGrowthHTML = dimensions.map(dim => {
    const profile = BIGFIVE_PROFILES[dim.key];
    if (!profile) return '';
    const premData = profile.premium[dim.level];
    if (!premData) return '';
    return `
      <div class="result-section">
        <h2 class="result-section__title">Growth — ${profile.label}</h2>
        <p class="result-section__text">${premData.growth}</p>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <!-- Profile Header -->
    <div class="type-header">
      <span class="type-header__emoji">📊</span>
      <h1 class="type-header__code"><span>Big Five</span></h1>
      <p class="type-header__name">Your Personality Profile</p>
      <p class="type-header__tagline">See where you fall on five scientifically validated dimensions of personality.</p>
    </div>

    <!-- Dimension Bars -->
    ${dimensionBarsHTML}

    <!-- Free Content: Per-dimension summaries + first trait -->
    ${interpretiveHTML}

    <!-- Premium Teaser + Paywall -->
    <div class="premium-section">
      <div class="premium-teaser">
        <div class="premium-teaser__fade">
          ${premiumDimensionsHTML}
          ${premiumCareersHTML}
          ${premiumGrowthHTML}
        </div>
      </div>

      <!-- Paywall overlay -->
      <div class="premium-overlay">
        <div class="premium-overlay__icon">🔒</div>
        <h2 class="premium-overlay__title">Want the Full Breakdown?</h2>
        <p class="premium-overlay__text">Unlock your complete Big Five deep-dive — career paths for each dimension, personalized growth strategies, and detailed trait analysis.</p>
        <div class="premium-overlay__price">$1.99</div>
        <p class="premium-overlay__price-note">One-time payment — lifetime access</p>
        <ul class="premium-features">
          <li>Career paths tailored to each dimension</li>
          <li>Detailed trait breakdown for all 5 dimensions</li>
          <li>Personalized growth strategies</li>
          <li>Complete personality profile analysis</li>
        </ul>
        <button class="btn btn--premium btn--lg" onclick="alert('Payment integration coming soon! Thank you for your interest.')">
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
      <a href="bigfive.html" class="btn btn--ghost">Retake Test</a>
    </div>

    <!-- Ad Slot -->
    <div class="ad-slot">
      <span class="ad-slot__label">Advertisement</span>
    </div>
  `;

  // Animate bars after render
  setTimeout(() => {
    document.querySelectorAll('.dichotomy__fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
  }, 300);

  // ---- Share Functions ---- //
  function getShareURL() {
    const base = window.location.origin + window.location.pathname;
    return `${base}?profile=${profileCode}`;
  }

  window.shareToX = function() {
    const text = encodeURIComponent('Check out my Big Five personality profile! Discover yours:');
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
