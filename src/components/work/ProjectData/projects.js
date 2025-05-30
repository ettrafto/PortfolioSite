import FeaturedProject from '../../home/FeaturedProject';
import tempPhoto from './images/temp.JPG';

const projects = [
  {
      id: "1",
      title: "OurOutdoors",
      shortDescription: "A social media platform for outdoor enthusiasts to connect and coordinate activities.",
      description: "OurOutdoors is a social media platform tailored for outdoor enthusiasts who want to explore, connect, and coordinate activities together. Built using the MERN stack (MongoDB, Express, React, and Node.js) using a REST API, the app provides a responsive, scalable solution for users to organize and participate in outdoor events, rides, and excursions. Through a range of interactive features, OurOutdoors allows users to both request and offer rides, create and join events, post comments, manage friend connections, and react to activities through likes.",
      thumbnail: '/images/projects/ourOutdoors.webp',
      skills: ["RoadMapping", "React.js", "Node.js", "Express.js", "Mongoose", "REST API"],
      liveLink: "",
      gitLink: "https://github.com/ettrafto/ouroutdoors",
      date: "2024",
      images: [],
      FeaturedProject: true,
      isTech: true
  },
  {
      id: "2",
      title: "Vermont Legislature Bill Lookup",
      shortDescription: '',
      description: "My Vermont Legislature Bill Site is an open-source web application developed to help Vermont citizens easily access and understand the bill activities of their local legislators. Designed with a district-focused approach, the application allows users to select specific districts on an interactive map, offering a localized view of legislative actions by representatives from those areas. Once a district is chosen, users can sort and filter bills by sponsorship involvement, enabling them to track and monitor their legislators’ contributions more closely.",
      thumbnail: '/images/projects/vtLegistlature1.webp',
      skills: ["Project Management", "React.js", "Node.js", "Express.js", "SQL Lite", "APIs", "D3", "Framer Motion"],
      liveLink: "",
      gitLink: "https://github.com/ettrafto/CRVT-Local-Legislators",
      date: "Fall 2024",
      images: [],
      FeaturedProject: false,
      isTech: true

  },
  {
      id: "3",
      title: "ScubaDiver",
      shortDescription: '',
      description: "For the final project in CS2300: Advanced Programming, I developed a 3D scuba diving game using vanilla OpenGL and GLSW. This project simulates an underwater environment where players explore randomly generated cave systems to collect treasure. The user can adjust their swimming speed, impacting the rate of oxygen depletion. Oxygen levels vary based on movement speed, and the game tracks and displays elapsed time and remaining oxygen to challenge the player. \n \nRandom Cave Generation: The cave generation algorithm uses procedural methods to create unique pathways each time the game is played, ensuring a new experience with every session. The randomization algorithm accounts for open spaces, narrow passages, and branching paths, making each underwater cave system intricate and rewarding to explore.",
      thumbnail: '/images/projects/scubaDiver3.gif',
      skills: ["C++", "OpenGL", "GLSW"],
      liveLink: "",
      gitLink: "https://github.com/ettrafto/scubaDiver",
      date: "Fall 2023",
      images: ['/images/projects/scubaDiver1.webp','/images/projects/scubaDiver5.webp','/images/projects/scubaDiver2.webp'],
      FeaturedProject: true,
      isTech: true
  },
  {
      id: "4",
      title: "MyMoney",
      shortDescription: '',
      description: "The MyMoney web application is designed to help users visualize and manage their personal finances effectively. Utilizing CanvasJS, the app presents users' spending patterns through interactive graphs, offering clear insights into their financial habits. Users can set and monitor spending goals, track progress, and make informed decisions to achieve their financial objectives. The application features a user-friendly interface with sections for account balances, recent transactions, and budget goals, ensuring a comprehensive overview of one's financial status. By combining data visualization with goal-setting functionalities, MyMoney serves as a valuable tool for individuals aiming to enhance their financial well-being.",
      thumbnail: '/images/projects/mymoney1.webp',
      skills: ["HTML", "PHP", "CSS", "Canvas.js", "WebDB"],
      liveLink: "",
      gitLink: "https://github.com/ettrafto/mymoney",
      date: "Fall 2023",
      images: ['/images/projects/mymoney2.webp'],
      FeaturedProject: true,
      isTech: true
  },
  {
    id: "5",
    title: "MySafari",
    shortDescription: '',
    description: "MySafari is a web project designed to document and share my photography from my family's safari experience in Tanzania. Over the course of a week, this journey highlights encounters with diverse wildlife. The Home Page introduces the safari, capturing the essence of the adventure with background information concerning Tanzania and the history of safari. A Featured Section showcases selected highlights, including significant wildlife sightings. The Animals Page presents detailed information and photographs of the various species observed, offering the user the ability to sort by animal. On the about me page I selected some silly pictures of myself and included a form with the ability to contact me.",
    thumbnail: '/images/projects/mysafari1.webp',
    skills: ["HTML", "PHP", "CSS", "WebDB"],
    liveLink: "",
    gitLink: "https://github.com/ettrafto/mysafari",
    date: "Fall 2023",
    images: ['/images/projects/mysafari4.webp','/images/projects/mysafari2.webp','/images/projects/mysafari3.webp'],
    FeaturedProject: false,
      isTech: true
},
{
    id: "6",
    title: "Mastermind",
    shortDescription: '',
    description:'I recreated the classic board game mastermind in React! Click Above to play!',
    thumbnail: '/images/projects/mastermind.webp',
    skills: ["React","CSS"],
    liveLink: "https://evantrafton.com/mastermind",
    gitLink: "https://github.com/ettrafto/mastermind",
    date: "Summer 2024",
    images: [] ,
    FeaturedProject: false,
    isTech: true
},
{
  id: "7",
  title: "Photosift",
  shortDescription: '',
  description: "",
  thumbnail: '/images/projects/photosift1.webp',
  skills: ["Javascript", "CSS", "Human-Computer-Interaction"],
  liveLink: "",
  gitLink: "",  
  date: "Fall 2023",
  images: ['/images/projects/photosift2.webp'],
  FeaturedProject: false,
  isTech: true
}
/*,
{
  id: "8",
  title: "Are We Cyborgs?",
  description: "",
  thumbnail: '/images/mysafari1.webp',
  skills: ["D3", "React", "CSS"],
  liveLink: "",
  gitLink: "https://github.com/ettrafto/Are-We-Cyborgs-DataNarrative",
  date: "Fall 2023",
  images: ['/images/mysafari4.webp','/images/mysafari2.webp','/images/mysafari3.webp']
}*/
];

export default projects;