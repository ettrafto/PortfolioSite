import React from 'react';
import CalEmbed from '../components/CalEmbed';

const BookConsultation = () => {
  return (
    <div style={{ padding: '2rem', color: '#e1e1e1', background: 'black', minHeight: 'calc(100vh - 60px)' }}>
      <h1 style={{ fontSize: 32, margin: 0, marginBottom: '0.75rem', fontWeight: 800 }}>Book a Consultation</h1>
      <p style={{ marginTop: 0, marginBottom: '1.5rem', opacity: 0.9 }}>
        Quick, easy scheduling. Answer a few questions and pick a time that works for you.
      </p>
      <div style={{ marginTop: '1.5rem' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, margin: 0, marginBottom: '0.5rem' }}>What happens next?</h2>
        <ul style={{ marginTop: 0 }}>
          <li>Receive a confirmation email and calendar invite</li>
          <li>We’ll meet via your selected method (video or in-person)</li>
          <li>We’ll follow up with clear next steps and recommendations</li>
        </ul>
      </div>
    </div>
  );
};

export default BookConsultation;



