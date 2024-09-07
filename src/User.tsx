import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";
import Sociomee from '../src/Components/image/Sociomee.png'
import Qr from '../src/Components/image/Qr.png'
import N from '../src/Components/image/N.png'
import p from '../src/Components/image/p.jpg'
import a from '../src/Components/image/a.jpg'
import l from '../src/Components/image/l.jpeg'
import smd from '../src/smd.jpg'
const Info = {
    name: "Mangaljeet Pandey",
    stack: ["Software Engineer", "FullStack Developer"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, that exceed client expectations. Let's connect and create something amazing together!"
}
const ProjectInfo = [
    {
        title: "SalesPro Admin System",
        desc: "Integrated ERP for a dropshipping business, automated operations using cron jobs, and converted the REST API to GraphQL. Achieved 15% cost savings and resolved 90% of supplier and Shopify issues,streamlining product shipping, stock updates, and pricing management. Utilized technologies including React.js, Redux,Node.js, SQL, and Shopify",
        // image: Sociomee,
        // live: true,
        technologies: ["React Js", "Node Js", "Redux", "SQL", "Shopify",],
    },
    {
        title: "Washrz ERP",
        desc: "Developed an ERP system for Washrz with role-based authentication, enhancing efficiency by 20Implemented live WhatsApp pickups synchronization, reducing inquiries by 30%. Integrated Socket.io for real-time communication, reducing lag by 50%. Used technologies including React.js, Context Api, Material UI, Node.js, MongoDB, WhatsApp API, AWS, S3, and Socket.io.",
        // image: p,
        technologies: ["React Js", "Node Js", "MongoDB","Context Api","Material UI","WhatsApp API","AWS","S3","Socket.io"],
        
    },
    {
        title: "Skill Gaming(Gaming Application)",
        desc: "Integrated a comprehensive authentication system, including login, registration, password recovery, and reset functionalities. Implemented refresh and access tokens for enhanced security. Utilized Yup for full validation. Managed frontend authentication with interceptors and custom hooks. Enhanced system security by 30% and improved user experience. Successfully handled the full authentication lifecycle.",
        // image: l,
        
        technologies: ["React Js", "Node Js", "MongoDB","Context Api","Material UI","AWS","S3"],
        
    },
    {
        title: "Dental Now",
        desc: "DentalNow is a comprehensive web application developed using the MERN stack (MongoDB, Express, React, and Node.js) that enables dental clinics to manage appointments, patient records, and treatment plans efficiently. The system provides a user-friendly interface for patients to book appointments, view treatment histories, and receive reminders. For clinic staff, DentalNow streamlines appointment scheduling, patient management, and records storage, ensuring a seamless experience for both staff and patients. With a focus on scalability and security, DentalNow offers an all-in-one solution for modern dental practices.",
        // image: a,
        technologies: ["React Js", "Node Js","Css"],
    },
    {
        title: "QR Creation and Tracking System",
        desc: "Created a dynamic QR code generation site with customizable options for instant QR code creation. Developed efficient backend operations with Node.js and Express.js for seamless QR code generation. Implemented MongoDB for fast data storage and retrieval, improving performance by 30%. Conducted security testing to ensure secure QR code generation and tracking",
        // image: Qr,
       technologies: ["React Js", "Css", "MongoDB","Node Js","Bootstrap","AWS", "React-Strap"],
    },
    {
        title: "Ngo Website",
        desc: "NGO website, crafted with React.js, provides a comprehensive and engaging platform for non-profit organizations to connect with supporters, donors, and volunteers. The site features a clean and responsive design, ensuring an optimal experience across all devices. Key functionalities include detailed information about the NGO’s mission, ongoing projects, and events, along with easy-to-use donation and volunteer sign-up forms. React's component-based structure enhances performance and scalability, allowing for dynamic content updates and smooth navigation. With integrated social media links and interactive elements, the website effectively raises awareness and fosters community involvement.",
        // image:N,
        technologies: ["React Js", "Bootstrap", "Css", "Node Js", "MongoDB"],
    },
  
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS","React Native", "Redux", "Tailwind CSS", "Material UI", "Bootstrap","React-Strap","Socket.io","Stripe","Shopify","WhatsApp API"
        ],
        img1:"https://e7.pngegg.com/pngimages/913/851/png-clipart-responsive-web-design-html-world-wide-web-consortium-world-wide-web-angle-text.png"
    },
    {
        title: "Backend",
        skills: ["Node Js","MongoDB", "MySQL", "Stripe","Socket.io"]
    },
    {
        title: "Languages",
        skills: ["C","Java", "JavaScript","TypeScript","SQL"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman","AWS","EC2","S3"]
    }
]
const socialLinks = [
    { link: "", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/mangaljeet-pandey/", icon: IconBrandLinkedin },
    { link: "", icon: IconBrandInstagram }, 
    { link: "", icon: IconBrandTwitter },
    { link: "", icon: IconBrandFacebook }
    
];


const ExperienceInfo = [
    {
        role: "Software Development Engineer 1",
        company: "Databell Technologies, Noida",
        date: "Aug 2023 - Present",
        desc: "I implemented manual pickup functionality, which led to a 15% increase in user engagement and facilitated real-time data synchronization from WhatsApp, reducing order processing time by 25%. Additionally, I incorporated the Watti API and WebSocket for real-time tracking in Washrz, resulting in a 35% reduction in delivery time. I also collaborated on developing an ERP system for a dropshipping business, automating daily operations via cron jobs to streamline product shipping, stock updates, and pricing management, cutting the manual workload by 50%",
        skills: ["ReactJS", "Redux", "Node.js", "Shopify", "WhatsApp API","PostgreSQL"],
         logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Eo_circle_blue_letter-d.svg/2048px-Eo_circle_blue_letter-d.svg.png"
    },
    {
        role: "Software Developer",
        company: "Websultanate, Lucknow",
        date: "Sept 2022 - Jul 2023",
        desc: "Developed a cross-platform mobile application for a blogging website that integrates social media features, including liking, commenting, following, unfollowing, and displaying mutual connections. Achieved a 30% performance improvement through API integration, and boosted user engagement by 25% using JWT-based access control. Successfully increased transactions by 40% by incorporating payment gateways, and optimized page load time by 50% with efficient pagination management. The project utilized technologies such as React.js, Redux, NodeJS, AWS, Stripe, and MongoDB..",
        skills: ["React.js", "Redux", "NodeJS", "AWS", "Stripe", "MongoDB"],
        logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8euYEP5xU_Lw9ZU_to6Qpxd90msp51Mqhzw&s"
    }
]
const EducationInfo = [
    {
        role: "AKTU Lucknow",
        company: "B.Tech in Computer Science and Engineering",
        date: "Aug 2019 - Jun 2023",
        desc: "CGPA: 8.0/10 First division with honours",
        // skills: [""],
         logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85IZfSSK7NxfOMzrlg9XxGeMrtyB4iMGv9A&s"
    },
    {
        role: "Sant Mauni Daas Inter Collage Vishunpur Hari Siddharth Nagar",
        company: "Inter Mediate ",
        date: "2018 - 2019",
        logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS015YTUVLx7uPlifbJWY7yHPLZ9SP7ue-fGQ&s"
    },
    {
        role: "Sant Mauni Daas Inter Collage Vishunpur Hari Siddharth Nagar",
        company: "High School",
        date: "2016 - 2017",
        logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS015YTUVLx7uPlifbJWY7yHPLZ9SP7ue-fGQ&s"
    },
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo,EducationInfo, Slugs };