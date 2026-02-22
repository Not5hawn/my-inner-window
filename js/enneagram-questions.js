/* ===========================
   My Inner Window - Enneagram Questions
   36 questions, 4 per type, interleaved
   =========================== */

const ENNEAGRAM_QUESTIONS = [
  // --- Round 1 (one question per type, 1-9) ---
  { id: 1,  text: "I hold myself to very high standards and feel frustrated when things are done carelessly.",                type: 1, direction: "pos" },
  { id: 2,  text: "I naturally tune in to what other people need, often before they ask.",                                  type: 2, direction: "pos" },
  { id: 3,  text: "I feel most alive when I am working toward a meaningful goal and making visible progress.",              type: 3, direction: "pos" },
  { id: 4,  text: "I often feel like I experience emotions more deeply than the people around me.",                         type: 4, direction: "pos" },
  { id: 5,  text: "I would rather observe a situation quietly before jumping in and participating.",                        type: 5, direction: "pos" },
  { id: 6,  text: "I tend to think through worst-case scenarios so I can be prepared for whatever might happen.",           type: 6, direction: "pos" },
  { id: 7,  text: "I get excited about new plans and possibilities and sometimes struggle to commit to just one.",          type: 7, direction: "pos" },
  { id: 8,  text: "When I see someone being treated unfairly, I feel compelled to step in and confront the situation.",     type: 8, direction: "pos" },
  { id: 9,  text: "I usually go along with what the group wants because keeping the peace matters more to me than winning.", type: 9, direction: "pos" },

  // --- Round 2 (one question per type, 1-9) ---
  { id: 10, text: "I have a strong inner voice that points out when I or others fall short of what is right.",              type: 1, direction: "pos" },
  { id: 11, text: "I sometimes overextend myself helping others and then feel unappreciated for my efforts.",               type: 2, direction: "pos" },
  { id: 12, text: "I find it hard to relax unless I feel I have accomplished something worthwhile that day.",               type: 3, direction: "pos" },
  { id: 13, text: "I rarely feel envious of other people's lives or identities.",                                           type: 4, direction: "neg" },
  { id: 14, text: "I need a good amount of private time and space to feel like myself.",                                    type: 5, direction: "pos" },
  { id: 15, text: "I find it easy to fully trust people I have just met.",                                                  type: 6, direction: "neg" },
  { id: 16, text: "I would rather keep my options open than lock myself into a rigid plan.",                                type: 7, direction: "pos" },
  { id: 17, text: "People sometimes describe me as too intense or dominating in conversations.",                            type: 8, direction: "pos" },
  { id: 18, text: "I tend to avoid conflict even when I know I should speak up about something important.",                 type: 9, direction: "pos" },

  // --- Round 3 (one question per type, 1-9) ---
  { id: 19, text: "I am not particularly bothered when things are disorganized or done incorrectly.",                       type: 1, direction: "neg" },
  { id: 20, text: "I feel genuinely happy when I can make someone else's day better, even in a small way.",                 type: 2, direction: "pos" },
  { id: 21, text: "I am not very concerned with how successful I appear to others.",                                        type: 3, direction: "neg" },
  { id: 22, text: "I am drawn to art, music, or writing that expresses raw, authentic emotion.",                            type: 4, direction: "pos" },
  { id: 23, text: "I feel drained quickly when people make too many demands on my time and energy.",                        type: 5, direction: "pos" },
  { id: 24, text: "I often second-guess my own decisions and look to trusted people or guidelines for reassurance.",        type: 6, direction: "pos" },
  { id: 25, text: "Sitting still with nothing to do makes me restless and uncomfortable.",                                 type: 7, direction: "pos" },
  { id: 26, text: "I feel uncomfortable showing vulnerability, even to people who are close to me.",                        type: 8, direction: "pos" },
  { id: 27, text: "I often find it difficult to know what I truly want when others have strong opinions.",                  type: 9, direction: "pos" },

  // --- Round 4 (one question per type, 1-9) ---
  { id: 28, text: "I feel a deep sense of responsibility to do what is ethical, even when no one is watching.",             type: 1, direction: "pos" },
  { id: 29, text: "I can easily set firm boundaries and say no without feeling guilty.",                                    type: 2, direction: "neg" },
  { id: 30, text: "I naturally adjust how I present myself depending on the audience or situation.",                        type: 3, direction: "pos" },
  { id: 31, text: "I sometimes feel a lingering sense that something important is missing from my life.",                   type: 4, direction: "pos" },
  { id: 32, text: "I enjoy socializing just as much as spending time alone with my thoughts.",                              type: 5, direction: "neg" },
  { id: 33, text: "I feel anxious when I do not have a clear plan or safety net for the future.",                           type: 6, direction: "pos" },
  { id: 34, text: "I am perfectly comfortable sitting with painful emotions rather than distracting myself.",               type: 7, direction: "neg" },
  { id: 35, text: "I would rather be in charge of a situation than leave important decisions to someone else.",             type: 8, direction: "pos" },
  { id: 36, text: "I find it easy to assert my own needs and priorities even if it creates tension.",                       type: 9, direction: "neg" },
];
