/* ===========================
   My Inner Window - Big Five Results Display
   =========================== */

(function() {
  const container = document.getElementById('resultsContainer');
  if (!container) return;

  // Get profile from URL param or sessionStorage
  const urlParams = new URLSearchParams(window.location.search);
  const profileFromURL = urlParams.get('profile');
  let result = null;
  let dimensions = null;

  if (profileFromURL) {
    dimensions = parseProfileCode(profileFromURL);
    try {
      const saved = JSON.parse(sessionStorage.getItem('miw_bigfive_result'));
      if (saved && saved.profileCode === profileFromURL) {
        result = saved;
        dimensions = result.dimensions;
      }
    } catch(e) { /* ignore */ }
  } else {
    try {
      result = JSON.parse(sessionStorage.getItem('miw_bigfive_result'));
      if (result) dimensions = result.dimensions;
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
  document.title = 'Your Big Five Profile | My Inner Window';

  const MEASURES = {
    O: 'Curiosity & Creativity',
    C: 'Organization & Discipline',
    E: 'Sociability & Enthusiasm',
    A: 'Empathy & Cooperation',
    N: 'Emotional Reactivity'
  };

  const LEVEL_LABELS = { high: 'High', mid: 'Moderate', low: 'Low' };

  // ---- OCEAN Overview: compact 5-bar summary ---- //
  const oceanOverviewHTML = `
    <div class="ocean-overview">
      <h2 class="ocean-overview__title">Your <span class="text-gradient">OCEAN Profile</span></h2>
      <div class="ocean-overview__bars">
        ${dimensions.map(dim => {
          const profile = BIGFIVE_PROFILES[dim.key];
          return `
            <div class="ocean-row">
              <span class="ocean-row__emoji">${profile.emoji}</span>
              <div class="ocean-row__main">
                <div class="ocean-row__name">${profile.label}</div>
                <div class="ocean-row__track">
                  <div class="ocean-row__fill" data-width="${dim.percentage}">
                    <div class="ocean-row__marker"></div>
                  </div>
                </div>
              </div>
              <div class="ocean-row__score">${dim.percentage}<span class="ocean-row__denom">/100</span></div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // ---- Dimension detail card builder ---- //
  function buildDimensionCard(dim, locked) {
    const profile = BIGFIVE_PROFILES[dim.key];
    const levelData = profile.free[dim.level];
    const poleLabel = dim.percentage >= 50 ? profile.poles[1] : profile.poles[0];

    return `
      <div class="ocean-detail${locked ? ' ocean-detail--locked' : ''}">
        <div class="ocean-detail__header">
          <div class="ocean-detail__meta">
            <span class="ocean-detail__emoji">${profile.emoji}</span>
            <div>
              <div class="ocean-detail__name">${profile.label}</div>
              <div class="ocean-detail__measures">Measures: ${MEASURES[dim.key]}</div>
            </div>
          </div>
          <div class="ocean-detail__score-block">
            <div class="ocean-detail__score-num">${dim.percentage}</div>
            <div class="ocean-detail__score-label">out of 100</div>
          </div>
        </div>
        <div class="ocean-detail__spectrum">
          <div class="ocean-detail__track">
            <div class="ocean-detail__fill" data-width="${dim.percentage}">
              <div class="ocean-detail__marker"></div>
            </div>
          </div>
          <div class="ocean-detail__range">
            <span>${profile.poles[0]}</span>
            <span>${profile.poles[1]}</span>
          </div>
        </div>
        <div class="ocean-detail__level">
          <span class="ocean-level-badge ocean-level-badge--${dim.level}">${LEVEL_LABELS[dim.level]}</span>
          <span class="ocean-detail__pole">${poleLabel}</span>
        </div>
        ${!locked ? `
          <p class="result-section__text" style="margin-top: var(--space-md)">${levelData.summary}</p>
          <div class="trait-list" style="margin-top: var(--space-lg)">
            ${levelData.traits.map(t =>
              `<div class="trait-list__item trait-list__item--strength">${t}</div>`
            ).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }

  // First dimension free, rest paywalled
  const freeDimensions = dimensions.slice(0, 1);
  const premiumDimensions = dimensions.slice(1);

  const freeCardsHTML = freeDimensions.map(dim => buildDimensionCard(dim, false)).join('');
  const premiumCardsHTML = premiumDimensions.map(dim => buildDimensionCard(dim, true)).join('');

  container.innerHTML = `
    <!-- Profile Header -->
    <div class="type-header">
      <span class="type-header__emoji">📊</span>
      <h1 class="type-header__code"><span>Big Five</span></h1>
      <p class="type-header__name">Your Personality Profile</p>
      <p class="type-header__tagline">See where you fall on five scientifically validated dimensions of personality.</p>
    </div>

    <!-- OCEAN Overview -->
    ${oceanOverviewHTML}

    <!-- Free dimension detail -->
    <h2 class="ocean-section-title">Dimension <span class="text-gradient">Breakdown</span></h2>
    ${freeCardsHTML}

    <!-- Premium Teaser + Paywall -->
    <div class="premium-section">
      <div class="premium-teaser">
        <div class="premium-teaser__fade">
          ${premiumCardsHTML}
        </div>
      </div>

      <div class="premium-overlay">
        <div class="premium-overlay__icon">🔒</div>
        <h2 class="premium-overlay__title">Want the Full Breakdown?</h2>
        <p class="premium-overlay__text">Unlock your complete Big Five deep-dive — detailed analysis for all 5 dimensions, career paths tailored to your profile, and personalized growth strategies.</p>
        <div class="premium-overlay__price">$1.99</div>
        <p class="premium-overlay__price-note">One-time payment — lifetime access</p>
        <ul class="premium-features">
          <li>Full spectrum breakdown for all 5 dimensions</li>
          <li>Career paths matched to your OCEAN profile</li>
          <li>Personalized growth strategies per dimension</li>
          <li>Complete trait analysis</li>
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
        <button class="share-btn share-btn--x" onclick="shareToX()">𝕏 Share on X</button>
        <button class="share-btn share-btn--facebook" onclick="shareToFacebook()">f Share on Facebook</button>
        <button class="share-btn share-btn--copy" onclick="copyResultLink()">🔗 Copy Link</button>
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

  // Animate all spectrum bars after render
  setTimeout(() => {
    document.querySelectorAll('.ocean-row__fill, .ocean-detail__fill').forEach(bar => {
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
    window.showToast = function(msg) { alert(msg); };
  }
})();
