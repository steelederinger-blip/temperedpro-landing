// src/components/landing/HowItWorksSection.jsx
import React from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Practice with focus',
    body:
      'Use Quiz Mode and the Terms Matching Game to build domain depth and term recall. Filter to your weakest topics and drill them until they stick.',
  },
  {
    num: '02',
    title: 'Simulate exam day',
    body:
      'Run the 180-question Full Exam to build pacing and stamina under time pressure. Practice the section structure and the optional breaks too — they matter.',
  },
  {
    num: '03',
    title: 'Apply judgment',
    body:
      'Work through the five scenario simulations to practice the situational decision-making the PMP exam emphasizes. Different industries, real consequences.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="tp-section" id="how-it-works">
      <div className="tp-container">
        <div className="tp-section-header">
          <span className="tp-eyebrow">
            <span className="tp-section-num">§ 04</span> The Approach
          </span>
          <h2>Three layers of preparation.</h2>
          <p>
            Knowing the material isn&apos;t the same as performing on the
            exam. The path that works builds depth, then endurance, then
            judgment — in that order.
          </p>
        </div>

        <div className="tp-steps">
          {STEPS.map((step) => (
            <div className="tp-step" key={step.num}>
              <div className="tp-step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
