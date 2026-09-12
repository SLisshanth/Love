import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import heroPortrait from '../assets/hero-portrait.jpg';
import hackathonReviewSelfie from '../assets/hackathon-review-selfie.jpg';
import highwaysWide from '../assets/highways-wide.png';
import earlySelfie from '../assets/early-selfie.jpg';
import onamWide2026 from '../assets/onam-wide-2026.jpg';
import onamCouple2026 from '../assets/onam-couple-2026.jpg';
import randomPics from '../assets/random-pics.png';

const reelFrames = [heroPortrait, onamWide2026, hackathonReviewSelfie, onamCouple2026, highwaysWide, earlySelfie, randomPics];

export default function CinematicVideo() {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFrameIndex((prev) => (prev + 1) % reelFrames.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="chapter-14"
      style={{
        padding: '8rem 2rem',
        background: '#040404',
        color: '#f0f0f0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase' }}>
            14 — MOVING REEL
          </span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 300, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            CINEMATIC REEL
          </h2>
        </motion.div>

        {/* Cinematic Film Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            background: '#080808',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Animated 35mm film reel photo transitions */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentFrameIndex}
              src={reelFrames[currentFrameIndex]}
              alt="Cinematic Video Frame"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1.0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%) contrast(1.06) brightness(0.85)',
              }}
            />
          </AnimatePresence>

          {/* Film Timecode overlay */}
          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              left: '2rem',
              right: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              zIndex: 10,
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            <span>REC • 35MM REEL</span>
            <span>FRAME 0{currentFrameIndex + 1} / 0{reelFrames.length}</span>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              textAlign: 'center',
              zIndex: 10,
            }}
          >
            <span className="font-serif" style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)' }}>
              "Every frame captured in timeless monochrome."
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
