export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  tags: string[];
  image: string;
  year: string;
  externalUrl?: string;
  highlights?: string[];
};

export const profile = {
  name: "Ammar Asmro",
  role: "Software Engineer",
  location: "Toronto, Canada",
  email: "ammarasmaro@gmail.com",
  shortBio:
    "I build thoughtful software products with a strong interest in machine learning, intelligent systems, and practical engineering.",
  intro:
    "I enjoy taking ambiguous problems, shaping them into useful products, and learning the systems behind them along the way. My background spans software engineering, machine learning, and systems-oriented work, and I like projects that sit at the intersection of technical depth and real user value.",
  about: [
    "I completed a Master of Engineering focused on Software Engineering and Intelligent Systems at the University of Alberta. Before that, I earned a BSc in Electrical and Computer Engineering from the University of Duhok.",
    "A lot of my earlier work explored machine learning, natural language processing, robotics, and decision-support systems. I still enjoy those areas, but what ties everything together for me is building software that is genuinely useful and well-crafted."
  ],
  strengths: [
    "Product-minded engineering",
    "Machine learning and NLP foundations",
    "Full-stack problem solving",
    "Systems thinking and technical curiosity"
  ],
  education: [
    "Master of Engineering, Software Engineering and Intelligent Systems - University of Alberta",
    "BSc in Electrical and Computer Engineering - University of Duhok"
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/ammarasmro" },
    { label: "LinkedIn", href: "https://linkedin.com/in/ammar-asmro" },
    { label: "Stack Overflow", href: "https://stackoverflow.com/users/7568128/ammar-asmaro" },
    { label: "Instagram", href: "https://instagram.com/amoryasmaro" },
    { label: "Email", href: "mailto:ammarasmaro@gmail.com" }
  ]
};

export const projects: Project[] = [
  {
    slug: "personalized-knowledge-graphs",
    title: "Personalized Knowledge Graphs",
    year: "2018",
    summary: "A progressive graph builder designed to power a more context-aware personal assistant.",
    description: [
      "This capstone project explored how a personal assistant could build a project-specific knowledge graph from unstructured information.",
      "The system combined IBM Watson Discovery, Stanford CoreNLP, Open Information Extraction, and Neo4j to turn documents into structured graph relationships that could later support chatbot-style interactions."
    ],
    tags: ["NLU", "Neo4j", "Java", "Chatbot", "Knowledge Graphs"],
    image: "/images/projects/personalized-knowledge-graphs/schema.png",
    externalUrl: "https://github.com/ammarasmro/personalized-knowledge-graphs",
    highlights: [
      "Parsed documents into concepts, keywords, and relationships",
      "Used OpenIE and coreference resolution to extract graph-ready facts",
      "Designed around future conversational and assistant workflows"
    ]
  },
  {
    slug: "smart-course-browser",
    title: "Smart Course Browser",
    year: "2018",
    summary: "A search and recommendation platform to help students explore courses with more confidence.",
    description: [
      "This project tackled the gap between sparse course descriptions and the real decisions students have to make.",
      "I built a system that combined search, recommendation techniques, word embeddings, and decision-support tooling to create a richer course exploration experience."
    ],
    tags: ["Python", "Recommender Systems", "Solr", "Word2Vec", "Watson"],
    image: "/images/projects/smart-course-browser/ui.png",
    highlights: [
      "Combined search and recommendation into one student-facing workflow",
      "Used transcript and feedback data to enrich results",
      "Included TradeOff Analytics to support decision-making"
    ]
  },
  {
    slug: "deep-education",
    title: "Deep Education",
    year: "2018",
    summary: "An exploration of deep learning and document similarity for education-focused text data.",
    description: [
      "This work looked at how deep learning techniques could be adapted for education-specific corpora and recommendation-style tasks.",
      "It included word-level and character-level sequence modeling, plus document similarity experiments using embeddings and paragraph vectors."
    ],
    tags: ["TensorFlow", "NLP", "RNN", "Embeddings"],
    image: "/images/projects/deep-education/word_embedding.png",
    highlights: [
      "Trained recurrent models on domain-specific educational text",
      "Explored document similarity for course recommendation use cases",
      "Worked through the practical challenge of building a clean corpus"
    ]
  },
  {
    slug: "real-estate-prediction",
    title: "Real Estate Prediction",
    year: "2018",
    summary: "A housing-price classification project using clustering, feature engineering, and supervised learning.",
    description: [
      "This project used open Edmonton datasets to model property prices through a combination of unsupervised and supervised learning.",
      "It focused on extracting useful features, forming classes, and testing approaches like decision trees and ensemble bagged trees."
    ],
    tags: ["Machine Learning", "Classification", "Clustering", "Matlab"],
    image: "/images/projects/real-estate-prediction/edmonton_map.png",
    highlights: [
      "Combined multiple civic datasets into one modeling workflow",
      "Used K-means clustering as part of the classification process",
      "Compared model behavior across accuracy and runtime tradeoffs"
    ]
  },
  {
    slug: "party-gathering",
    title: "Party Gathering",
    year: "2018",
    summary: "A location-aware group chat concept for events and nearby communities.",
    description: [
      "Party Gathering was a hackathon-style Android project that explored lightweight, location-driven conversations.",
      "The idea was to reduce the friction of manually creating and inviting people into event-specific group chats by using proximity data instead."
    ],
    tags: ["Android", "Firebase", "Location", "Hackathon"],
    image: "/images/projects/party-gathering/heatmap.png",
    highlights: [
      "Built around nearby participation rather than manual group setup",
      "Stored event and conversation data with Firebase",
      "Extended the concept with clustering and heatmap analysis"
    ]
  },
  {
    slug: "connect4-toot-otto",
    title: "Connect4 and TOOT-OTTO",
    year: "2018",
    summary: "A JavaFX implementation of two games using an MVC architecture and computer players.",
    description: [
      "This project focused on building a clean desktop game implementation using JavaFX and an explicit MVC structure.",
      "Along the way it explored gameplay models, multiple player types, and foundations for improving AI behavior."
    ],
    tags: ["Java", "JavaFX", "MVC", "Games"],
    image: "/images/projects/connect4-otto-mvc/game_board.png",
    externalUrl: "https://github.com/ammarasmro/connect4_ottotoot_mvc",
    highlights: [
      "Separated game model, controller, and interface concerns",
      "Implemented both human and computerized players",
      "Left room for deeper AI and refactoring improvements"
    ]
  },
  {
    slug: "microcontrolled-takeout-robot",
    title: "Microcontrolled Takeout Robot",
    year: "2014",
    summary: "A pneumatic robotic arm controlled by an 8051 microcontroller and sensor feedback loop.",
    description: [
      "This project combined hardware, embedded programming, sensing, and control design into a working robotic system.",
      "The final prototype used sensors, valves, a microcontroller, and a user interface to detect, move, and monitor objects across a two-axis robotic setup."
    ],
    tags: ["Robotics", "C++", "Microcontroller", "Control Systems"],
    image: "/images/projects/microcontrolled-takeout-robot/cool_cover_circuit.jpg",
    externalUrl: "https://github.com/ammarasmro/MicroContolled-Takeout-Robot",
    highlights: [
      "Built around pneumatic motion and feedback-based control",
      "Integrated sensors, LCD output, and operator controls",
      "Placed first among ECE projects at Design Day"
    ]
  }
];
