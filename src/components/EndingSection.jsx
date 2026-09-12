import React from 'react';
import { motion } from 'framer-motion';
import handHoldingFinal from '../assets/hand-holding-final.jpg';

export default function EndingSection() {
  return (
    <section
      id="chapter-17-ending"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: '#040404',
        color: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0', // Full bleed or controlled padding
        overflow: 'hidden',
      }}
    >
      <div 
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        className="ending-container"
      >
        {/* CSS for responsiveness */}
        <style>
          {`
            .ending-container {
              flex-direction: column;
            }
            .ending-image-wrapper {
              flex: 1 1 50%;
              width: 100%;
              height: 50vh;
            }
            .ending-text-wrapper {
              flex: 1 1 50%;
              width: 100%;
              height: 50vh;
              padding: 3rem 2rem;
            }
            
            @media (min-width: 768px) {
              .ending-container {
                flex-direction: row;
              }
              .ending-image-wrapper {
                flex: 0 0 60%;
                height: 100vh;
              }
              .ending-text-wrapper {
                flex: 0 0 40%;
                height: 100vh;
                padding: 6rem;
              }
            }
            
            .overlay-desktop-only {
              display: none;
            }
            @media (min-width: 768px) {
              .overlay-desktop-only {
                display: block;
              }
            }
          `}
        </style>

        {/* Image Area */}
        <motion.div 
          className="ending-image-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <img 
            src={handHoldingFinal} 
            alt="Holding Hands" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(100%) contrast(1.05) brightness(0.85)',
            }}
          />
          {/* Edge-fading overlay to merge image seamlessly with background */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: `
              linear-gradient(to bottom, #040404 0%, transparent 15%),
              linear-gradient(to top, #040404 0%, transparent 15%),
              linear-gradient(to right, transparent 60%, #040404 100%),
              linear-gradient(to left, #040404 0%, transparent 15%)
            `,
            pointerEvents: 'none'
          }} />
        </motion.div>

        {/* Text Area */}
        <motion.div 
          className="ending-text-wrapper"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
            backgroundColor: '#040404',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
            style={{ width: '100%' }}
          >
            <p 
              className="font-serif"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                fontWeight: 300,
                color: '#ffffff',
                lineHeight: '1.4',
                textAlign: 'center', 
                letterSpacing: '0.05em',
                maxWidth: '400px',
                margin: '0 auto',
              }}
            >
              The Greatest Intimacy is Holding Hands Forever
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
