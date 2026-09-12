import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExperienceIntro({ onComplete }) {
  const [step, setStep] = useState(1);
  const [isExiting, setIsExiting] = useState(false);

  const handleContinue = () => {
    // Attempt fullscreen, but don't wait for it or rely on it
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
    setStep(2);
  };

  const handleDone = (e) => {
    // DO NOT stop propagation. Allow this trusted click to bubble up to the window
    // so that AudioPlayer can natively intercept it and start playing music immediately.
    
    setIsExiting(true);
    
    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  return (
    <div
      onClick={(e) => {
        // Only stop propagation if it's NOT the DONE button.
        // We want the DONE button click to bubble to window to trigger AudioPlayer.
        const isDoneButton = e.target.closest('#done-btn');
        if (!isDoneButton) {
          e.stopPropagation();
          if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) {
            e.nativeEvent.stopImmediatePropagation();
          }
        }
      }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: '#000000',
        zIndex: 9999, // Ensure it's above everything
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        overflow: 'hidden',
        opacity: isExiting ? 0 : 1,
        transition: 'opacity 1.2s ease-in-out'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          opacity: 0.05,
          pointerEvents: 'none',
        }}
      />

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <p className="font-serif" style={{ fontSize: '1rem', letterSpacing: '0.2em', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              A LITTLE SOMETHING
            </p>
            <h1 className="font-serif" style={{ fontSize: '1.8rem', fontWeight: 300, letterSpacing: '0.15em', marginBottom: '4rem', textTransform: 'uppercase' }}>
              BEFORE WE BEGIN
            </h1>
            
            <p className="font-serif" style={{ fontSize: '1.2rem', color: '#aaaaaa', fontWeight: 300, lineHeight: 1.6, marginBottom: '3rem' }}>
              For the best experience,<br/>enter fullscreen.
            </p>

            <button
              onClick={handleContinue}
              style={{
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                display: 'inline-block',
                marginBottom: '2rem',
                background: 'rgba(255,255,255,0.03)',
                color: '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
            >
              <span className="font-sans" style={{ fontSize: '1.2rem', letterSpacing: '0.1em', fontWeight: 300 }}>
                [ F11 ]
              </span>
            </button>
            
            <p className="font-sans" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#666', textTransform: 'uppercase' }}>
              PRESS F11 FOR THE FULL EXPERIENCE
            </p>
          </motion.div>
        )}

        {step === 2 && (
          <React.Fragment key="step2-frag">
            <motion.div
              key="step2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ textAlign: 'center' }}
          >
            <h2 className="font-serif" style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '0.15em', marginBottom: '1.5rem', color: '#ffffff' }}>
              PUT ON YOUR EARPHONES.
            </h2>
            <p className="font-serif" style={{ fontSize: '1.2rem', color: '#aaaaaa', fontWeight: 300, letterSpacing: '0.05em' }}>
              Some moments are better heard.
            </p>
          </motion.div>
          </React.Fragment>
        )}
      </AnimatePresence>
      
      {step === 2 && (
        <motion.button
          id="done-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          onClick={handleDone}
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            right: '2.5rem',
            background: 'rgba(14, 14, 14, 0.65)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            borderRadius: '40px',
            padding: '0.65rem 1.25rem',
            color: '#e5e5e5',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.68rem',
            fontWeight: 400,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            transition: 'all 0.4s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
            e.currentTarget.style.background = 'rgba(24, 24, 24, 0.85)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
            e.currentTarget.style.background = 'rgba(14, 14, 14, 0.65)';
          }}
        >
          DONE →
        </motion.button>
      )}
    </div>
  );
}
