/* ===========================
   My Inner Window - Big Five (OCEAN) Scoring Algorithm
   =========================== */

/*
  Likert scale values:
    1 = Strongly Disagree
    2 = Disagree
    3 = Neutral
    4 = Agree
    5 = Strongly Agree

  For each question:
    - If direction is "pos": score for that dimension += answer
    - If direction is "neg": score for that dimension += (6 - answer)

  Each dimension scored as percentage of max possible (10 questions * 5 = 50)
  Level: high (>=67%), mid (34-66%), low (<34%)
  Profile code encodes all 5 percentages for URL sharing
*/

function calculateBigFive(answers) {
  // answers = { questionId: likertValue (1-5) }
  const dimensions = {
    O: { label: 'Openness', raw: 0 },
    C: { label: 'Conscientiousness', raw: 0 },
    E: { label: 'Extraversion', raw: 0 },
    A: { label: 'Agreeableness', raw: 0 },
    N: { label: 'Neuroticism', raw: 0 }
  };

  BIGFIVE_QUESTIONS.forEach(q => {
    const answer = answers[q.id];
    if (answer === undefined) return;

    if (q.direction === 'pos') {
      dimensions[q.dimension].raw += answer;
    } else {
      dimensions[q.dimension].raw += (6 - answer);
    }
  });

  // Max per dimension = 10 questions * 5 = 50
  const maxPerDimension = 50;

  const results = Object.entries(dimensions).map(([key, dim]) => {
    const percentage = Math.round((dim.raw / maxPerDimension) * 100);
    let level;
    if (percentage >= 67) level = 'high';
    else if (percentage >= 34) level = 'mid';
    else level = 'low';

    return {
      key: key,
      label: dim.label,
      raw: dim.raw,
      percentage: percentage,
      level: level
    };
  });

  // Generate profile code for URL (e.g., "O78-C45-E62-A81-N33")
  const profileCode = results.map(r => r.key + r.percentage).join('-');

  return {
    profileCode: profileCode,
    dimensions: results
  };
}

function parseProfileCode(code) {
  // "O78-C45-E62-A81-N33" -> reconstructed dimensions array
  const labels = {
    O: 'Openness', C: 'Conscientiousness', E: 'Extraversion',
    A: 'Agreeableness', N: 'Neuroticism'
  };

  return code.split('-').map(part => {
    const key = part[0];
    const percentage = parseInt(part.slice(1));
    let level;
    if (percentage >= 67) level = 'high';
    else if (percentage >= 34) level = 'mid';
    else level = 'low';

    return {
      key: key,
      label: labels[key] || key,
      raw: 0,
      percentage: percentage,
      level: level
    };
  });
}
