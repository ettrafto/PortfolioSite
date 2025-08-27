import { useState, useRef, useLayoutEffect } from "react";
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
    "Robert Erickson Senior Lecturer Emeritus Computer Science",
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
  const [dir, setDir] = useState(0);
  const [frameH, setFrameH] = useState(0); // animated height

  const slideRef = useRef(null); // wraps the active quote content
  const firstRun = useRef(true);

  const paginate = (delta) => {
    setDir(delta);
    setIndex((i) => (i + delta + quotes.length) % quotes.length);
    firstRun.current = false;
  };

  // Measure active slide’s height and update the frame’s height
  useLayoutEffect(() => {
    const el = slideRef.current;
    if (!el) return;

    const measure = () => setFrameH(el.offsetHeight);

    // Initial measure
    measure();

    // Observe size changes (e.g., font reflow, wrapping)
    const ro = new ResizeObserver(() => {
      // schedule with rAF to avoid layout thrash during animation ticks
      requestAnimationFrame(measure);
    });
    ro.observe(el);

    // Also remap on resize (orientation/viewport width changes)
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [index]);

  return (
    <div className="quote-carousel">
      {/* Frame: only the quote content animates height */}
      <motion.div
        className="quote-frame"
        animate={{ height: frameH || "auto" }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <AnimatePresence initial={false} custom={dir} mode="wait">
          <motion.div
            key={index}
            className="quote-slide"
            custom={dir}
            initial={() => {
              const x = dir > 0 ? 40 : -40;
              return firstRun.current ? { opacity: 0 } : { x, opacity: 0 };
            }}
            animate={{ x: 0, opacity: 1 }}
            exit={() => {
              const x = dir > 0 ? -40 : 40;
              return firstRun.current ? { opacity: 0 } : { x, opacity: 0 };
            }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {/* This wrapper is what we measure */}
            <div ref={slideRef} className="quote-content">
              <p className="quote-text">“{quotes[index][0]}”</p>
              <p className="quote-author">— {quotes[index][1]}, {quotes[index][2]}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* In-frame arrows (don’t affect height because they’re absolutely positioned) */}
        <button
          className="arrow-button left"
          aria-label="Previous Quote"
          onClick={() => paginate(-1)}
        >
          <ArrowLeft />
        </button>
        <button
          className="arrow-button right"
          aria-label="Next Quote"
          onClick={() => paginate(1)}
        >
          <ArrowRight />
        </button>
      </motion.div>

      {/* Controls under the frame: fixed area so layout never jumps */}
      <div className="quote-controls">
        <div className="quote-indicators">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i === index) return;
                setDir(i > index ? 1 : -1);
                setIndex(i);
                firstRun.current = false;
              }}
              className={`indicator-dot ${i === index ? "active" : ""}`}
              aria-label={`Go to quote ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
