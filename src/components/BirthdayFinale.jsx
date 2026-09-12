import React from 'react';
import { motion } from 'framer-motion';
import heroPortrait from '../assets/hero-portrait.jpg';

export default function BirthdayFinale() {
  return (
    <section
      id="chapter-16"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: '#040404',
        color: '#f0f0f0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        {/* Step 1: HAPPY BIRTHDAY, MY LOVE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif"
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
            fontWeight: 300,
            letterSpacing: '0.12em',
            color: '#ffffff',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}
        >
          HAPPY BIRTHDAY, MY LOVE.
        </motion.h2>

        {/* Step 2: Thank you statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif"
          style={{
            fontSize: 'clamp(1.2rem, 2.4vw, 1.8rem)',
            fontStyle: 'italic',
            color: '#c0c0c0',
            marginBottom: '4rem',
            fontWeight: 300,
          }}
        >
          "Thank you for becoming my favorite part of every ordinary day."
        </motion.p>

        {/* Step 3: Forehead portrait reappearance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            maxWidth: '750px',
            aspectRatio: '16/9',
            margin: '0 auto 3.5rem auto',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
            overflow: 'hidden',
          }}
        >
          <img
            src={heroPortrait}
            alt="Forehead Touching Portrait Finale"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(100%) contrast(1.08) brightness(0.9)',
            }}
          />
        </motion.div>

        {/* Step 4: Final Quote */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif"
          style={{
            fontSize: 'clamp(1.8rem, 3.8vw, 3.2rem)',
            fontWeight: 300,
            letterSpacing: '0.1em',
            color: '#ffffff',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}
        >
          I WOULD CHOOSE YOU AGAIN.
        </motion.h3>

        {/* Step 5: Below timestamp */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 2.0 }}
          className="font-sans tracking-wide-editorial"
          style={{
            fontSize: '0.85rem',
            color: '#777777',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
          }}
        >
          25.06.2025 → ∞
        </motion.p>
      </div>
    </section>
  );
}
