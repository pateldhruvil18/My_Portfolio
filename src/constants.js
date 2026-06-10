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
const agcLogo = './assets/companylogo/agc_logo.png';
const newtonschoolLogo = './assets/companylogo/newtonschool_logo.png';

// Education Section Logo's
const glaLogo = './assets/eduction_logo/gla_logo.png';
const bsaLogo = './assets/eduction_logo/bsa_logo.png';
const vpsLogo = './assets/eduction_logo/vps_logo.png';

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
      img: "https://via.placeholder.com/120x120/F59E0B/ffffff?text=BB",
      role: "MERN Stack Developer Intern",
      company: "Brainy Beam",
      date: "June 2024 - July 2024",
      desc: "Completed a comprehensive 1-month intensive internship focused on MERN stack development. Gained hands-on experience working on real-world projects, learned industry best practices, and collaborated with senior developers. Enhanced my full-stack development skills through practical application and mentorship.",
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
      role: "Computer Science Student",
      company: "GLA University",
      date: "Sept 2021 - Present",
      desc: "Currently pursuing B.Tech in Computer Science Engineering with 8.2 CGPA. Actively learning advanced programming concepts, data structures, algorithms, and modern web technologies. Participating in coding competitions and technical workshops.",
      skills: [
        "Data Structures",
        "Algorithms",
        "Object-Oriented Programming",
        "Database Management",
        "Software Engineering",
        "Web Development",
        "Problem Solving",
        "Team Collaboration",
      ],
    },
    {
      id: 2,
      img: "https://via.placeholder.com/100x100/8B5CF6/ffffff?text=PD",
      role: "Self-Learning & Projects",
      company: "Personal Development",
      date: "2022 - Present",
      desc: "Continuously learning new technologies through online courses, tutorials, and hands-on projects. Built multiple full-stack applications including Blood Bank Management, Team Productivity Tracker, and Animal Husbandry Management systems.",
      skills: [
        "React JS",
        "Node JS",
        "Python",
        "Django",
        "MySQL",
        "PostgreSQL",
        "Git/GitHub",
        "Project Management",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "GLA University, Mathura",
      date: "Sept 2021 - July 2025 (Expected)",
      grade: "8.2 CGPA",
      desc: "Currently pursuing Bachelor of Technology (B.Tech) in Computer Science Engineering at GLA University, Mathura. As a 4th year student, I have gained strong foundation in programming, software development, and computer science principles. Studied courses including Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, Software Engineering, and Machine Learning. Actively participating in coding competitions and technical events.",
      degree: "Bachelor of Technology - B.Tech (Computer Science Engineering)",
    },
    {
      id: 1,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2020 - March 2021",
      grade: "78%",
      desc: "Completed class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science. This foundation helped me develop analytical thinking and problem-solving skills.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2018 - March 2019",
      grade: "87.5%",
      desc: "Completed class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer Application. Developed early interest in programming and technology.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Blood Bank Management System",
      description:
        "A comprehensive web application for managing blood bank operations including donor registration, blood inventory tracking, request management, and admin dashboard. Features real-time analytics and automated notifications for critical blood shortages.",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=500&h=300&fit=crop",
      tags: ["React JS", "Node.js", "Express", "MongoDB", "JWT", "Bootstrap", "Chart.js"],
      github: "https://github.com/pateldhruvil18/blood-bank-management",
      webapp: "https://blood-bank-demo.netlify.app/",
    },
    {
      id: 1,
      title: "Remote Team Productivity Tracker",
      description:
        "A productivity tracking application for remote teams featuring time tracking, task management, team collaboration tools, and detailed productivity reports. Includes real-time chat and project management capabilities.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tags: ["React JS", "Node.js", "Socket.io", "MySQL", "Chart.js", "Tailwind CSS"],
      github: "https://github.com/pateldhruvil18/productivity-tracker",
      webapp: "https://team-productivity-tracker.netlify.app/",
    },
    {
      id: 2,
      title: "Animal Husbandry Management System",
      description:
        "A digital solution for animal husbandry management including livestock tracking, health monitoring, breeding records, and farm analytics. Helps farmers manage their livestock efficiently with data-driven insights and reporting.",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=500&h=300&fit=crop",
      tags: ["React JS", "Python", "Django", "PostgreSQL", "Material-UI", "Chart.js"],
      github: "https://github.com/pateldhruvil18/animal-husbandry-system",
      webapp: "https://animal-husbandry-demo.netlify.app/",
    },
    {
      id: 3,
      title: "Email Validator NPM Package",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    },
    {
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },
  ];  