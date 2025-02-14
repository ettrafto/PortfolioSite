import React, { useState, useEffect } from 'react';
import './Timeline.css';

const skillType = {
    
};

const timelineData = [
  { id: 1, title: 'Spy.py', date: '2023-01-01', iconImg: '/icons/spyglass.webp', img: '', description: 'Spy.py description', skills: '', link: '', gitLink:'' },
  { id: 2, title: 'PhotoSift', date: '2023-07-01', iconImg: '/icons/sort.webp', img: '', description: 'Photosift description', skills: '', link: '', gitLink:'' },
  { id: 3, title: 'MySafari', date: '2022-01-01', iconImg: '/icons/mySafari.webp', img: '', description: 'MySafari description', skills: '', link: '', gitLink:''},
  { id: 4, title: 'ScubaDiver', date: '', iconImg: '/icons/scubaDiver.webp', img: '', description: 'ScubaDiver description', skills: '', link: '', gitLink:''},
  { id: 5, title: 'OurOutdoors', date: '', iconImg: '/icons/ourOutdoors.webp', img: '', description: 'OurOutdoors description', skills: '', link: '', gitLink:''},
  { id: 6, title: 'Are We Cyborgs?', date: '', iconImg: '/icons/cyborgs.webp', img: '', description: 'Are We Cyborgs? description', skills: '', link: '', gitLink:''},
  { id: 7, title: 'Mastermind', date: '', iconImg: '/icons/mastermind.webp', img: '', description: 'Mastermind description', skills: '', link: '', gitLink:''},
  { id: 8, title: 'Timelock', date: '', iconImg: '/icons/timelock.webp', img: '', description: 'Timelock description', skills: '', link: '', gitLink:''},
  //{ id: 9, title: 'Portfolio', date: '', iconImg: '/icons/portfolio.webp', img: '', description: 'Portfolio description', skills: '', link: '', gitLink:''},
  //{ id: 9, title: 'Whoop Stuff', date: '', iconImg: '/icons/whoop.webp', img: '', description: 'Whoop description', skills: '', link: '', gitLink:''}


  // Add more events as needed
];

// Sort timelineData by date
const sortedTimelineData = timelineData.sort((a, b) => new Date(a.date) - new Date(b.date));

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [iconSizes, setIconSizes] = useState(sortedTimelineData.map(() => 1));

  useEffect(() => {
    const handleMouseMove = (e) => {
      const windowHeight = window.innerHeight;
      const bottom15Percent = windowHeight * 0.10;
      const cursorY = e.clientY;

      if (cursorY >= windowHeight - bottom15Percent) {
        const cursorX = e.clientX;
        const newSizes = sortedTimelineData.map((event, index) => {
          const element = document.getElementById(`timeline-icon-${index}`);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementCenterX = rect.left + rect.width / 2;
            const elementCenterY = rect.top + rect.height / 2;
            const distanceX = cursorX - elementCenterX;
            const distanceY = cursorY - elementCenterY;
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
            const maxDistance = 200;
            const scale = Math.max(1, 2 - (distance / maxDistance));
            return scale;
          }
          return 1;
        });
        setIconSizes(newSizes);
      } else {
        setIconSizes(sortedTimelineData.map(() => 1));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = (event) => {
    setHoveredEvent(event);
  };

  const handleMouseLeave = () => {
    setHoveredEvent(null);
  };

  const handleClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="timeline-container">
      {selectedEvent && (
        <div className="details">
          <h2>{selectedEvent.title}</h2>
          <p>{selectedEvent.description}</p>
          <img src={selectedEvent.img} alt={selectedEvent.title} />
        </div>
      )}
      <div className="timeline">
        {sortedTimelineData.map((event, index) => (
          <div
            key={event.id}
            className="timeline-item"
            onMouseEnter={() => handleMouseEnter(event)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(event)}
          >
            <img
              id={`timeline-icon-${index}`}
              src={event.iconImg}
              alt={event.title}
              className={`timeline-icon ${hoveredEvent === event ? 'hovered' : ''}`}
              style={{ transform: `scale(${iconSizes[index]})` }}
            />
            {hoveredEvent === event && (
              <div className="tooltip">
                <img src={event.iconImg} alt={event.name} />
                <span>{event.title}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
