// src/components/landing/ScenarioSection.jsx
import React from 'react';

const SCENARIOS = [
  { name: 'Operation Nexus',  industry: 'ERP Implementation' },
  { name: 'Bridge to Nowhere', industry: 'Infrastructure' },
  { name: 'Launch Window',     industry: 'Product Launch' },
  { name: 'The Transformation', industry: 'Agile Transformation' },
  { name: 'Zero to One',       industry: 'Software Startup' },
];

export default function ScenarioSection() {
  return (
    <section className="tp-section tp-section-dark" id="scenario">
      <div className="tp-container">
        <div className="tp-focus tp-focus-reverse">
          <div className="tp-focus-content">
            <span className="tp-eyebrow">
              <span className="tp-section-num">§ 03</span> Scenario Simulator
            </span>
            <h2>Five PMP scenarios. 125 decisions. Real consequences.</h2>
            <p>
              Each scenario puts you in charge of a project from a different
              industry — ERP, infrastructure, product launch, agile
              transformation, software startup. You move through five phases,
              making five decisions per phase, twenty-five per project.
            </p>
            <p>
              Every choice affects your project health. Poor decisions are
              hard to recover from. This is decision-making practice at the
              level the exam actually tests.
            </p>
            <ul className="tp-focus-list">
              <li>Five scenarios across distinct industries and project types</li>
              <li>Five phases per scenario, five decisions per phase</li>
              <li>Project health updates with every choice</li>
              <li>Outcome reflects how well you managed the project end to end</li>
            </ul>
          </div>

          <div className="tp-focus-visual" aria-hidden="true">
            <div className="tp-focus-visual-corner">5 scenarios · 125 decisions</div>
            <div className="tp-mock-stat">
              <div className="tp-mock-stat-num">5</div>
              <div className="tp-mock-stat-label">Scenarios available</div>
            </div>
            <div className="tp-mock-divider" />
            {SCENARIOS.map((s) => (
              <div className="tp-mock-row" key={s.name}>
                <span className="tp-mock-row-label">{s.name}</span>
                <span className="tp-mock-row-value">{s.industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
