// src/components/landing/ExamSimulatorSection.jsx
import React from 'react';

export default function ExamSimulatorSection() {
  return (
    <section className="tp-section tp-section-alt" id="exam-simulator">
      <div className="tp-container">
        <div className="tp-focus">
          <div className="tp-focus-content">
            <span className="tp-eyebrow">
              <span className="tp-section-num">§ 02</span> Full Exam
            </span>
            <h2>Built for the 180-question reality.</h2>
            <p>
              The PMP exam runs 180 questions across three 60-question sections,
              with optional 10-minute breaks between them. Most candidates have
              never sustained focused decision-making for that long.
            </p>
            <p>
              The Full Exam Simulator replicates the format end to end — same
              question count, same section structure, same break logic — so exam
              day isn&apos;t the first time you experience it.
            </p>
            <ul className="tp-focus-list">
              <li>Three sections of 60 questions across all PMBOK domains</li>
              <li>3:50:00 countdown timer (pauses during breaks)</li>
              <li>Flag questions for review before submitting</li>
              <li>No feedback during the exam — full review after</li>
              <li>70% practice benchmark (PMI does not publish official scoring)</li>
            </ul>
          </div>

          <div className="tp-focus-visual" aria-hidden="true">
            <div className="tp-focus-visual-corner">Exam · Session 01</div>
            <div className="tp-mock-stat">
              <div className="tp-mock-stat-num">180</div>
              <div className="tp-mock-stat-label">Question count</div>
            </div>
            <div className="tp-mock-divider" />
            <div className="tp-mock-row">
              <span className="tp-mock-row-label">Sections</span>
              <span className="tp-mock-row-value">3 × 60</span>
            </div>
            <div className="tp-mock-row">
              <span className="tp-mock-row-label">Total time</span>
              <span className="tp-mock-row-value">3h 50m</span>
            </div>
            <div className="tp-mock-row">
              <span className="tp-mock-row-label">Optional breaks</span>
              <span className="tp-mock-row-value">After Q60, Q120</span>
            </div>
            <div className="tp-mock-row">
              <span className="tp-mock-row-label">Target benchmark</span>
              <span className="tp-mock-row-value">70%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
