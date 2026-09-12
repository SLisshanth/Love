import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import heroImage from '../assets/hero-portrait.jpg';

export default function Hero({ onExploreClick }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isZooming, setIsZooming] = useState(false);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const bgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
  const bgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), springConfig);

  const textX = useSpring(useTransform(mouseX, [-0.5, 0.5], [5, -5]), springConfig);
  const textY = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return;
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const handleStoryClick = () => {
    setIsZooming(true);
    if (onExploreClick) onExploreClick();
    
    const target = document.getElementById('chapter-01');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => setIsZooming(false), 1200);
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        background: '#060606',
      }}
    >
      {/* Background Image Container with 1.05 -> 1.0 Slow Zoom */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-3%',
          left: '-3%',
          width: '106%',
          height: '106%',
          x: isMobile ? 0 : bgX,
          y: isMobile ? 0 : bgY,
          zIndex: 1,
        }}
        initial={{ scale: 1.05 }}
        animate={{ scale: isZooming ? 1.08 : 1.0 }}
        transition={{
          scale: {
            duration: isZooming ? 1.2 : 9,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
      >
        <img
          src={heroImage}
          alt="Black and White Forehead-Touching Couple Portrait"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: isMobile ? '50% 20%' : '50% 30%',
            filter: 'contrast(1.05) brightness(0.92) grayscale(100%)',
          }}
        />
      </motion.div>

      {/* Dark Vignette & Gradient protecting couple's faces */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          background: `
            linear-gradient(180deg, 
              rgba(6, 6, 6, 0.4) 0%, 
              rgba(6, 6, 6, 0.1) 35%, 
              rgba(6, 6, 6, 0.6) 70%, 
              rgba(6, 6, 6, 0.98) 96%,
              #060606 100%
            ),
            radial-gradient(
              circle at 50% 30%, 
              transparent 45%, 
              rgba(6, 6, 6, 0.5) 85%
            )
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Hero Typography Content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1200px',
          padding: isMobile ? '0 1.5rem 3.5rem 1.5rem' : '0 3rem 4rem 3rem',
          textAlign: 'center',
          x: isMobile ? 0 : textX,
          y: isMobile ? 0 : textY,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif"
          style={{
            fontSize: 'clamp(2.3rem, 5.8vw, 5.5rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '0.1em',
            color: '#f4f4f4',
            textTransform: 'uppercase',
            marginBottom: '1.2rem',
            textShadow: '0 4px 30px rgba(0,0,0,0.7)',
          }}
        >
          FOR THE ONE<br />
          <span style={{ fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.14em' }}>I CHOOSE</span><br />
          EVERY TIME.
        </motion.h1>

        {/* Secondary Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans tracking-wide-editorial"
          style={{
            fontSize: 'clamp(0.72rem, 1.2vw, 0.92rem)',
            fontWeight: 300,
            color: 'rgba(235, 235, 235, 0.75)',
            textTransform: 'uppercase',
            marginBottom: '2.8rem',
          }}
        >
          A little story about how I found you.
        </motion.p>

        {/* Bottom Interaction "OUR STORY" */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <button
            onClick={handleStoryClick}
            className="font-sans tracking-wide-editorial"
            style={{
              background: 'none',
              border: 'none',
              color: '#e5e5e5',
              fontSize: '0.78rem',
              fontWeight: 400,
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.65rem',
              transition: 'color 0.4s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#e5e5e5')}
          >
            <span>OUR STORY</span>
            <motion.div
              style={{
                width: '100%',
                height: '1px',
                background: 'rgba(255, 255, 255, 0.5)',
                originX: 0.5,
              }}
              initial={{ scaleX: 0.3 }}
              animate={{ scaleX: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </button>

          <motion.div
            style={{
              width: '1px',
              height: '36px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)',
              marginTop: '1rem',
            }}
            animate={{ y: [0, 8, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
