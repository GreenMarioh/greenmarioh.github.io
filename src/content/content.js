// src/content/content.js
// Single source of truth for portfolio content
// Governed by docs/CONTENT_POSITIONING.md and docs/BRIEF.md

export const personalInfo = {
  name: "Mohnish",
  fullName: "Mohnish Kumar",
  handle: "GreenMario",
  githubHandle: "GreenMarioh",
  headline: "Software Engineer & Algorithmic Problem Solver",
  subHeadline: "Building systems, backend infrastructure, and intelligent software.",
  bio: "Computer Science undergraduate at KIIT Bhubaneswar (Class of 2027) with a strong competitive programming foundation across 1000+ solved problems (Codeforces Pupil, LeetCode 1656). Applying algorithmic rigor to native systems programming in C++, scalable backend architectures in TypeScript/Node.js, and applied machine learning pipelines.",
  telemetryBadges: [
    { label: "PROBLEM SOLVING", val: "1000+ Solved (LeetCode 675+)" },
    { label: "CONTEST RATING", val: "Codeforces Pupil (1366 Max) · CodeChef 1519" },
    { label: "EDUCATION", val: "KIIT Bhubaneswar (Class of 2027)" },
    { label: "UPCOMING", val: "Infosys DSE (HackWithInfy Selection)" },
  ],
  education: {
    institution: "KIIT, Bhubaneswar",
    degree: "B.Tech Computer Science & Engineering",
    gradYear: "2027",
  },
  resumeUrl: "https://drive.google.com/file/d/1BOXlBtc7U3EzD-iXKECnTPOvz15ZttRW/view", // TODO(content): update if direct PDF asset preferred
  email: "TODO(content): add direct email address",
};

