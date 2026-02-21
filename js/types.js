/* ===========================
   My Inner Window - 16 MBTI Type Descriptions
   Each type has free + premium (locked) content
   =========================== */

const MBTI_TYPES = {
  INTJ: {
    name: "The Architect",
    emoji: "🏛️",
    tagline: "Imaginative and strategic thinkers, with a plan for everything.",
    free: {
      overview: "INTJs are independent, analytical thinkers who approach life with a strategic mindset. They are driven by their inner vision and are constantly seeking to improve systems and ideas. Known for their intellectual curiosity and determination, INTJs are often seen as the masterminds behind complex plans and innovations.",
      strengths: [
        "Strategic and long-term thinking",
        "Highly independent and self-motivated",
        "Excellent problem-solving abilities",
        "Strong commitment to goals",
        "Open to new ideas backed by logic"
      ],
      weaknesses: [
        "Can appear arrogant or dismissive",
        "Difficulty expressing emotions",
        "Overly critical of inefficiency",
        "May struggle with social niceties",
        "Perfectionist tendencies"
      ]
    },
    premium: {
      careers: ["Data Scientist", "Software Architect", "Investment Banker", "Surgeon", "University Professor", "Management Consultant", "Judge", "Aerospace Engineer"],
      relationships: "INTJs approach relationships with the same strategic mindset they apply to everything else. They value intellectual compatibility above all and need a partner who can match their depth of thought. While not naturally expressive, they show love through dedication, problem-solving, and long-term commitment to the relationship's growth.",
      growth: "INTJs grow by developing their emotional intelligence and learning to value the human element in their plans. Practicing vulnerability with trusted people and recognizing that not everything needs to be optimized can lead to deeper, more fulfilling connections.",
      compatibility: ["ENFP", "ENTP", "INFJ", "ENTJ"]
    }
  },

  INTP: {
    name: "The Logician",
    emoji: "🔬",
    tagline: "Innovative inventors with an unquenchable thirst for knowledge.",
    free: {
      overview: "INTPs are philosophical innovators fascinated by logical analysis, systems, and design. They are absorbed in thought and enjoy exploring concepts and finding underlying patterns. INTPs value intellect over sentiment and can seem lost in their own world of ideas.",
      strengths: [
        "Exceptional analytical thinking",
        "Creative problem-solving",
        "Open-minded and flexible",
        "Objective and logical",
        "Passionate about areas of interest"
      ],
      weaknesses: [
        "Socially withdrawn or absent-minded",
        "Difficulty with follow-through",
        "Insensitive to emotional needs",
        "Overthinking and analysis paralysis",
        "Dislike of routine and rules"
      ]
    },
    premium: {
      careers: ["Theoretical Physicist", "Software Developer", "Philosopher", "Data Analyst", "Mathematician", "Game Designer", "Research Scientist", "Technical Writer"],
      relationships: "INTPs need intellectual stimulation in relationships and value a partner who respects their need for independence. They express love through sharing ideas and helping solve problems rather than through emotional displays. They need patience from partners as they learn to navigate emotional waters.",
      growth: "INTPs benefit from setting deadlines for themselves and practicing completion of projects. Developing emotional vocabulary and checking in with loved ones' feelings helps them build stronger, more balanced relationships.",
      compatibility: ["ENTJ", "ENFJ", "INFJ", "ESTJ"]
    }
  },

  ENTJ: {
    name: "The Commander",
    emoji: "👑",
    tagline: "Bold, imaginative, and strong-willed leaders who always find a way.",
    free: {
      overview: "ENTJs are natural-born leaders who embody confidence and authority. They have a gift for organizing people and resources to achieve ambitious goals. Driven by a desire for efficiency and results, ENTJs thrive in environments where they can take charge and implement their vision.",
      strengths: [
        "Natural leadership abilities",
        "Strategic and efficient thinking",
        "Confident and decisive",
        "Strong communication skills",
        "Driven to achieve ambitious goals"
      ],
      weaknesses: [
        "Can be domineering and stubborn",
        "Impatient with inefficiency",
        "May overlook people's feelings",
        "Difficulty admitting mistakes",
        "Workaholic tendencies"
      ]
    },
    premium: {
      careers: ["CEO / Executive", "Entrepreneur", "Corporate Lawyer", "Political Strategist", "Business Consultant", "Military Officer", "Venture Capitalist", "University Dean"],
      relationships: "ENTJs bring the same passion and drive to relationships that they bring to their careers. They are loyal and committed partners who want to build something meaningful together. They express love through actions, planning a shared future, and helping their partner achieve their goals.",
      growth: "ENTJs grow by slowing down to listen and valuing the process as much as the outcome. Learning that vulnerability is a form of strength and that some situations call for patience rather than action leads to more balanced leadership.",
      compatibility: ["INTP", "INFP", "ISTP", "ENTP"]
    }
  },

  ENTP: {
    name: "The Debater",
    emoji: "⚡",
    tagline: "Smart and curious thinkers who cannot resist an intellectual challenge.",
    free: {
      overview: "ENTPs are innovative, clever, and expressive individuals who thrive on intellectual exploration. They enjoy deconstructing ideas and building new frameworks, often playing devil's advocate for the sheer joy of debate. Quick-witted and resourceful, ENTPs excel at generating creative solutions.",
      strengths: [
        "Quick thinking and witty",
        "Excellent brainstorming abilities",
        "Adaptable and resourceful",
        "Charismatic and energetic",
        "Not afraid to challenge the status quo"
      ],
      weaknesses: [
        "Argumentative and confrontational",
        "Difficulty with follow-through",
        "Can be insensitive in debates",
        "Dislike routine and repetitive tasks",
        "May neglect practical details"
      ]
    },
    premium: {
      careers: ["Entrepreneur", "Creative Director", "Patent Attorney", "Political Analyst", "Stand-up Comedian", "Product Manager", "Journalist", "Marketing Strategist"],
      relationships: "ENTPs bring excitement, humor, and intellectual stimulation to relationships. They value partners who can engage in spirited discussions and keep up with their quick minds. They need freedom within their relationships and show love through playful banter, shared adventures, and helping their partner see new perspectives.",
      growth: "ENTPs grow by developing follow-through on their many ideas and learning to sit with emotions rather than intellectualizing them. Practicing active listening without immediately formulating a rebuttal deepens their connections with others.",
      compatibility: ["INFJ", "INTJ", "ENFJ", "INFP"]
    }
  },

  INFJ: {
    name: "The Advocate",
    emoji: "🌌",
    tagline: "Quiet and mystical, yet very inspiring and tireless idealists.",
    free: {
      overview: "INFJs are the rarest personality type, known for their deep insight into people and complex situations. They combine a rich inner life with genuine compassion for others, working quietly behind the scenes to create positive change. INFJs are driven by a strong sense of purpose and idealism.",
      strengths: [
        "Deep insight into people and situations",
        "Strong values and sense of purpose",
        "Creative and visionary thinking",
        "Excellent listeners and counselors",
        "Determined and passionate about causes"
      ],
      weaknesses: [
        "Prone to burnout from absorbing others' emotions",
        "Perfectionistic about their ideals",
        "Can be overly private and hard to know",
        "Difficulty with confrontation",
        "May set unrealistically high expectations"
      ]
    },
    premium: {
      careers: ["Counselor / Therapist", "Author / Writer", "Nonprofit Director", "Psychologist", "Documentary Filmmaker", "UX Researcher", "Social Worker", "Professor of Humanities"],
      relationships: "INFJs seek deep, meaningful connections and are among the most devoted partners. They intuitively understand their partner's needs and work tirelessly to nurture the relationship. However, they need a partner who reciprocates this depth and respects their need for solitude to recharge.",
      growth: "INFJs grow by setting healthy boundaries and learning that they cannot save everyone. Accepting imperfection in themselves and others, and expressing their own needs instead of always prioritizing others, leads to more sustainable and joyful living.",
      compatibility: ["ENTP", "ENFP", "INTJ", "INFP"]
    }
  },

  INFP: {
    name: "The Mediator",
    emoji: "🦋",
    tagline: "Poetic, kind, and altruistic people, always eager to help a good cause.",
    free: {
      overview: "INFPs are thoughtful, creative individuals guided by their deeply held values and desire to make the world a better place. They possess a rich imagination and a quiet determination that often surprises those who underestimate them. INFPs are drawn to authenticity and emotional depth in all areas of life.",
      strengths: [
        "Deep empathy and compassion",
        "Rich imagination and creativity",
        "Strong personal values and integrity",
        "Open-minded and accepting of others",
        "Passionate about meaningful causes"
      ],
      weaknesses: [
        "Overly idealistic and impractical",
        "Tendency to take things too personally",
        "Difficulty with practical daily tasks",
        "Can be self-isolating when stressed",
        "Struggle with criticism and conflict"
      ]
    },
    premium: {
      careers: ["Writer / Poet", "Graphic Designer", "Art Therapist", "Environmental Scientist", "Music Therapist", "Human Rights Advocate", "Librarian", "Counseling Psychologist"],
      relationships: "INFPs are deeply romantic and loyal partners who crave authentic emotional connection. They express love through creative gestures, heartfelt words, and unwavering support of their partner's dreams. They need a partner who appreciates their emotional depth and doesn't dismiss their idealism.",
      growth: "INFPs grow by developing practical life skills and learning to take action on their ideals rather than just dreaming about them. Accepting that the world won't always meet their standards and finding beauty in imperfection brings them greater peace.",
      compatibility: ["ENFJ", "ENTJ", "INFJ", "ENFP"]
    }
  },

  ENFJ: {
    name: "The Protagonist",
    emoji: "🌟",
    tagline: "Charismatic and inspiring leaders who are able to mesmerize their listeners.",
    free: {
      overview: "ENFJs are warm, empathetic leaders who are genuinely interested in helping others reach their potential. They have an extraordinary ability to read people and situations, using this insight to guide, inspire, and motivate those around them. ENFJs are driven by their vision of what people can become.",
      strengths: [
        "Natural ability to lead and inspire",
        "Highly empathetic and understanding",
        "Excellent communication skills",
        "Organized and reliable",
        "Strong sense of community and belonging"
      ],
      weaknesses: [
        "Can be overly idealistic about people",
        "Tendency to neglect their own needs",
        "May become manipulative under stress",
        "Overly sensitive to criticism",
        "Difficulty making tough, impersonal decisions"
      ]
    },
    premium: {
      careers: ["Life Coach", "High School Teacher", "HR Director", "Public Relations Manager", "Diplomat", "Event Planner", "Nonprofit Executive", "Sales Director"],
      relationships: "ENFJs are devoted partners who pour their heart into relationships. They anticipate their partner's needs, plan thoughtful surprises, and work constantly to strengthen the bond. They need appreciation and affirmation in return, and a partner who encourages them to also take care of themselves.",
      growth: "ENFJs grow by learning to prioritize their own needs without guilt. Recognizing that they cannot control how others grow and that sometimes people need to learn from their own mistakes helps them find balance in their natural desire to help.",
      compatibility: ["INFP", "ISFP", "INTP", "ENTP"]
    }
  },

  ENFP: {
    name: "The Campaigner",
    emoji: "🎭",
    tagline: "Enthusiastic, creative, and sociable free spirits who always find a reason to smile.",
    free: {
      overview: "ENFPs are imaginative, enthusiastic individuals who see life as full of possibilities. They are warmly perceptive and enjoy connecting with people on a deep level. Their energy is contagious, and they have a natural talent for inspiring others and sparking creative ideas.",
      strengths: [
        "Enthusiastic and inspiring energy",
        "Excellent people skills and empathy",
        "Highly creative and imaginative",
        "Flexible and spontaneous",
        "Ability to see potential in everyone"
      ],
      weaknesses: [
        "Difficulty focusing and following through",
        "Overly optimistic and unrealistic",
        "Dislike of routine and mundane tasks",
        "Can be people-pleasers",
        "Emotional intensity can be overwhelming"
      ]
    },
    premium: {
      careers: ["Creative Director", "Journalist", "Entrepreneur", "Motivational Speaker", "Brand Strategist", "Travel Writer", "Actor / Performer", "Innovation Consultant"],
      relationships: "ENFPs are passionate, affectionate partners who bring joy, adventure, and deep emotional connection to relationships. They want to truly know and be known by their partner. They express love through words of affirmation, quality time, and creating shared experiences that build lasting memories.",
      growth: "ENFPs grow by developing discipline and learning to complete what they start. Creating systems for organization and practicing mindfulness helps them channel their abundant energy into meaningful accomplishments rather than scattered efforts.",
      compatibility: ["INTJ", "INFJ", "ENTJ", "INTP"]
    }
  },

  ISTJ: {
    name: "The Logistician",
    emoji: "📋",
    tagline: "Practical and fact-minded individuals whose reliability cannot be doubted.",
    free: {
      overview: "ISTJs are responsible, thorough, and dependable individuals who take their commitments seriously. They value tradition, loyalty, and order, and they work steadily to fulfill their duties. ISTJs are the backbone of many organizations, providing stability and ensuring things run smoothly.",
      strengths: [
        "Extremely reliable and responsible",
        "Methodical and detail-oriented",
        "Strong sense of duty and commitment",
        "Practical and grounded",
        "Honest and direct communicators"
      ],
      weaknesses: [
        "Can be rigid and resistant to change",
        "Difficulty expressing emotions",
        "May be judgmental of non-traditional approaches",
        "Tendency to take on too much responsibility",
        "Can be perceived as cold or insensitive"
      ]
    },
    premium: {
      careers: ["Accountant / Auditor", "Civil Engineer", "Military Officer", "Database Administrator", "Financial Analyst", "Supply Chain Manager", "Quality Assurance Analyst", "Police Detective"],
      relationships: "ISTJs show love through actions rather than words — they are the partner who remembers every important date, keeps promises, and provides steady, unwavering support. They need a partner who appreciates their reliability and understands that their consistency is their way of saying 'I love you.'",
      growth: "ISTJs grow by embracing flexibility and recognizing that there are multiple valid ways to approach a situation. Learning to express their feelings verbally and being open to new experiences enriches their personal relationships and worldview.",
      compatibility: ["ESFP", "ESTP", "ISFJ", "ESTJ"]
    }
  },

  ISFJ: {
    name: "The Defender",
    emoji: "🛡️",
    tagline: "Very dedicated and warm protectors, always ready to defend their loved ones.",
    free: {
      overview: "ISFJs are caring, reliable individuals who find great satisfaction in helping others and maintaining harmony. They are observant and attentive to the needs of those around them, often going above and beyond without seeking recognition. ISFJs are the quiet guardians who hold communities together.",
      strengths: [
        "Incredibly supportive and reliable",
        "Keen observation of others' needs",
        "Patient and devoted caretakers",
        "Strong memory for important details",
        "Hardworking and thorough"
      ],
      weaknesses: [
        "Difficulty saying no and setting boundaries",
        "Tendency to repress their own needs",
        "Overly sensitive to criticism",
        "Resistant to change and new methods",
        "May become passive-aggressive when stressed"
      ]
    },
    premium: {
      careers: ["Registered Nurse", "Elementary Teacher", "Social Worker", "Dental Hygienist", "Librarian", "Office Manager", "Veterinary Technician", "Interior Designer"],
      relationships: "ISFJs are devoted partners who express love through acts of service — cooking meals, remembering preferences, and creating a warm, comfortable home. They need partners who notice and appreciate their efforts and who reciprocate with emotional warmth and verbal appreciation.",
      growth: "ISFJs grow by learning to prioritize self-care and asserting their own needs. Recognizing that saying no is not selfish, and that they deserve the same level of care they give to others, transforms their relationships and well-being.",
      compatibility: ["ESFP", "ESTP", "ISTJ", "ENFJ"]
    }
  },

  ESTJ: {
    name: "The Executive",
    emoji: "📊",
    tagline: "Excellent administrators, unsurpassed at managing things — or people.",
    free: {
      overview: "ESTJs are organized, logical, and assertive individuals who thrive on bringing order to their environment. They are natural administrators who take charge and get things done efficiently. ESTJs value tradition, rules, and clear expectations, and they lead by example with their strong work ethic.",
      strengths: [
        "Excellent organizational skills",
        "Strong leadership and delegation",
        "Dedicated and hardworking",
        "Direct and honest communication",
        "Loyal to their commitments"
      ],
      weaknesses: [
        "Can be inflexible and stubborn",
        "May steamroll others' opinions",
        "Difficulty with emotional expression",
        "Judgmental of those who don't meet standards",
        "Struggle to relax and unwind"
      ]
    },
    premium: {
      careers: ["Business Manager", "Judge", "School Principal", "Insurance Agent", "Real Estate Agent", "Building Inspector", "Military Leader", "Financial Advisor"],
      relationships: "ESTJs are stable, committed partners who show love by creating security and structure. They take their relationship responsibilities seriously and work hard to provide. They need a partner who respects their need for order while gently encouraging them to be more emotionally open.",
      growth: "ESTJs grow by developing emotional awareness and learning to listen to others' perspectives without immediately judging. Recognizing that rules and traditions serve people — not the other way around — helps them become more empathetic leaders.",
      compatibility: ["ISTP", "INTP", "ISTJ", "ESFJ"]
    }
  },

  ESFJ: {
    name: "The Consul",
    emoji: "🤝",
    tagline: "Extraordinarily caring, social, and popular people, always eager to help.",
    free: {
      overview: "ESFJs are warm-hearted, conscientious individuals who are deeply attuned to the emotional needs of others. They thrive in social settings and find fulfillment in creating harmony and helping their community. ESFJs are often the social glue that holds groups together with their genuine care and organizational skills.",
      strengths: [
        "Warm and genuinely caring for others",
        "Excellent social and networking skills",
        "Practical and organized helpers",
        "Loyal and committed to relationships",
        "Strong sense of duty and community"
      ],
      weaknesses: [
        "Overly concerned with social status",
        "Difficulty accepting criticism",
        "Too focused on others' approval",
        "Reluctant to step outside comfort zone",
        "May suppress their own needs to avoid conflict"
      ]
    },
    premium: {
      careers: ["Healthcare Administrator", "Event Coordinator", "Guidance Counselor", "Public Relations Specialist", "Hospitality Manager", "Dental Hygienist", "Sales Representative", "Elementary School Teacher"],
      relationships: "ESFJs are attentive, loving partners who create a nurturing environment for their relationships. They remember small details, celebrate milestones, and work hard to make their partner feel valued. They need partners who openly express appreciation and affection.",
      growth: "ESFJs grow by developing internal validation rather than relying on others' approval. Learning to embrace constructive criticism as a tool for growth and recognizing that saying no can strengthen rather than damage relationships is transformative for them.",
      compatibility: ["ISFP", "ISTP", "ESFP", "ESTJ"]
    }
  },

  ISTP: {
    name: "The Virtuoso",
    emoji: "🔧",
    tagline: "Bold and practical experimenters, masters of all kinds of tools.",
    free: {
      overview: "ISTPs are curious, hands-on individuals who love understanding how things work. They approach life with quiet confidence and a preference for action over words. ISTPs are natural troubleshooters who combine practical skills with sharp analytical thinking to solve problems in real-time.",
      strengths: [
        "Excellent hands-on problem-solving",
        "Calm and rational under pressure",
        "Highly adaptable and practical",
        "Independent and self-reliant",
        "Quick learning through direct experience"
      ],
      weaknesses: [
        "Emotionally detached and private",
        "Can be insensitive to feelings",
        "Risk-taking behavior",
        "Difficulty with long-term commitments",
        "Easily bored by routine"
      ]
    },
    premium: {
      careers: ["Mechanical Engineer", "Forensic Scientist", "Pilot", "Paramedic", "Software Developer", "Civil Engineer", "Electrician", "Athletic Trainer"],
      relationships: "ISTPs show love through actions — fixing things, solving problems, and sharing activities. They value a partner who gives them space and doesn't demand constant emotional engagement. They are loyal but need significant independence within the relationship.",
      growth: "ISTPs grow by developing comfort with emotional expression and vulnerability. Learning that sharing feelings with trusted people is a form of strength, not weakness, helps them build deeper and more satisfying personal connections.",
      compatibility: ["ESTJ", "ESFJ", "ENTJ", "ISTJ"]
    }
  },

  ISFP: {
    name: "The Adventurer",
    emoji: "🎨",
    tagline: "Flexible and charming artists, always ready to explore and experience something new.",
    free: {
      overview: "ISFPs are gentle, sensitive individuals with a strong aesthetic sense and a desire to live authentically. They experience the world intensely through their senses and emotions, and they express themselves through art, nature, and meaningful actions rather than words.",
      strengths: [
        "Strong aesthetic and artistic sense",
        "Deeply caring and empathetic",
        "Flexible and open to new experiences",
        "Live authentically by their values",
        "Charming and warm in one-on-one settings"
      ],
      weaknesses: [
        "Difficulty with long-term planning",
        "Overly sensitive to criticism",
        "Avoidance of conflict and confrontation",
        "Tendency to undervalue their abilities",
        "Can be unpredictable and hard to pin down"
      ]
    },
    premium: {
      careers: ["Graphic Designer", "Photographer", "Chef", "Veterinarian", "Physical Therapist", "Fashion Designer", "Landscape Architect", "Music Teacher"],
      relationships: "ISFPs are devoted, gentle partners who express love through thoughtful gestures, quality time, and physical affection. They create beauty in the everyday moments of a relationship. They need a partner who appreciates their quiet depth and doesn't try to change their gentle nature.",
      growth: "ISFPs grow by developing confidence in their abilities and learning to advocate for themselves. Stepping outside their comfort zone to share their talents with the world and setting clear personal goals gives direction to their natural creativity.",
      compatibility: ["ENFJ", "ESFJ", "ESTJ", "ENTJ"]
    }
  },

  ESTP: {
    name: "The Entrepreneur",
    emoji: "🎯",
    tagline: "Smart, energetic, and very perceptive people who truly enjoy living on the edge.",
    free: {
      overview: "ESTPs are energetic, action-oriented individuals who live in the moment and love excitement. They are natural risk-takers with a keen eye for opportunity and a talent for thinking on their feet. ESTPs are direct, pragmatic, and bring an infectious energy to everything they do.",
      strengths: [
        "Excellent crisis management skills",
        "Direct and results-oriented",
        "Perceptive and observant",
        "Energetic and fun to be around",
        "Resourceful and adaptable"
      ],
      weaknesses: [
        "Impatient with theory and abstract concepts",
        "Risk-taking without considering consequences",
        "Difficulty with long-term planning",
        "Can be insensitive and blunt",
        "Easily bored and restless"
      ]
    },
    premium: {
      careers: ["Sales Director", "Emergency Room Doctor", "Stockbroker", "Detective", "Sports Coach", "Entrepreneur", "Paramedic", "Real Estate Developer"],
      relationships: "ESTPs bring excitement, spontaneity, and fun to relationships. They show love through shared adventures and practical gestures. They need a partner who enjoys their energetic lifestyle while helping them slow down occasionally to connect on a deeper emotional level.",
      growth: "ESTPs grow by developing patience and considering long-term consequences before acting. Learning to sit with uncomfortable emotions rather than seeking distraction through action helps them build deeper self-awareness and more meaningful relationships.",
      compatibility: ["ISFJ", "ISTJ", "ESFJ", "ISFP"]
    }
  },

  ESFP: {
    name: "The Entertainer",
    emoji: "🎪",
    tagline: "Spontaneous, energetic, and enthusiastic entertainers — life is never boring around them.",
    free: {
      overview: "ESFPs are vivacious, fun-loving individuals who embrace life with infectious enthusiasm. They are natural entertainers who love being around people and making others happy. ESFPs live fully in the present moment, bringing joy, spontaneity, and warmth to every situation they encounter.",
      strengths: [
        "Infectious positive energy",
        "Excellent people skills",
        "Practical and observant",
        "Bold and original style",
        "Natural ability to cheer others up"
      ],
      weaknesses: [
        "Difficulty with long-term planning",
        "Sensitive to criticism and conflict",
        "Can be unfocused and easily distracted",
        "May avoid deep or difficult conversations",
        "Tendency toward impulsive decisions"
      ]
    },
    premium: {
      careers: ["Event Planner", "Tour Guide", "Fitness Trainer", "Nurse", "Flight Attendant", "Interior Decorator", "Brand Ambassador", "Elementary Teacher"],
      relationships: "ESFPs are generous, affectionate partners who make every day feel like an adventure. They express love through physical affection, fun activities, and enthusiastic support. They need a partner who matches their energy and brings them back to earth when needed without dampening their spirit.",
      growth: "ESFPs grow by developing the ability to delay gratification and plan for the future. Learning to have difficult conversations rather than avoiding them, and finding meaning in solitude and reflection, adds depth to their naturally joyful approach to life.",
      compatibility: ["ISFJ", "ISTJ", "ESFJ", "ESTP"]
    }
  }
};
