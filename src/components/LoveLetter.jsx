import React from 'react';
import { motion } from 'framer-motion';

export default function LoveLetter() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        padding: '7rem 2rem 8rem 2rem',
        background: '#0c0c0c',
        color: '#f0f0f0',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: '820px', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: '#121212',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '4.5rem 3.5rem',
            position: 'relative',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Top Decorative Header */}
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
              A PRIVATE NOTE
            </span>
            <span className="font-serif" style={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#aaa' }}>
              For Your Special Day
            </span>
          </div>

          {/* Letter Body */}
          <div className="font-serif" style={{ fontSize: '1.28rem', lineHeight: 1.8, color: '#e0e0e0', fontWeight: 300 }}>
            <p style={{ marginBottom: '1.8rem', fontSize: '1.5rem', fontStyle: 'italic', color: '#ffffff' }}>
              To the person who holds my heart,
            </p>

            <p style={{ marginBottom: '1.6rem' }}>
              In a world full of noise, you are my favorite quiet. In a universe of endless choices, finding you remains the single greatest miracle of my life.
            </p>

            <p style={{ marginBottom: '1.6rem' }}>
              Today is a celebration of the day the world was gifted your light. Thank you for every smile you bring into my mornings, every comfort you offer in my doubts, and every quiet moment where time simply stands still when I am with you.
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
              May this new year of your life bring you all the softness, serenity, and boundless joy you so effortless give to everyone around you.
            </p>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <p className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  FOREVER & ALWAYS
                </p>
                <p className="font-serif" style={{ fontSize: '1.6rem', fontStyle: 'italic', color: '#ffffff' }}>
                  Yours, completely.
                </p>
              </div>

              <span className="font-sans" style={{ fontSize: '0.75rem', color: '#555', letterSpacing: '0.15em' }}>
                ∞ / ∞
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
