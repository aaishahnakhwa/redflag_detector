export interface Option {
  text: string;
  red: number;
  green: number;
  beige: number;
  feedback: string;
}

export interface Question {
  id: number;
  question: string;
  category: string;
  options: Option[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "How do they treat service staff (waiters, cashiers, delivery drivers)?",
    category: "Social Empathy",
    options: [
      {
        text: "Like royalty. Remembers their name, tips 25%, and cleans up the table before leaving.",
        red: 0,
        green: 20,
        beige: 0,
        feedback: "Wow, a literal saint. Are you sure they are human?"
      },
      {
        text: "Polite but silent. Standard 15% tipping robot. Normal human stuff.",
        red: 0,
        green: 10,
        beige: 2,
        feedback: "Functional social citizen. Standard rating approved."
      },
      {
        text: "Snaps fingers, sends food back twice, and complains about the font on the menu.",
        red: 25,
        green: 0,
        beige: 0,
        feedback: "RED ALERT. Pack your bags immediately. This is a villain origin story."
      },
      {
        text: "Starts explaining the restaurant's supply chain inefficiencies directly to the chef.",
        red: 5,
        green: 0,
        beige: 20,
        feedback: "Ultimate Beige. Fascinatingly annoying, but harmless."
      }
    ]
  },
  {
    id: 2,
    question: "You ask them what they want for dinner. What's the response?",
    category: "Decision Making",
    options: [
      {
        text: "\"I don't care, whatever you want\" (but then shoots down the first 6 places you suggest).",
        red: 15,
        green: 0,
        beige: 5,
        feedback: "A classic psychological warfare technique. Proceed with caution."
      },
      {
        text: "Provides a color-coded spreadsheet with 3 options categorized by budget and transit time.",
        red: 0,
        green: 10,
        beige: 18,
        feedback: "Marry them or fire them. Either way, they have a project management degree."
      },
      {
        text: "Makes a definitive decision in 3 seconds, orders, and it's the best meal of your life.",
        red: 0,
        green: 20,
        beige: 0,
        feedback: "Alpha energy. Write this down in the chronicles."
      },
      {
        text: "Suggests eating raw coffee beans and a single leaf of organic baby spinach.",
        red: 5,
        green: 0,
        beige: 22,
        feedback: "Are you dating a forest elf or a startup founder?"
      }
    ]
  },
  {
    id: 3,
    question: "What happens when they lose a casual board game or video game?",
    category: "Stress Tolerance",
    options: [
      {
        text: "Laughs it off, suggests another round, and genuinely congratulates the winner.",
        red: 0,
        green: 20,
        beige: 0,
        feedback: "Green Flag status: High sportsmanship. Excellent emotional regulation."
      },
      {
        text: "Flips the table, accuses the dice of being weighted, and deletes the game.",
        red: 25,
        green: 0,
        beige: 0,
        feedback: "CRITICAL FAILURE. Major security risk. Hide all heavy objects."
      },
      {
        text: "Stares blankly at the wall in deep existential silence for 30 minutes.",
        red: 5,
        green: 0,
        beige: 18,
        feedback: "Beige alert. They are replaying the turn-4 calculations in their mind palace."
      },
      {
        text: "Calculates the probability distribution of your dice rolls to prove you got lucky.",
        red: 2,
        green: 5,
        beige: 20,
        feedback: "Math nerd warning. Very beige, slightly green if you need taxes done."
      }
    ]
  },
  {
    id: 4,
    question: "How do they handle a minor crisis like the home WiFi dropping for 15 minutes?",
    category: "Crisis Management",
    options: [
      {
        text: "Takes a breath, grabs a real book, and enjoys the offline peace.",
        red: 0,
        green: 20,
        beige: 0,
        feedback: "Inner peace level: Buddhist monk. Highly compatible."
      },
      {
        text: "Launches into a rage, calls the ISP provider, and threatens to sue them for psychological distress.",
        red: 20,
        green: 0,
        beige: 0,
        feedback: "Meltdown parameters exceeded. Keep away from flammable liquids."
      },
      {
        text: "Glares at the router with intense betrayal, like it insulted their ancestors.",
        red: 5,
        green: 0,
        beige: 15,
        feedback: "Personal grudge against a black plastic box. Standard beige."
      },
      {
        text: "Immediately begins building a makeshift copper-wire antenna out of tin foil.",
        red: 0,
        green: 5,
        beige: 22,
        feedback: "Prepper energy. Useful in an apocalypse, weird on a Tuesday."
      }
    ]
  },
  {
    id: 5,
    question: "What is their relationship with phone notifications?",
    category: "Communication",
    options: [
      {
        text: "Replies promptly, clears notifications, maintains a clean home screen.",
        red: 0,
        green: 20,
        beige: 0,
        feedback: "Reliable comms link established. Green parameters met."
      },
      {
        text: "Has 18,432 unread emails and 92 unanswered texts, and feels absolutely zero guilt.",
        red: 18,
        green: 0,
        beige: 8,
        feedback: "DANGER. You will be lost in the scroll archives forever."
      },
      {
        text: "Keeps phone on 'Do Not Disturb' since 2021. Replies precisely 3 business days later.",
        red: 10,
        green: 0,
        beige: 18,
        feedback: "They operate on geological time scales. Very beige."
      },
      {
        text: "Panics at the sight of a red bubble but refuses to open it because of 'bad vibes'.",
        red: 8,
        green: 5,
        beige: 15,
        feedback: "High anxiety, low action. The vibes are indeed complex."
      }
    ]
  },
  {
    id: 6,
    question: "How do they pack for a simple 3-day weekend trip?",
    category: "Preparation & Logistics",
    options: [
      {
        text: "One carry-on bag, perfectly rolled clothes, has a spare emergency plug.",
        red: 0,
        green: 20,
        beige: 0,
        feedback: "Slick efficiency. Travel partner grade: Outstanding."
      },
      {
        text: "Three massive check-in suitcases, including 5 backup outfits for hypothetical snow in Florida.",
        red: 5,
        green: 0,
        beige: 18,
        feedback: "Over-preparation index: Critical. They are moving, not traveling."
      },
      {
        text: "Packs 10 minutes before the flight. Forgets underwear, but brings a vintage record player.",
        red: 12,
        green: 0,
        beige: 15,
        feedback: "Chaos packing. Expect to spend $80 at target on socks."
      },
      {
        text: "Packs exactly 3 identical black t-shirts, 1 pair of pants, and a custom water filtration straw.",
        red: 0,
        green: 8,
        beige: 22,
        feedback: "Is your partner a secret agent or just really boring?"
      }
    ]
  },
  {
    id: 7,
    question: "What's their stance on gossip/drama?",
    category: "Information Management",
    options: [
      {
        text: "Avoids it entirely. Focuses on cool science facts and mutual friends' wins.",
        red: 0,
        green: 20,
        beige: 2,
        feedback: "Mature and stable. But do they know why Karen was fired?"
      },
      {
        text: "\"I absolutely hate drama...\" (Proceeds to explain a 4-hour office saga in extreme cinematic detail).",
        red: 15,
        green: 5,
        beige: 10,
        feedback: "The classic hypocritical news reporter. High entertainment value, though."
      },
      {
        text: "They are the physical headquarters of the neighborhood intelligence agency.",
        red: 25,
        green: 0,
        beige: 0,
        feedback: "DO NOT tell them any secrets. You are being recorded."
      },
      {
        text: "Doesn't care about human gossip, but is deeply invested in the local crows' territory war.",
        red: 0,
        green: 8,
        beige: 25,
        feedback: "Crow whisperer. Highly beige. Might lead to a flock takeover."
      }
    ]
  },
  {
    id: 8,
    question: "If they see a dog on the street, what do they do?",
    category: "Affection Levels",
    options: [
      {
        text: "Gently asks owner's permission to pet it, adopts baby voice, gives good scritches.",
        red: 0,
        green: 20,
        beige: 0,
        feedback: "Instant checkpass. Dog approval is scientifically backed."
      },
      {
        text: "Ignores the dog completely. Doesn't even look. Walks past like a terminator.",
        red: 22,
        green: 0,
        beige: 0,
        feedback: "Highly suspicious. Are they running on oil instead of blood?"
      },
      {
        text: "Stares the dog in the eyes and tries to hold telepathic communication.",
        red: 0,
        green: 5,
        beige: 20,
        feedback: "Beige wizard energy. The dog was probably confused."
      },
      {
        text: "Attempts to pitch a crypto startup to the dog.",
        red: 12,
        green: 0,
        beige: 22,
        feedback: "Aggressive grindset. Even the dog wanted to leave."
      }
    ]
  }
];

