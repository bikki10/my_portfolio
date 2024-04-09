import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am an aspiring web developer with a passion for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am an aspiring web developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. Outside of coding, I enjoy staying active, exploring new technologies, visiting new places and bike-riding.`;

// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
// ];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    gitLink: "https://github.com/Buddha-Innovations-Tech/jai_ho_frontend",
    link: "https://jai-ho-frontend.vercel.app/",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Next", "Express", "Node.js", "MongoDB"],
  },
  {
    title: "Human Activity Recogniser",
    image: project2,
    gitLink: "https://github.com/bikki10/HUMAN_ACTIVITY_RECOGNITION",
    link: "https://github.com/bikki10/HUMAN_ACTIVITY_RECOGNITION",
    description:
      "An application for recognising the activies of humans, based on video data collected from surveillance footages.",
    technologies: ["Python", "Streamlit", "Tensorflow"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    gitLink: "https://github.com/bikki10/My-Portfolio-Website",
    link: "https://www.bikrambhusal.com.np",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
];

export const CONTACT = {
  address: "Kathmandu, New Baneshwor, Nepal ",
  phoneNo: "+977-9860729085 ",
  email: "bhusalbikram75@gmail.com",
};
