import {
    mobile,
    backend,
    creator,
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
    figma,
    docker,
    sss1,
    si1,
    Snakegame,
    Weather,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Development",
      icon: web,
    },
    {
      title: "Data Structure",
      icon: mobile,
    },
    {
      title: "Software Development",
      icon: backend,
    },
    {
      title: "Database",
      icon: creator,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Sheetal Infosys",
      icon: si1,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Aug 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer Intern",
      company_name: "Solar Secure Solution",
      icon: sss1,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Aug 2022",
      points: [
        "Created front-end for an E-commerce website using Node.js.",
        "Enhanced the User Interface of the website using Material- UI.",
        "Created Github Profile search Application.",
        "Created a full-stack E-commerce website.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
      name: "Shivali Purwar",
      designation: "SDE",
      company: "MasterCard",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like he does.",
      name: "Pratham Kumar Singh",
      designation: "Intern",
      company: "HPE",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After he optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Himanshu Mishra",
      designation: "Intern",
      company: "CodeChef",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Snake Game",
      description:
        "A classic Snake game built using JavaScript and CSS is a fun and interactive web application. In this game, players control a snake that grows longer as it eats food on the screen",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Html",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      image: Snakegame,
      source_code_link: "https://harshit2720.github.io/Snake-game-/",
    },
    {
      name: "Weather App",
      description:
        "A Weather App built with React and JavaScript, using a weather API, provides real-time weather information to users. Users enter a location, and the app fetches data from the API. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Open Weather api",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: Weather,
      source_code_link: "https://github.com/",
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