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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "Backend Developer",
      company_name: "Wipro Limited",
      icon: shopify,
      iconBg: "#383E56",
      date: "Nov 2021 - Oct 2022",
      points: [
        "Developing scalable web applications using Java and Spring Boot for optimal performance and maintainability.",
        "Collaborating with cross-functional teams to deliver user-friendly solutions with responsive design and cross-browser compatibility.",
        "Conducting code reviews and offering constructive feedback to ensure high-quality Java and Spring Boot development.",
        "Implementing security measures and staying abreast of the latest advancements in Java and Spring Boot technologies.",
        "Integrating third-party APIs and contributing to documentation for efficient, modular, and feature-rich web applications.",
      ]
    },
   {
      title: "React Developer",
      company_name: "Wipro Ltd.",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Feb 2023",
      points: [
        "Developing and maintaining web applications using React and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
    {
      title: "Web Developer",
      company_name: "Wipro Limited(Telnor Myanmar)",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Pratham proved me wrong.",
      name: "Shubham Jain",
      designation: "SDE-2",
      company: "Microsoft",
      image: "https://freeimage.host/i/whatsapp-image-2023-12-19-at-173147-898e2757.JAzOs2t",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Pratham does.",
      name: "Piyush K Pandey",
      designation: "Principal Engineer",
      company: "IVP",
      image: "https://freeimage.host/i/whatsapp-image-2023-12-18-at-224518-707fa93a.JAzOhBV",
    },
    {
      testimonial:
        "After Pratham optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Aman Prasad",
      designation: "Product Manager",
      company: "Zepto",
      image: "https://freeimage.host/i/whatsapp-image-2023-12-18-at-224307-c673971b.JAzOvpa",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
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