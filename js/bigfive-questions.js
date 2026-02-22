/* ===========================
   My Inner Window - Big Five (OCEAN) Questions
   50 questions, 10 per dimension, interleaved
   =========================== */

const BIGFIVE_QUESTIONS = [
  // --- Round 1 ---
  { id: 1,  text: "I have a vivid imagination and often find myself lost in thought.",                          dimension: "O", direction: "pos" },
  { id: 2,  text: "I like to keep my belongings organized and in their proper place.",                          dimension: "C", direction: "pos" },
  { id: 3,  text: "I feel energized after spending time with a large group of people.",                         dimension: "E", direction: "pos" },
  { id: 4,  text: "I make an effort to understand and respect other people's perspectives.",                    dimension: "A", direction: "pos" },
  { id: 5,  text: "I get stressed out easily, even over small setbacks.",                                       dimension: "N", direction: "pos" },

  // --- Round 2 ---
  { id: 6,  text: "I prefer sticking to familiar routines rather than trying new approaches.",                  dimension: "O", direction: "neg" },
  { id: 7,  text: "I often leave tasks unfinished when something more interesting comes along.",                 dimension: "C", direction: "neg" },
  { id: 8,  text: "I tend to keep in the background at parties and social gatherings.",                         dimension: "E", direction: "neg" },
  { id: 9,  text: "I find it difficult to feel concerned about other people's problems.",                       dimension: "A", direction: "neg" },
  { id: 10, text: "I am relaxed most of the time, even when others around me feel pressure.",                   dimension: "N", direction: "neg" },

  // --- Round 3 ---
  { id: 11, text: "I enjoy exploring abstract ideas and philosophical questions.",                               dimension: "O", direction: "pos" },
  { id: 12, text: "I pay close attention to details in everything I do.",                                        dimension: "C", direction: "pos" },
  { id: 13, text: "I naturally take the lead when a group needs direction.",                                     dimension: "E", direction: "pos" },
  { id: 14, text: "I genuinely care about the well-being of people I interact with.",                            dimension: "A", direction: "pos" },
  { id: 15, text: "I frequently worry about things that might go wrong in the future.",                          dimension: "N", direction: "pos" },

  // --- Round 4 ---
  { id: 16, text: "I am not particularly interested in art, music, or creative expression.",                     dimension: "O", direction: "neg" },
  { id: 17, text: "I tend to act on impulse without thinking through the consequences.",                         dimension: "C", direction: "neg" },
  { id: 18, text: "I often need time alone to recharge after social interactions.",                               dimension: "E", direction: "neg" },
  { id: 19, text: "I sometimes come across as blunt or insensitive without meaning to.",                         dimension: "A", direction: "neg" },
  { id: 20, text: "I seldom feel anxious or emotionally overwhelmed.",                                           dimension: "N", direction: "neg" },

  // --- Round 5 ---
  { id: 21, text: "I am drawn to experiences that challenge my existing beliefs.",                                dimension: "O", direction: "pos" },
  { id: 22, text: "I always try to be prepared before starting an important task.",                               dimension: "C", direction: "pos" },
  { id: 23, text: "I find it easy to strike up a conversation with someone I have never met.",                    dimension: "E", direction: "pos" },
  { id: 24, text: "I go out of my way to help others, even when it is inconvenient for me.",                      dimension: "A", direction: "pos" },
  { id: 25, text: "My mood can shift quickly in response to everyday events.",                                    dimension: "N", direction: "pos" },

  // --- Round 6 ---
  { id: 26, text: "I do not enjoy spending time thinking about theoretical or abstract concepts.",                dimension: "O", direction: "neg" },
  { id: 27, text: "I often forget to put things back where they belong.",                                         dimension: "C", direction: "neg" },
  { id: 28, text: "I prefer listening quietly rather than being the one who talks a lot.",                         dimension: "E", direction: "neg" },
  { id: 29, text: "I tend to be skeptical of other people's intentions.",                                          dimension: "A", direction: "neg" },
  { id: 30, text: "I recover quickly from stressful situations and do not dwell on them.",                         dimension: "N", direction: "neg" },

  // --- Round 7 ---
  { id: 31, text: "I enjoy visiting new places and immersing myself in different cultures.",                       dimension: "O", direction: "pos" },
  { id: 32, text: "I follow through on my commitments, even when it becomes difficult.",                           dimension: "C", direction: "pos" },
  { id: 33, text: "I enjoy being the center of attention in social situations.",                                    dimension: "E", direction: "pos" },
  { id: 34, text: "I believe most people are fundamentally good and trustworthy.",                                  dimension: "A", direction: "pos" },
  { id: 35, text: "I often feel self-conscious about how others perceive me.",                                      dimension: "N", direction: "pos" },

  // --- Round 8 ---
  { id: 36, text: "I would rather do things the tried-and-true way than experiment with new methods.",              dimension: "O", direction: "neg" },
  { id: 37, text: "I have a hard time sticking to a schedule or meeting deadlines.",                                dimension: "C", direction: "neg" },
  { id: 38, text: "I feel drained rather than excited when I have a busy social calendar.",                         dimension: "E", direction: "neg" },
  { id: 39, text: "I am not really interested in hearing about other people's day-to-day lives.",                   dimension: "A", direction: "neg" },
  { id: 40, text: "I rarely feel nervous, even in high-pressure situations.",                                       dimension: "N", direction: "neg" },

  // --- Round 9 ---
  { id: 41, text: "I find beauty and meaning in things that others might overlook.",                                dimension: "O", direction: "pos" },
  { id: 42, text: "I set clear goals for myself and work steadily toward achieving them.",                          dimension: "C", direction: "pos" },
  { id: 43, text: "I am usually the one to suggest plans or activities with friends.",                              dimension: "E", direction: "pos" },
  { id: 44, text: "I try to be cooperative and avoid unnecessary conflict with others.",                            dimension: "A", direction: "pos" },
  { id: 45, text: "I tend to take criticism personally and think about it for a long time.",                        dimension: "N", direction: "pos" },

  // --- Round 10 ---
  { id: 46, text: "I am not very curious about how things work at a deeper level.",                                 dimension: "O", direction: "neg" },
  { id: 47, text: "I sometimes let small responsibilities pile up until they become a problem.",                    dimension: "C", direction: "neg" },
  { id: 48, text: "I would rather spend a quiet evening at home than go out to a lively event.",                    dimension: "E", direction: "neg" },
  { id: 49, text: "I find it hard to fully trust someone until they have proven themselves.",                        dimension: "A", direction: "neg" },
  { id: 50, text: "I handle unexpected changes calmly without becoming upset.",                                     dimension: "N", direction: "neg" },
];
