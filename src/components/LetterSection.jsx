import React from 'react';
import { motion } from 'framer-motion';

export default function LetterSection() {
  return (
    <section
      id="chapter-15"
      style={{
        padding: '8rem 2rem 7rem 2rem',
        background: '#090909',
        color: '#f0f0f0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: '850px', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: '#121212',
            border: '1px solid rgba(255, 255, 255, 0.09)',
            padding: '5rem 3.8rem',
            position: 'relative',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6)',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.68rem', color: '#777', textTransform: 'uppercase' }}>
              15 — THE LETTER
            </span>
            <span className="font-serif" style={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#aaa' }}>
              A Love Story Written in Stillness
            </span>
          </div>

          {/* Letter Body */}
          <div className="font-serif" style={{ fontSize: '1.3rem', lineHeight: 1.85, color: '#e0e0e0', fontWeight: 300 }}>
            <p style={{ marginBottom: '1.8rem', fontSize: '1.6rem', fontStyle: 'italic', color: '#ffffff' }}>
              My Love,
            </p>

            <p style={{ marginBottom: '1.6rem' }}>
              When I look back to May 2025, to that day when I was crying over a crush, I can't help but smile at how clueless I was. I had no idea that out of that moment of silly heartbreak, the person who would become my entire world was standing just around the corner.
            </p>

            <p style={{ marginBottom: '1.6rem' }}>
              Our paths finally crossed at the Library Hackathon. What began as quiet discussions about code and projects slowly turned into personal confidences, late-night calls, and talking until 6 AM without ever noticing the world turning outside our window.
            </p>

            <p style={{ marginBottom: '1.6rem' }}>
              I remember Highways 2025—how terrified I was to ask for a photograph with you, until Janapriyan took my phone and called you, forcing me to take that very first photo together. I remember holding your hand when you were scared about your exam, completely lost in daydreaming while you held me tight. And when June 25th arrived, while I hesitated and searched for the right words to propose, you did it first.
            </p>

            <p style={{ marginBottom: '1.6rem' }}>
              We've shared unscripted goofy moments, playful lunch dates where you insist on paying, and even our first fight where we both cried because we cared so deeply. Through every misunderstanding, argument, and quiet reconciliation, one truth has remained unchanged: my heart always needs yours, and somehow, yours still needs mine.
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
              Thank you for choosing me every single day.
            </p>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '2.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <p className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  WITH ALL MY DEVOTION
                </p>
                <p className="font-serif" style={{ fontSize: '1.7rem', fontStyle: 'italic', color: '#ffffff' }}>
                  Yours, now & forever.
                </p>
              </div>

              <span className="font-sans" style={{ fontSize: '0.75rem', color: '#666', letterSpacing: '0.15em' }}>
                25.06.2025 → ∞
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