export const featuredProjects = [
  {
    id: "spikesync",
    kicker: "01 // SIGNATURE BACKEND & DISCORD INFRASTRUCTURE",
    name: "SpikeSync",
    tagline: "Autonomous VLR.gg Esports Sync Engine & Discord Bot",
    scale: "Deploying to Official VALORANT Discord (2.7M+ Members)",
    description:
      "A production TypeScript/Node.js Discord bot and scraping engine built to automate Valorant esports schedules and match telemetry from VLR.gg for competitive communities, including deployment to the official VALORANT Discord server (2.3M+ members). Features polite serialized scraping, dynamic Discord Application Emoji LRU caching, in-place embed updating, spoiler-protected scorelines, and zero-network SQLite-backed slash commands.",
    highlights: [
      "Targeted Deployment: Built to serve as the primary esports schedule distribution bot for the official VALORANT Discord (2.7M+ users).",
      "Polite Serialized Scraping: Enforces concurrency 1 and a 1.5s sliding window via p-queue with exponential jittered backoff, 0 requests when idle, and instant abort on 403/429.",
      "Dynamic Application Emoji LRU Cache: Downloads team logos from VLR and syncs up to 50 global Discord Application Emojis with automatic LRU eviction, state recovery, and automated two-team reaction placement.",
      "In-Place Embed Updates & Channel Pruning: Updates active match announcements in-place on 15-min sync intervals; auto-recovers from deleted messages (10008) and cleans up deleted channels (10003).",
      "Spoiler-Protected Scorelines: Encapsulates final series scores and individual map results behind Discord spoilers, including decider map padding (e.g. '|| Abyss 0 - 0 ||' on 2-0 sweeps) to never spoil series length.",
      "Incremental Results Sync: Ingests 50 completed matches from VLR with database guards, skipping HTTP requests for matches already marked completed in SQLite.",
      "Zero-Network Slash Commands: /schedule post, refresh, channels, view, next, live, and last serve instantaneous (<50ms) responses entirely from SQLite cache.",
      "Clean Architecture & Strict Boundaries: Modular layered architecture with ESLint-enforced separation between VLR scraping and Discord presentation layers, validated at runtime with Zod.",
    ],
    stack: [
      "TypeScript",
      "Node.js 22",
      "Sapphire Framework",
      "discord.js v14",
      "Drizzle ORM",
      "SQLite (better-sqlite3)",
      "Cheerio",
      "Zod",
      "p-queue",
      "Luxon",
    ],
    repo: null, // Private repo in active development
    isPrivate: true,
    liveUrl: null,
  },
  {
    id: "redrob-ranker",
    kicker: "02 // DATA PIPELINES & SCORING",
    name: "Redrob Candidate Ranking System",
    tagline: "Multi-Signal Candidate Evaluation & Scoring Pipeline",
    description:
      "A structured candidate ranking system tailored for AI, Machine Learning, and Engineering roles. Ingests candidate profile datasets, extracts domain-specific competency signals, and produces an explainable ranked leaderboard.",
    highlights: [
      "Modular data processing pipeline ingesting and normalizing structured candidate JSON/JSONL records.",
      "Weighted scoring engine mapping candidate experience, technical proficiencies, and relevance signals.",
      "Automated human-readable explanation generation detailing ranking factors for each evaluation.",
      "Interactive Streamlit dashboard with Plotly visualization for real-time candidate filtering.",
    ],
    stack: [
      "Python",
      "Pandas",
      "Data Pipelines",
      "Ranking Algorithms",
      "Streamlit",
      "Plotly",
    ],
    repo: "https://github.com/GreenMarioh/redrob-ranker",
    isPrivate: false,
    liveUrl: null,
  },
  {
    id: "spotify-converter",
    kicker: "03 // FULL-STACK & OAUTH INTEGRATION",
    name: "Spotify <---> YouTube Playlist Converter",
    tagline: "Bidirectional Music Playlist Transfer & OAuth 2.0 Web Application",
    description:
      "A full-stack web application that seamlessly converts playlists between Spotify and YouTube in both directions. Connects directly to official APIs using OAuth 2.0 authentication flows, with clean state handling and API quota management.",
    highlights: [
      "Bidirectional conversion: seamlessly converts Spotify playlists to YouTube and YouTube playlists to Spotify.",
      "Secure OAuth 2.0 authentication architecture connecting Spotify and Google Cloud accounts without storing credentials.",
      "Full-stack architecture featuring a Node.js / Express backend alongside a responsive React user interface.",
      "Handled search matching, query normalization, and YouTube Data API v3 quota optimization constraints.",
    ],
    stack: [
      "Node.js",
      "React.js",
      "OAuth 2.0",
      "Spotify Web API",
      "YouTube Data API v3",
      "Express",
      "REST APIs",
    ],
    repo: "https://github.com/GreenMarioh/yt-spotify-converter",
    isPrivate: false,
    liveUrl: null,
  },
  {
    id: "unique-paths",
    kicker: "04 // ALGORITHMS & GRAPH SEARCH",
    name: "Shortest / Unique Paths Visualizer",
    tagline: "Interactive 8-Directional Pathfinding & DP Animation",
    description:
      "Dynamic interactive grid visualizer animating pathfinding across user-drawn obstacle terrains using Dynamic Programming and Dijkstra's 8-directional shortest path search algorithm.",
    highlights: [
      "Interactive 2D grid allowing dynamic obstacle placement, start/end anchor repositioning, and weight tuning.",
      "Step-by-step visual animation of 8-directional Dijkstra shortest path tree expansion.",
      "Dynamic Programming path traversal demonstrating combinatorial unique-path solutions in real time.",
    ],
    stack: [
      "JavaScript",
      "HTML5 Canvas",
      "Algorithms & DSA",
      "Dijkstra's Algorithm",
      "Dynamic Programming",
    ],
    repo: "https://github.com/GreenMarioh/unique-paths-visualizer",
    isPrivate: false,
    liveUrl: "https://greenmarioh.github.io/unique-paths-visualizer/",
  },
];

