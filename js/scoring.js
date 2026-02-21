/* ===========================
   My Inner Window - Scoring Algorithm
   =========================== */

/*
  Likert scale values:
    1 = Strongly Disagree
    2 = Disagree
    3 = Neutral
    4 = Agree
    5 = Strongly Agree

  For each question:
    - If direction matches the "first" pole (E, S, T, J):
        score for that pole += answer value
    - If direction matches the "second" pole (I, N, F, P):
        score for that pole += answer value

  Percentages are calculated per dichotomy as:
    poleA% = poleA_total / (poleA_total + poleB_total) * 100
*/

function calculateMBTI(answers) {
  // answers = { questionId: likertValue (1-5) }
  const scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  QUESTIONS.forEach(q => {
    const answer = answers[q.id];
    if (answer === undefined) return;

    // The answer (1-5) adds to the pole indicated by direction
    scores[q.direction] += answer;

    // The inverse (6 - answer) adds to the opposite pole
    const opposite = getOpposite(q.direction);
    scores[opposite] += (6 - answer);
  });

  // Calculate percentages for each dichotomy
  const dichotomies = [
    { poles: ['E', 'I'], label: 'Extraversion vs Introversion' },
    { poles: ['S', 'N'], label: 'Sensing vs Intuition' },
    { poles: ['T', 'F'], label: 'Thinking vs Feeling' },
    { poles: ['J', 'P'], label: 'Judging vs Perceiving' }
  ];

  const result = {
    type: '',
    dichotomies: []
  };

  dichotomies.forEach(d => {
    const [a, b] = d.poles;
    const total = scores[a] + scores[b];
    const pctA = total > 0 ? Math.round((scores[a] / total) * 100) : 50;
    const pctB = 100 - pctA;
    const winner = pctA >= pctB ? a : b;

    result.type += winner;
    result.dichotomies.push({
      label: d.label,
      poles: d.poles,
      scores: { [a]: scores[a], [b]: scores[b] },
      percentages: { [a]: pctA, [b]: pctB },
      winner: winner
    });
  });

  return result;
}

function getOpposite(pole) {
  const pairs = { E: 'I', I: 'E', S: 'N', N: 'S', T: 'F', F: 'T', J: 'P', P: 'J' };
  return pairs[pole];
}
