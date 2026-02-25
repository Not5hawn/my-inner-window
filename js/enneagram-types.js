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
      workAptitude: "Ones bring an unrivaled capacity for quality control and ethical leadership to the workplace. Their meticulous attention to detail, systematic thinking, and relentless drive to continuously improve processes make them exceptional in roles where standards matter — from auditing and policy-writing to education and product development. They hold themselves to the same exacting standards they expect of others, which earns them a reputation for integrity that is rare and deeply valued. Ones are natural institutional consciences, often the first to raise a concern when something isn't right and the last to cut corners under pressure. Their professional challenge is learning to delegate imperfection and to recognize that good enough, done well, often surpasses the perfect that never ships. A One who learns to channel their idealism into strategic reform rather than micro-level frustration becomes one of the most impactful forces for positive change in any organization.",
      careers: ["Judge", "Quality Assurance Analyst", "Ethics Officer", "Editor", "Environmental Advocate", "Auditor", "Curriculum Developer", "Nonprofit Director"],
      relationships: "Ones bring an unwavering sense of commitment and a deep desire to build a relationship of genuine quality and shared values. They are devoted partners who express love through acts of service, consistent reliability, and a sincere effort to be the best version of themselves for the people they love. Ones have a strong moral framework and they need a partner who shares their fundamental commitment to honesty and integrity — a relationship without that bedrock feels inherently unstable to them. At their best, they offer a love that is principled, deeply sincere, and profoundly steady. Their relational challenge is learning to extend to their partner the same compassion and forgiveness they struggle to offer themselves — to silence the inner critic and allow the relationship to be a sanctuary of warmth rather than another arena for self-improvement. A One who has developed self-compassion becomes one of the most devoted, trustworthy, and deeply loving partners any type can find.",
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
      workAptitude: "Twos excel in any professional environment where human connection and support are central to success. They are the colleagues who notice when someone is struggling, remember the details that matter, and work tirelessly behind the scenes to ensure the team functions smoothly. Their emotional intelligence and relational fluency make them indispensable in client-facing, caregiving, mentorship, and human resources roles — anywhere that requires building genuine trust with people. In leadership, Twos create fiercely loyal teams because their people feel genuinely seen and valued, not just managed. Their professional challenge is learning to establish firm boundaries so that their generous nature is not exploited, and to advocate for their own recognition and compensation with the same energy they invest in championing the careers of others. A Two who has learned to honor their own professional needs becomes a leader whose care is sustainable and whose generosity is a gift rather than a liability.",
      careers: ["Counselor", "Nurse", "Social Worker", "Human Resources Manager", "Teacher", "Life Coach", "Hospice Worker", "Fundraising Director"],
      relationships: "Twos are deeply attentive and nurturing partners who possess an almost intuitive ability to read their partner's emotional landscape and move to meet their needs before being asked. They invest enormously in the relationship and derive profound meaning from being a loving, essential presence in their partner's life — and at their best, they offer a warmth and devotion that feels genuinely unconditional. Their challenge is the shadow side of that giving: they can unconsciously keep score of unacknowledged sacrifices, leading to cycles of resentment when their love goes unreturned in kind. Growth in love for a Two means learning to ask directly for what they need rather than hoping their partner will intuit it, and to trust that a partner who loves them freely — without being needed — is still a partner worth having. A Two who has learned to receive love as gracefully as they give it, and who knows their worth is not contingent on what they provide, becomes one of the most genuinely nurturing and devoted partners imaginable.",
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
      workAptitude: "Threes are among the most professionally accomplished of all Enneagram types, driven by an almost unlimited capacity for goal-oriented productivity and an exceptional ability to adapt to whatever an environment rewards. They quickly identify what success looks like in any given context — the metrics, the politics, the presentation — and execute with remarkable efficiency. Their natural charisma and confidence make them compelling leaders, presenters, and salespeople who can rally others around a compelling vision and inspire action through sheer energy and credibility. Threes also have a talent for marketing themselves and their ideas, making them formidable in competitive environments. Their professional challenge is to pursue genuine excellence over the appearance of success — to build reputations on authentic mastery rather than polished performance, and to create teams built on real trust rather than impressive displays of productivity.",
      careers: ["Entrepreneur", "Marketing Director", "Sales Executive", "Political Strategist", "Surgeon", "Management Consultant", "Television Producer", "Corporate Attorney"],
      relationships: "Threes bring ambition, charm, and a genuine desire to build a partnership that both partners can feel proud of and excited by. They are highly motivated partners who want to achieve things together — shared goals, memorable experiences, a life that looks as good as it feels. They show love through action: planning, providing, showing up, and ensuring the relationship has momentum. Their relational challenge is one of depth versus performance — Threes can fall into the habit of managing how the relationship appears rather than attending to how it actually feels, and their partners can sense the difference. Their deepest work in love involves learning to be fully vulnerable and to allow themselves to be loved for who they are beneath the accomplishments, not for what they have achieved or can provide. A Three who has learned to drop the role and simply be present becomes a partner of extraordinary warmth, vitality, and genuine emotional generosity.",
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
      workAptitude: "Fours bring a rare depth of creative vision and emotional intelligence to the workplace that no other type can fully replicate. They excel in environments that value originality, where they can bring their distinctive perspective and inject meaning and beauty into their work rather than following a standardized template. Their willingness to engage with complex, uncomfortable, and often suppressed dimensions of the human experience makes them exceptional in creative fields, therapy, writing, design, and any work that requires empathetic attunement and artistic courage. Fours are not interested in producing what has already been done — they are drawn to work that feels personally significant, and when they find it, they can produce at a level of depth and authenticity that is genuinely irreplaceable. Their professional challenge is learning to manage their emotional landscape so that inspiration becomes disciplined practice, and to value consistent output alongside the peaks of creative intensity.",
      careers: ["Artist", "Psychotherapist", "Writer", "Musician", "Interior Designer", "Film Director", "Brand Strategist", "Art Therapist"],
      relationships: "Fours bring a depth, passion, and emotional honesty to their relationships that few other types can match. They crave a soul-level connection — a partnership in which both people see and are seen completely, including the parts that are complicated, melancholic, or beautifully imperfect. They are willing to explore the most vulnerable corners of intimacy and will meet their partner's authentic emotional expression with genuine understanding rather than discomfort. Fours are romantic in the truest sense — attuned to beauty, meaning, and the poetry of shared feeling. Their relational challenge is managing the gap between the idealized connection they long for and the reality of the relationship in front of them: a Four who lives in longing for what feels missing will miss the profound depth available in what is present. Growth in love for a Four means learning to treasure the ordinary, to stay through the mundane phases without interpreting them as evidence of inadequacy, and to trust that real intimacy deepens not only in moments of intensity but also in the steady accumulation of ordinary days.",
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
      workAptitude: "Fives are the deep-knowledge specialists and intellectual architects of any organization. They build expertise slowly and deliberately, preferring true mastery over the appearance of breadth, and they contribute most powerfully when given adequate space to think independently and thoroughly before being asked to perform or present. Their capacity for objective analysis in high-pressure situations — when others are overwhelmed by emotion or urgency — is an extraordinary professional asset. Fives can hold complexity with extraordinary patience and synthesize large bodies of information into clear, elegant frameworks that illuminate what others could not see. They work best in environments that respect their need for quiet concentration and do not demand constant social performance or output before ideas are ready. Their professional growth involves sharing knowledge more freely and acting on incomplete certainty — contributing ideas before they feel perfectly formulated, because in most professional contexts a good idea offered early is worth more than a perfect idea offered late.",
      careers: ["Research Scientist", "Software Architect", "Data Analyst", "University Professor", "Cybersecurity Specialist", "Philosopher", "Technical Writer", "Forensic Investigator"],
      relationships: "Fives express love through the act of sharing their inner world — the knowledge, observations, and ideas they hold most precious — which is a deeply intimate gesture for this intensely private type. They offer their partner a window into a rich intellectual landscape that most people never get to see, and they make loyal, steady, and thoughtful companions who respect their partner's autonomy completely. Fives show affection quietly: they remember small details, carve out protected time together, and create a relationship climate of mutual respect and minimal unnecessary drama. Their relational challenge is the tendency to retreat — to slip back into the mind as a refuge when emotional demands feel overwhelming, leaving partners feeling shut out precisely when connection is most needed. Growth in love for a Five means practicing emotional presence: sitting with feelings rather than analyzing them, staying in the room during uncomfortable emotional moments rather than withdrawing, and trusting that genuine intimacy will replenish rather than deplete them.",
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
      workAptitude: "Sixes are the backbone of any reliable organization — thorough, prepared, deeply loyal to their team, and possessed of an exceptional talent for identifying what could go wrong before it does. Their ability to anticipate problems and stress-test plans under realistic conditions makes them invaluable project managers, risk analysts, compliance officers, and organizational strategists. Once a Six has built genuine trust in an organization and its leadership, their commitment is nearly unshakeable, and they often become pillars of institutional knowledge and team cohesion over time. Critically, Sixes ask the hard questions that others are afraid to voice — which improves outcomes even when it creates temporary friction, and makes them essential in environments where overconfidence is a real danger. Their professional challenge is learning to act decisively from their own best judgment rather than seeking consensus or external reassurance before every significant decision — to trust that they have the capability to handle what they cannot fully predict.",
      careers: ["Emergency Manager", "Paralegal", "Systems Administrator", "Law Enforcement Officer", "Insurance Analyst", "Project Manager", "Veterinarian", "Financial Planner"],
      relationships: "Sixes are among the most steadfast and faithful partners of all the Enneagram types, offering a loyalty that does not waver when circumstances become difficult. They invest enormous care in building a relationship they can genuinely trust, and once that trust is established, they show up with a consistency and dependability that their partner can absolutely rely on. Sixes are deeply attentive to the security of the relationship and will work hard to anticipate and address sources of friction before they become real problems. Their challenge in love is anxiety — the tendency to test the relationship, to project fears onto ambiguous moments, or to seek constant reassurance that the love is real and stable. This can feel exhausting to partners who struggle to understand why their consistent love doesn't quiet the Six's doubts. Growth for a Six in relationships means developing inner faith — learning to trust not just their partner but their own capacity to survive uncertainty — and recognizing that the secure relationship they long for is built not through vigilance but through the willingness to be vulnerable and to rest in what is genuinely present.",
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
      workAptitude: "Sevens are natural innovators and idea generators who bring extraordinary energy, optimism, and creative breadth to any professional environment. They excel in roles that involve brainstorming, entrepreneurial thinking, client engagement, and creative strategy — anywhere that rewards enthusiasm, versatility, and the ability to connect disparate ideas into something genuinely new. Their infectious positivity can transform a demoralized team and they have a genuine talent for seeing possibility where others see only obstacles, making them invaluable in turnarounds, launches, and any situation requiring a fresh perspective. Sevens generate more ideas in an afternoon than most people generate in a month. Their professional challenge is follow-through: learning to honor current commitments before chasing the next bright idea, to embrace the unglamorous middle phase of a project when the initial excitement has faded, and to develop the discipline to convert their extraordinary ideation into completed, impactful work.",
      careers: ["Travel Writer", "Product Designer", "Event Planner", "Startup Founder", "Adventure Tour Guide", "Creative Director", "Motivational Speaker", "Restaurant Owner"],
      relationships: "Sevens bring adventure, warmth, playfulness, and a genuine delight in life to their relationships, ensuring there is a sense of aliveness and possibility in the partnership. They are generous, spontaneous partners who love to plan surprising experiences, share in big dreams, and meet every day with a spirit of openness and enthusiasm. Their natural optimism can be genuinely sustaining for partners who tend toward heavier emotional tones, providing a reliable source of energy and joy. Their relational challenge is depth versus breadth — Sevens' instinct to move toward the next positive experience can lead them to deflect from the slower, heavier emotional work that intimacy requires. When their partner is in pain, a Seven's instinct to reframe or redirect can feel invalidating rather than supportive. Growth in love for a Seven means learning to stay fully present during uncomfortable emotions — to resist the reflex to lighten, fix, or move on — and discovering that the depth of intimacy available on the other side of that discomfort is richer than any adventure they could plan.",
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
      workAptitude: "Eights are decisive, powerful leaders who thrive in high-stakes environments where quick action, bold vision, and the willingness to make difficult decisions are required. They have a remarkable ability to cut through complexity, identify what actually matters, and mobilize people and resources with authority and conviction. Eights create organizational cultures defined by clarity and accountability — there is no ambiguity about where they stand, what they expect, or what they are working toward. They are natural entrepreneurs and executives who are genuinely comfortable with risk and drawn to positions where they can have a significant, tangible impact. Their professional challenge is learning to cultivate collaboration rather than consolidate control — to recognize that the full intelligence of a team only emerges when people feel safe to challenge and disagree, and that their most powerful leadership happens not when they are the strongest person in the room but when they develop the people around them to be strong as well.",
      careers: ["CEO", "Trial Attorney", "Military Leader", "Emergency Physician", "Union Organizer", "Construction Manager", "Political Activist", "Executive Producer"],
      relationships: "Eights bring intensity, fierce loyalty, and a genuinely protective love to their relationships — once an Eight has chosen you, they will go to extraordinary lengths to keep you safe, supported, and seen. They love with their whole being and they bring a raw, unfiltered honesty to their partnerships that, while sometimes confronting, means their partner always knows exactly where they stand. Eights are deeply passionate and have a capacity for vulnerability that surprises those who only know their exterior — beneath the commanding presence is someone who loves deeply and fears betrayal profoundly. Their relational challenge is letting their partner see that tenderness without armor. Eights often test their partners' reliability before allowing themselves to be fully open, and they can push away the very intimacy they crave if past wounds have taught them that vulnerability leads to loss of power. Growth in love for an Eight means trusting that a partner who sees their softness will not use it against them — and discovering that the love available in that openness is the most powerful experience life has to offer.",
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
      workAptitude: "Nines bring a rare and genuinely valuable combination of calm steadiness, inclusive perspective-taking, and an authentic ability to synthesize opposing viewpoints in the workplace. They are the colleagues who de-escalate conflict without taking sides, hold fractured teams together under pressure, and ensure that every voice is heard before a decision is finalized — which consistently leads to better outcomes. Their collaborative nature and non-threatening presence make them exceptional facilitators, counselors, mediators, and team leaders in any environment where building genuine consensus matters more than issuing directives. Nines can often find the unifying thread in a room full of disagreement, which is an extraordinary professional skill in organizations navigating change or division. Their challenge is self-advocacy: learning to assert their own opinions with confidence, to claim credit for their contributions, and to resist the tendency to accommodate the most forceful voice in the room rather than their own best judgment.",
      careers: ["Mediator", "Diplomat", "Librarian", "Massage Therapist", "Park Ranger", "Veterinarian", "Counselor", "Museum Curator"],
      relationships: "Nines are gentle, devoted, and deeply accommodating partners who create an atmosphere of genuine warmth and calm in their relationships. They have a remarkable ability to make their partner feel accepted without judgment — a Nine's love is not conditional on performance or perfection, which can feel profoundly healing to partners who have experienced more critical or demanding relationships. They are patient, steady, and deeply invested in the peace and harmony of the partnership, often working quietly behind the scenes to smooth over friction and maintain connection. Their relational challenge is the same as their core wound: the tendency to disappear into the relationship, to prioritize their partner's comfort so completely that their own desires, needs, and even identity become unclear — to them as much as to their partner. A partner cannot truly know a Nine who has hidden themselves away. Growth in love for a Nine means learning to take up space — to say clearly what they want, to express disagreement without fear of catastrophic rupture, and to trust that a relationship strong enough to hold them fully is actually a deeper and more sustaining partnership than one built on frictionless harmony.",
      growth: "Growth for Nines comes from waking up to your own desires, opinions, and sense of personal agency rather than merging with others or numbing out. Practice identifying what you truly want and taking decisive action toward it, even if it risks rocking the boat. Embrace the reality that your presence, voice, and contributions matter, and that the peace you seek externally must first be built on a foundation of inner self-assertion.",
      compatibility: [3, 6, 1]
    }
  }
};
