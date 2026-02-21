/* ===========================
   My Inner Window - Quiz Engine
   =========================== */

(function() {
  const STORAGE_KEY = 'miw_quiz_answers';
  let currentIndex = 0;
  let answers = {};
  let direction = 'forward'; // track animation direction

  // DOM elements
  const container = document.getElementById('questionContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const progressFill = document.getElementById('progressFill');
  const progressCount = document.getElementById('progressCount');

  if (!container) return; // Not on quiz page

  // ---- Init ---- //
  function init() {
    loadAnswers();
    renderQuestion();
    prevBtn.addEventListener('click', goPrev);
    nextBtn.addEventListener('click', goNext);
  }

  // ---- Persistence ---- //
  function loadAnswers() {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) answers = JSON.parse(saved);
    } catch(e) { /* ignore */ }
  }

  function saveAnswers() {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  }

  // ---- Render ---- //
  function renderQuestion() {
    const q = QUESTIONS[currentIndex];
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
        <div class="question__number">Question ${currentIndex + 1} of ${QUESTIONS.length}</div>
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

    // Attach change listeners
    container.querySelectorAll('.likert__input').forEach(input => {
      input.addEventListener('change', (e) => {
        answers[q.id] = parseInt(e.target.value);
        saveAnswers();
        updateUI();

        // Auto-advance after short delay
        setTimeout(() => {
          if (currentIndex < QUESTIONS.length - 1) {
            goNext();
          }
        }, 350);
      });
    });

    updateUI();
  }

  // ---- UI Updates ---- //
  function updateUI() {
    const q = QUESTIONS[currentIndex];
    const hasAnswer = answers[q.id] !== undefined;
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === QUESTIONS.length - 1;

    // Progress
    const answeredCount = Object.keys(answers).length;
    const pct = (answeredCount / QUESTIONS.length) * 100;
    progressFill.style.width = pct + '%';
    progressCount.textContent = `${answeredCount} / ${QUESTIONS.length}`;

    // Buttons
    prevBtn.style.visibility = isFirst ? 'hidden' : 'visible';

    if (isLast) {
      nextBtn.textContent = 'See Results ✦';
      nextBtn.className = 'btn btn--primary btn--lg';
    } else {
      nextBtn.textContent = 'Next →';
      nextBtn.className = 'btn btn--primary';
    }

    nextBtn.disabled = !hasAnswer;
  }

  // ---- Navigation ---- //
  function goNext() {
    const q = QUESTIONS[currentIndex];
    if (answers[q.id] === undefined) return;

    if (currentIndex === QUESTIONS.length - 1) {
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

  // ---- Submit ---- //
  function submitQuiz() {
    // Verify all questions answered
    const allAnswered = QUESTIONS.every(q => answers[q.id] !== undefined);
    if (!allAnswered) {
      // Find first unanswered
      const firstUnanswered = QUESTIONS.findIndex(q => answers[q.id] === undefined);
      currentIndex = firstUnanswered;
      renderQuestion();
      return;
    }

    // Calculate result
    const result = calculateMBTI(answers);

    // Save to sessionStorage for results page
    sessionStorage.setItem('miw_result', JSON.stringify(result));

    // Also save to localStorage for persistent history
    try {
      const history = JSON.parse(localStorage.getItem('miw_history') || '[]');
      history.push({
        type: result.type,
        date: new Date().toISOString(),
        dichotomies: result.dichotomies
      });
      localStorage.setItem('miw_history', JSON.stringify(history));
    } catch(e) { /* ignore */ }

    // Clear quiz progress
    sessionStorage.removeItem(STORAGE_KEY);

    // Navigate to results
    window.location.href = `results.html?type=${result.type}`;
  }

  // ---- Keyboard navigation ---- //
  document.addEventListener('keydown', (e) => {
    if (!container) return;
    if (e.key === 'ArrowRight' || e.key === 'Enter') {
      if (!nextBtn.disabled) goNext();
    } else if (e.key === 'ArrowLeft') {
      goPrev();
    } else if (e.key >= '1' && e.key <= '5') {
      const q = QUESTIONS[currentIndex];
      const input = document.getElementById(`q${q.id}_${e.key}`);
      if (input) {
        input.checked = true;
        input.dispatchEvent(new Event('change'));
      }
    }
  });

  init();
})();
