import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useIsPresent } from "framer-motion";
import { getCalApi } from '@calcom/embed-react';

import './Consulting.css';


const businessServices = [
  {
    icon: '💻',
    title: 'IT & Tech Support',
    items: [
      'Computer setup & troubleshooting',
      'Secure networking & Wi‑Fi optimization',
      'Data backup and recovery solutions',
      'Device integration (PCs, tablets, phones, printers)'
    ]
  },
  {
    icon: '🌐',
    title: 'Web & Digital Presence',
    items: [
      'Website design & optimization',
      'Business email setup (custom domains, Google Workspace, Microsoft 365)',
      'SEO basics to improve local search results',
      'Branding and logo design'
    ]
  },
  {
    icon: '⚙️',
    title: 'Automation & Efficiency',
    items: [
      'Streamlining repetitive tasks with automation tools',
      'CRM/email marketing setup',
      'Workflow design (saving hours each week)'
    ]
  },
  {
    icon: '🔒',
    title: 'Cybersecurity & Data Protection',
    items: [
      'Setting up firewalls and security software',
      'Staff training for phishing & scams',
      'Privacy‑first practices for client/customer data'
    ]
  },
{
    icon: '📊',
    title: 'Technology Strategy',
    items: [
      'Long-term IT planning and roadmaps',
      'Budgeting for tech investments',
      'Guidance on choosing the right tools',
      'Scaling systems as your business grows'
    ]
  }, 
  {
  icon: '🤝',
  title: 'Team Training & Support',
  items: [
    'Workshops on essential software (Microsoft 365, Google Workspace)',
    'Best practices for collaboration tools like Slack & Zoom',
    'Cybersecurity awareness and safe work habits',
  ]
}
];


const individualServices = [
  {
    icon: '🖥️',
    title: 'Personal IT Support',
    items: [
      'New computer & device setup',
      'Wi-Fi troubleshooting and optimization',
      'Virus removal & computer cleanup',
      'Data backup and recovery for personal files'
    ]
  },
  {
    icon: '📱',
    title: 'Everyday Tech Help',
    items: [
      'Phone, tablet, and computer assistance',
      'Email setup and troubleshooting',
      'Cloud storage setup (Google Drive, iCloud, OneDrive)',
      'Smart home device setup (speakers, cameras, etc.)'
    ]
  },
  {
    icon: '🎓',
    title: 'One-on-One Tech Teaching',
    items: [
      'Learning to use Zoom, Google Meet, and video calls',
      'Guidance on social media & online communication',
      'Digital photography & file organization',
      'Step-by-step lessons tailored to your pace'
    ]
  },
  {
    icon: '🔒',
    title: 'Online Safety & Security',
    items: [
      'Password manager setup & training',
      'Safe browsing & scam awareness',
      'Parental controls & family safety tools',
      'Privacy settings for social media & accounts'
    ]
  },
  {
    icon: '⚡',
    title: 'Performance & Upgrades',
    items: [
      'Speeding up slow computers',
      'Adding memory or storage upgrades',
      'Helping choose the right new device',
      'Cleaning & optimizing older systems'
    ]
  },
  {
    icon: '👨‍🏫',
    title: 'Digital Skills Coaching',
    items: [
      'Learn online banking and bill payment safely',
      'Master video calls with friends & family',
      'Organize photos, files, and documents',
      'Ongoing lessons to build digital confidence'
    ]
  }
];


const steps = [
  { step: '1', title: 'Free Consultation', desc: 'We discuss your needs and goals.' },
  { step: '2', title: 'Personalized Plan', desc: 'Clear recommendations tailored to you.' },
  { step: '3', title: 'Implementation', desc: 'Hands‑on setup, training, or design.' },
  { step: '4', title: 'Ongoing Support', desc: 'Available for updates and troubleshooting.' }
];

const reasons = [
  'Local & approachable — not a big, expensive IT firm',
  'Flexible pricing — hourly or project‑based',
  'Clear communication — no jargon',
  'Personalized service — I get to know your business'
];

