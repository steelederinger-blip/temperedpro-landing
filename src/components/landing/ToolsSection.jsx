// src/components/landing/ToolsSection.jsx
import React from 'react';

const TOOLS = [
  {
    num: 'I',
    title: 'Quiz Mode',
    body:
      '20-question practice sessions with instant feedback. Filter by domain (People, Process, Business Environment) or by topic. Optional timer.',
  },
  {
    num: 'II',
    title: 'Full Exam Simulator',
    body:
      '180 questions over three 60-question sections. Real PMP timing, optional 10-minute breaks, no feedback until you submit.',
  },
  {
    num: 'III',
    title: 'Terms Matching Game',
    body:
      'Match PMP terms to their correct definitions. Drawn from a bank of 488 terms. Configurable round timer.',
  },
  {
    num: 'IV',
    title: 'Scenario Simulator',
    body:
      'Five PMP scenarios across different industries. Each runs five phases of five decisions — 25 decisions per scenario, 125 total.',
  },
];

export default function ToolsSection() {
  return (
    <section className="tp-section" id="tools">
      <div className="tp-container">
        <div className="tp-section-header">
          <span className="tp-eyebrow">
            <span className="tp-section-num">§ 01</span> The Tools
          </span>
          <h2>Four study modes for PMP candidates.</h2>
          <p>
            Each mode targets a different layer of exam readiness — from term
            recall to full-length endurance to situational judgment.
          </p>
        </div>

        <div className="tp-tools-grid">
          {TOOLS.map((tool) => (
            <article className="tp-tool-card" key={tool.title}>
              <div className="tp-tool-num">{tool.num}</div>
              <h3>{tool.title}</h3>
              <p>{tool.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
