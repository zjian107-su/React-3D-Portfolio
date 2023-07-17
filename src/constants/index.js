import {
  data,
  backend,
  it,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  tmobile,
  directlink,
  lcm,
  cityofsyracuse,
  todoreact,
  todoangular,
  jobit,
  tripguide,
  angular,
  aws,
  python,
  elixir,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Data Engineer",
    icon: data,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IT Support",
    icon: it,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Elixir",
    icon: elixir,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "T-Mobile",
    icon: tmobile,
    iconBg: "#ffffff",
    date: "May 2022 - Aug 2022",
    points: [
      "Created responsive web application with RESTful APIs using HTML, TypeScript, Angular, Node.JS, Express.JS and MongoDB, while utilizing Jira to manage Agile development process",
      "Streamlined data flow between components with NgRx store, resulting in scalable and debuggable architecture",
      "Implemented display a page by capturing data using Reactive Form Module and posting data as reference model",
      "Developed AWS QuickSight dashboard for visualizing actionable insights from 1.5 million data records",
      "Analyzed 1,400 targeted data records and performed machine learning tasks with Azure AutoML to find 5 most-important attributes",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "DirectLink.ai",
    icon: directlink,
    iconBg: "#ffffff",
    date: "Jan 2022 - May 2022",
    points: [
      "Built data pipeline that captures and monitors website clickstreams with AWS Kinesis and FireHose, analyzing 72,000 unique user data with AWS OpenSearch",
      "Leveraged AdonisJS to create and test RESTful APIs to enable reliable data exchange between client and server",
      "Manipulated data by scripting SQL to form 5-dimension star schema database for rapid visualization development",
      "Developed smart dashboards to dynamically track KPI’s, identify and forecast trends, publishing to all portal users",
      "Participated in daily standup meetings, collaborating with cross-functional teams to set and achieve sprint goals",
    ],
  },
  {
    title: "Web Developer",
    company_name: "LCM Syracuse",
    icon: lcm,
    iconBg: "#ffffff",
    date: "Aug 2019 - May 2020",
    points: [
      "Developed visually appealing and user-friendly WordPress website with custom themes, animations, and interactive elements for a church",
      "Curated multimedia content (testimonial videos, photo galleries, social media footers) to engage and connect with the church community",
      "Integrated dynamic Twitter and Instagram feeds to keep the website up-to-date with the latest events for the congregation",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "City of Syracuse",
    icon: cityofsyracuse,
    iconBg: "#ffffff",
    date: "Jan 2019 - May 2019",
    points: [
      "Streamlined user experience by coding autocomplete and filter search functions with JavaScript and jQuery",
      "Utilized Bootstrap for responsive interface design, complemented by the implementation of Particle.js library for visual effects",
      "Collaborated with project manager and teammates via Git to control software versions and manage risks",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// Todo - Daniel
const projects = [
  {
    name: "Todo with React",
    description:
      "Web-based platform that allows users to perform CRUD operation on a todo list",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "context-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: todoreact,
    source_code_link: "https://github.com/zjian107-su/Radioactive-React",
  },
  {
    name: "Todoo with Angular",
    description:
      "Web application that enables users to interact with a backend database to perform CRUD operation on a todo list",
    tags: [
      {
        name: "angular",
        color: "orange-text-gradient",
      },
      {
        name: "observable",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "purple-text-gradient",
      },
    ],
    image: todoangular,
    source_code_link: "https://github.com/zjian107-su/Angular-ToDo",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
