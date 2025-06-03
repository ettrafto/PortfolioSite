import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "./QuoteCarousel.css";

const quotes = [
  [
    "Evan has been an impressive undergraduate student. He considers both short- and long-term goals and takes the initiative to learn and practice technical and leadership skills beyond what he receives from his coursework. It is rare to interact with a student who has that level of vision and motivation.",
    "Professor Lisa Dion, Senior Lecturer of Computer Science",
    "University of Vermont"
  ],
  [
    "Evan has taken three courses with me in web development (both front end and back end) where his final projects were all top notch. His work ethic to complete tasks on time, the work itself excellent and his ability to learn above and beyond are all traits to be envied by his peers.",
    "Robert Erickson Senior Lecturer Emeritus Computer Science",
    "University of Vermont"
  ],
  [
    "Evan has a real problem-solving mindset, and is very quick to learn the tools and technologies needed to build web products. He was able to wrangle older technology while leveraging modern frameworks to build a useful piece of civic tech in the VTBillTracker. Evan showed a ton of initiative, built a great map interface, and connected it all in an efficient way manner, resulting in a great end product.",
    "Ben Cooley, Research Data Visualization Engineer",
    "University of Vermont"
  ]
];

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [containerHeight, setContainerHeight] = useState("auto");
  const measureRef = useRef();

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + quotes.length) % quotes.length);
  };

  useEffect(() => {
    if (measureRef.current) {
      setContainerHeight(measureRef.current.offsetHeight + 40);
    }
  }, [index]);

  return (
    <div className="quote-carousel">
      <button className="arrow-button arrow-left" onClick={() => paginate(-1)} aria-label="Previous Quote">
        <ArrowLeft />
      </button>

      <motion.div
        className="quote-viewbox"
        animate={{ height: containerHeight }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="quote-container" ref={measureRef}>
              <p className="quote-text">"{quotes[index][0]}"</p>
              <p className="quote-author">— {quotes[index][1]}, {quotes[index][2]}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <button className="arrow-button arrow-right" onClick={() => paginate(1)} aria-label="Next Quote">
        <ArrowRight />
      </button>
    </div>
  );
}
