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

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  themes: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const profile = {
  name: "Ammar Asmro",
  role: "Senior Machine Learning Engineer",
  location: "Toronto, Canada",
  email: "ammarasmaro@gmail.com",
  shortBio:
    "I build machine learning systems and software products with a focus on practical impact, strong engineering, and real-world usability.",
  intro:
    "My recent work has centered on applied machine learning, retrieval, multimodal systems, and production-grade experimentation. I enjoy turning ambiguous problems into reliable systems, especially when the work sits at the intersection of research depth and product value.",
  about: [
    "I am a machine learning and software engineer based in Toronto. My background spans applied research, product engineering, information retrieval, NLP, and production ML systems.",
    "I completed a Master of Engineering focused on Software Engineering and Intelligent Systems at the University of Alberta, after earning a BSc in Electrical and Computer Engineering from the University of Duhok. Across both industry and independent work, I am most energized by building systems that are technically strong, practical, and maintainable."
  ],
  strengths: [
    "Applied machine learning and experimentation",
    "NLP, retrieval, and language technologies",
    "Production-oriented software engineering",
    "Systems thinking and end-to-end ownership"
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

export const experience: ExperienceItem[] = [
  {
    company: "Bloomberg",
    role: "Senior Machine Learning Research Engineer",
    location: "Toronto, Ontario",
    period: "2022 - Present",
    summary:
      "Working on applied machine learning problems across multimodal understanding, retrieval, model quality, and scalable experimentation.",
    themes: [
      "Multimodal datasets and visual-language workflows",
      "LLM quality and safety",
      "Retrieval and search relevance",
      "Faster ML pipelines"
    ]
  },
  {
    company: "Amazon",
    role: "Software Engineer",
    location: "Toronto, Ontario",
    period: "Previous role",
    summary:
      "Contributed to production software and large-scale systems work in a cloud-heavy environment, with a focus on practical engineering and distributed data processing.",
    themes: ["Java services", "Cloud systems", "Large-scale data workflows"]
  },
  {
    company: "AltaML",
    role: "Lead / Senior / Machine Learning Developer",
    location: "Toronto, Ontario",
    period: "2018 - 2022",
    summary:
      "Led and delivered ML projects end to end, from problem framing and data exploration to model deployment and client-facing solution development.",
    themes: [
      "NLP and document intelligence",
      "Production ML workflows",
      "Responsible AI research",
      "Client collaboration"
    ]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "C++", "Bash"]
  },
  {
    label: "Machine Learning",
    items: ["PyTorch", "Keras", "Scikit-learn", "Transformers", "Large-scale experimentation"]
  },
  {
    label: "Backend and APIs",
    items: ["FastAPI", "Flask", "SQL", "NoSQL", "Graph databases"]
  },
  {
    label: "Focus Areas",
    items: ["NLP", "Information retrieval", "Information extraction", "Language modeling", "Cloud ML systems"]
  }
];

export const projects: Project[] = [
  {
    slug: "kurdish-nlp-applications",
    title: "Kurdish NLP Applications",
    year: "Recent side project",
    summary: "A personal project exploring language technologies for Kurdish across web, graph, and speech applications.",
    description: [
      "This project brought together several NLP experiments focused on Kurdish, including a web interface to showcase practical language applications.",
      "The work explored word relationships, graph-based representations, and speech recognition, with the goal of making language tooling more accessible and useful."
    ],
    tags: ["Python", "Keras", "Neo4j", "JavaScript", "NLP"],
    image: "/images/projects/personalized-knowledge-graphs/schema.png",
    highlights: [
      "Built a public-facing web application for demos and experiments",
      "Explored graph language modeling and word embeddings",
      "Trained speech recognition on a sizable phone-conversation dataset"
    ]
  },
  {
    slug: "progba-v2",
    title: "Progressive Graph Builder API V2",
    year: "Recent side project",
    summary: "A multipurpose natural language understanding and question-answering API built for better scalability and faster end-to-end processing.",
    description: [
      "ProGBA V2 was designed as a flexible backend API for natural language understanding and question answering tasks.",
      "The second version focused on scalability, moving compute-heavy components into cloud infrastructure and tightening the end-to-end processing pipeline."
    ],
    tags: ["Java", "Python", "Flask", "Neo4j", "Cloud"],
    image: "/images/projects/personalized-knowledge-graphs/schema.png",
    highlights: [
      "Moved heavier processing into cloud VMs for better scalability",
      "Improved end-to-end processing performance significantly",
      "Combined multiple language and graph components behind one API"
    ]
  },
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
