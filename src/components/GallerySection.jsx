import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import portraitImg from '../assets/hero-portrait.jpg';

const moments = [
  {
    id: 1,
    title: 'THE PROMISE',
    date: 'MEMORIES I',
    caption: 'In the stillness of your embrace.',
    aspect: '16/9',
  },
  {
    id: 2,
    title: 'GENTLE SILENCE',
    date: 'MEMORIES II',
    caption: 'No words needed when hearts align.',
    aspect: '4/5',
  },
  {
    id: 3,
    title: 'UNTIL FOREVER',
    date: 'MEMORIES III',
    caption: 'Every second with you is written in eternity.',
    aspect: '16/9',
  },
];

export default function GallerySection() {
  const [activeMoment, setActiveMoment] = useState(null);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        padding: '7rem 2rem 8rem 2rem',
        background: '#080808',
        color: '#f0f0f0',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>
            PORTRAITS & STILLS
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.2rem, 3.5vw, 3.4rem)',
              fontWeight: 300,
              marginTop: '0.6rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#ffffff',
            }}
          >
            MOMENTS IN MONOCHROME
          </h2>
          <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.25)', margin: '1.5rem auto 0 auto' }} />
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {moments.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveMoment(item)}
              style={{
                background: '#121212',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
              }}
              whileHover={{ y: -6 }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: item.aspect,
                  overflow: 'hidden',
                  background: '#000',
                }}
              >
                <img
                  src={portraitImg}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(100%) contrast(1.05) brightness(0.9)',
                    transition: 'transform 0.8s ease, filter 0.8s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.filter = 'grayscale(100%) contrast(1.1) brightness(1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'grayscale(100%) contrast(1.05) brightness(0.9)';
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.4rem',
                    borderRadius: '50%',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Maximize2 size={14} />
                </div>
              </div>

              <div style={{ padding: '1.6rem 1.4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <h4 className="font-serif" style={{ fontSize: '1.2rem', fontWeight: 400, letterSpacing: '0.08em', color: '#fff' }}>
                    {item.title}
                  </h4>
                  <span className="font-sans" style={{ fontSize: '0.65rem', color: '#777', letterSpacing: '0.15em' }}>
                    {item.date}
                  </span>
                </div>
                <p className="font-serif" style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#aaaaaa' }}>
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeMoment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMoment(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(4, 4, 4, 0.94)',
              backdropFilter: 'blur(16px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '900px',
                width: '100%',
                background: '#121212',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setActiveMoment(null)}
                style={{
                  position: 'absolute',
                  top: '1.2rem',
                  right: '1.2rem',
                  background: 'rgba(0,0,0,0.7)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  zIndex: 10,
                }}
              >
                <X size={18} />
              </button>

              <div style={{ width: '100%', maxHeight: '70vh', overflow: 'hidden' }}>
                <img
                  src={portraitImg}
                  alt={activeMoment.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'grayscale(100%) contrast(1.08)',
                  }}
                />
              </div>

              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 className="font-serif" style={{ fontSize: '1.8rem', fontWeight: 300, letterSpacing: '0.12em', color: '#fff', marginBottom: '0.5rem' }}>
                  {activeMoment.title}
                </h3>
                <p className="font-serif" style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#ccc' }}>
                  "{activeMoment.caption}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
