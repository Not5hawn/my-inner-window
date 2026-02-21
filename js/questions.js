/* ===========================
   My Inner Window - MBTI Questions
   40 questions, 10 per dichotomy, interleaved
   =========================== */

/*
  Each question has:
  - id: unique identifier
  - text: the question prompt
  - dichotomy: which pair it measures (EI, SN, TF, JP)
  - direction: which pole "Strongly Agree" favors
    e.g., direction "I" means agreeing = more Introverted
*/

const QUESTIONS = [
  // === Round 1 (Q1-Q4: one of each) ===
  { id: 1,  text: "I feel energized after spending time with a large group of people.", dichotomy: "EI", direction: "E" },
  { id: 2,  text: "I trust concrete facts and real-world experience more than abstract theories.", dichotomy: "SN", direction: "S" },
  { id: 3,  text: "When making decisions, I prioritize logic over people's feelings.", dichotomy: "TF", direction: "T" },
  { id: 4,  text: "I prefer to have a detailed plan rather than keeping my options open.", dichotomy: "JP", direction: "J" },

  // === Round 2 ===
  { id: 5,  text: "I often need time alone to recharge after social interactions.", dichotomy: "EI", direction: "I" },
  { id: 6,  text: "I enjoy imagining future possibilities more than focusing on present realities.", dichotomy: "SN", direction: "N" },
  { id: 7,  text: "I find it easy to empathize with others and feel what they feel.", dichotomy: "TF", direction: "F" },
  { id: 8,  text: "I tend to be spontaneous and go with the flow rather than sticking to a schedule.", dichotomy: "JP", direction: "P" },

  // === Round 3 ===
  { id: 9,  text: "I enjoy being the center of attention in social situations.", dichotomy: "EI", direction: "E" },
  { id: 10, text: "I pay close attention to details and rarely miss small errors.", dichotomy: "SN", direction: "S" },
  { id: 11, text: "I believe fairness and justice are more important than mercy and compassion.", dichotomy: "TF", direction: "T" },
  { id: 12, text: "I like to finish tasks well before the deadline rather than working at the last minute.", dichotomy: "JP", direction: "J" },

  // === Round 4 ===
  { id: 13, text: "I prefer one-on-one conversations over large group discussions.", dichotomy: "EI", direction: "I" },
  { id: 14, text: "I am drawn to exploring patterns and hidden meanings behind things.", dichotomy: "SN", direction: "N" },
  { id: 15, text: "People have told me I can seem blunt or insensitive at times.", dichotomy: "TF", direction: "T" },
  { id: 16, text: "I feel stressed when plans change unexpectedly.", dichotomy: "JP", direction: "J" },

  // === Round 5 ===
  { id: 17, text: "I think out loud and process ideas best through conversation.", dichotomy: "EI", direction: "E" },
  { id: 18, text: "I prefer learning through hands-on experience rather than theoretical instruction.", dichotomy: "SN", direction: "S" },
  { id: 19, text: "Maintaining harmony in relationships is extremely important to me.", dichotomy: "TF", direction: "F" },
  { id: 20, text: "I enjoy exploring new opportunities even if it means leaving things unfinished.", dichotomy: "JP", direction: "P" },

  // === Round 6 ===
  { id: 21, text: "I prefer to observe and listen before joining a conversation.", dichotomy: "EI", direction: "I" },
  { id: 22, text: "I am more interested in the big picture than in specific details.", dichotomy: "SN", direction: "N" },
  { id: 23, text: "I would rather be seen as competent than as likable.", dichotomy: "TF", direction: "T" },
  { id: 24, text: "My workspace is usually neat and well-organized.", dichotomy: "JP", direction: "J" },

  // === Round 7 ===
  { id: 25, text: "I tend to reflect deeply before sharing my thoughts with others.", dichotomy: "EI", direction: "I" },
  { id: 26, text: "I value practical solutions over innovative but untested ideas.", dichotomy: "SN", direction: "S" },
  { id: 27, text: "I make decisions based on how they will affect the people involved.", dichotomy: "TF", direction: "F" },
  { id: 28, text: "I often wait until the last minute to complete tasks, but still get them done.", dichotomy: "JP", direction: "P" },

  // === Round 8 ===
  { id: 29, text: "Meeting new people excites me rather than drains me.", dichotomy: "EI", direction: "E" },
  { id: 30, text: "I often daydream or let my mind wander to abstract ideas.", dichotomy: "SN", direction: "N" },
  { id: 31, text: "I can easily set aside my emotions to analyze a situation objectively.", dichotomy: "TF", direction: "T" },
  { id: 32, text: "I prefer having a set routine in my daily life.", dichotomy: "JP", direction: "J" },

  // === Round 9 ===
  { id: 33, text: "I feel drained when I spend too much time with people, even close friends.", dichotomy: "EI", direction: "I" },
  { id: 34, text: "I focus on what is real and actual rather than what might be possible.", dichotomy: "SN", direction: "S" },
  { id: 35, text: "I go out of my way to help others even if it inconveniences me.", dichotomy: "TF", direction: "F" },
  { id: 36, text: "I enjoy adapting to new situations rather than following a fixed plan.", dichotomy: "JP", direction: "P" },

  // === Round 10 ===
  { id: 37, text: "I prefer to work in a team rather than independently.", dichotomy: "EI", direction: "E" },
  { id: 38, text: "I trust my gut instincts and hunches more than step-by-step analysis.", dichotomy: "SN", direction: "N" },
  { id: 39, text: "I often prioritize how others feel over strict honesty.", dichotomy: "TF", direction: "F" },
  { id: 40, text: "I like to keep my options open and resist making final decisions until necessary.", dichotomy: "JP", direction: "P" }
];
