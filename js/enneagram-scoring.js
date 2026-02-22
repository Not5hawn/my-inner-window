/* ===========================
   My Inner Window - Enneagram Scoring Algorithm
   =========================== */

/*
  Likert scale values:
    1 = Strongly Disagree
    2 = Disagree
    3 = Neutral
    4 = Agree
    5 = Strongly Agree

  For each question:
    - If direction is "pos": score for that type += answer value
    - If direction is "neg": score for that type += (6 - answer)

  Dominant type = highest scoring type (1-9)
  Wing = higher-scoring adjacent type (wraps: 1↔9)
*/

function calculateEnneagram(answers) {
  // answers = { questionId: likertValue (1-5) }
  const scores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

  ENNEAGRAM_QUESTIONS.forEach(q => {
    const answer = answers[q.id];
    if (answer === undefined) return;

    if (q.direction === 'pos') {
      scores[q.type] += answer;
    } else {
      scores[q.type] += (6 - answer);
    }
  });

  // Find dominant type (highest score)
  let dominant = 1;
  for (let t = 2; t <= 9; t++) {
    if (scores[t] > scores[dominant]) dominant = t;
  }

  // Determine wing: higher-scoring adjacent type (wraps circularly)
  const wingA = dominant === 1 ? 9 : dominant - 1;
  const wingB = dominant === 9 ? 1 : dominant + 1;
  const wing = scores[wingA] >= scores[wingB] ? wingA : wingB;

  // Max possible per type = 4 questions * 5 = 20
  const maxPerType = 20;

  const typeScores = [];
  for (let t = 1; t <= 9; t++) {
    typeScores.push({
      type: t,
      raw: scores[t],
      percentage: Math.round((scores[t] / maxPerType) * 100)
    });
  }

  return {
    dominantType: dominant,
    wing: wing,
    label: dominant + 'w' + wing,
    typeScores: typeScores,
    scores: scores
  };
}
