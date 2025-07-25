import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Harvestify",
    image: project1,
    description:
      "Harvestify is a web and mobile agri-marketplace that empowers local farmers in Davao Oriental by connecting them directly with traders, enabling fair pricing, improved market access, and sustainable agricultural trade through a secure, user-friendly platform.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Tailwindcss"],
    FrontendRepo: "https://github.com/BenRyan0/ModMatrix",
    BackendRepo: "https://github.com/BenRyan0/Harvestify_api.git",
    SecondFrontendRepo: "https://github.com/BenRyan0/ModMatrix",
    PreviewLink: "https://harvestifytrader.vercel.app",
  },
  {
    title: "FarmFuture",
    image: project2,
    description:
      "FarmFuture is a web-based platform that equips farmers in Mati, Davao Oriental with real-time market data and price trend analytics. By offering intuitive dashboards, historical pricing charts, and alert systems, FarmFuture empowers local farmers to make informed decisions, optimize profits, and promote sustainable agriculture.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Tailwindcss"],
    FrontendRepo: "https://github.com/BenRyan0/ModMatrix",
    BackendRepo: "",
    SecondFrontendRepo: "",
    PreviewLink: "https://farm-future-consumer.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    FrontendRepo: "https://github.com/BenRyan0/ModMatrix",
    BackendRepo: "",
    SecondFrontendRepo: "",
    PreviewLink: "https://dev-benryanrinconada-p3lp.onrender.com",
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    FrontendRepo: "https://github.com/BenRyan0/ModMatrix",
    BackendRepo: "",
    SecondFrontendRepo: "",
    PreviewLink: "https://dev-benryanrinconada-p3lp.onrender.com",
  },
];


export const CONTACT = {
  address: "Baganga, Davao Oriental ",
  phoneNo: "+63 9159324112",
  email: "benryanrinconada5@gmail.com",
};
