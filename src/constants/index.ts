import type {
  FeaturedProject,
  Job,
  NavLink,
  Project,
  Service,
  SkillGroup,
  SocialLink,
} from "@/types/portfolio";

export const navLinks: NavLink[] = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const social: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/jhquihuiri7" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/jhquihuiri7/" },
];

export const services: Service[] = [
  {
    title: "Data Scientist",
    icon: "/about/dataIcon.png",
    tools: "Pandas · PyTorch · Scikit-learn · Plotly Dash",
  },
  {
    title: "Backend Developer",
    icon: "/about/serverIcon.png",
    tools: "Go · Python · Django · Fastify · PostgreSQL",
  },
];

// Same groups and order as the Skills section of the CV.
export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    skills: ["Python", "Go (Golang)", "R", "SQL", "TypeScript/JavaScript", "Dart", "Swift", "Bash"],
  },
  {
    title: "Backend",
    skills: ["Django", "Fastify", "Node.js", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "MinIO"],
  },
  {
    title: "Data & ML",
    skills: ["Pandas", "NumPy", "Scikit-learn", "PyTorch", "TensorFlow", "ONNX Runtime", "OpenCV", "Statistical modeling"],
  },
  {
    title: "Mobile & Web",
    skills: ["Flutter", "AVFoundation (iOS)", "Next.js", "React", "Tailwind CSS", "Plotly Dash"],
  },
  {
    title: "GIS",
    skills: ["QGIS", "ArcGIS", "DEM and watershed analysis", "Google Maps API"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "Git/GitHub", "Google Cloud (Vertex AI)", "RunPod", "FFmpeg"],
  },
];

// Products of Logiciel AppLab, shown large at the top of Projects.
export const featuredProjects: FeaturedProject[] = [
  {
    name: "Zero",
    role: "Co-founder & Developer · Logiciel AppLab",
    status: { label: "Coming soon", tone: "teal" },
    description:
      "AI sports-broadcasting system: two iPhones film the field, a GPU server stitches the panorama, and an AI virtual camera streams matches live to YouTube.",
    tags: ["flutter", "computer-vision", "live-streaming"],
    image: "/projects/zeroportada.png",
    links: [],
  },
  {
    name: "Wego",
    role: "Founder & Developer · Logiciel AppLab",
    status: { label: "Live", tone: "orange" },
    description:
      "Ride-hailing platform for the Galápagos with passenger and driver apps, live on the App Store and Google Play. Built as founder and sole developer.",
    tags: ["flutter", "firebase", "google-maps"],
    image: "/projects/wegoportada.png",
    links: [],
    qr: {
      href: "https://miwego.com/download?by=qr",
      image: "/projects/wego_qrcode.png",
      alt: "QR code to download Wego",
    },
  },
];

