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
  webapi,
  dogtraining,
  dogsentiment,
  elixiridenticon,
  alannguyen,
  bennichols,
  remycrespo,
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
      "Created responsive web application with RESTful APIs using HTML, TypeScript, Angular, Node.JS, Express.JS and MongoDB, while utilizing Jira to manage the Agile development process",
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
      "Manipulated data by scripting SQL to form a 5-dimension star schema database for rapid visualization development",
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
      "Curated multimedia content (testimonial videos, photo galleries, social media links) to engage and connect with the church community",
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
      "Streamlined user experience by implementing autocomplete and filter search functions with JavaScript and jQuery",
      "Utilized Bootstrap for responsive interface design, complemented by the implementation of Particle.js library for visual effects",
      "Collaborated with project manager and teammates via Git to control software versions and manage risks",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I was particularly impressed with Daniel's ability to execute independently including research, prototyping, and productionization.",
    name: "Ben Nichols",
    designation: "ML Product Manager",
    company: "Directlink.ai",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
    image: bennichols,
  },
  {
    testimonial:
      "His honesty, grit, and professionalism were evident in the way he completed his projects, working with multiple departments to ensure success.",
    name: "Remy Crespo",
    designation: "Recruiting Manager",
    company: "T-Mobile",
    image: remycrespo,
  },
  {
    testimonial:
      "Daniel’s proactive approach in seeking opportunities to improve our education technology and innovating through organizing, documenting, and automating processes, demonstrates his dedication to improving not only his knowledge but the schools posture and stands out as a competitive hire.",
    name: "Alan Nguyen",
    designation: "Sales Engineer",
    company: "Cloudflare",
    image: alannguyen,
  },
];

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
    name: "Todo with Angular",
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
    name: "Dog Training with React",
    description:
      "Open source dog training website that helps you train an obedient and well-behaved puppy",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "gatsbyjs",
        color: "purple-text-gradient",
      },
    ],
    image: dogtraining,
    source_code_link: "https://github.com/zjian107-su/NABI-IO",
  },
  {
    name: "FastAPI for Blog",
    description:
      "Web api that allows users to perform CRUD operation on blog and user databases with authentication",
    tags: [
      {
        name: "python-flask",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "purple-text-gradient",
      },
    ],
    image: webapi,
    source_code_link: "https://github.com/zjian107-su/Python-FastAPI-Dev",
  },
  {
    name: "Profile Image Generator with Elixir",
    description:
      "Elixir project that generates randomized profile image like Github's identicon",
    tags: [
      {
        name: "elixiridenticon",
        color: "blue-text-gradient",
      },
    ],
    image: elixiridenticon,
    source_code_link:
      "https://github.com/zjian107-su/Elixir-Exploration/tree/main",
  },
  {
    name: "Dog Sentiment Analyzer",
    description:
      "Machine learning project aimed at monitoring dogs' anxiety treatment progress",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "gcp",
        color: "pink-text-gradient",
      },
      {
        name: "raspberry pi",
        color: "purple-text-gradient",
      },
    ],
    image: dogsentiment,
    source_code_link: "https://github.com/zjian107-su/Dog-Sentiment-Analyzer",
  },
];

export { services, technologies, experiences, testimonials, projects };
