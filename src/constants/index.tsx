import { JobTimelineType } from '@/types/events';

type TechIcon = { icon: string };

export const technologies: { langages: TechIcon[]; tools: TechIcon[] } = {
    langages:[
        {
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
        },
        {
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg"
        },
        {
            icon:"./stack/MySQL.svg"
        },
        {
            icon:"./stack/PostgresSQL.svg"
        },
        {
            icon:"./stack/SQLite.svg"
        },
        {
            icon:"./stack/MongoDB.svg"
        },
        {
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
        },
        {
            icon:"./stack/swift.svg"
        },
        {
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        {
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
            icon:"./stack/TypeScript.svg"
        },
    ],
    tools:[
        {
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
        },
        {
            icon:"./stack/NumPy.svg"
        },
        {
            icon:"./stack/scikit-learn.svg"
        },
        {
            icon:"./stack/TensorFlow.svg"
        },
        {
            icon:"./stack/pytorch.svg"
        },
        {
            icon:"./stack/OpenCV.svg"
        },
        {
            icon:"./stack/Ploty.svg"
        },
        {
            icon:"https://res.cloudinary.com/logicielapplab/image/upload/v1690393645/JhonatanQuihuiri/Tech/djangoSvg_ur1bx0.svg"
        },
        {
            icon:"./stack/nodejs.svg"
        },
        {
            icon:"./stack/react.svg"
        },
        {
            icon:"./stack/nextjs.svg"
        },
        {
            icon:"./stack/tailwindcss.svg"
        },
        {
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
        },
        {
            icon:"./stack/docker.svg"
        },
        {
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        },
        {
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg"
        },
        {
            icon:"./stack/Redis.svg"
        },
        {
            icon:"./stack/Firebase.svg"
        },
        {
            icon:"./stack/Postman.svg"
        },
        {
            icon:"./stack/Google Cloud.svg"
        },
        {
            icon:"./stack/GitHub.svg"
        },
        {
            icon:"./stack/GitLab.svg"
        },
    ],
}
// Projects section. Cards render in this order; leave `url`/`qr` empty to hide the
// "Launch or Scan" button and `source_code_link` empty to hide the GitHub button.
export const experiences = [
    {
        title: "",
        company_name: "Zero",
        icon: "./projects/zeroportada.png",
        iconBg: "#12181A",
        date: "",
        project: {
            name: "Zero",
            description:
                "AI sports-broadcasting system: two iPhones film the field, a GPU server stitches the panorama, and an AI virtual camera streams matches live to YouTube. Coming soon.",
            tags: [
                {
                    name: "flutter",
                    color: "blue-text-gradient",
                },
                {
                    name: "computer-vision",
                    color: "green-text-gradient",
                },
                {
                    name: "live-streaming",
                    color: "pink-text-gradient",
                },
            ],
            image: "./projects/zeroportada.png",
            source_code_link: "",
            url: "",
            qr: ""
        },
    },
    {
        title: "",
        company_name: "Wego",
        icon: "./projects/wegoportada.png",
        iconBg: "#0E0E0E",
        date: "",
        project: {
            name: "Wego",
            description:
                "Ride-hailing platform for the Galápagos with passenger and driver apps, live on the App Store and Google Play. Built as founder and sole developer.",
            tags: [
                {
                    name: "flutter",
                    color: "blue-text-gradient",
                },
                {
                    name: "firebase",
                    color: "green-text-gradient",
                },
                {
                    name: "google-maps",
                    color: "pink-text-gradient",
                },
            ],
            image: "./projects/wegoportada.png",
            source_code_link: "",
            url: "https://miwego.com/download?by=qr",
            qr: "./projects/wego_qrcode.png"
        },
    },
    {
        title: "",
        company_name: "Market Operation Dashboard",
        icon: "./projects/medicaldashboard_qrcode.png",
        iconBg: "#131a43",
        date: "",
        project: {
            name: "Market Operation",
            description:
                "This project made with plotly is a dashboard that enables users to interact with market stocks, visualize trends, and analyze data.",
            tags: [
                {
                    name: "python",
                    color: "blue-text-gradient",
                },
                {
                    name: "plotly",
                    color: "green-text-gradient",
                },
                {
                    name: "flask",
                    color: "pink-text-gradient",
                },
            ],
            image: "./projects/marketoperationportada.png",
            source_code_link: "https://github.com/jhquihuiri7/abeed-project",
            url: "https://market-operation-dashboard.uc.r.appspot.com/home?session_flag=restore",
            qr:"./projects/marketoperation_qrcode.png"
        },
    },
    {
        title: "",
        company_name: "Easy Ferry",
        icon: "./projects/medicaldashboard_qrcode.png",
        iconBg: "#131a43",
        date: "",
        project: {
            name: "Easy Ferry",
            description:
                "EasyFerry automates ferry operations—bookings, schedules, payments, reporting—boosting efficiency, reducing errors, and improving customer service.",
            tags: [
                {
                    name: "db",
                    color: "blue-text-gradient",
                },
                {
                    name: "frontend",
                    color: "green-text-gradient",
                },
                {
                    name: "backend",
                    color: "pink-text-gradient",
                },
            ],
            image: "./projects/easyferryportada.png",
            source_code_link: "https://github.com/jhquihuiri7/easy-ferry-backend",
            url: "https://github.com/jhquihuiri7/easy-ferry",
            qr:"./projects/easyferry_qrcode.png"
        },
    },
    {
        title: "",
        company_name: "SciBot",
        icon: "./projects/medicaldashboard_qrcode.png",
        iconBg: "#131a43",
        date: "",
        project: {
            name: "SciBot",
            description:
                "AI tool that summarizes scientific documents with NLP/OCR and chatbot, aiding Ecuadorian researchers’ efficient literature review.",
            tags: [
                {
                    name: "chatbot",
                    color: "blue-text-gradient",
                },
                {
                    name: "frontend",
                    color: "green-text-gradient",
                },
                {
                    name: "backend",
                    color: "pink-text-gradient",
                },
            ],
            image: "./projects/scibotportada.png",
            source_code_link: "https://github.com/jhquihuiri7/sci-bot-backend",
            url: "https://github.com/jhquihuiri7/scib-bot",
            qr:"./projects/scibot_qrcode.png"
        },
    },
    {
        title: "",
        company_name: "Darwin Finches Classification",
        icon: "./projects/medicaldashboard_qrcode.png",
        iconBg: "#131a43",
        date: "",
        project: {
            name: "Darwin Finches",
            description:
                "This project uses an MLP to classify finches by beak traits, achieving 96% accuracy and showcasing machine learning.",
            tags: [
                {
                    name: "python",
                    color: "blue-text-gradient",
                },
                {
                    name: "jupyter",
                    color: "green-text-gradient",
                },
                {
                    name: "neural network",
                    color: "pink-text-gradient",
                },
            ],
            image: "./projects/darwinfinchesportada.png",
            source_code_link: "https://github.com/jhquihuiri7/darwins_finches_beak_classification",
            url: "https://jhonatan-quihuiri-projects.ue.r.appspot.com/darwin_finches_project/",
            qr:"./projects/darwinfinches_qrcode.png"
        },
    },
    {
        title: "",
        company_name: "Breast Cancer",
        icon: "./projects/earthquakeIcon.png",
        iconBg: "#131a43",
        date: "",
        project: {
            name: "Breast Cancer",
            description:
                "The Wisconsin Breast Cancer dataset aids tumor classification using biopsy features, supporting early detection and predictive model development.",
            tags: [
                {
                    name: "python",
                    color: "blue-text-gradient",
                },
                {
                    name: "jupyter",
                    color: "green-text-gradient",
                },
                {
                    name: "data-science",
                    color: "pink-text-gradient",
                },
            ],
            image: "./projects/breastcancerportada.png",
            source_code_link: "https://github.com/jhquihuiri7/jhonatan_projects/tree/main/breast_cancer",
            url: "https://jhonatan-quihuiri-projects.ue.r.appspot.com/breast_cancer_project/",
            qr:"./projects/breastcancer_qrcode.png"
        },
    },
    {
        title: "",
        company_name: "Trading 8",
        icon: "./projects/medicaldashboard_qrcode.png",
        iconBg: "#131a43",
        date: "",
        project: {
            name: "Trading 8",
            description:
                "Stay updated with real-time cryptocurrency data. Access prices, charts, and trends for Bitcoin, Ethereum, etc. Track the market easily.",
            tags: [
                {
                    name: "react",
                    color: "blue-text-gradient",
                },
                {
                    name: "typescript",
                    color: "green-text-gradient",
                },
                {
                    name: "financial-data",
                    color: "pink-text-gradient",
                },
            ],
            image: "./projects/trading8portada.png",
            source_code_link: "https://github.com/jhquihuiri7/trading-8",
            url: "https://trading-8.onrender.com/",
            qr:"./projects/trading8_qrcode.png"
        },
    },
    {
        title: "",
        company_name: "Earthquake dashboard",
        icon: "./projects/earthquakeIcon.png",
        iconBg: "#131a43",
        date: "",
        project: {
            name: "Earthquake dashboard",
            description:
                "An earthquake dashboard visualizes seismic activity across different locations, offering clear analysis through interactive components.",
            tags: [
                {
                    name: "react",
                    color: "blue-text-gradient",
                },
                {
                    name: "typescript",
                    color: "green-text-gradient",
                },
                {
                    name: "frontend",
                    color: "pink-text-gradient",
                },
            ],
            image: "./projects/earthquakeportada.png",
            source_code_link: "https://github.com/jhquihuiri7/earthquake-dashboard",
            url: "https://earthquake-dashboard-ca.uc.r.appspot.com/",
            qr:"./projects/earthquakedashboard_qrcode.png"
        },
    },
    {
        title: "",
        company_name: "Medical dashboard",
        icon: "./projects/logicielIcon.png",
        iconBg: "#131a43",
        date: "",
        project: {
            name: "Medical Dashboard",
            description:
                "A medical dashboard displays key health data through widgets and charts, offering a clear overview for patients or providers.",
            tags: [
                {
                    name: "react",
                    color: "blue-text-gradient",
                },
                {
                    name: "typescript",
                    color: "green-text-gradient",
                },
                {
                    name: "frontend",
                    color: "pink-text-gradient",
                },
            ],
            image: "./projects/medicalportada.png",
            source_code_link: "https://github.com/jhquihuiri7/medical_dashboard",
            url: "https://medical-dashboard-ca.uc.r.appspot.com/",
            qr:"./projects/medicaldashboard_qrcode.png"
        },
    },
    {
        title: "",
        company_name: "Gaviota Ferry",
        icon: "./projects/gaviotaIcon.png",
        iconBg: "#ffffff",
        date: "",
        project: {
            name: "Gaviota Ferry",
            description:
                "Custom booking system for an inter-island ferry agency: replaced paper logs and Excel work, generated the passenger lists required by the port authority, and sped up group bookings.",
            tags: [
                {
                    name: "golang",
                    color: "blue-text-gradient",
                },
                {
                    name: "mongodb",
                    color: "green-text-gradient",
                },
                {
                    name: "appengine",
                    color: "pink-text-gradient",
                },
                ],
            image: "./projects/gaviotaportada.png",
            source_code_link: "https://github.com/jhquihuiri7/gaviotaBackend",
            url: "https://github.com/jhquihuiri7/gaviotaBackend",
            qr:"./projects/gaviotabackend_qrcode.png"
        },
    },
    {
        title: "",
        company_name: "Dive Evolution Website",
        icon: "./projects/diveEvolutionIcon.png",
        iconBg: "#131a43",
        date: "",
        project: {
            name: "Dive Evolution",
            description:
                "Developed a responsive website for web and mobile, showcasing tours, courses, and information for a Galápagos dive agency.",
            tags: [
                {
                    name: "nextjs",
                    color: "blue-text-gradient",
                },
                {
                    name: "frontend",
                    color: "green-text-gradient",
                },
                {
                    name: "typescript",
                    color: "pink-text-gradient",
                },
            ],
            image: "./projects/diveevolutionrecreatedportada.png",
            source_code_link: "https://github.com/jhquihuiri7/dive_evolution_website",
            url: "https://dive-evolution-website.vercel.app/",
            qr:"./projects/diveevolutionrecreated_qrcode.png"
        },
    },
    {
        title: "",
        company_name: "Dive Evolution",
        icon: "./projects/diveEvolutionIcon.png",
        iconBg: "#131a43",
        date: "",
        project: {
            name: "Dive Evolution Backend",
            description:
            "Go backend on Google App Engine for the website of Dive Evolution, a Galápagos dive agency client.",
            tags: [
                {
                    name: "golang",
                    color: "blue-text-gradient",
                },
                {
                    name: "website",
                    color: "green-text-gradient",
                },
                {
                    name: "appengine",
                    color: "pink-text-gradient",
                },
                {
                    name: "backend",
                    color: "pink-text-gradient",
                },
                ],
            image: "./projects/diveevolutionportada.png",
            source_code_link: "https://github.com/jhquihuiri7/diveEvolutionBackend",
            url: "https://github.com/jhquihuiri7/diveEvolutionBackend",
            qr:"./projects/diveevolutionbackend_qrcode.png"
        },
    },
    {
        title: "",
        company_name: "Logiciel AppLab",
        icon: "./projects/logicielIcon.png",
        iconBg: "#131a43",
        date: "",
        project: {
            name: "Logiciel AppLab",
            description:
                "Website of Logiciel AppLab, my software company in the Galápagos and the studio behind Wego and Zero.",
            tags: [
                {
                    name: "react",
                    color: "blue-text-gradient",
                },
                {
                    name: "typescript",
                    color: "green-text-gradient",
                },
                {
                    name: "frontend",
                    color: "pink-text-gradient",
                },
            ],
            image: "./projects/logicielportada.png",
            source_code_link: "https://github.com/jhquihuiri7/logicielapplabFrontend/",
            url: "https://logicielapplab-frontend.vercel.app/",
            qr:"./projects/logicielapplab_qrcode.png"
        },
    },
];
export const navLinks = [
    {
        id:"about",
        title:"About"
    },
    {
        id:"projects",
        title:"Projects"
    },
    {
        id:"work",
        title:"Work"
    },
    {
        id:"contact",
        title:"Contact"
    }
]
export const services = [
    {
        title: "Data Scientist",
        icon: "./about/dataIcon.png",
    },
    {
        title: "Backend Developer",
        icon: "./about/serverIcon.png",
    },
    //{
    //    title: "Mobile Development",
    //    icon: "./about/phoneIcon.png",
    //},
];
export const social = [
    {
        url: "https://github.com/jhquihuiri7",
        icon: "./social/github.svg",
    },
    {
        url: "https://www.linkedin.com/in/jhquihuiri7/",
        icon: "./social/linkedin.svg",
    }//,
    //{
    //    url: "https://www.instagram.com/jhquihuiri7/",
    //    icon: "./social/instagram.svg",
    //},
];
export const styles = {
    paddingX: "px-6 sm:px-16",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",

    heroHeadText:
        "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
        "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

    sectionHeadText:
        "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
        "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
}
export const jobs: JobTimelineType = [
  {
    year: 2026,
    company: "Governing Council of Galápagos (CGREG)",
    role: "Territorial Analyst (GIS Developer)",
    duration: "Jan 2026 - Present",
    isCurrent: true,
    description: "Built and run SIGTAR, the council's GIS-based territorial information system: web GIS, map layout builder, citizen-report bot, and Kanban tracker.",
    skills: ["Next.js / Fastify", "PostgreSQL", "MapLibre / Leaflet", "GDAL"]
  },
  {
    year: 2025,
    company: "Shalon Ventures Research",
    role: "Backend Developer Consultant",
    duration: "Jul 2025 - Jul 2026",
    description: "Engineered the full backend of Zenovo, a stress-detection app: user management, data pipelines, model integration, cloud setup, and deployments.",
    skills: ["Python", "Firebase / Firestore", "Google Cloud Storage", "ML model integration"]
  },
  {
    year: 2024,
    company: "Upwork",
    role: "Freelance Data Scientist & Backend Developer",
    duration: "Nov 2024 - Dec 2025",
    description: "100% Job Success. Plotly Dash dashboards for market-operations analysis and ML model evaluation, Python development, and an R econometrics project.",
    skills: ["Python", "Plotly Dash", "Econometrics", "AI training"]
  },
  {
    year: 2024,
    company: "Help Us Defend",
    role: "Backend Developer (Volunteer)",
    duration: "Jan 2024 - Dec 2024",
    description: "Built the backend of the 65 Dating Square app, including its Swipe, Blind Match, and Game Room features, ready for testing with the frontend.",
    skills: ["Python", "Django", "Redis / MinIO", "MySQL"]
  },
  {
    year: 2021,
    company: "Logiciel AppLab S.A.S.",
    role: "Founder & Backend Developer",
    duration: "Sep 2021 - Present",
    isCurrent: true,
    description: "Founded the company behind Wego and Zero; built booking systems, APIs, and websites for 50+ tourism and hospitality businesses, including Gaviota Ferry.",
    skills: ["Golang", "Python", "Dart", "MongoDB"]
  },
  {
    year: 2019,
    company: "Diners Club",
    role: "Collections Intern",
    duration: "Nov 2019 - Feb 2020",
    description: "Migrated collections processes from Excel and SPSS to R, cutting processing time on several tasks from 20 to 2.5 minutes.",
    skills: ["Python", "R","Linux", "MySQL"]
  }
];
