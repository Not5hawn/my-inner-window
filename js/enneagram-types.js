/* === My Inner Window - 9 Enneagram Type Descriptions === */

const ENNEAGRAM_TYPES = {
  1: {
    name: "The Reformer",
    emoji: "⚖️",
    tagline: "Principled and purposeful, you strive to make the world a better place through integrity and reason.",
    free: {
      overview: "Ones are conscientious, ethical, and driven by a strong sense of right and wrong. They hold themselves and others to high standards, motivated by an inner desire to live with integrity and to improve everything they touch. At their best, Ones are wise, discerning, and inspiring moral heroes who channel their idealism into meaningful reform. However, their relentless inner critic can lead to rigidity and frustration when reality falls short of their ideals.",
      strengths: [
        "Strong moral compass and unwavering integrity",
        "Disciplined and highly organized in all pursuits",
        "Dedicated to fairness and social justice",
        "Reliable and consistent in commitments",
        "Ability to see how things can be improved"
      ],
      weaknesses: [
        "Harsh inner critic that extends to judging others",
        "Difficulty relaxing and accepting imperfection",
        "Tendency toward rigidity and inflexibility",
        "Suppressed anger that surfaces as resentment",
        "Struggles to delegate when others don't meet their standards"
      ]
    },
    premium: {
      careers: ["Judge", "Quality Assurance Analyst", "Ethics Officer", "Editor", "Environmental Advocate", "Auditor", "Curriculum Developer", "Nonprofit Director"],
      relationships: "Ones bring loyalty, dedication, and a deep sense of responsibility to their relationships. They show love through acts of service and by striving to be the best partner they can be. However, they may need to practice accepting their partner's imperfections and expressing warmth rather than defaulting to constructive criticism.",
      growth: "Growth for Ones comes from learning to embrace imperfection as part of the human experience rather than a personal failing. Practice silencing your inner critic by cultivating self-compassion and celebrating progress over perfection. Allow yourself spontaneity and play, recognizing that joy and relaxation are not indulgences but essential parts of a balanced life.",
      compatibility: [7, 2, 9]
    }
  },
  2: {
    name: "The Helper",
    emoji: "💝",
    tagline: "Warm-hearted and generous, you find meaning in lifting others up and forging deep emotional bonds.",
    free: {
      overview: "Twos are empathetic, sincere, and caring individuals who are driven by a genuine desire to be loved and needed. They possess an extraordinary ability to sense what others need and naturally move toward fulfilling those needs, often before being asked. At their best, Twos are unconditionally loving and altruistic, offering support without expectation. When less healthy, they may lose sight of their own needs and become resentful when their generosity goes unacknowledged.",
      strengths: [
        "Deeply empathetic and emotionally attuned to others",
        "Generous and selfless in offering time and energy",
        "Naturally skilled at building meaningful connections",
        "Warm presence that makes others feel valued",
        "Ability to bring out the best in people"
      ],
      weaknesses: [
        "Difficulty recognizing and expressing own needs",
        "Tendency to be people-pleasing at personal cost",
        "Can become possessive or manipulative when insecure",
        "Prone to burnout from chronic over-giving",
        "Self-worth becomes dependent on being needed by others"
      ]
    },
    premium: {
      careers: ["Counselor", "Nurse", "Social Worker", "Human Resources Manager", "Teacher", "Life Coach", "Hospice Worker", "Fundraising Director"],
      relationships: "Twos are deeply romantic and attentive partners who express love through emotional warmth and thoughtful gestures. They intuitively know how to make their partner feel cherished and are fiercely devoted once committed. Their growth edge in relationships is learning to receive love as gracefully as they give it, and to voice their own needs without guilt.",
      growth: "Growth for Twos involves turning their remarkable capacity for care inward and learning that self-love is not selfish. Practice setting boundaries and saying no without guilt, recognizing that your worth is inherent and not earned through what you do for others. Cultivate hobbies and interests that are solely for your own fulfillment, separate from any caretaking role.",
      compatibility: [4, 8, 1]
    }
  },
  3: {
    name: "The Achiever",
    emoji: "🏆",
    tagline: "Ambitious and adaptable, you inspire others through your drive to excel and embody success.",
    free: {
      overview: "Threes are energetic, goal-oriented, and highly adaptable individuals motivated by a desire to be valued and to distinguish themselves through accomplishments. They are natural performers who can read a room and adjust their approach to achieve the best outcome. At their best, Threes are authentic, inspiring leaders who use their talents to uplift others. When operating from a place of insecurity, they may confuse their image with their true self and prioritize achievement over genuine connection.",
      strengths: [
        "Exceptional drive and ability to set and reach goals",
        "Highly adaptable and resourceful under pressure",
        "Natural leadership and motivational presence",
        "Efficient and pragmatic problem-solving skills",
        "Confident self-presentation that inspires others"
      ],
      weaknesses: [
        "Tendency to equate self-worth with external success",
        "Difficulty slowing down and connecting with true feelings",
        "Can become overly competitive or image-conscious",
        "Risk of workaholism and neglecting personal relationships",
        "May adopt a persona that masks their authentic self"
      ]
    },
    premium: {
      careers: ["Entrepreneur", "Marketing Director", "Sales Executive", "Political Strategist", "Surgeon", "Management Consultant", "Television Producer", "Corporate Attorney"],
      relationships: "Threes bring energy, charm, and a genuine desire to build a partnership that both parties can be proud of. They show love by investing in shared goals and by being a supportive, capable partner. Their deepest relational work involves learning to be vulnerable and loved for who they are rather than what they achieve, allowing their partner to see behind the polished exterior.",
      growth: "Growth for Threes begins with pausing the relentless pursuit of the next achievement and asking, 'What do I actually feel right now?' Practice being still without a goal, and let yourself be valued for your presence rather than your performance. Developing emotional honesty with yourself and others will unlock a deeper, more fulfilling sense of success than any external accolade.",
      compatibility: [6, 9, 1]
    }
  },
  4: {
    name: "The Individualist",
    emoji: "🎭",
    tagline: "Expressive and deeply feeling, you seek authenticity and transform emotional depth into creative beauty.",
    free: {
      overview: "Fours are introspective, sensitive, and emotionally honest individuals who are driven by a desire to find their unique identity and significance. They have an extraordinary capacity to sit with the full spectrum of human emotion, including the darker shades that others avoid. At their best, Fours are profoundly creative, compassionate, and capable of transforming personal pain into universal art. When less balanced, they can become withdrawn, envious, or trapped in a cycle of melancholy and longing for what feels missing.",
      strengths: [
        "Deep emotional intelligence and authenticity",
        "Extraordinary creativity and artistic sensibility",
        "Courage to explore the full range of human experience",
        "Ability to find beauty and meaning in suffering",
        "Compassionate understanding of others' pain"
      ],
      weaknesses: [
        "Tendency toward melancholy and emotional turbulence",
        "Prone to envy and unfavorable self-comparison",
        "Can become self-absorbed or overly dramatic",
        "Difficulty sustaining effort when inspiration fades",
        "Fear of being ordinary can lead to alienation from others"
      ]
    },
    premium: {
      careers: ["Artist", "Psychotherapist", "Writer", "Musician", "Interior Designer", "Film Director", "Brand Strategist", "Art Therapist"],
      relationships: "Fours bring depth, passion, and an unwavering commitment to emotional authenticity in their relationships. They crave a soul-deep connection and are willing to explore the most vulnerable corners of intimacy with their partner. Their growth in love involves learning to appreciate the beauty of what is present rather than longing for an idealized connection, and trusting that the ordinary moments of partnership hold their own quiet magic.",
      growth: "Growth for Fours comes from grounding their rich inner world in consistent, outward action rather than waiting for the perfect wave of inspiration. Practice gratitude for what is present in your life rather than fixating on what feels absent. Channel your emotional depth into disciplined creative practice, and recognize that your identity is not diminished by moments of ordinariness.",
      compatibility: [1, 2, 9]
    }
  },
  5: {
    name: "The Investigator",
    emoji: "🔍",
    tagline: "Perceptive and cerebral, you illuminate the world through deep knowledge and independent insight.",
    free: {
      overview: "Fives are intense, cerebral, and perceptive individuals driven by a need to understand the world and to feel competent and capable. They are naturally curious and tend to develop deep expertise in areas that fascinate them, often retreating into the mind as their primary way of engaging with life. At their best, Fives are visionary pioneers who synthesize complex ideas into groundbreaking insights. When less healthy, they may become increasingly detached, hoarding their time and energy while losing connection with the physical and emotional dimensions of life.",
      strengths: [
        "Exceptional analytical and observational abilities",
        "Deep capacity for focused, independent thought",
        "Objective and level-headed in times of crisis",
        "Innovative thinking that challenges conventional wisdom",
        "Respect for others' boundaries and autonomy"
      ],
      weaknesses: [
        "Tendency to withdraw emotionally and socially",
        "Can become overly detached or intellectually arrogant",
        "Difficulty sharing resources, time, or personal space",
        "May neglect physical needs and emotional connections",
        "Prone to analysis paralysis and hoarding knowledge"
      ]
    },
    premium: {
      careers: ["Research Scientist", "Software Architect", "Data Analyst", "University Professor", "Cybersecurity Specialist", "Philosopher", "Technical Writer", "Forensic Investigator"],
      relationships: "Fives express love through sharing their inner world and the knowledge they hold most precious, a deeply intimate act for this private type. They are loyal, thoughtful partners who offer a calm and steady presence. Their relational growth lies in learning to stay emotionally present rather than retreating into the mind, and in trusting that opening up to a partner will not deplete them but enrich their experience of life.",
      growth: "Growth for Fives involves stepping out of the observatory of the mind and engaging more fully with the sensory and emotional world. Practice sharing your thoughts and feelings before they are perfectly formulated, and notice that connection with others actually replenishes rather than drains you. Challenge yourself to take action on your knowledge, recognizing that lived experience is a form of understanding that pure thought cannot replace.",
      compatibility: [1, 2, 8]
    }
  },
  6: {
    name: "The Loyalist",
    emoji: "🛡️",
    tagline: "Committed and vigilant, you build trust through steadfast loyalty and courageous preparation.",
    free: {
      overview: "Sixes are responsible, trustworthy, and security-oriented individuals motivated by a need for safety, guidance, and reassurance. They possess a keen ability to anticipate problems and prepare for worst-case scenarios, making them invaluable in times of uncertainty. At their best, Sixes are courageous, community-minded, and deeply loyal allies who stand by the people and causes they believe in. When anxiety takes hold, they may become hypervigilant, indecisive, or oscillate between seeking authority and rebelling against it.",
      strengths: [
        "Unwavering loyalty and commitment to loved ones",
        "Excellent troubleshooter who anticipates problems",
        "Courageous when standing up for beliefs and community",
        "Responsible and dependable in all commitments",
        "Strong collaborative instincts and team-building skills"
      ],
      weaknesses: [
        "Prone to anxiety and worst-case-scenario thinking",
        "Difficulty trusting own judgment and decision-making",
        "Can become suspicious or overly skeptical of others",
        "Tendency to project fears onto ambiguous situations",
        "May oscillate between compliance and defiance with authority"
      ]
    },
    premium: {
      careers: ["Emergency Manager", "Paralegal", "Systems Administrator", "Law Enforcement Officer", "Insurance Analyst", "Project Manager", "Veterinarian", "Financial Planner"],
      relationships: "Sixes are among the most dedicated and faithful partners, offering a steadfast presence that weathers every storm. They invest deeply in building trust and will go to great lengths to protect and support the people they love. Their relational growth involves learning to trust their own inner guidance and their partner's reliability, rather than testing the relationship through doubt or seeking constant reassurance.",
      growth: "Growth for Sixes comes from developing faith in themselves and in the fundamental goodness of life, even amid uncertainty. Practice sitting with anxiety without immediately reacting to it, and notice how often your feared outcomes never materialize. Cultivate inner authority by making decisions and trusting yourself to handle whatever comes, recognizing that true security is an inside job.",
      compatibility: [9, 3, 8]
    }
  },
  7: {
    name: "The Enthusiast",
    emoji: "🎉",
    tagline: "Spontaneous and versatile, you infuse life with joy and turn possibilities into adventures.",
    free: {
      overview: "Sevens are extroverted, optimistic, and versatile individuals driven by a desire to experience everything life has to offer and to avoid pain or limitation. They are quick-minded and future-oriented, naturally generating ideas, plans, and possibilities at a remarkable pace. At their best, Sevens are deeply grateful, present, and able to find genuine joy in the simple beauty of the moment. When less balanced, they may scatter their energy across too many pursuits, using constant stimulation to avoid confronting deeper pain or dissatisfaction.",
      strengths: [
        "Infectious enthusiasm and optimistic energy",
        "Quick-minded versatility and creative ideation",
        "Resilient spirit that bounces back from setbacks",
        "Ability to reframe challenges into opportunities",
        "Natural talent for bringing people together in celebration"
      ],
      weaknesses: [
        "Difficulty committing and following through on plans",
        "Tendency to avoid pain, discomfort, and difficult emotions",
        "Can become scattered, impulsive, or overextended",
        "Prone to escapism and superficial engagement",
        "Impatience with routine or anything perceived as limiting"
      ]
    },
    premium: {
      careers: ["Travel Writer", "Product Designer", "Event Planner", "Startup Founder", "Adventure Tour Guide", "Creative Director", "Motivational Speaker", "Restaurant Owner"],
      relationships: "Sevens bring fun, spontaneity, and an infectious zest for life to their relationships, ensuring that there is never a dull moment. They are generous, playful partners who delight in planning adventures and creating joyful memories together. Their deepest relational growth involves learning to stay present during uncomfortable emotions rather than deflecting with humor or distraction, and discovering that true intimacy requires embracing both the highs and the lows.",
      growth: "Growth for Sevens comes from learning that depth is found not in breadth of experience but in sustained presence with what is, including discomfort and pain. Practice slowing down and completing one thing before starting the next, savoring the richness of focus over the thrill of novelty. Embrace stillness and solitude as gateways to the inner fulfillment you have been seeking externally.",
      compatibility: [5, 1, 9]
    }
  },
  8: {
    name: "The Challenger",
    emoji: "💪",
    tagline: "Powerful and decisive, you protect the vulnerable and lead with bold, unwavering conviction.",
    free: {
      overview: "Eights are self-confident, strong-willed, and assertive individuals driven by a desire to be in control of their own lives and to protect the people they care about. They have a commanding presence and an instinctive ability to take charge in any situation, confronting challenges head-on with directness and intensity. At their best, Eights are magnanimous, heroic leaders who use their considerable power to champion justice and empower others. When less healthy, they may become domineering, confrontational, or unwilling to show any sign of vulnerability.",
      strengths: [
        "Natural leadership and decisive action under pressure",
        "Fierce protectiveness of loved ones and the vulnerable",
        "Direct and honest communication style",
        "Extraordinary willpower and determination",
        "Ability to inspire confidence and mobilize others"
      ],
      weaknesses: [
        "Tendency to be domineering or controlling",
        "Difficulty showing vulnerability or admitting weakness",
        "Can be intimidating or excessively confrontational",
        "Prone to excess and ignoring personal limits",
        "Impatience with those perceived as weak or indecisive"
      ]
    },
    premium: {
      careers: ["CEO", "Trial Attorney", "Military Leader", "Emergency Physician", "Union Organizer", "Construction Manager", "Political Activist", "Executive Producer"],
      relationships: "Eights bring intensity, loyalty, and a fiercely protective energy to their relationships. They love with their whole being and will move mountains for a partner they trust. Their deepest relational growth involves allowing themselves to be tender and vulnerable with their partner, recognizing that true strength includes the courage to let someone see your softer side without fear of being betrayed.",
      growth: "Growth for Eights comes from learning that vulnerability is not weakness but the highest form of courage. Practice softening your approach and listening before reacting, allowing others to lead and trusting that the world will not fall apart without your control. Cultivate tenderness toward yourself and others, recognizing that your power is most impactful when tempered with compassion and restraint.",
      compatibility: [2, 9, 5]
    }
  },
  9: {
    name: "The Peacemaker",
    emoji: "☮️",
    tagline: "Easygoing and harmonious, you unite people with your calming presence and open-hearted acceptance.",
    free: {
      overview: "Nines are receptive, reassuring, and agreeable individuals driven by a desire for inner and outer peace and a deep aversion to conflict and disconnection. They have a remarkable ability to see all perspectives and to create an atmosphere of harmony wherever they go. At their best, Nines are powerful, self-possessed mediators who bring people together and heal divisions with quiet, grounded wisdom. When less healthy, they may become complacent, disengaged, or merge with others' agendas to avoid the discomfort of asserting their own priorities.",
      strengths: [
        "Natural mediator who sees all sides of a conflict",
        "Calm, grounding presence that puts others at ease",
        "Genuine acceptance and non-judgmental disposition",
        "Ability to synthesize diverse viewpoints into unity",
        "Patient and steady temperament under stress"
      ],
      weaknesses: [
        "Tendency to avoid conflict at the cost of self-expression",
        "Prone to inertia, procrastination, and complacency",
        "Difficulty identifying and prioritizing own desires",
        "Can become passive-aggressive when anger is suppressed",
        "Risk of merging with others and losing personal identity"
      ]
    },
    premium: {
      careers: ["Mediator", "Diplomat", "Librarian", "Massage Therapist", "Park Ranger", "Veterinarian", "Counselor", "Museum Curator"],
      relationships: "Nines are gentle, supportive, and deeply devoted partners who create a warm and harmonious home life. They are naturally empathetic and excel at making their partner feel heard and accepted without judgment. Their relational growth involves learning to voice their own preferences and concerns rather than going along to get along, trusting that healthy conflict can actually strengthen the bond rather than destroy it.",
      growth: "Growth for Nines comes from waking up to your own desires, opinions, and sense of personal agency rather than merging with others or numbing out. Practice identifying what you truly want and taking decisive action toward it, even if it risks rocking the boat. Embrace the reality that your presence, voice, and contributions matter, and that the peace you seek externally must first be built on a foundation of inner self-assertion.",
      compatibility: [3, 6, 1]
    }
  }
};
