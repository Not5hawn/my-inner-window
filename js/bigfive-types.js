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
        careers: ["Creative Director", "Research Scientist", "UX Designer", "Entrepreneur", "Writer or Journalist", "Art Therapist"],
        growth: "Your openness is a tremendous asset, but it can sometimes lead to scattered focus or difficulty committing to a single path. Practice channeling your curiosity into sustained projects that allow depth alongside breadth. Building finishing habits will help you turn your many brilliant ideas into tangible accomplishments."
      },
      mid: {
        careers: ["Product Manager", "Marketing Strategist", "Teacher", "Architect", "Business Analyst", "Human Resources Specialist"],
        growth: "Your balanced openness lets you bridge the gap between innovative thinkers and practical doers. Consider deliberately pushing yourself outside your comfort zone in areas where you tend to default to the familiar. At the same time, trust your instinct for knowing when a proven approach is genuinely the best option."
      },
      low: {
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
        careers: ["Operations Manager", "Surgeon", "Civil Engineer", "Compliance Officer", "Executive Administrator", "Certified Public Accountant"],
        growth: "Your discipline is admirable, but be mindful of perfectionism or over-commitment draining your energy. Practice giving yourself permission to produce 'good enough' work on lower-priority tasks so you can reserve your highest standards for what truly matters. Building in unstructured downtime is not laziness — it is maintenance for your high-performing mind."
      },
      mid: {
        careers: ["Consultant", "Sales Manager", "Registered Nurse", "Software Developer", "Event Planner", "Real Estate Agent"],
        growth: "You have a natural advantage in being able to shift between focused effort and easy-going flexibility. Identify the areas of your life where more structure would reduce stress and build small systems there — such as a weekly review or a simple task list. In other areas, trust your instinct for when it is fine to improvise."
      },
      low: {
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
        careers: ["Sales Director", "Public Relations Specialist", "Television Host or Broadcaster", "Recruiter", "Political Campaign Manager", "Corporate Trainer"],
        growth: "Your social energy is a powerful asset, but be mindful that constant external stimulation can sometimes prevent deeper self-reflection. Schedule regular quiet time — even brief periods of solitude — to process your thoughts and recharge at a deeper level. Practicing active listening, where you focus fully on others without planning your next statement, can also deepen your already strong relationships."
      },
      mid: {
        careers: ["Therapist or Counselor", "Team Lead", "Journalist", "Interior Designer", "Veterinarian", "Small Business Owner"],
        growth: "Your ability to flex between social and solitary modes is a rare and valuable skill. Pay attention to which mode you default to under stress and deliberately practice the other to maintain your balance. Journaling about your social energy patterns can help you make more intentional choices about how you spend your time."
      },
      low: {
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
        careers: ["Social Worker", "Nonprofit Director", "Pediatrician", "School Counselor", "Mediator", "Hospice Care Provider"],
        growth: "Your compassion is a beautiful quality, but it is important to guard against people-pleasing or neglecting your own needs to keep others happy. Practice saying no with kindness and clarity — your relationships will actually grow stronger when others know you are being genuine rather than accommodating. Setting healthy boundaries is not selfish; it is what allows you to sustain your generosity long-term."
      },
      mid: {
        careers: ["Human Resources Manager", "Negotiator", "Physical Therapist", "Customer Success Manager", "Psychologist", "Urban Planner"],
        growth: "Your balanced agreeableness gives you the rare ability to be both empathetic and objective. Lean into this duality by consciously choosing when a situation calls for warmth versus when it calls for candor. Developing confidence in delivering honest feedback with compassion will make you an exceptionally effective communicator and leader."
      },
      low: {
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
        careers: ["Artist or Musician", "Therapist (with proper self-care)", "Crisis Counselor", "Creative Writer", "Advocate or Activist", "User Experience Researcher"],
        growth: "Your emotional depth is genuinely valuable — it fuels creativity, empathy, and an acute awareness that others benefit from. The key is building a strong toolkit for emotional regulation so that your sensitivity enhances your life rather than overwhelming it. Practices like mindfulness, regular physical exercise, and journaling can help you process intense emotions constructively and transform them into your greatest strengths."
      },
      mid: {
        careers: ["Project Coordinator", "Registered Nurse", "Middle School Teacher", "Customer Service Manager", "Occupational Therapist", "Marketing Manager"],
        growth: "Your balanced emotional life is a solid foundation that most people would envy. To build on it, pay attention to the specific triggers that push you toward your stressed end and develop targeted coping strategies for those moments. Proactive stress management — even when you feel fine — will help you maintain your equilibrium during life's inevitable rough patches."
      },
      low: {
        careers: ["Air Traffic Controller", "Emergency Room Physician", "Military Officer", "Stock Trader", "Firefighter", "Airline Pilot"],
        growth: "Your emotional steadiness is a tremendous asset, especially in high-pressure environments where others depend on your composure. Be aware that your calm nature may sometimes be perceived as detachment or lack of caring — occasionally verbalizing your feelings and checking in with loved ones can bridge that gap. Also remember that allowing yourself to fully feel and express emotions, even uncomfortable ones, is a sign of strength rather than weakness."
      }
    }
  }
};