const BusinessPackages = [
  {
    name: 'Hourly Support',
    price: '$30/hr',
    blurb: 'Perfect for quick help, troubleshooting, and one‑off tasks.'
  },
  {
    name: 'Small Business Package',
    price: 'Custom pricing',
    blurb: 'Website setup, email, and basic automation tailored to your needs.'
  },
  {
    name: 'Monthly Support Plan',
    price: 'Custom pricing',
    blurb: 'Ongoing maintenance, updates, and priority support.'
  }
];
const IndividualPackages = [
  {
    name: 'Hourly Support',
    price: '$30/hr',
    blurb: 'Perfect for quick help, troubleshooting, and one‑off tasks.'
  },
  {
    name: 'Installation Help',
    price: '$30/hr',
    blurb: 'Website setup, email, and basic automation tailored to your needs.'
  },
  {
    name: 'Tech Tutoring',
    price: '$35/hr',
    blurb: 'Personalized tech lessons for individuals.'
  }
];

/*const testimonials = [
  {
    quote: 'Evan was able to quickly diagnose our tech issues and implement practical solutions without disrupting our day‑to‑day.',
    author: 'Local Business Owner'
  },
  {
    quote: 'Clear, friendly, and effective. My home network has never been faster or more reliable.',
    author: 'Home Client'
  }
];
*/

