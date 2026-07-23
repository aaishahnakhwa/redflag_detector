export type QuestionOption = {
  key: "A" | "B" | "C" | "D";
  text: string;
  points: number;
};

export type Category =
  | "Communication"
  | "Respect"
  | "Conflict Resolution"
  | "Accountability"
  | "Emotional Safety";

export type Question = {
  id: number;
  category: Category;
  prompt: (partnerName: string) => string;
  options: QuestionOption[];
};

const opts = (a: string, b: string, c: string, d: string): QuestionOption[] => [
  { key: "A", text: a, points: 5 },
  { key: "B", text: b, points: 4 },
  { key: "C", text: c, points: 2 },
  { key: "D", text: d, points: 0 },
];

export const questions: Question[] = [
  {
    id: 1,
    category: "Communication",
    prompt: (n) =>
      `When you tell ${n} that something they did hurt you, how do they usually respond?`,
    options: opts(
      "They listen, acknowledge my feelings, and try to understand my perspective.",
      "They listen but become slightly defensive before eventually understanding.",
      "They dismiss my feelings or tell me I'm overreacting.",
      "They get angry, blame me, or turn the situation against me.",
    ),
  },
  {
    id: 2,
    category: "Accountability",
    prompt: (n) => `When ${n} makes a mistake, what do they usually do?`,
    options: opts(
      "They admit it, apologize sincerely, and try to make things right.",
      "They admit it, but only after some discussion or hesitation.",
      "They mostly justify their actions or make excuses.",
      "They refuse responsibility and blame others or me instead.",
    ),
  },
  {
    id: 3,
    category: "Respect",
    prompt: (n) =>
      `If you set a personal boundary, how does ${n} react?`,
    options: opts(
      "They respect it, even if they don't fully agree.",
      "They ask questions to understand it but ultimately respect it.",
      "They repeatedly try to convince me to change my mind.",
      "They ignore, violate, or mock my boundaries.",
    ),
  },
  {
    id: 4,
    category: "Accountability",
    prompt: (n) =>
      `How well do ${n}'s actions match what they promise?`,
    options: opts(
      "They are consistently dependable, and I can trust their word.",
      "They usually follow through, though they occasionally fall short.",
      "They often make promises but don't consistently keep them.",
      "I rarely believe their promises because they frequently break them.",
    ),
  },
  {
    id: 5,
    category: "Conflict Resolution",
    prompt: (n) =>
      `During disagreements, what is ${n}'s typical behavior?`,
    options: opts(
      "They stay respectful and focus on solving the issue together.",
      "They become emotional but calm down and continue the conversation respectfully.",
      "They raise their voice, avoid the discussion, or become passive-aggressive.",
      "They insult, threaten, manipulate, or deliberately try to hurt me.",
    ),
  },
  {
    id: 6,
    category: "Emotional Safety",
    prompt: (n) =>
      `How comfortable do you feel expressing your thoughts and feelings around ${n}?`,
    options: opts(
      "I feel completely safe being honest without fear of judgment.",
      "I feel comfortable most of the time, though I sometimes hesitate.",
      "I often avoid sharing my true feelings to prevent conflict.",
      "I usually stay silent because I'm afraid of their reaction.",
    ),
  },
  {
    id: 7,
    category: "Respect",
    prompt: (n) =>
      `How does ${n} respond to your personal goals, friendships, or family relationships?`,
    options: opts(
      "They encourage my growth and support my independence.",
      "They're generally supportive, though they occasionally feel insecure.",
      "They often discourage my goals or make me feel guilty for spending time with others.",
      "They try to control who I see, what I do, or isolate me from others.",
    ),
  },
];
