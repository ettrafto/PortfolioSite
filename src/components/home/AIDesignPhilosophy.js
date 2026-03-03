import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AIDesignPhilosophy.css";

const INNER_ITEMS = [
  {
    id: "philosophy",
    title: "Philosophy",
    panelId: "ai-philosophy-panel",
    content: (
      <div className="ai-design-philosophy-body">
        <p>I use AI to speed up iteration and reduce busywork, not to replace engineering judgment.</p>
        <p>I'm responsible for architecture, correctness, security, and production quality.</p>
      </div>
    ),
  },
  {
    id: "workflow",
    title: "Workflow",
    panelId: "ai-workflow-panel",
    content: (
      <div className="ai-design-philosophy-body">
        <ol className="ai-design-philosophy-list ai-design-philosophy-steps">
          <li>Define problem and constraints</li>
          <li>Architecture and interfaces</li>
          <li>Scaffolding and iteration</li>
          <li>Tests and contract checks</li>
          <li>Manual review and refactor</li>
          <li>Production validation</li>
        </ol>
      </div>
    ),
  },
  {
    id: "safeguards",
    title: "Safeguards",
    panelId: "ai-safeguards-panel",
    content: (
      <div className="ai-design-philosophy-body">
        <ul className="ai-design-philosophy-list">
          <li>Review and edit all generated code</li>
          <li>Manually validate security-sensitive logic</li>
          <li>Tests, logs, real env checks before shipping</li>
          <li>Requirements win when conflicts arise</li>
        </ul>
      </div>
    ),
  },
];

const AIDesignPhilosophy = () => {
  const [outerOpen, setOuterOpen] = useState(false);
  const [activeInner, setActiveInner] = useState(null);

  const toggleOuter = () => {
    setOuterOpen((prev) => {
      if (prev) setActiveInner(null);
      return !prev;
    });
  };

  const toggleInner = (id) => {
    setActiveInner((prev) => (prev === id ? null : id));
  };

  return (
    <section className="ai-design-philosophy-section">
      <button
        type="button"
        className="ai-design-philosophy-outer-header"
        onClick={toggleOuter}
        aria-expanded={outerOpen}
        aria-controls="ai-design-philosophy-content"
      >
        <span className="ai-design-philosophy-header-left">
          <img
            src="/icons/ai-brain.png"
            alt=""
            className="ai-design-philosophy-brain-icon"
            aria-hidden
          />
          <span className="ai-design-philosophy-outer-label">AI Design Philosophy</span>
          <span className="ai-design-philosophy-outer-intro">
          I use AI to speed up iteration, not to replace judgment.
          </span>
        </span>
        <span className="ai-design-philosophy-chevron" aria-hidden>▼</span>
      </button>

      <AnimatePresence initial={false}>
        {outerOpen && (
          <motion.div
            id="ai-design-philosophy-content"
            className="ai-design-philosophy-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="ai-design-philosophy-tabs">
              <div className="ai-design-philosophy-tab-buttons" role="tablist">
                {INNER_ITEMS.map(({ id, title, panelId }) => (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={activeInner === id}
                    aria-controls={panelId}
                    id={`ai-design-philosophy-header-${id}`}
                    className={`ai-design-philosophy-tab-btn ${activeInner === id ? "ai-design-philosophy-tab-active" : ""}`}
                    onClick={() => toggleInner(id)}
                  >
                    {title}
                  </button>
                ))}
              </div>
              <div className="ai-design-philosophy-tab-content">
                <AnimatePresence initial={false} mode="wait">
                  {activeInner && INNER_ITEMS.find((item) => item.id === activeInner) && (
                    <motion.div
                      key={activeInner}
                      id={INNER_ITEMS.find((item) => item.id === activeInner).panelId}
                      className="ai-design-philosophy-inner-panel"
                      role="tabpanel"
                      aria-labelledby={`ai-design-philosophy-header-${activeInner}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      {INNER_ITEMS.find((item) => item.id === activeInner).content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AIDesignPhilosophy;