const Consulting = () => {
  const isPresent = useIsPresent();

  const [isBusiness, setIsBusiness] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: '30min' });
        cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
      } catch (e) {
        console.error('Failed to init Cal embed', e);
      }
    })();
  }, []);

  return (
  <>
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
      exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
      style={{ originX: isPresent ? 0 : 1 }}
      className="privacy-screen"
    />

    <div className="consulting-page">
      {/* Toggle */}
      <div className="toggle-switch-wrapper-business">
        <div
          className="toggle-switch-business"
          onClick={() => setIsBusiness(!isBusiness)}
        >
          <div
            className={`toggle-indicator-business ${
              isBusiness ? "Business" : "Individual"
            }`}
          />
          <span className={!isBusiness ? "active" : "not-active"}>
            Individual
          </span>
          <span className={isBusiness ? "active" : "not-active"}>
            Business
          </span>
        </div>
      </div>

      {/* Conditional content */}
      {isBusiness ? (
        <>
          {/* Business Version */}
          <section className="consulting-section hero">
            <div className="container">
              <h1 className="hero-title">
                Helping Local Businesses Harness Technology to Grow
              </h1>
              <p className="hero-subtext">
                Affordable, practical IT and technology solutions designed to
                save your team time and boost growth.
              </p>
              <div className="cta-row">
                <button
                  className="cta-button primary"
                  data-cal-namespace="30min"
                  data-cal-link="evan-trafton/30min"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book a Free Consultation
                </button>
                <Link className="cta-button secondary" to="/contact">
                  Contact Me Today
                </Link>
              </div>
            </div>
          </section>

          <section className="consulting-section intro">
            <div className="container">
              <p className="intro-text">
                Running a business is hard enough — technology shouldn’t get in
                the way. I provide hands-on IT and technology consulting tailored
                to small businesses. Whether it’s streamlining your systems,
                automating repetitive tasks, or building your online presence,
                I’ll help you use technology to save time and grow.
              </p>
            </div>
          </section>

          {/* Business services */}
          <section className="consulting-section services">
            <div className="container">
              <h2 className="section-title">Services for Businesses</h2>
              <div className="services-grid">
                {businessServices.map((service) => (
                  <div key={service.title} className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3 className="service-title">{service.title}</h3>
                    <ul className="service-list">
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

           <section className="consulting-section process">
          <div className="container">
            <h2 className="section-title">How It Works</h2>
            <div className="process-steps">
              {steps.map((s) => (
                <div key={s.step} className="process-step">
                  <div className="step-number">{s.step}</div>
                  <div className="step-content">
                    <div className="step-title">{s.title}</div>
                    <div className="step-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="consulting-section why">
          <div className="container">
            <h2 className="section-title">Why Choose Me</h2>
            <ul className="reasons-list">
              {reasons.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing */}
        <section className="consulting-section pricing">
          <div className="container">
            <h2 className="section-title">Pricing / Packages</h2>
            <div className="pricing-grid">
              {BusinessPackages.map((p) => (
                <div key={p.name} className="price-card">
                  <div className="price-name">{p.name}</div>
                  <div className="price-value">{p.price}</div>
                  <div className="price-blurb">{p.blurb}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials 
        <section className="consulting-section testimonials">
          <div className="container">
            <h2 className="section-title">Testimonials</h2>
            <div className="testimonials-grid">
              {testimonials.map((t, idx) => (
                <blockquote key={idx} className="testimonial">
                  <p className="testimonial-quote">“{t.quote}”</p>
                  <cite className="testimonial-author">— {t.author}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
        */}
          

          {/* keep process / why / pricing sections, but with business arrays */}
        </>
      ) : (
        <>
          {/* Individual Version */}
          <section className="consulting-section hero">
            <div className="container">
              <h1 className="hero-title">
                Making Technology Simple and Stress-Free at Home
              </h1>
              <p className="hero-subtext">
                Affordable, friendly help with computers, devices, and online
                tools so you can focus on what matters.
              </p>
              <div className="cta-row">
                <button
                  className="cta-button primary"
                  data-cal-namespace="30min"
                  data-cal-link="evan-trafton/30min"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book a Free Consultation
                </button>
                <Link className="cta-button secondary" to="/contact">
                  Contact Me Today
                </Link>
              </div>
            </div>
          </section>

          <section className="consulting-section intro">
            <div className="container">
              <p className="intro-text">
                Technology at home should make life easier, not harder. I help
                individuals and families get the most out of their devices —
                from setting up computers and Wi-Fi, to protecting your data, to
                teaching you how to use new tools confidently.
              </p>
            </div>
          </section>

          {/* Individual services */}
          <section className="consulting-section services">
            <div className="container">
              <h2 className="section-title">Services for Individuals</h2>
              <div className="services-grid">
                {individualServices.map((service) => (
                  <div key={service.title} className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3 className="service-title">{service.title}</h3>
                    <ul className="service-list">
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

           <section className="consulting-section process">
          <div className="container">
            <h2 className="section-title">How It Works</h2>
            <div className="process-steps">
              {steps.map((s) => (
                <div key={s.step} className="process-step">
                  <div className="step-number">{s.step}</div>
                  <div className="step-content">
                    <div className="step-title">{s.title}</div>
                    <div className="step-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="consulting-section why">
          <div className="container">
            <h2 className="section-title">Why Choose Me</h2>
            <ul className="reasons-list">
              {reasons.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing */}
        <section className="consulting-section pricing">
          <div className="container">
            <h2 className="section-title">Pricing / Packages</h2>
            <div className="pricing-grid">
              {IndividualPackages.map((p) => (
                <div key={p.name} className="price-card">
                  <div className="price-name">{p.name}</div>
                  <div className="price-value">{p.price}</div>
                  <div className="price-blurb">{p.blurb}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials 
        <section className="consulting-section testimonials">
          <div className="container">
            <h2 className="section-title">Testimonials</h2>
            <div className="testimonials-grid">
              {testimonials.map((t, idx) => (
                <blockquote key={idx} className="testimonial">
                  <p className="testimonial-quote">“{t.quote}”</p>
                  <cite className="testimonial-author">— {t.author}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
        */}

          

          {/* keep process / why / pricing sections, but with individual arrays */}
        </>
      )}

      {/* Shared bottom CTA */}
      <section className="consulting-section bottom-cta">
        <div className="container">
          <h2 className="bottom-cta-title">
            Let’s make technology work for you.
          </h2>
          <p className="bottom-cta-subtext">
            Book a free consultation today and see how much easier your tech can
            run.
          </p>
          <div className="cta-row">
            <button
              className="cta-button primary"
              data-cal-namespace="30min"
              data-cal-link="evan-trafton/30min"
              data-cal-config='{"layout":"month_view"}'
            >
              Book a Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  </>
);

};

export default Consulting;