export interface DiagnosticResult {
  title: string;
  type: 'red' | 'green' | 'beige' | 'chaos';
  glowClass: string;
  funnyTitle: string;
  description: string;
  lines: string[];
  gifPlaceholder: string; // Dynamic animations/HTML styles will represent this
}

export const DIAGNOSES: Record<string, DiagnosticResult> = {
  red: {
    title: "Class-D Toxic Meltdown",
    type: 'red',
    glowClass: 'glow-red text-red-500 border-red-500/50 bg-red-950/10',
    funnyTitle: "☣️ TOXIC REACTOR DETECTED ☣️",
    description: "System diagnostics indicate your partner's core has breached containment. The red flag radiation levels are off the charts. We advise putting on a hazmat suit and running.",
    lines: [
      "⚠️ Do not pass GO, do not collect $200. Pack your bags.",
      "⚠️ Their favorite hobby is playing devil's advocate.",
      "⚠️ If they were a soup, they'd be warm milk with raw onions.",
      "⚠️ Evacuate the facility immediately. Trigger the emergency ejector seat!"
    ],
    gifPlaceholder: "red_meltdown"
  },
  green: {
    title: "Class-A Optimal Fusion",
    type: 'green',
    glowClass: 'glow-green text-emerald-400 border-emerald-500/50 bg-emerald-950/10',
    funnyTitle: "☀️ GREEN FUSION ENERGY CORE ☀️",
    description: "Congratulations! Your partner is a rare celestial generator. They emit clean, eco-friendly energy, respect boundaries, and possess high sportsmanship. Core stability is at 99.8%.",
    lines: [
      "✨ A literal unicorn. Protect them at all costs.",
      "✨ They tip generously and actually put their shopping cart back.",
      "✨ Write a letter to their parents thanking them for excellent craftsmanship.",
      "✨ Containment levels: Extremely stable. Proceed to marriage or long-term contract."
    ],
    gifPlaceholder: "green_fusion"
  },
  beige: {
    title: "Class-B Beige Neutralizer",
    type: 'beige',
    glowClass: 'glow-beige text-yellow-500 border-yellow-500/50 bg-yellow-950/10',
    funnyTitle: "📦 THE HUMAN CARDBOARD DAMPENER 📦",
    description: "Our instruments detected high beige flag density. Your partner is completely harmless, highly predictable, and slightly strange. They aren't toxic, but they might talk about train schedules for 3 hours.",
    lines: [
      "📦 Completely safe. Will never commit a crime, but might wear socks with sandals.",
      "📦 Their favorite ice cream flavor is probably 'cold water'.",
      "📦 They will explain the entire lore of a video game they haven't played.",
      "📦 A human sponge. Sturdy, dry, absorbs water, doesn't do much else."
    ],
    gifPlaceholder: "beige_cardboard"
  },
  chaos: {
    title: "Class-X Chaos Oscillator",
    type: 'chaos',
    glowClass: 'text-purple-400 border-purple-500/50 bg-purple-950/10 shadow-[0_0_15px_rgba(168,85,247,0.3)]',
    funnyTitle: "🌀 THE CHAOS OSCILLATOR 🌀",
    description: "The scanner has malfunctioned. Your partner exhibits equal parts angelic behavior and extreme toxicity. They are a walking rollercoaster of pure, unadulterated chaos.",
    lines: [
      "🌀 They will donate to charity, then steal your fries when you look away.",
      "🌀 Extremely fun, but will definitely get you kicked out of an IKEA.",
      "🌀 A wild card. One day they are making breakfast, the next they are buying a llama.",
      "🌀 Buckle up. You are in for a wild ride."
    ],
    gifPlaceholder: "chaos_oscillator"
  }
};
