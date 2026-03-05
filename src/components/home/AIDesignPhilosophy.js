import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AIDesignPhilosophy.css";

const WORKFLOW_STEPS = [
  { n: "01", title: "Define", lines: ["Outline problem", "& constraints"] },
  { n: "02", title: "Architect", lines: ["Draft architecture", "& interfaces"] },
  { n: "03", title: "Generate", lines: ["Use AI to create", "code & tests"] },
  { n: "04", title: "Iterate", lines: ["Improve, extend,", "and refactor"] },
  { n: "05", title: "Validate", lines: ["Run tests and", "review changes"] },
];

const PHILOSOPHY_ICONS = ["/icons/ai-icon1.webp", "/icons/ai-icon2.webp", "/icons/ai-icon3.webp"];

const PhilosophyIcon = ({ src }) => (
  <img src={src} alt="" className="ai-philosophy-icon" aria-hidden />
);

/* Alias for backwards compatibility - use PhilosophyIcon with src instead */
const PhilosophyIconPlaceholder = () => <PhilosophyIcon src={PHILOSOPHY_ICONS[0]} />;

const PhilosophyRow = ({ icon, children, showDivider }) => (
  <>
    <div className="ai-philosophy-row">
      <div className="ai-philosophy-row-icon">{icon}</div>
      <div className="ai-philosophy-row-content">{children}</div>
    </div>
    {showDivider && <hr className="ai-philosophy-divider" />}
  </>
);

const PHILOSOPHY_ROWS = [
  {
    content: (
      <p>
        I use AI as an engineering <strong>accelerator, not a decision-maker</strong>. My workflow is built around clear authority structures where architecture documents, schemas, and <strong>source code</strong> define the system's <strong>ground truth</strong> while AI assists with exploration, planning, and implementation.
      </p>
    ),
  },
  {
    content: (
      <p>
        <strong>I separate planning from execution:</strong> AI helps generate ideas and draft solutions, but all changes are <strong>validated</strong> and executed through deterministic tools like version control, testing, and structured documentation.
      </p>
    ),
  },
  {
    content: (
      <p>
        To manage <strong>complex systems</strong>, I rely on <strong>externalized thinking</strong>—mind maps, architectural diagrams, and written <strong>design artifacts</strong> that allow both humans and AI to reason about the same structure.
      </p>
    ),
  },
];

const WorkflowStepCard = ({ title, lines }) => (
  <div className="ai-workflow-step-card">
    <div className="ai-workflow-step-card-header">
      <span className="ai-workflow-step-card-title">{title}</span>
    </div>
    <div className="ai-workflow-step-card-lines">
      {lines.map((line, i) => (
        <span key={i} className="ai-workflow-step-card-line">
          {line}
        </span>
      ))}
    </div>
  </div>
);

const INNER_ITEMS = [
  {
    id: "philosophy",
    title: "Philosophy",
    panelId: "ai-philosophy-panel",
    content: (
      <div className="ai-philosophy-panel">
        <div className="ai-philosophy-content-box">
          {PHILOSOPHY_ROWS.map((row, i) => (
            <PhilosophyRow
              key={i}
              icon={<PhilosophyIcon src={PHILOSOPHY_ICONS[i]} />}
              showDivider={i < PHILOSOPHY_ROWS.length - 1}
            >
              {row.content}
            </PhilosophyRow>
          ))}
          <p className="ai-philosophy-final-line">
            This approach increases <strong>development speed</strong> while <strong>preserving</strong> clarity, control, and <strong>technical ownership</strong>.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "workflow",
    title: "Workflow",
    panelId: "ai-workflow-panel",
    content: (
      <div className="ai-workflow-panel">
        <div className="ai-workflow-steps-row">
          {WORKFLOW_STEPS.flatMap((step, i) =>
            i === 0
              ? [<WorkflowStepCard key={step.n} title={step.title} lines={step.lines} />]
              : [
                  <span key={`arrow-${i}`} className="ai-workflow-arrow" aria-hidden>→</span>,
                  <WorkflowStepCard key={step.n} title={step.title} lines={step.lines} />,
                ]
          )}
        </div>
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
