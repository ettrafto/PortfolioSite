import tempPhoto from './images/temp.JPG';


const projects = [
  {
      id: "1",
      title: "OurOutdoors",
      description: "Engineered a MERN Stack Web application - OurOutdoors is a Social Media app that allows outdoor enthusiasts to get outside together.",
      thumbnail: tempPhoto,
      skills: ["RoadMapping", "React.js", "Node.js", "Express.js", "Mongoose", "REST API"],
      liveLink: "https://live-project-one.com",
      gitLink: "https://github.com/username/ouroutdoors",
      date: "2023-07-01",
      images: []
  },
  {
      id: "2",
      title: "Vermont Legislature Bill Lookup",
      description: "Developed an open-source public tool to allow Vermont Citizens to find the bill activity of their local legislature.",
      thumbnail: tempPhoto,
      skills: ["Project Management", "React.js", "Node.js", "Express.js", "SQL Lite", "APIs", "D3", "Framer Motion"],
      liveLink: "",
      gitLink: "https://github.com/username/vermont-legislature",
      date: "2023-05-15",
      images: ['/images/test.jpg']
  },
  {
      id: "3",
      title: "ScubaDiver",
      description: "Developed a 2D CaveDiving Game, first iteration with C++ and OpenGL then further developed with GoDot.",
      thumbnail: tempPhoto,
      skills: ["C++", "OpenGL", "GoDot", "Adobe Illustrator", "Animate"],
      liveLink: "https://live-scubadiver.com",
      gitLink: "https://github.com/username/scubadiver",
      date: "2023-04-01",
      images: []
  },
  {
      id: "4",
      title: "MyMoney (Database Design for Web)",
      description: "Developed a web application to analyze and track users' spending through Canvas.js graphs as well as spending goals.",
      thumbnail: tempPhoto,
      skills: ["HTML", "PHP", "CSS", "Canvas.js", "jQuery", "WebDB"],
      liveLink: "",
      gitLink: "https://github.com/ettrafto/mymoney",
      date: "2023-01-01",
      images: []
  }
];

export default projects;