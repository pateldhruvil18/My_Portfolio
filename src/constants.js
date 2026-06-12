// Skills Section - Using placeholder images from a reliable CDN
const createSkillLogo = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
const createSkillLogoPlain = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-plain.svg`;

// Skills Section Logo's
const htmlLogo = createSkillLogo('html5');
const cssLogo = createSkillLogo('css3');
const sassLogo = createSkillLogo('sass');
const javascriptLogo = createSkillLogo('javascript');
const reactjsLogo = createSkillLogo('react');
const angularLogo = createSkillLogo('angularjs');
const reduxLogo = createSkillLogo('redux');
const nextjsLogo = createSkillLogo('nextjs');
const tailwindcssLogo = createSkillLogo('tailwindcss');
const gsapLogo = 'https://greensock.com/uploads/monthly_2020_03/tweenmax.png.cf27916e926fdb4a5fd5571e86e5d0e4.png';
const materialuiLogo = createSkillLogo('materialui');
const bootstrapLogo = createSkillLogo('bootstrap');
const springbootLogo = createSkillLogo('spring');
const nodejsLogo = createSkillLogo('nodejs');
const expressjsLogo = createSkillLogo('express');
const mysqlLogo = createSkillLogo('mysql');
const mongodbLogo = createSkillLogo('mongodb');
const firebaseLogo = createSkillLogo('firebase');
const cLogo = createSkillLogo('c');
const cppLogo = createSkillLogo('cplusplus');
const javaLogo = createSkillLogo('java');
const pythonLogo = createSkillLogo('python');
const typescriptLogo = createSkillLogo('typescript');
const gitLogo = createSkillLogo('git');
const githubLogo = createSkillLogo('github');
const vscodeLogo = createSkillLogo('vscode');
const postmanLogo = 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg';
const mcLogo = 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg';
const figmaLogo = createSkillLogo('figma');
const netlifyLogo = 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg';
const vercelLogo = 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg';
const postgreLogo = createSkillLogo('postgresql');
const csharpLogo = createSkillLogo('csharp');

// Experience Section Logo's - Using placeholder company logos
const webverseLogo = 'https://via.placeholder.com/100x100/8245ec/ffffff?text=WD';
import agcLogo from './assets/companylogo/agc_logo.png';
import newtonschoolLogo from './assets/companylogo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/eduction_logo/gla_logo.png';
import bsaLogo from './assets/eduction_logo/bsa_logo.png';
import vpsLogo from './assets/eduction_logo/vps_logo.png';

// Project Section Logo's - Using placeholder project images
const githubdetLogo = 'https://via.placeholder.com/400x250/8245ec/ffffff?text=GitHub+Detective';
const csprepLogo = 'https://via.placeholder.com/400x250/8245ec/ffffff?text=CS+Prep';
const movierecLogo = 'https://via.placeholder.com/400x250/8245ec/ffffff?text=Movie+Rec';
const taskremLogo = 'https://via.placeholder.com/400x250/8245ec/ffffff?text=Task+Reminder';
const npmLogo = 'https://via.placeholder.com/400x250/8245ec/ffffff?text=NPM+Package';
const webverLogo = 'https://via.placeholder.com/400x250/8245ec/ffffff?text=Webverse';
const cmLogo = 'https://via.placeholder.com/400x250/8245ec/ffffff?text=Coding+Master';
const imagesearchLogo = 'https://via.placeholder.com/400x250/8245ec/ffffff?text=Image+Search';
const removebgLogo = 'https://via.placeholder.com/400x250/8245ec/ffffff?text=Remove+BG';

import zencartImg from './assets/projects/zencart_mockup_1781258768523.png';
import remoteTrackerImg from './assets/projects/remote_tracker_mockup_1781258779219.png';
import aiInterviewImg from './assets/projects/ai_interview_mockup_1781258791277.png';
import bloodBankImg from './assets/projects/blood_bank_mockup_1781258803234.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://res.cloudinary.com/dqk18yygp/image/upload/v1765432449/Logo_Demaze_Technologies_c3nkhf.png",
    role: "MERN Stack Developer Intern",
    company: "Demaze Technologies",
    date: "Dec 2025 - Present",
    desc: "Working on different projects using MERN stack technologies and enhanced my full-stack development skills through practical application and mentorship.",
    skills: [
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "JavaScript",
      "HTML/CSS",
      "Git",
      "REST APIs",
    ],
  },
  {
    id: 1,
    img: glaLogo,
    role: "MERN Stack Developer Intern",
    company: "Breany Beam",
    date: "June 2025 - July 2025",
    desc: "Enhance my full-stack development skills through practical application and mentorship.",
    skills: [
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "JavaScript",
      "HTML/CSS",
      "Git",
      "REST APIs",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "LDRP-ITR Gandhinagar",
    date: "Sept 2022 - July 2026 (Expected)",
    grade: "7.68 CGPA",
    desc: "Currently pursuing Bachelor of Technology (B.Tech) in Computer Science Engineering at LDRP-ITR Gandhinagar. As a 4th year student, I have gained strong foundation in programming, software development, and computer science principles. Studied courses including Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, Software Engineering, and Machine Learning. Actively participating in coding competitions and technical events.",
    degree: "Bachelor of Technology - B.Tech (Computer Science Engineering)",
  },
  {
    id: 1,
    img: vpsLogo,
    school: "DGES School",
    date: "Apr 2020 - March 2022",
    grade: "77%",
    desc: "Completed class 12 education DGES School, Idar, under the GHSEB board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science. This foundation helped me develop analytical thinking and problem-solving skills.",
    degree: "GHSEB(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Sharda High School",
    date: "Apr 2018 - March 2020",
    grade: "84%",
    desc: "Completed class 10 education from Sharda High School, Vadali, under the GSEB board, where I studied Science with Computer Application. Developed early interest in programming and technology.",
    degree: "GSEB(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "ZenCart E-Commerce",
    category: "E-Commerce",
    description:
      "Built critical e-commerce features including guest and authenticated user carts, wishlists, order lifecycle management, and secure Razorpay payment integration. Designed a feature-rich admin dashboard for managing products, orders, and reviews, significantly optimizing frontend performance via TanStack Query and efficient REST API architecture.",
    image: zencartImg,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "JWT", "TailwindCSS", "Chart.js"],
    stats: {
      users: "10k+",
      stars: "245",
      completion: "100%"
    },
    github: "https://github.com/pateldhruvil18/ZenCart-E-Commerce",
    webapp: "https://zen-cart-e-commerce.vercel.app/",
  },
  {
    id: 1,
    title: "Remote Team Productivity Tracker",
    category: "SaaS",
    description:
      "A productivity tracking application for remote teams featuring time tracking, task management, team collaboration tools, and detailed productivity reports. Includes real-time chat and project management capabilities.",
    image: remoteTrackerImg,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "Socket.io", "TailwindCSS"],
    stats: {
      users: "5k+",
      stars: "128",
      completion: "100%"
    },
    github: "https://github.com/pateldhruvil18/Remote-Team-Tracker",
    webapp: "remote-team-tracker.vercel.app",
  },
  {
    id: 2,
    title: "AI Interview",
    category: "AI/ML",
    description:
      "PrepAI is an industry-level, comprehensive AI-powered interview preparation SaaS platform. It allows users to practice coding, attend AI mock interviews, get real-time AI feedback, analyze their resumes, and participate in collaborative live coding rooms.",
    image: aiInterviewImg,
    tags: ["React JS", "Node.js", "OpenAI API", "MongoDB", "WebRTC", "TailwindCSS"],
    stats: {
      users: "25k+",
      stars: "450",
      completion: "95%"
    },
    github: "https://github.com/pateldhruvil18/AI_Interview",
    webapp: "#",
  },
  {
    id: 3,
    title: "Blood Bank Management System",
    category: "MERN Stack",
    description:
      "A comprehensive web application for managing blood bank operations including donor registration, blood inventory tracking, request management, and admin dashboard. Features real-time analytics and automated notifications for critical blood shortages.",
    image: bloodBankImg,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    stats: {
      users: "2k+",
      stars: "85",
      completion: "100%"
    },
    github: "https://github.com/pateldhruvil18/Blood-Bank-Managment-System",
    webapp: "#",
  },
  {
    id: 4,
    title: "Explore More on GitHub",
    category: "All",
    description:
      "Check out my GitHub profile to explore all my open-source projects, personal experiments, and code contributions.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&h=300&fit=crop",
    tags: ["Open Source", "GitHub", "Contributions"],
    stats: {
      users: "N/A",
      stars: "500+",
      completion: "N/A"
    },
    github: "https://github.com/pateldhruvil18",
    webapp: "https://github.com/pateldhruvil18",
  }
];  