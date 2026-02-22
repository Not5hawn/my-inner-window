/* ===========================
   My Inner Window - Big Five Quiz Engine
   =========================== */

(function() {
  const STORAGE_KEY = 'miw_bigfive_answers';
  let currentIndex = 0;
  let answers = {};
  let direction = 'forward';

  const container = document.getElementById('questionContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const progressFill = document.getElementById('progressFill');
  const progressCount = document.getElementById('progressCount');

  if (!container) return;

  function init() {
    loadAnswers();
    renderQuestion();
    prevBtn.addEventListener('click', goPrev);
    nextBtn.addEventListener('click', goNext);
  }

  function loadAnswers() {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) answers = JSON.parse(saved);
    } catch(e) { /* ignore */ }
  }

  function saveAnswers() {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  }

  function renderQuestion() {
    const q = BIGFIVE_QUESTIONS[currentIndex];
    const selectedValue = answers[q.id];

    const likertOptions = [
      { value: 1, label: 'Strongly Disagree' },
      { value: 2, label: 'Disagree' },
      { value: 3, label: 'Neutral' },
      { value: 4, label: 'Agree' },
      { value: 5, label: 'Strongly Agree' }
    ];

    const animClass = direction === 'forward' ? '' : 'question-card--prev';

    container.innerHTML = `
      <div class="question-card ${animClass}">
        <div class="question__number">Question ${currentIndex + 1} of ${BIGFIVE_QUESTIONS.length}</div>
        <p class="question__text">${q.text}</p>
        <div class="likert">
          ${likertOptions.map(opt => `
            <div class="likert__option">
              <input type="radio"
                class="likert__input"
                name="q${q.id}"
                id="q${q.id}_${opt.value}"
                value="${opt.value}"
                ${selectedValue === opt.value ? 'checked' : ''}>
              <label class="likert__label" for="q${q.id}_${opt.value}">
                <span class="likert__dot"></span>
                <span class="likert__text">${opt.label}</span>
              </label>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    container.querySelectorAll('.likert__option').forEach(option => {
      const input = option.querySelector('.likert__input');
      option.addEventListener('click', () => {
        const val = parseInt(input.value);
        const alreadySelected = answers[q.id] === val;
        input.checked = true;
        answers[q.id] = val;
        saveAnswers();
        updateUI();

        setTimeout(() => {
          if (currentIndex < BIGFIVE_QUESTIONS.length - 1) {
            goNext();
          }
        }, alreadySelected ? 150 : 350);
      });
    });

    updateUI();
  }

  function updateUI() {
    const q = BIGFIVE_QUESTIONS[currentIndex];
    const hasAnswer = answers[q.id] !== undefined;
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === BIGFIVE_QUESTIONS.length - 1;

    const answeredCount = Object.keys(answers).length;
    const pct = (answeredCount / BIGFIVE_QUESTIONS.length) * 100;
    progressFill.style.width = pct + '%';
    progressCount.textContent = `${answeredCount} / ${BIGFIVE_QUESTIONS.length}`;

    prevBtn.style.visibility = isFirst ? 'hidden' : 'visible';

    if (isLast) {
      nextBtn.textContent = 'See Results ✦';
      nextBtn.className = 'btn btn--primary btn--lg';
      nextBtn.style.display = '';
      nextBtn.disabled = !hasAnswer;
    } else {
      nextBtn.style.display = 'none';
    }
  }

  function goNext() {
    const q = BIGFIVE_QUESTIONS[currentIndex];
    if (answers[q.id] === undefined) return;

    if (currentIndex === BIGFIVE_QUESTIONS.length - 1) {
      submitQuiz();
      return;
    }

    direction = 'forward';
    currentIndex++;
    renderQuestion();
  }

  function goPrev() {
    if (currentIndex === 0) return;
    direction = 'backward';
    currentIndex--;
    renderQuestion();
  }

  function submitQuiz() {
    const allAnswered = BIGFIVE_QUESTIONS.every(q => answers[q.id] !== undefined);
    if (!allAnswered) {
      const firstUnanswered = BIGFIVE_QUESTIONS.findIndex(q => answers[q.id] === undefined);
      currentIndex = firstUnanswered;
      renderQuestion();
      return;
    }

    const result = calculateBigFive(answers);

    sessionStorage.setItem('miw_bigfive_result', JSON.stringify(result));

    try {
      const history = JSON.parse(localStorage.getItem('miw_bigfive_history') || '[]');
      history.push({
        profileCode: result.profileCode,
        date: new Date().toISOString(),
        dimensions: result.dimensions
      });
      localStorage.setItem('miw_bigfive_history', JSON.stringify(history));
    } catch(e) { /* ignore */ }

    sessionStorage.removeItem(STORAGE_KEY);

    window.location.href = `bigfive-results.html?profile=${result.profileCode}`;
  }

  document.addEventListener('keydown', (e) => {
    if (!container) return;
    if (e.key === 'ArrowRight' || e.key === 'Enter') {
      if (!nextBtn.disabled) goNext();
    } else if (e.key === 'ArrowLeft') {
      goPrev();
    } else if (e.key >= '1' && e.key <= '5') {
      const q = BIGFIVE_QUESTIONS[currentIndex];
      const input = document.getElementById(`q${q.id}_${e.key}`);
      if (input) {
        input.checked = true;
        input.dispatchEvent(new Event('change'));
      }
    }
  });

  init();
})();