// Remaining projects, in the order the grid shows them.
export const projects: Project[] = [
  {
    name: "Market Operation",
    description:
      "This project made with plotly is a dashboard that enables users to interact with market stocks, visualize trends, and analyze data.",
    tags: ["python", "plotly", "flask"],
    image: "/projects/marketoperationportada.png",
    links: [
      { label: "Launch", href: "https://market-operation-dashboard.uc.r.appspot.com/home?session_flag=restore", kind: "live" },
      { label: "Code", href: "https://github.com/jhquihuiri7/abeed-project", kind: "code" },
    ],
  },
  {
    name: "Easy Ferry",
    description:
      "EasyFerry automates ferry operations—bookings, schedules, payments, reporting—boosting efficiency, reducing errors, and improving customer service.",
    tags: ["db", "frontend", "backend"],
    image: "/projects/easyferryportada.png",
    links: [
      { label: "Frontend", href: "https://github.com/jhquihuiri7/easy-ferry", kind: "code" },
      { label: "Backend", href: "https://github.com/jhquihuiri7/easy-ferry-backend", kind: "code" },
    ],
  },
  {
    name: "SciBot",
    description:
      "AI tool that summarizes scientific documents with NLP/OCR and chatbot, aiding Ecuadorian researchers’ efficient literature review.",
    tags: ["chatbot", "frontend", "backend"],
    image: "/projects/scibotportada.png",
    links: [
      { label: "Frontend", href: "https://github.com/jhquihuiri7/scib-bot", kind: "code" },
      { label: "Backend", href: "https://github.com/jhquihuiri7/sci-bot-backend", kind: "code" },
    ],
  },
  {
    name: "Darwin Finches",
    description:
      "This project uses an MLP to classify finches by beak traits, achieving 96% accuracy and showcasing machine learning.",
    tags: ["python", "jupyter", "neural-network"],
    image: "/projects/darwinfinchesportada.png",
    links: [
      { label: "Launch", href: "https://jhonatan-quihuiri-projects.ue.r.appspot.com/darwin_finches_project/", kind: "live" },
      { label: "Code", href: "https://github.com/jhquihuiri7/darwins_finches_beak_classification", kind: "code" },
    ],
  },
  {
    name: "Breast Cancer",
    description:
      "The Wisconsin Breast Cancer dataset aids tumor classification using biopsy features, supporting early detection and predictive model development.",
    tags: ["python", "jupyter", "data-science"],
    image: "/projects/breastcancerportada.png",
    links: [
      { label: "Launch", href: "https://jhonatan-quihuiri-projects.ue.r.appspot.com/breast_cancer_project/", kind: "live" },
      { label: "Code", href: "https://github.com/jhquihuiri7/jhonatan_projects/tree/main/breast_cancer", kind: "code" },
    ],
  },
  {
    name: "Trading 8",
    description:
      "Stay updated with real-time cryptocurrency data. Access prices, charts, and trends for Bitcoin, Ethereum, etc. Track the market easily.",
    tags: ["react", "typescript", "financial-data"],
    image: "/projects/trading8portada.png",
    links: [
      { label: "Launch", href: "https://trading-8.onrender.com/", kind: "live" },
      { label: "Code", href: "https://github.com/jhquihuiri7/trading-8", kind: "code" },
    ],
  },
  {
    name: "Earthquake Dashboard",
    description:
      "An earthquake dashboard visualizes seismic activity across different locations, offering clear analysis through interactive components.",
    tags: ["react", "typescript", "frontend"],
    image: "/projects/earthquakeportada.png",
    links: [
      { label: "Launch", href: "https://earthquake-dashboard-ca.uc.r.appspot.com/", kind: "live" },
      { label: "Code", href: "https://github.com/jhquihuiri7/earthquake-dashboard", kind: "code" },
    ],
  },
  {
    name: "Medical Dashboard",
    description:
      "A medical dashboard displays key health data through widgets and charts, offering a clear overview for patients or providers.",
    tags: ["react", "typescript", "frontend"],
    image: "/projects/medicalportada.png",
    links: [
      { label: "Launch", href: "https://medical-dashboard-ca.uc.r.appspot.com/", kind: "live" },
      { label: "Code", href: "https://github.com/jhquihuiri7/medical_dashboard", kind: "code" },
    ],
  },
  {
    name: "Gaviota Ferry",
    description:
      "Custom booking system for an inter-island ferry agency: replaced paper logs and Excel work, generated the passenger lists required by the port authority, and sped up group bookings.",
    tags: ["golang", "mongodb", "appengine"],
    image: "/projects/gaviotaportada.png",
    links: [{ label: "Code", href: "https://github.com/jhquihuiri7/gaviotaBackend", kind: "code" }],
  },
  {
    name: "Dive Evolution",
    description:
      "Developed a responsive website for web and mobile, showcasing tours, courses, and information for a Galápagos dive agency.",
    tags: ["nextjs", "frontend", "typescript"],
    image: "/projects/diveevolutionrecreatedportada.png",
    links: [
      { label: "Launch", href: "https://dive-evolution-website.vercel.app/", kind: "live" },
      { label: "Code", href: "https://github.com/jhquihuiri7/dive_evolution_website", kind: "code" },
    ],
  },
  {
    name: "Dive Evolution Backend",
    description: "Go backend on Google App Engine for the website of Dive Evolution, a Galápagos dive agency client.",
    tags: ["golang", "website", "appengine", "backend"],
    image: "/projects/diveevolutionportada.png",
    links: [{ label: "Code", href: "https://github.com/jhquihuiri7/diveEvolutionBackend", kind: "code" }],
  },
  {
    name: "Logiciel AppLab",
    description:
      "Website of Logiciel AppLab, my software company in the Galápagos and the studio behind Wego and Zero.",
    tags: ["react", "typescript", "frontend"],
    image: "/projects/logicielportada.png",
    links: [
      { label: "Launch", href: "https://logicielapplab-frontend.vercel.app/", kind: "live" },
      { label: "Code", href: "https://github.com/jhquihuiri7/logicielapplabFrontend/", kind: "code" },
    ],
  },
];

// Work timeline, newest first. Periods and places match the CV.
export const jobs: Job[] = [
  {
    role: "Territorial Analyst (GIS Developer)",
    company: "Governing Council of Galápagos (CGREG)",
    period: "Jan 2026 – Present",
    location: "Puerto Baquerizo Moreno, Ecuador",
    current: true,
    description:
      "Built and run SIGTAR, the council’s GIS-based territorial information system: web GIS, map layout builder, citizen-report bot, and Kanban tracker.",
    skills: ["Next.js / Fastify", "PostgreSQL", "MapLibre / Leaflet", "GDAL"],
  },
  {
    role: "Backend Developer Consultant",
    company: "Shalon Ventures Research",
    period: "Jul 2025 – Jul 2026",
    location: "Remote, USA",
    description:
      "Engineered the full backend of Zenovo, a stress-detection app: user management, data pipelines, model integration, cloud setup, and deployments.",
    skills: ["Python", "Firebase / Firestore", "Google Cloud Storage", "ML model integration"],
  },
  {
    role: "Freelance Data Scientist & Backend Developer",
    company: "Upwork · 100% Job Success",
    period: "Nov 2024 – Dec 2025",
    location: "Remote",
    description:
      "Plotly Dash dashboards for market-operations analysis and ML model evaluation, Python development, and an R econometrics project.",
    skills: ["Python", "Plotly Dash", "Econometrics", "AI training"],
  },
  {
    role: "Backend Developer (Volunteer)",
    company: "Help Us Defend",
    period: "Jan 2024 – Dec 2024",
    location: "Remote, Canada",
    description:
      "Built the backend of the 65 Dating Square app, including its Swipe, Blind Match, and Game Room features, ready for testing with the frontend.",
    skills: ["Python", "Django", "Redis / MinIO", "MySQL"],
  },
  {
    role: "Founder & Backend Developer",
    company: "Logiciel AppLab S.A.S.",
    period: "Sep 2021 – Present",
    location: "Puerto Baquerizo Moreno, Ecuador",
    current: true,
    description:
      "Founded the company behind Wego and Zero; built booking systems, APIs, and websites for 50+ tourism and hospitality businesses, including Gaviota Ferry.",
    skills: ["Golang", "Python", "Dart", "MongoDB"],
  },
  {
    role: "Collections Intern",
    company: "Diners Club",
    period: "Nov 2019 – Feb 2020",
    location: "Quito, Ecuador",
    description:
      "Migrated collections processes from Excel and SPSS to R, cutting processing time on several tasks from 20 to 2.5 minutes.",
    skills: ["Python", "R", "Linux", "MySQL"],
  },
];
