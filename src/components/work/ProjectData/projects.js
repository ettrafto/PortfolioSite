import tempPhoto from './images/temp.JPG';

const projects = [
  {
      id: "1",
      title: "OurOutdoors",
      description: "OurOutdoors is a social media platform tailored for outdoor enthusiasts who want to explore, connect, and coordinate activities together. Built using the MERN stack (MongoDB, Express, React, and Node.js), the app provides a responsive, scalable solution for users to organize and participate in outdoor events, rides, and excursions. Through a range of interactive features, OurOutdoors allows users to both request and offer rides, create and join events, post comments, manage friend connections, and react to activities through likes. \n \n The application’s backend leverages MongoDB for efficient data storage and retrieval, ensuring smooth management of user data, event details, and real-time notifications. The frontend, built with React, ensures an intuitive and engaging user interface where members can easily browse or create events by selecting the activity type, skill level, location, and time. A built-in notification system updates users on friend requests, ride offers, and event comments, fostering a close-knit, active community. \n \n With robust security features, user authentication, and friend-request options, OurOutdoors balances community interaction with data protection, making it an ideal platform for outdoor enthusiasts to safely connect and share their adventures.",
      thumbnail: tempPhoto,
      skills: ["RoadMapping", "React.js", "Node.js", "Express.js", "Mongoose", "REST API"],
      liveLink: "",
      gitLink: "https://github.com/ettrafto/ouroutdoors",
      date: "2024",
      images: []
  },
  {
      id: "2",
      title: "Vermont Legislature Bill Lookup",
      description: "My Vermont Legislature Bill Site is an open-source web application developed to help Vermont citizens easily access and understand the bill activities of their local legislators. Designed with a district-focused approach, the application allows users to select specific districts on an interactive map, offering a localized view of legislative actions by representatives from those areas. Once a district is chosen, users can sort and filter bills by sponsorship involvement, enabling them to track and monitor their legislators’ contributions more closely. \n \nThe application leverages a robust tech stack—React.js and Framer Motion for a seamless, engaging frontend experience, alongside Nginx, Node.js, and Playwright for efficient backend performance. Key features include district-based bill access, legislator-specific sorting, and smooth, intuitive animations, all designed to ensure that users, whether citizens or editorial teams like those at the Herald newspaper, can engage with the information effortlessly. As an open-source project, this tool emphasizes accessibility, storing data in local JSON files to simplify setup and use without the need for complex databases. Developed in collaboration with the Center for Vermont Research, the site is hosted on UVM’s servers, supporting a transparent, straightforward civic engagement experience for the Vermont community.",
      thumbnail: '/images/vtLegistlature1.png',
      skills: ["Project Management", "React.js", "Node.js", "Express.js", "SQL Lite", "APIs", "D3", "Framer Motion"],
      liveLink: "",
      gitLink: "https://github.com/ettrafto/CRVT-Local-Legislators",
      date: "Fall 2024",
      images: []
  },
  {
      id: "3",
      title: "ScubaDiver",
      description: "For the final project in CS2300: Advanced Programming, I developed a 3D scuba diving game using vanilla OpenGL and GLSW. This project simulates an underwater environment where players explore randomly generated cave systems to collect treasure. The user can adjust their swimming speed, impacting the rate of oxygen depletion. Oxygen levels vary based on movement speed, and the game tracks and displays elapsed time and remaining oxygen to challenge the player. \n \nRandom Cave Generation: The cave generation algorithm uses procedural methods to create unique pathways each time the game is played, ensuring a new experience with every session. The randomization algorithm accounts for open spaces, narrow passages, and branching paths, making each underwater cave system intricate and rewarding to explore.",
      thumbnail: '/images/scubaDiver3.gif',
      skills: ["C++", "OpenGL", "GLSW"],
      liveLink: "",
      gitLink: "https://github.com/ettrafto/scubaDiver",
      date: "Fall 2023",
      images: ['/images/scubaDiver1.png','/images/scubaDiver5.png','/images/scubaDiver2.png']
  },
  {
      id: "4",
      title: "MyMoney",
      description: "The MyMoney web application is designed to help users visualize and manage their personal finances effectively. Utilizing CanvasJS, the app presents users' spending patterns through interactive graphs, offering clear insights into their financial habits. Users can set and monitor spending goals, track progress, and make informed decisions to achieve their financial objectives. The application features a user-friendly interface with sections for account balances, recent transactions, and budget goals, ensuring a comprehensive overview of one's financial status. By combining data visualization with goal-setting functionalities, MyMoney serves as a valuable tool for individuals aiming to enhance their financial well-being.",
      thumbnail: '/images/mymoney1.png',
      skills: ["HTML", "PHP", "CSS", "Canvas.js", "WebDB"],
      liveLink: "",
      gitLink: "https://github.com/ettrafto/mymoney",
      date: "Fall 2023",
      images: ['/images/mymoney2.png']
  },
  {
    id: "5",
    title: "MySafari",
    description: "MySafari is a web project designed to document and share my photography from my family's safari experience in Tanzania. Over the course of a week, this journey highlights encounters with diverse wildlife. The Home Page introduces the safari, capturing the essence of the adventure with background information concerning Tanzania and the history of safari. A Featured Section showcases selected highlights, including significant wildlife sightings. The Animals Page presents detailed information and photographs of the various species observed, offering the user the ability to sort by animal. On the about me page I selected some silly pictures of myself and included a form with the ability to contact me.",
    thumbnail: '/images/mysafari1.png',
    skills: ["HTML", "PHP", "CSS", "WebDB"],
    liveLink: "",
    gitLink: "https://github.com/ettrafto/mysafari",
    date: "Fall 2023",
    images: ['/images/mysafari4.png','/images/mysafari2.png','/images/mysafari3.png']
}
];

export default projects;