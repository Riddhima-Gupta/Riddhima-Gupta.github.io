// Edit project entries only in this file.
// Categories accepted by the UI filters: Cybersecurity and AI/ML
export const projectFilters = ['All', 'Cybersecurity', 'AI/ML'];

export const projects = [
  // {
  //   id: 'project-1',
  //   title: '[YOUR_PROJECT_TITLE_1]',
  //   description:
  //     '[PROJECT_DESCRIPTION] Briefly explain the problem, your approach, and measurable impact in 2-3 lines.',
  //   details:
  //     '[PROJECT_DETAILS] Add architecture notes, experiment setup, key challenges, and outcomes for modal view.',
  //   category: 'Cybersecurity',
  //   tags: ['Security', 'Automation', 'Python'],
  //   techStack: ['Python', 'Wireshark', 'Flask', 'SQLite'],
  //   githubUrl: 'https://github.com/[USERNAME]/[REPO_NAME]',
  //   liveUrl: 'https://[LIVE_DEMO_URL]',
  //   docsUrl: '/projects/[PROJECT_DOC_1].pdf',
  //   image: '/projects/[PROJECT_IMAGE_1].png',
  // },
  {
    id: 'project-2',
    title: 'FloatChat AI – Generative AI Conversational Platform',
    description:
      'A RAG-powered AI chatbot built to query a real oceanographic dataset — not just chat, but retrieve, reason, and respond accurately. Built solo and shipped to production as an SIH 2025 Finalist project.',
    details:
      'Handles a 712-feature, 2,101-row ARGO ocean dataset across 5 float IDs. Built a full chunking + retrieval pipeline using Sentence Transformers and ChromaDB, then wrapped it in a clean FastAPI REST layer decoupled from the Streamlit frontend — so the LLM backend can scale independently. Responses come back in 2–3 seconds with no hallucinations.',
    category: 'AI/ML',
    tags: ['RAG', 'Generative AI', 'NLP', 'MLOps', 'SIH Finalist 2025'],
    techStack: ['Python', 'FastAPI', 'Sentence Transformers', 'ChromaDB', 'scikit-learn', 'Streamlit', 'pandas', 'NumPy'],
    githubUrl: 'https://github.com/Riddhima-Gupta/FloatChat-AI.git',
    liveUrl: 'https://float-chat-app-o86832.streamlit.app/',
    docsUrl: '/projects/[PROJECT_DOC_2].pdf',
    image: '/projects/[PROJECT_IMAGE_2].png',
  },
  {
    id: 'project-3',
    title: 'XamVigil – AI-Driven Online Examination Integrity System',
    description:'An AI-powered proctoring system that monitors live exam sessions and scores every student\'s behavior in real time. Goes beyond basic flagging — it combines ML anomaly detection with rule-based signals to produce a single, explainable suspicion score per student.',
    details:'Simulated 4 concurrent JEE exam sessions with 15–20 students each. An Isolation Forest model detects anomalous behavior patterns, layered with 6+ rule-based signals — tab switches, fast-answer ratio, face absence rate, answer-time anomalies — blended into a normalized 0–100 suspicion score. All flagged events are persisted via SQLAlchemy for post-exam human review and audit trails.',
    category: 'AI/ML',
    tags: ['Anomaly Detection', 'AI Proctoring', 'ML', 'Real-time', 'EdTech'],
    techStack: ['Python', 'FastAPI', 'Isolation Forest', 'scikit-learn', 'SQLAlchemy', 'Streamlit'],
    githubUrl: 'https://github.com/Riddhima-Gupta/Xamvigil.git',
    liveUrl: 'https://xamvigil-3we2kdcy4h48f6pktrvnqh.streamlit.app/',
    docsUrl: '/projects/[PROJECT_DOC_3].pdf',
    image: '/projects/[PROJECT_IMAGE_3].png',
  },
  // {
  //   id: 'project-4',
  //   title: '[YOUR_PROJECT_TITLE_4]',
  //   description:
  //     '[PROJECT_DESCRIPTION] Example: research prototype with reproducible experiments and technical report.',
  //   details:
  //     '[PROJECT_DETAILS] Describe study goals, methodology, benchmarks, and publication/readout links.',
  //   category: 'AI/ML',
  //   tags: ['Research', 'Experimentation', 'Analysis'],
  //   techStack: ['Python', 'Jupyter', 'Pandas', 'Matplotlib'],
  //   githubUrl: 'https://github.com/[USERNAME]/[REPO_NAME]',
  //   liveUrl: 'https://[LIVE_DEMO_URL]',
  //   docsUrl: '/projects/[PROJECT_DOC_4].pdf',
  //   image: '/projects/[PROJECT_IMAGE_4].png',
  // },
];
