// Edit project entries only in this file.
// Categories accepted by the UI filters: Cybersecurity and AI/ML
export const projectFilters = ['All', 'Cybersecurity', 'AI/ML'];

export const projects = [
  {
    id: 'project-1',
    title: 'LunaMesh – Decentralized Mesh Networking for Deep-Space & Lunar Swarms',
    description:
      'A DTN-based space-network simulator that models autonomous communication between lunar rovers, orbiters/CubeSats, and an Earth ground station under high latency, intermittent connectivity, and signal disruption.',
    details:
      'Built a React frontend with a Python backend to simulate lunar/deep-space mesh routing and store-and-forward communication. Models BPv7/DTN concepts, LTP, UDP/TCPCL, and CFDP, with Dijkstra-based multi-hop routing and configurable link conditions. Evaluates routing behavior through metrics such as latency, delivery, and connectivity under disrupted links, with the architecture aligned with concepts used in NASA’s LunaNet and DTN ecosystem.',
    category:'Cybersecurity',
      tags: ['DTN', 'Space Networking', 'Lunar Networking', 'Python', 'React', 'BPv7', 'LTP'],
    techStack: ['Python', 'React', 'DTN', 'BPv7', 'LTP', 'UDP', 'TCPCL', 'CFDP'],
    githubUrl: 'https://github.com/Riddhima-Gupta/LunaMesh',
    liveUrl: 'https://[LIVE_DEMO_URL]',
    docsUrl: '/projects/[PROJECT_DOC_1].pdf',
    image: '/projects/[PROJECT_IMAGE_1].png',
  },
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
  {
    id: 'project-4',
     title: 'Nimbrix – AWS Cloud Misconfiguration Scanner',
  description:
    'An AWS security assessment tool that automatically detects common cloud misconfigurations across IAM, S3, EC2, CloudTrail, and Security Groups using deterministic security rules.',
  details:
    'Built a Streamlit-based AWS security scanner with a Python/boto3 backend. Implements 10+ security checks per AWS component, classifies findings by SOC-style severity, maps findings to CIS Benchmarks and MITRE ATT&CK techniques, and generates remediation guidance using the Groq API. Supports PDF, JSON, and CSV security reports.',
  category: 'Cybersecurity',
  tags: ['AWS', 'Cloud Security', 'Misconfiguration', 'IAM', 'S3', 'EC2', 'CloudTrail', 'Security Groups'],
  techStack: [
    'Python',
    'Streamlit',
    'boto3',
    'AWS',
    'Groq API',
    'CIS Benchmarks',
    'MITRE ATT&CK',
    'fpdf'
  ],
    githubUrl: 'https://github.com/Riddhima-Gupta/Nimbrix',
    liveUrl: 'https://[LIVE_DEMO_URL]',
    docsUrl: '/projects/[PROJECT_DOC_4].pdf',
    image: '/projects/[PROJECT_IMAGE_4].png',
  },

 {
  id: 'project-5',
  title: 'SPEMCS – Secure Proctored Exam Monitoring & Control System',
  description:
    'A centralized exam-security and DLP platform designed to monitor lab devices, detect suspicious activity, and provide administrators with real-time exam-session visibility and security alerts.',
  details:
    'Built a React/TypeScript frontend with a Python FastAPI backend and Neon PostgreSQL database using SQLAlchemy. Implements lab and device management, exam assignment, session tracking, event ingestion, alerts, reports, and real-time monitoring APIs, with UUID-based device identification and a Windows endpoint-agent architecture for collecting security events.',
  category: 'Cybersecurity',
  tags: [
    'DLP',
    'Endpoint Security',
    'Exam Security',
    'FastAPI',
    'PostgreSQL',
    'React',
    'Monitoring',
    'Threat Detection'
  ],
  techStack: [
    'Python',
    'FastAPI',
    'React',
    'TypeScript',
    'PostgreSQL',
    'Neon',
    'SQLAlchemy',
    'Pydantic',
    'REST API',
    'WebSockets',
    'C#/.NET'
  ],
    githubUrl: 'https://github.com/SPEMCS/spemcs',
    liveUrl: 'https://[LIVE_DEMO_URL]',
    docsUrl: '/projects/[PROJECT_DOC_4].pdf',
    image: '/projects/[PROJECT_IMAGE_4].png',
  },
];
