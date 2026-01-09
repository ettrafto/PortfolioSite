import FeaturedProject from '../../home/FeaturedProject';

const projects = [
  {
    id: "10",
    title: "TimeTiles",
    shortDescription: "A dynamic time-blocking calendar and task planning system.",
    description:
      "TimeTiles is a full-stack productivity app designed around the philosophy of time-blocking. Users create custom task types, define events with durations and colors, and drag them onto an interactive, zoomable daily calendar grid. The system includes snapping logic, draggable/resizable Tiles, reusable templates, and a structured left-pane library of user-defined event types. The backend is powered by a secure Java Spring Boot API with persistent data models for tasks, types, events, and scheduling. The frontend is built in React with Tailwind and DnD-Kit, featuring smooth animations, intelligent conflict detection, and a modern UI.",
    thumbnail: "/images/projects/TimeTiles2.webp",
    skills: [
      "System Architecture",
      "React.js",
      "TailwindCSS",
      "DnD-Kit",
      "Java",
      "Spring Boot",
      "REST API Design",
      "Data Modeling",
      "UI/UX Design",
      "State Management"
    ],
    liveLink: "",
    gitLink: "https://github.com/ettrafto/TimeBlocks",
    date: "2025",
    images: [
      "/images/projects/TimeTiles1.webp",
      "/images/projects/TimeTiles3.webp",
      "/images/projects/TimeTiles4.webp",
    ],
    FeaturedProject: true,
    isTech: true,
    //video: "/images/projects/timeblocks_demo.webm"
  },
  {
    id: "11",
    title: "NodeNotes",
    shortDescription: "A desktop notes system with draggable windows, a visual board, and powerful linking.",
    description: "NodeNotes is a Tauri-powered desktop application built with React and TypeScript that reimagines note-taking as a spatial, visual system. Each note opens in its own native window and syncs with a central board that shows note positions, links, and layouts in real time. Inspired by tools like Muse and Obsidian Canvas, NodeNotes supports draggable/resizable notes, a grid-based board, live connectors between notes, multi-window management, state persistence, snapping, and experimental grid/freeform movement modes. The project focuses heavily on UI/UX design, multi-window architecture, state consistency, and a clean, minimal aesthetic.",
    thumbnail: "/images/projects/NodeNotes1.webp",
    skills: [
      "Tauri v3",
      "TypeScript",
      "React.js",
      "Zustand",
      "Node.js",
      "UI/UX Design",
      "Multi-Window Architecture",
      "State Management",
      "Drag & Drop Systems"
    ],
    liveLink: "",
    gitLink: "https://github.com/ettrafto/NodeNotes",
    date: "2025",
    images: [
      "/images/projects/NodeNotes2.webp",
      "/images/projects/NodeNotes3.webp",
      "/images/projects/NodeNotes4.webp"
    ],
    FeaturedProject: false,
    isTech: true,
    //video: "/images/projects/nodenotes-demo.webm"
  },
  {
    id: "12",
    title: "Photos.Log",
    shortDescription: "A personal portfolio site showcasing projects, photography, and design-driven systems.",
    description: "photos.evantrafton.me is a custom-built personal site designed to unify software projects, photography, and visual experiments under a cohesive, minimal aesthetic. Built with React and modern frontend tooling, the site emphasizes performance, clarity, and interaction-driven storytelling. It features custom photo pipelines with optimized WebP assets, album and trip-based navigation, interactive maps and timelines, and carefully structured project documentation. The site serves as both a portfolio and an evolving sandbox for UI/UX exploration, system design, and frontend architecture.",
    thumbnail: "/images/projects/PhotoLog1.webp",
    skills: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "UI/UX Design",
      "Responsive Design",
      "Image Optimization",
      "Frontend Architecture",
      "Interaction Design"
    ],
    liveLink: "https://evantrafton.com",
    gitLink: "",
    date: "2025",
    images: [
      "/images/projects/PhotoLog2.webp",
      "/images/projects/PhotoLog3.webp",
      "/images/projects/PhotoLog4.webp",
      "/images/projects/PhotoLog5.webp",
      "/images/projects/PhotoLog6.webp"
    ],
    FeaturedProject: true,
    isTech: true
  },
  {
    id: "1",
    title: "OurOutdoors",
    shortDescription: "A social media platform for outdoor enthusiasts to connect and coordinate activities.",
    description: "OurOutdoors is a social media platform tailored for outdoor enthusiasts who want to explore, connect, and coordinate activities together. Built using the MERN stack (MongoDB, Express, React, and Node.js) using a REST API, the app provides a responsive, scalable solution for users to organize and participate in outdoor events, rides, and excursions. Through a range of interactive features, OurOutdoors allows users to both request and offer rides, create and join events, post comments, manage friend connections, and react to activities through likes.",
    thumbnail: "/images/projects/ourOutdoors.webp",
    skills: ["RoadMapping", "React.js", "Node.js", "Express.js", "Mongoose", "REST API"],
    liveLink: "",
    gitLink: "https://github.com/ettrafto/ouroutdoors",
    date: "2024",
    images: ["/images/projects/OurOutdoors2.webp", "/images/projects/OurOutdoors3.webp"],
    FeaturedProject: false,
    isTech: true,
    video: "/images/projects/ourOutdoorsVid.webm"
  },
  {
    id: "2",
    title: "Vermont Legislature Bill Lookup",
    shortDescription: "VTBillTracker.org is an open-source, web platform designed to help Vermont citizens easily find detailed bill activity for their legislators.",
    description: "My Vermont Legislature Bill Site is an open-source web application developed to help Vermont citizens easily access and understand the bill activities of their local legislators. Designed with a district-focused approach, the application allows users to select specific districts on an interactive map, offering a localized view of legislative actions by representatives from those areas. Once a district is chosen, users can sort and filter bills by sponsorship involvement, enabling them to track and monitor their legislators’ contributions more closely.",
    thumbnail: "/images/projects/vtlegislature1.webp",
    skills: ["Project Management", "React.js", "Node.js", "Express.js", "SQL Lite", "APIs", "Framer Motion"],
    liveLink: "https://vtbilltracker.org/",
    gitLink: "https://github.com/ettrafto/CRVT-Local-Legislators",
    date: "Fall 2024",
    images: ["/images/projects/vtlegislature2.webp","/images/projects/vtlegislature3.webp"],
    FeaturedProject: true,
    isTech: true
  },
  {
    id: "3",
    title: "ScubaDiver",
    shortDescription: "A 2D OpenGL scuba diving game where players explore procedurally generated underwater caves while managing oxygen and survival.",
    description: "For the final project in CS2300: Advanced Programming, I developed a 3D scuba diving game using vanilla OpenGL and GLSW. This project simulates an underwater environment where players explore randomly generated cave systems to collect treasure. The user can adjust their swimming speed, impacting the rate of oxygen depletion. Oxygen levels vary based on movement speed, and the game tracks and displays elapsed time and remaining oxygen to challenge the player.\n\nRandom Cave Generation: The cave generation algorithm uses procedural methods to create unique pathways each time the game is played, ensuring a new experience with every session. The randomization algorithm accounts for open spaces, narrow passages, and branching paths, making each underwater cave system intricate and rewarding to explore.",
    thumbnail: "/images/projects/scubaDiver3.webp",
    skills: ["C++", "OpenGL", "GLSW"],
    liveLink: "",
    gitLink: "https://github.com/ettrafto/scubaDiver",
    date: "Fall 2023",
    images: ["/images/projects/scubaDiver1.webp", "/images/projects/scubaDiver5.webp", "/images/projects/scubaDiver2.webp"],
    FeaturedProject: false,
    isTech: true
  },
  {
    id: "4",
    title: "MyMoney",
    shortDescription: "A personal finance web app that visualizes spending habits, tracks budgets, and helps users manage their financial goals.",
    description: "The MyMoney web application is designed to help users visualize and manage their personal finances effectively. Utilizing CanvasJS, the app presents users' spending patterns through interactive graphs, offering clear insights into their financial habits. Users can set and monitor spending goals, track progress, and make informed decisions to achieve their financial objectives. The application features a user-friendly interface with sections for account balances, recent transactions, and budget goals, ensuring a comprehensive overview of one's financial status. By combining data visualization with goal-setting functionalities, MyMoney serves as a valuable tool for individuals aiming to enhance their financial well-being.",
    thumbnail: "/images/projects/mymoney1.webp",
    skills: ["HTML", "PHP", "CSS", "Canvas.js", "WebDB"],
    liveLink: "",
    gitLink: "https://github.com/ettrafto/mymoney",
    date: "Fall 2023",
    images: ["/images/projects/mymoney2.webp"],
    FeaturedProject: false,
    isTech: true
  },
  {
    id: "5",
    title: "MySafari",
    shortDescription: "A storytelling website showcasing photography and wildlife encounters from a Tanzanian safari with interactive galleries and info pages.",
    description: "MySafari is a web project designed to document and share my photography from my family's safari experience in Tanzania. Over the course of a week, this journey highlights encounters with diverse wildlife. The Home Page introduces the safari, capturing the essence of the adventure with background information concerning Tanzania and the history of safari. A Featured Section showcases selected highlights, including significant wildlife sightings. The Animals Page presents detailed information and photographs of the various species observed, offering the user the ability to sort by animal. On the about me page I selected some silly pictures of myself and included a form with the ability to contact me.",
    thumbnail: "/images/projects/mysafari1.webp",
    skills: ["HTML", "PHP", "CSS", "WebDB"],
    liveLink: "",
    gitLink: "https://github.com/ettrafto/mysafari",
    date: "Fall 2023",
    images: ["/images/projects/mysafari4.webp", "/images/projects/mysafari2.webp", "/images/projects/mysafari3.webp"],
    FeaturedProject: false,
    isTech: true
  },
  {
    id: "6",
    title: "Mastermind",
    shortDescription: "A React-based recreation of the classic code-breaking board game Mastermind. Play Here!",
    description: "I recreated the classic board game mastermind in React! Click Above to play!",
    thumbnail: "/images/projects/mastermind.webp",
    skills: ["React", "CSS"],
    liveLink: "https://evantrafton.com/mastermind",
    gitLink: "https://github.com/ettrafto/mastermind",
    date: "Summer 2024",
    images: [],
    FeaturedProject: false,
    isTech: true
  },
  /*
  {
    id: "7",
    title: "Photosift",
    shortDescription: "A wireframe for interactive tool for organizing and exploring photo collections using graph-based visualizations.",
    description: "",
    thumbnail: "/images/projects/photosift1.webp",
    skills: ["Javascript", "CSS", "Human-Computer-Interaction"],
    liveLink: "",
    gitLink: "",
    date: "Fall 2023",
    images: ["/images/projects/photosift2.webp"],
    FeaturedProject: false,
    isTech: true
  },
  */


  {
    id: "8",
    title: "CaveDiver",
    shortDescription: "A 2D horror game set in underwater caves where players manage oxygen, explore, and survive encounters with hidden creatures.",
    description: "The game, a 2D scuba diver cave-diving horror experience, follows an explorer descending into murky waters. Players navigate procedurally generated caves while managing oxygen levels, evading creatures, and finding treasure. Equipped with a harpoon and limited torchlight, strategic resource management is key. Core features include realistic buoyancy, dynamic lighting for suspense, cave mapping, and atmospheric tension, exploration, and resource management.",
    thumbnail: "/images/projects/CaveDiverTitle.webp",
    skills: ["Godot", "Project Management", "Project Planning", "Game Design"],
    liveLink: "",
    gitLink: "https://github.com/ettrafto/CaveDiver",
    date: "Spring 2025",
    images: ["/images/projects/cavediver1.webp"],
    FeaturedProject: false,
    isTech: true
  },
  /*
  {
    id: "9",
    title: "FileNodes",
    shortDescription: "",
    description: "Experimenting in displaying files as nodes on a graph",
    thumbnail: "",
    skills: ["JavaScript", "Python", "Web Sockets"],
    liveLink: "",
    gitLink: "",
    date: "Spring 2025",
    images: [],
    FeaturedProject: false,
    isTech: true
  },*/
  {
    id: "20",
    title: "Why Adventure",
    shortDescription: "A short video combining rotoscoping and animated text to explore the theme of adventure.",
    description: "In my fourth project for Visual Communication, I created a short video combining rotoscoping and text animation with After Effects and Premiere. Watch above!",
    thumbnail: "/images/projects/WhyAdventure.webp",
    skills: ["Adobe Premiere", "Adobe After Effects"],
    liveLink: "https://www.youtube.com/watch?v=RlEIYd5G7mc",
    gitLink: "",
    date: "Spring 2025",
    images: [],
    FeaturedProject: false,
    isTech: false
  },
  {
    id: "21",
    title: "ET Intro Animation",
    shortDescription: "A motion graphics project featuring a sleek animated title sequence and logo reveal.",
    description: "Animated an introduction title sequence and logo reveal using After Effects. Watch above!",
    thumbnail: "/images/projects/EtAnimation.webp",
    skills: ["Adobe After Effects", "Adobe Illustrator"],
    liveLink: "https://youtu.be/DQSP1kVjGEE?si=BTwLf5C3pTkRYBkH",
    gitLink: "",
    date: "Spring 2025",
    images: [],
    FeaturedProject: false,
    isTech: false
  },
  {
    id: "22",
    title: "Do Not Go Gentle into that Goodnight",
    shortDescription: "A typography-focused After Effects animation interpreting Dylan Thomas’s poem.",
    description: "Created a typography-driven animation interpreting Dylan Thomas’s poem, using After Effects to animate text layers and effects. Watch above!",
    thumbnail: "/images/projects/DoNotGoGentleIntoThatGoodnight.webp",
    skills: ["Adobe After Effects", "Adobe Illustrator"],
    liveLink: "https://youtu.be/npl1uJ6iYLk?si=3IPfPVW8VdUOs4Ac",
    gitLink: "",
    date: "Spring 2025",
    images: [],
    FeaturedProject: false,
    isTech: false
  },
  {
    id: "23",
    title: "Phone Addiction Animations",
    shortDescription: "A series of animated visuals exploring the dangers of smartphone addiction.",
    description: "Designed a series of animations highlighting the dangers of phone addiction, using After Effects and Illustrator. Watch above!",
    thumbnail: "/images/projects/PhoneAnimation.webp",
    skills: ["Adobe After Effects", "Adobe Illustrator"],
    liveLink: "https://www.youtube.com/shorts/-xQ3qBGtLNU",
    gitLink: "",
    date: "Spring 2025",
    images: [],
    FeaturedProject: false,
    isTech: false
  },
  /*

  {
    id: "24",
    title: "Spicy Ramen",
    shortDescription: "",
    description: "Developed a cooking tutorial animation in Adobe Illustrator, simulating ramen preparation with animated ingredients.",
    thumbnail: "",
    skills: ["Adobe Illustrator"],
    liveLink: "",
    gitLink: "",
    date: "Fall 2024",
    images: [],
    FeaturedProject: false,
    isTech: false
  },

  {
    id: "25",
    title: "Are We Cyborgs?",
    shortDescription: "A data visualization project exploring the relationship between humans and technology use.",
    description: "",
    thumbnail: "/images/mysafari1.webp",
    skills: ["Adobe Illustrator", "Data Visualization"],
    liveLink: "",
    gitLink: "https://github.com/ettrafto/Are-We-Cyborgs-DataNarrative",
    date: "Fall 2023",
    images: ["/images/mysafari4.webp", "/images/mysafari2.webp", "/images/mysafari3.webp"],
    FeaturedProject: false,
    isTech: false
  }*/
];

export default projects;