export const experienceData = {
  work: [
    {
      company: "Paragon",
      role: "Assistant Developer",
      period: "Nov-Dec 2025",
      badge: "Backend Engineering",
      details: [
        "Engineered backend infrastructure and premium features for large gaming communities (VALORANT and VALORANT LFG Discords).",
        "Implemented Role-Based Access Control (RBAC) mechanisms and modular service handlers using TypeScript and the Sapphire framework.",
        "Architected persistent task scheduling, clan management systems, and Prisma ORM database middleware for relational data integrity.",
      ],
    },
  ],
  upcoming: [
    {
      company: "Infosys",
      role: "Digital Specialist Engineer",
      period: "April 2027 (Tentative)",
      badge: "Competitive Selection",
      details: [
        "Offered Digital Specialist Engineer (DSE) role after advancing through competitive rounds of the HackWithInfy coding competition.",
      ],
    },
  ],
};

export const competitivePrograms = [
  {
    id: "amazon-mlss",
    organization: "Amazon",
    type: "SELECTIVE PROGRAM",
    title: "Amazon ML Summer School 2026",
    subtitle: "Nationwide Selective Machine Learning Program",
    year: "2026",
    metrics: [
      { label: "APPLICANTS", val: "134K+ Registered" },
      { label: "SELECTED", val: "~3K Students" },
      { label: "RATIO", val: "Top ~2-3%" },
    ],
    progressionText: "134K+ REGISTERED → ~3K SELECTED (TOP ~2%)",
    description:
      "Selected for the Amazon ML Summer School 2026 among over 134,000 registered students nationwide (~top 2–3% selection rate). Participated in Amazon-led machine learning modules and technical content covering sequence modeling, deep architectures, and real-world system modeling.",
    badge: "Top ~2% Selectivity",
  },
  {
    id: "amazon-hackon",
    organization: "Amazon",
    type: "HIRING CHALLENGE",
    title: "Amazon HackOn → SDE Interview",
    subtitle: "Competitive Challenge to Engineering Interview Pipeline",
    year: "2025 – 2026",
    metrics: [
      { label: "CHALLENGE", val: "Amazon HackOn" },
      { label: "PIPELINE", val: "Hiring Rounds" },
      { label: "OUTCOME", val: "SDE Interview" },
    ],
    progressionText: "HACKON CHALLENGE → PIPELINE ADVANCEMENT → SDE INTERVIEW",
    description:
      "Competed in Amazon HackOn, demonstrating rapid software architecture and problem-solving execution under timed constraints. Successfully progressed through the technical challenge evaluation to reach the Amazon SDE interview stage.",
    badge: "SDE Interview Stage",
  },
  {
    id: "infosys-hackwithinfy",
    organization: "Infosys",
    type: "HIRING CHALLENGE",
    title: "Infosys HackWithInfy → DSE Interview",
    subtitle: "Competitive Coding Contest to Placement Selection",
    year: "2025 – 2026",
    metrics: [
      { label: "CONTEST", val: "HackWithInfy" },
      { label: "STAGE", val: "Coding Rounds" },
      { label: "OUTCOME", val: "DSE Interview & Offer" },
    ],
    progressionText: "HACKWITHINFY → CODING ROUNDS → DSE INTERVIEW → DSE OFFER",
    description:
      "Participated in HackWithInfy, Infosys' premier national competitive programming challenge. Solved algorithmic problems across multiple rounds, advanced through the hiring pipeline to the technical interview stage, and secured an offer for the Digital Specialist Engineer (DSE) role.",
    badge: "DSE Offer Secured",
  },
  {
    id: "amazon-ml-challenge",
    organization: "Amazon",
    type: "ML COMPETITION",
    title: "Amazon Machine Learning Challenge 2026",
    subtitle: "Team-Based Applied Machine Learning Competition",
    year: "2026",
    metrics: [
      { label: "FORMAT", val: "Team of 4" },
      { label: "DOMAIN", val: "Applied ML" },
      { label: "FOCUS", val: "Iterative Modeling" },
    ],
    progressionText: "TEAM OF 4 → ITERATIVE MODELING → APPLIED ML PIPELINE",
    description:
      "Collaborated in a team of four to design, train, and evaluate a practical machine learning solution for the Amazon ML Challenge 2026. Handled exploratory data analysis, feature engineering, and model validation under timed competitive constraints.",
    badge: "Team-Based ML Execution",
  },
];

