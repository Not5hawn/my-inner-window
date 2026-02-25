/* === My Inner Window - Big Five (OCEAN) Profile Descriptions === */

const BIGFIVE_PROFILES = {
  O: {
    label: "Openness to Experience",
    emoji: "🎨",
    poles: ["Practical / Conventional", "Curious / Inventive"],
    free: {
      high: {
        summary: "You have a rich inner life and a deep appreciation for art, ideas, and novel experiences. Your imagination runs strong, and you're naturally drawn to exploring unconventional perspectives and creative possibilities. You thrive when given the freedom to think abstractly and experiment with new approaches.",
        traits: ["Highly imaginative and creative", "Drawn to abstract and theoretical thinking", "Eager to explore unfamiliar cultures and ideas", "Appreciative of art, beauty, and aesthetics", "Comfortable challenging established conventions"]
      },
      mid: {
        summary: "You strike a healthy balance between embracing new experiences and appreciating the familiar. You can enjoy creative exploration when the mood strikes while also finding comfort in proven methods and traditions. This flexibility allows you to adapt your approach depending on the situation.",
        traits: ["Open to new ideas when they seem promising", "Enjoys a mix of routine and novelty", "Appreciates creativity without needing constant stimulation", "Can think both practically and abstractly", "Selectively curious about topics of personal interest"]
      },
      low: {
        summary: "You have a grounded, practical orientation that values clarity, consistency, and real-world results. You prefer concrete thinking and time-tested approaches over abstract speculation. Your preference for the familiar gives you a steady, dependable quality that others can count on.",
        traits: ["Practical and down-to-earth in thinking", "Prefers clear, concrete information over abstract ideas", "Values routine, predictability, and consistency", "Focused on real-world applications and outcomes", "Finds comfort and strength in established traditions"]
      }
    },
    premium: {
      high: {
        workAptitude: "You are at your best in environments that reward original thinking, creative exploration, and intellectual freedom. Roles that ask you to challenge assumptions, design novel solutions, or work across disciplines energize you. You may struggle in highly repetitive or rigidly rule-bound positions — if you find yourself in one, look for opportunities to lead innovation initiatives or propose process improvements. Your imagination is a professional asset; the key is channeling it into projects with real-world impact.",
        relationships: "You bring curiosity, depth, and a love of discovery to your closest relationships. You are drawn to partners and friends who match your intellectual enthusiasm and share your appetite for new experiences — whether that's travel, art, philosophy, or simply a long conversation about big ideas. If a relationship starts to feel too predictable or intellectually unstimulating, you may feel restless. Making a conscious effort to appreciate the stability and comfort your closest connections provide will help you build bonds that are both adventurous and enduring.",
        careers: ["Creative Director", "Research Scientist", "UX Designer", "Entrepreneur", "Writer or Journalist", "Art Therapist"],
        growth: "Your openness is a tremendous asset, but it can sometimes lead to scattered focus or difficulty committing to a single path. Practice channeling your curiosity into sustained projects that allow depth alongside breadth. Building finishing habits will help you turn your many brilliant ideas into tangible accomplishments."
      },
      mid: {
        workAptitude: "You are a natural bridge-builder in the workplace — equally capable of generating fresh ideas and implementing proven solutions. You thrive in roles that blend creativity with practicality, such as product development, strategy, or applied research. You can engage enthusiastically in brainstorming sessions and then shift smoothly into execution mode. Teams benefit from your ability to translate between visionary thinkers and practical doers, making you a versatile and stabilizing force on any project.",
        relationships: "You are easy to connect with across a wide range of personalities. You bring enough curiosity to explore new experiences with a partner while still valuing the comfort and depth of shared routines and traditions. You tend to be a flexible, low-drama presence in relationships — genuinely interested in others' perspectives without needing to constantly push boundaries. This balance makes you a warm, adaptable companion in both friendships and romantic partnerships.",
        careers: ["Product Manager", "Marketing Strategist", "Teacher", "Architect", "Business Analyst", "Human Resources Specialist"],
        growth: "Your balanced openness lets you bridge the gap between innovative thinkers and practical doers. Consider deliberately pushing yourself outside your comfort zone in areas where you tend to default to the familiar. At the same time, trust your instinct for knowing when a proven approach is genuinely the best option."
      },
      low: {
        workAptitude: "You excel in environments where precision, consistency, and adherence to established processes are valued. You are a trusted executor who delivers reliable results within clearly defined parameters, and your preference for concrete outcomes makes you highly effective in roles with structured workflows and measurable goals. In fast-changing or ambiguous workplaces, you are most effective as an anchor — someone who ensures quality and continuity while others navigate the chaos. Environments that respect your need for predictability will bring out your best work.",
        relationships: "You bring a grounding, stabilizing presence to your relationships. You value loyalty, shared routines, and the comfort of knowing what to expect from the people closest to you. You tend to build relationships slowly and deliberately, but those you commit to receive your full reliability and dedication. You connect most naturally with partners and friends who share your appreciation for consistency and tradition. If someone close to you has a strong appetite for novelty, open and honest conversations about each other's needs can help you find a rhythm that honors both styles.",
        careers: ["Accountant", "Project Manager", "Database Administrator", "Logistics Coordinator", "Financial Analyst", "Quality Assurance Specialist"],
        growth: "Your practical nature is a real strength in environments that require reliability and precision. To broaden your perspective, try introducing small, low-stakes experiments into your routine — a new cuisine, a different route to work, or a book outside your usual genre. These small steps can gradually expand your comfort zone without overwhelming your preference for stability."
      }
    }
  },
  C: {
    label: "Conscientiousness",
    emoji: "📋",
    poles: ["Flexible / Spontaneous", "Organized / Disciplined"],
    free: {
      high: {
        summary: "You are highly organized, dependable, and driven by a strong sense of purpose. You set clear goals and follow through with discipline and persistence, often holding yourself to high standards. Others see you as someone who can be counted on to deliver results and meet commitments.",
        traits: ["Exceptionally well-organized and methodical", "Strong self-discipline and impulse control", "Reliable and consistent in meeting obligations", "Goal-oriented with a clear sense of direction", "Detail-attentive and thorough in work"]
      },
      mid: {
        summary: "You are reasonably organized and responsible while still maintaining the flexibility to adapt when plans change. You can buckle down and focus when it matters but also know when to ease up and go with the flow. This balance helps you navigate both structured and unstructured environments.",
        traits: ["Organized when it counts, relaxed when it doesn't", "Able to set goals and follow through at a steady pace", "Adaptable to changing priorities and deadlines", "Responsible without being rigid", "Balances planning with spontaneity effectively"]
      },
      low: {
        summary: "You bring a spontaneous, flexible energy to life and work, preferring to stay open to possibilities rather than locking into rigid plans. You adapt quickly to changing circumstances and are comfortable with ambiguity. Your improvisational style can lead to creative solutions that more structured thinkers might miss.",
        traits: ["Highly adaptable and comfortable with ambiguity", "Spontaneous and open to last-minute changes", "Prefers flexibility over strict schedules", "Creative problem-solver who thinks on their feet", "Values freedom and autonomy in how tasks are approached"]
      }
    },
    premium: {
      high: {
        workAptitude: "You are a natural in environments where precision, planning, and follow-through are prized. You set high standards for yourself and tend to exceed expectations, making you a trusted asset in operations, leadership, and any role where reliability directly drives results. Be mindful of the tendency to take on more than is sustainable — your drive to deliver can lead to overcommitment and burnout if left unchecked. Roles that give you ownership over systems and processes, where your discipline can shape outcomes at scale, bring out the best in you.",
        relationships: "You are one of the most dependable people in your relationships. You show up on time, keep your promises, and remember the details that matter to the people you care about — and that consistency is a profound form of love. Be aware that your preference for structure and planning can occasionally feel inflexible to more spontaneous partners. Practicing a willingness to improvise on lower-stakes occasions can open up new dimensions in your closest relationships without compromising the reliability that defines you.",
        careers: ["Operations Manager", "Surgeon", "Civil Engineer", "Compliance Officer", "Executive Administrator", "Certified Public Accountant"],
        growth: "Your discipline is admirable, but be mindful of perfectionism or over-commitment draining your energy. Practice giving yourself permission to produce 'good enough' work on lower-priority tasks so you can reserve your highest standards for what truly matters. Building in unstructured downtime is not laziness — it is maintenance for your high-performing mind."
      },
      mid: {
        workAptitude: "You perform well across both structured and flexible work environments, which makes you genuinely adaptable in a workforce that increasingly demands both qualities. You can commit to long-term projects and see them through while also adjusting course when priorities shift — without the frustration that more rigid colleagues might experience. This balance makes you effective in a wide range of roles, and particularly valuable in dynamic organizations where the rules of the game can change quickly.",
        relationships: "You are a steady, dependable presence in your relationships without being controlling or inflexible. You can plan ahead when a partner or friend appreciates it, and go with the flow when the moment calls for it. Pay attention to whether you naturally lean slightly more toward structure or spontaneity, and communicate that tendency openly with the people closest to you — a little shared understanding goes a long way toward building lasting harmony.",
        careers: ["Consultant", "Sales Manager", "Registered Nurse", "Software Developer", "Event Planner", "Real Estate Agent"],
        growth: "You have a natural advantage in being able to shift between focused effort and easy-going flexibility. Identify the areas of your life where more structure would reduce stress and build small systems there — such as a weekly review or a simple task list. In other areas, trust your instinct for when it is fine to improvise."
      },
      low: {
        workAptitude: "You are at your best in fast-moving, unpredictable environments where adaptability and quick thinking matter more than a rigid plan. Your ability to stay loose and respond to what's happening in real time is a genuine advantage in fields like crisis management, hospitality, creative production, and entrepreneurship. The challenge to watch for is follow-through on longer-horizon commitments — developing a minimal system, like a single weekly priority list, can help you direct your spontaneous energy toward goals that compound over time.",
        relationships: "You bring energy, spontaneity, and a sense of adventure to your relationships. Life with you rarely feels stagnant, and the people who love you value your ability to make even ordinary moments feel alive. Partners who share your flexible, easy-going style will thrive alongside you. If someone close to you is more structured, open conversations about planning and expectations can prevent friction from building. Showing up consistently on the things that truly matter — even if your style is otherwise free-flowing — will deepen trust in all your relationships.",
        careers: ["Freelance Creative", "Emergency Responder", "Startup Founder", "Bartender or Hospitality Professional", "Adventure Travel Guide", "Performing Artist"],
        growth: "Your spontaneity is a genuine gift in fast-moving, unpredictable environments. To complement this strength, experiment with lightweight organizational tools — a single daily to-do list or a brief morning planning ritual — that provide just enough structure without feeling confining. Small anchoring habits can help you harness your energy more effectively without sacrificing your freedom."
      }
    }
  },
  E: {
    label: "Extraversion",
    emoji: "🗣️",
    poles: ["Reserved / Reflective", "Outgoing / Energetic"],
    free: {
      high: {
        summary: "You are energized by social interaction and thrive in the company of others. Your enthusiasm and assertiveness make you a natural in group settings, where you often take the lead in conversation and activity. You seek out stimulation and excitement, bringing infectious energy to the people and environments around you.",
        traits: ["Energized by social interaction and group activities", "Assertive and comfortable taking the lead", "Talkative and expressive in communication", "Drawn to excitement, action, and new social experiences", "Naturally builds and maintains large social networks"]
      },
      mid: {
        summary: "You move comfortably between social engagement and quiet solitude, drawing energy from both. You can enjoy a lively gathering just as much as a peaceful evening alone, and you tend to read situations well to know when each is appropriate. This social versatility makes you adaptable across many different settings.",
        traits: ["Comfortable in both social and solitary settings", "Can take the lead or step back as the situation requires", "Enjoys meaningful conversations in small or large groups", "Balances active socializing with restorative alone time", "Socially aware and able to match the energy of a room"]
      },
      low: {
        summary: "You draw your energy from within and do your best thinking in calm, quiet environments. You prefer deep one-on-one conversations over large group interactions and value the richness of your inner world. Your reflective nature gives you a thoughtful depth that allows for careful observation and considered responses.",
        traits: ["Reflective and thoughtful in interactions", "Prefers deep one-on-one conversations to large groups", "Recharges through solitude and quiet activities", "Observant and attentive to details others may miss", "Independent and comfortable with their own company"]
      }
    },
    premium: {
      high: {
        workAptitude: "You are energized by collaboration, conversation, and the buzz of an active workplace. Customer-facing roles, leadership positions, and team-driven environments allow you to perform at your highest level. Extended periods of solitary work or remote isolation can sap your motivation — if your role requires significant independent work, build in regular touchpoints with colleagues to keep your energy up. Your ability to build rapport quickly and inspire enthusiasm in a room is a rare professional advantage that opens doors others simply cannot.",
        relationships: "You are a warm, enthusiastic, and socially generous partner and friend. You bring energy to shared experiences and rarely struggle to express how you feel. The people close to you are likely drawn to your openness and the way you make social life feel effortless. Be mindful that more introverted partners may need quieter, lower-stimulation time together — not every connection needs to happen in a crowd. Practicing active listening and giving your closest relationships room to breathe will make your already vibrant connections even deeper.",
        careers: ["Sales Director", "Public Relations Specialist", "Television Host or Broadcaster", "Recruiter", "Political Campaign Manager", "Corporate Trainer"],
        growth: "Your social energy is a powerful asset, but be mindful that constant external stimulation can sometimes prevent deeper self-reflection. Schedule regular quiet time — even brief periods of solitude — to process your thoughts and recharge at a deeper level. Practicing active listening, where you focus fully on others without planning your next statement, can also deepen your already strong relationships."
      },
      mid: {
        workAptitude: "You are one of the most professionally flexible personality types — equally effective in collaborative team settings and focused solo work. You can lead a brainstorm in the morning and spend the afternoon in deep independent analysis without either mode feeling draining. This versatility makes you effective in roles that require both people skills and technical depth, and means you can move between jobs and environments with less friction than most. Lean into this adaptability as a deliberate strength rather than treating it as the absence of a preference.",
        relationships: "You are a naturally easy person to be in a relationship with — comfortable giving a social partner the active engagement they crave and equally comfortable giving an introverted one the quiet space they need. You rarely feel threatened by alone time or overwhelmed by social demands, which gives your closest relationships a relaxed, low-friction quality. Pay attention to your own needs within that flexibility — being adaptable is a strength, but knowing what genuinely energizes you will help you build relationships that are truly nourishing rather than just comfortable.",
        careers: ["Therapist or Counselor", "Team Lead", "Journalist", "Interior Designer", "Veterinarian", "Small Business Owner"],
        growth: "Your ability to flex between social and solitary modes is a rare and valuable skill. Pay attention to which mode you default to under stress and deliberately practice the other to maintain your balance. Journaling about your social energy patterns can help you make more intentional choices about how you spend your time."
      },
      low: {
        workAptitude: "You do your best work in environments that protect your focus and give you space to think deeply before acting or speaking. Roles that require sustained concentration, careful analysis, and independent judgment play directly to your strengths. Open-plan offices, back-to-back meetings, and constant interruptions can genuinely erode your performance — advocating for the conditions you need is not antisocial, it is smart self-management. In leadership, your reflective style earns respect through the quality of your thinking rather than the volume of your presence.",
        relationships: "You are a thoughtful, loyal, and deeply present partner and friend to those you let into your inner circle. Your relationships may be fewer in number than a more extroverted person's, but they tend to be richer in depth and trust. The people closest to you know that your affection is genuine because you don't give it casually. Be mindful that your need for quiet and solitude can sometimes be misread as distance or disinterest — communicating your inner experience, even briefly, helps the people who care about you understand that your stillness is not withdrawal.",
        careers: ["Data Scientist", "Technical Writer", "Librarian", "Research Analyst", "Software Architect", "Laboratory Technician"],
        growth: "Your reflective depth is a genuine strength that allows for insights others may overlook. To expand your comfort zone, consider joining small, interest-based groups where the focus is on a shared topic rather than socializing for its own sake. Remember that networking does not have to mean working a room — one meaningful connection at a time is a perfectly valid and effective approach."
      }
    }
  },
  A: {
    label: "Agreeableness",
    emoji: "🤝",
    poles: ["Analytical / Detached", "Friendly / Compassionate"],
    free: {
      high: {
        summary: "You are warm, compassionate, and deeply attuned to the needs and feelings of others. Cooperation and harmony come naturally to you, and you often go out of your way to help people and maintain positive relationships. Your trusting and empathetic nature makes others feel safe and valued in your presence.",
        traits: ["Deeply empathetic and considerate of others' feelings", "Cooperative and invested in group harmony", "Generous with time, energy, and resources", "Trusting and willing to see the best in people", "Skilled at mediating conflicts and finding common ground"]
      },
      mid: {
        summary: "You balance compassion with a healthy sense of self-interest, knowing when to prioritize others and when to advocate for yourself. You can be warm and cooperative in collaborative settings while also standing firm when your own needs or boundaries require attention. This balance earns you respect as both a team player and an independent thinker.",
        traits: ["Cooperative but willing to assert personal boundaries", "Empathetic without losing sight of own needs", "Can be diplomatic or direct depending on the context", "Values fairness and balanced outcomes", "Approachable yet not easily taken advantage of"]
      },
      low: {
        summary: "You bring a sharp, analytical mind to interpersonal situations and value honesty and directness above social niceties. You are comfortable with healthy debate and are not afraid to challenge ideas or hold a dissenting opinion. Your skeptical approach helps you evaluate situations clearly and protect against being misled.",
        traits: ["Direct and straightforward in communication", "Comfortable with debate and intellectual challenge", "Values logic and evidence over emotional appeal", "Independent-minded and resistant to groupthink", "Skilled at critical analysis and tough decision-making"]
      }
    },
    premium: {
      high: {
        workAptitude: "You are a natural team builder and peacemaker in professional settings. Your empathy and cooperative spirit make you highly effective in roles that require collaboration, client relationships, or managing interpersonal dynamics. People genuinely enjoy working with you, and that social capital has real professional value. The area to watch is boundary-setting — a strong desire to keep everyone happy can lead you to absorb extra work, avoid necessary conflict, or soften feedback that needs to land clearly. Learning to deliver honest assessments with warmth, rather than avoiding them altogether, will make you not just likable but genuinely impactful.",
        relationships: "You are one of the most nurturing and emotionally generous partners and friends a person can have. You give freely, listen deeply, and make the people you love feel genuinely seen and valued. The shadow side of this gift is the tendency to prioritize others' needs so consistently that your own go unspoken. The healthiest version of your relationships is one where you feel safe enough to voice your own needs directly — not because demanding it is selfish, but because the people who truly love you want to meet those needs and can only do so if they know what they are.",
        careers: ["Social Worker", "Nonprofit Director", "Pediatrician", "School Counselor", "Mediator", "Hospice Care Provider"],
        growth: "Your compassion is a beautiful quality, but it is important to guard against people-pleasing or neglecting your own needs to keep others happy. Practice saying no with kindness and clarity — your relationships will actually grow stronger when others know you are being genuine rather than accommodating. Setting healthy boundaries is not selfish; it is what allows you to sustain your generosity long-term."
      },
      mid: {
        workAptitude: "You bring a rare combination of warmth and backbone to the workplace. You can collaborate effectively with a wide range of personalities, advocate clearly for your own ideas, and deliver honest feedback without it feeling like an attack. Colleagues and managers tend to see you as fair, trustworthy, and easy to work with — which over time builds the kind of professional reputation that opens doors quietly but consistently. You are equally at home in a tight-knit team and in roles that require independent judgment, making you adaptable across a wide range of environments.",
        relationships: "You bring a healthy balance of giving and receiving to your relationships. You are warm and attentive without losing your own sense of self, and you can advocate for your needs without making it a battle. This makes you a genuinely easy person to build a lasting relationship with — your partners and close friends rarely feel like they are walking on eggshells or being steamrolled. Pay attention to the moments when you default to accommodation to avoid friction versus the moments when you genuinely agree — staying honest with yourself about that distinction keeps your relationships authentic.",
        careers: ["Human Resources Manager", "Negotiator", "Physical Therapist", "Customer Success Manager", "Psychologist", "Urban Planner"],
        growth: "Your balanced agreeableness gives you the rare ability to be both empathetic and objective. Lean into this duality by consciously choosing when a situation calls for warmth versus when it calls for candor. Developing confidence in delivering honest feedback with compassion will make you an exceptionally effective communicator and leader."
      },
      low: {
        workAptitude: "You are at your strongest in roles that require tough calls, critical thinking, and the confidence to hold a position under pressure. Negotiation, competitive strategy, quality control, and high-stakes decision-making environments reward exactly the kind of detached analytical clarity you bring naturally. Be aware that your directness, while valuable, can sometimes land harder than you intend — particularly with more emotionally oriented colleagues. A brief acknowledgment of someone's perspective before delivering your assessment costs you almost nothing and dramatically increases how well your insights are received.",
        relationships: "You value honesty, directness, and intellectual engagement in your closest relationships — and you offer the same in return. People who know you well appreciate that your feedback is genuine, your positions are considered, and your affection is not performative. Partners and friends who share your appreciation for candor and can hold their own in a debate will thrive alongside you. Be mindful that not everyone experiences directness as care, even when it is fully intended that way. Small investments in emotional attunement — noticing how someone feels before addressing what they think — can transform how your sincerity is received.",
        careers: ["Attorney", "Investigative Journalist", "Stockbroker", "Debate Coach", "Management Consultant", "Chief Technology Officer"],
        growth: "Your directness and critical thinking are powerful professional assets that many people lack. To complement these strengths, practice noticing and acknowledging others' emotional states before diving into analysis or critique — a brief moment of empathy can make your insights far more persuasive. Remember that being right and being heard are two different things, and a small investment in relational warmth can dramatically increase your influence."
      }
    }
  },
  N: {
    label: "Neuroticism",
    emoji: "🌊",
    poles: ["Emotionally Stable", "Emotionally Reactive"],
    free: {
      high: {
        summary: "You experience emotions with notable intensity and depth, which gives you a heightened awareness of your inner world and the subtleties of your environment. Your emotional sensitivity can serve as an early-warning system, alerting you to problems or risks that others might overlook. This rich emotional life, when understood and managed, becomes a source of profound empathy and creative energy.",
        traits: ["Emotionally perceptive and deeply feeling", "Heightened awareness of potential risks and problems", "Strong capacity for empathy through personal emotional experience", "Driven to seek self-understanding and personal growth", "Sensitive to environmental and interpersonal subtleties"]
      },
      mid: {
        summary: "You experience a typical range of emotional ups and downs, handling most stressors with reasonable composure while still feeling things genuinely. You are neither overly reactive nor emotionally detached, allowing you to engage with difficult situations without being overwhelmed. This emotional middle ground gives you both resilience and relatability.",
        traits: ["Generally stable with natural emotional fluctuations", "Handles everyday stress with reasonable composure", "Emotionally engaged without being easily overwhelmed", "Recovers from setbacks at a steady, healthy pace", "Relatable to others through a balanced emotional range"]
      },
      low: {
        summary: "You possess a calm, even-tempered disposition that keeps you steady under pressure. Stressful situations that might rattle others tend to roll off you, allowing you to think clearly and act decisively when it matters most. Your emotional resilience provides a stabilizing presence for those around you.",
        traits: ["Calm and composed under pressure", "Emotionally resilient and quick to recover from setbacks", "Even-tempered and not easily provoked", "Provides a stabilizing, reassuring presence for others", "Able to think clearly during high-stress situations"]
      }
    },
    premium: {
      high: {
        workAptitude: "Your emotional sensitivity gives you a finely tuned awareness of interpersonal dynamics, unspoken tension, and potential risks that others may overlook — qualities that are genuinely valuable in the right role. Creative fields, advocacy, counseling, and user research benefit enormously from the depth of feeling you bring. The challenge is building a work environment and stress-management toolkit that prevent your sensitivity from becoming a source of sustained overwhelm. Roles with unpredictable demands, hostile cultures, or chronic instability will wear on you more than most — choosing your environment thoughtfully is one of the highest-leverage career decisions you can make.",
        relationships: "You love with real depth and feel things with an intensity that makes your connections rich and meaningful. When you are in a relationship, you are fully in it — your partner rarely wonders whether you care. The flip side is that emotional intensity can sometimes pull both of you into difficult spirals, especially during stress. Partners who are patient, emotionally secure, and good communicators will complement your nature best. Building a shared language around your emotional experience — so your partner understands your patterns without feeling responsible for fixing them — is one of the most powerful investments you can make in your relationships.",
        careers: ["Artist or Musician", "Therapist (with proper self-care)", "Crisis Counselor", "Creative Writer", "Advocate or Activist", "User Experience Researcher"],
        growth: "Your emotional depth is genuinely valuable — it fuels creativity, empathy, and an acute awareness that others benefit from. The key is building a strong toolkit for emotional regulation so that your sensitivity enhances your life rather than overwhelming it. Practices like mindfulness, regular physical exercise, and journaling can help you process intense emotions constructively and transform them into your greatest strengths."
      },
      mid: {
        workAptitude: "You handle the emotional demands of most workplaces with steady, reliable composure. You are not so detached that you miss the human dimension of work, nor so reactive that stress routinely derails your performance. This emotional middle ground is genuinely valuable — you can hold space for stressed colleagues, absorb difficult feedback, and navigate conflict without it lingering. Under unusually intense pressure you may feel the strain more than usual, but you tend to recover at a healthy pace. Proactive stress management, even during calm stretches, helps you maintain your natural equilibrium when the unexpected hits.",
        relationships: "You bring emotional authenticity and relatability to your relationships. You feel things genuinely — which means the people close to you experience your care as real — without being so reactive that your moods dominate the atmosphere. You can empathize meaningfully with a partner's distress without losing your own footing, which makes you a genuinely supportive presence. Pay attention to the specific situations that push you toward your more stressed or reactive end, and communicate those patterns to your closest people — that kind of self-awareness, shared openly, builds extraordinary trust.",
        careers: ["Project Coordinator", "Registered Nurse", "Middle School Teacher", "Customer Service Manager", "Occupational Therapist", "Marketing Manager"],
        growth: "Your balanced emotional life is a solid foundation that most people would envy. To build on it, pay attention to the specific triggers that push you toward your stressed end and develop targeted coping strategies for those moments. Proactive stress management — even when you feel fine — will help you maintain your equilibrium during life's inevitable rough patches."
      },
      low: {
        workAptitude: "You are built for high-pressure environments. Where others become reactive or lose clarity under stress, you tend to grow calmer and more focused — a quality that is exceptionally rare and disproportionately valuable in crisis-driven, high-stakes, or fast-moving fields. Colleagues and teams instinctively look to you for steadiness when things go sideways. Be aware that your natural composure can sometimes be misread as indifference by more emotionally expressive colleagues. Occasionally naming your engagement — simply saying you care about an outcome — helps people understand that your calm is a form of competence, not detachment.",
        relationships: "You are the steady, grounding presence that many people deeply need in a partner or close friend. During turbulent times — stress, grief, conflict, uncertainty — the people you love know they can lean on you without the floor giving way. Your emotional resilience is a genuine gift in a relationship. The area to cultivate is expressiveness — your internal emotional life may be richer than what you show outwardly, and the people closest to you may occasionally wonder where you are emotionally. Making a habit of naming your feelings, even simply and briefly, builds the kind of emotional intimacy that deepens relationships over time.",
        careers: ["Air Traffic Controller", "Emergency Room Physician", "Military Officer", "Stock Trader", "Firefighter", "Airline Pilot"],
        growth: "Your emotional steadiness is a tremendous asset, especially in high-pressure environments where others depend on your composure. Be aware that your calm nature may sometimes be perceived as detachment or lack of caring — occasionally verbalizing your feelings and checking in with loved ones can bridge that gap. Also remember that allowing yourself to fully feel and express emotions, even uncomfortable ones, is a sign of strength rather than weakness."
      }
    }
  }
};