export const secondaryProjects = [
  {
    name: "LightRec",
    tagline: "Native Windows C++20 Low-Overhead Screen Capture & Replay",
    description:
      "Ultra-low-overhead Windows desktop clip recorder (< 50 MB idle RAM, < 2% CPU). Uses DirectX Desktop Duplication (DXGI), HLSL compute shaders, hardware encoding, and a lock-free SPSC ring buffer for instant hotkey replay.",
    stack: ["C++20", "Win32 API", "DirectX / DXGI", "HLSL", "Hardware Encoding"],
    repo: "https://github.com/GreenMarioh/LightRec",
    liveUrl: null,
  },
  {
    name: "HYDRA-LB: Proactive SDN Load Balancer",
    tagline: "Predictive Control-Plane Load Balancing for Distributed SDNs",
    description:
      "Predictive load balancer for Software-Defined Networks. Uses Attention-Enhanced Bi-LSTM neural networks to forecast controller load 5s in advance and proactively migrates OpenFlow switches across Mininet and Ryu controllers.",
    stack: ["Python", "PyTorch", "Bi-LSTM & Attention", "Ryu SDN", "OpenFlow", "Mininet"],
    repo: "https://github.com/GreenMarioh/load-balancer-dns-resolver",
    liveUrl: null,
  },
  {
    name: "AI Resume Architect",
    tagline: "Multi-Agent Resume Tailoring & LaTeX Compiler",
    description:
      "Multi-agent web app that audits resumes against job descriptions, analyzes GitHub contribution patterns, and compiles ATS-optimized LaTeX PDFs.",
    stack: ["TypeScript", "Next.js", "Multi-Agent AI", "LaTeX Engine"],
    repo: "https://github.com/GreenMarioh/ai-resume-architect",
    liveUrl: null,
  },
  {
    name: "Nimble",
    tagline: "Computer Vision Hand Gesture Cursor Controller",
    description:
      "Control system cursor in real time via standard webcam. Utilizes MediaPipe hand landmark tracking and OpenCV gesture translation without external hardware.",
    stack: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    repo: "https://github.com/GreenMarioh/Nimble",
    liveUrl: null,
  },
  {
    name: "Whipper",
    tagline: "Esports & Gaming Stats Discord Bot",
    description:
      "Discord bot for fetching live player stats across VALORANT, Apex Legends, and CS, with server status monitoring for Minecraft and Apex.",
    stack: ["JavaScript", "Node.js", "Discord.js", "Axios"],
    repo: "https://github.com/GreenMarioh/Whipper",
    liveUrl: null,
  },
  {
    name: "AI Hospital Management Assistant",
    tagline: "Clinical Intake & Workflow Triage",
    description:
      "Prototype clinical operations intake and triage assistant designed for automated patient query routing and scheduling.",
    stack: ["Python", "Machine Learning", "NLP"],
    repo: null, // TODO(content): add repo link
    liveUrl: null,
    isTodo: true,
  },
];

export const technicalCapabilities = [
  {
    domain: "LANGUAGES",
    skills: ["C/C++", "TypeScript", "JavaScript", "Python", "Java"],
  },
  {
    domain: "BACKEND & SYSTEMS",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Discord.js",
      "Sapphire",
      "Win32 API",
      "Drizzle ORM",
      "Prisma",
      "SQLite",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    domain: "FRONTEND",
    skills: ["React", "HTML5", "CSS3"],
  },
  {
    domain: "ML / AI",
    skills: [
      "PyTorch",
      "TensorFlow",
      "NLP",
      "Computer Vision",
      "OpenCV",
      "MediaPipe",
    ],
  },
  {
    domain: "SYSTEMS & INFRASTRUCTURE",
    skills: [
      "Linux (CLI / Bash)",
      "Git / GitHub",
      "Networking",
      "OpenFlow",
      "SDN (Ryu / Mininet)",
      "Docker",
    ],
  },
  {
    domain: "SECURITY",
    skills: [
      "Kali Linux",
      "Nmap",
      "Metasploit",
      "Burp Suite",
    ],
  },
  {
    domain: "ENGINEERING",
    skills: [
      "Data Pipelines",
      "Algorithms & Data Structures",
      "OAuth 2.0 Integration",
      "Web Scraping",
      "Task Scheduling",
    ],
  },
];

export const problemSolving = {
  primary: [
    {
      platform: "Codeforces",
      handle: "greenmario",
      rating: "1366",
      metric: "Pupil (Max Rating)",
      url: "https://codeforces.com/profile/greenmario",
      highlight: true,
    },
    {
      platform: "LeetCode",
      handle: "GreenMario",
      rating: "1656",
      metric: "600+ Solved",
      url: "https://leetcode.com/u/GreenMario/",
      highlight: false,
    },
    {
      platform: "CodeChef",
      handle: "green_mario",
      rating: "1519",
      metric: "2-Star (Div 3)",
      url: "https://www.codechef.com/users/green_mario",
      highlight: false,
    },
  ],
  secondary: [
    { name: "GeeksforGeeks", metric: "40+ Solved", url: "https://www.geeksforgeeks.org/user/mohnishk65c8/" },
    { name: "TryHackMe", metric: "Top 15% Global", url: "https://tryhackme.com/p/Green.Mario" },
    { name: "Codolio", metric: "Coding Tracker", url: "https://codolio.com/profile/GreenMario" },
  ],
};

export const leadershipAndCommunity = [
  {
    organization: "Riot Games (VALORANT)",
    role: "Senior Community Volunteer",
    period: "2020 – Present",
    scale: "Discord 1.5M+ members | Twitch 100K+ concurrent | YouTube 50K+",
    details:
      "Managed large-scale digital community operations. Mentored volunteer moderators, resolved 500+ escalated issues, and coordinated announcement distribution to over 180,000 servers in collaboration with Riot community management.",
  },
  {
    organization: "GeeksForGeeks Student Chapter",
    role: "Marketing Lead & Operations Member",
    period: "2024 – 2026",
    scale: "Technical Chapter",
    details:
      "Coordinated coding workshops, contests, technical content creation, and event planning to foster peer-led algorithmic learning.",
  },
  {
    organization: "CyberVault",
    role: "Management Member",
    period: "2024 – 2026",
    scale: "Campus InfoSec Society",
    details:
      "Organized Capture The Flag (CTF) events, security workshops, and hands-on tooling sessions to cultivate interest in ethical hacking and information security.",
  },
  {
    organization: "AlgoZenith KIIT Chapter",
    role: "Founding Member",
    period: "2025 – 2026",
    scale: "Competitive Programming Society",
    details:
      "Established student-led competitive programming initiative. Conducted technical workshops, algorithmic problem-solving sessions, and coding contests.",
  },
  {
    organization: "KIIT Training & Placement Cell",
    role: "Student Coordinator",
    period: "2026 – 2027",
    scale: "University Placement Drives",
    details:
      "Acted as liaison between recruiters, faculty, and candidate batches during placement drives, ensuring efficient communication and process execution.",
  },
  {
    organization: "Glorious & SpaceStation Gaming",
    role: "Community Moderator (Historical)",
    period: "2020 – 2021",
    scale: "Esports & Hardware Communities",
    details:
      "Live chat moderation, conflict resolution, and community guidelines enforcement across Twitch and Discord for Glorious PC Gaming Race and SSG esports.",
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/GreenMarioh", display: "github.com/GreenMarioh" },
  { name: "LinkedIn", url: "https://linkedin.com/in/mohnish-k", display: "linkedin.com/in/mohnish-k" },
  { name: "X", url: "https://x.com/GreenMarioh", display: "@GreenMarioh" },
  { name: "Discord", value: "greenmario", display: "greenmario" },
  { name: "Steam", url: "https://steamcommunity.com/id/green_mario/", display: "green_mario" },
  { name: "Monkeytype", url: "https://monkeytype.com/profile/greenmarioh", display: "greenmarioh" },
];
