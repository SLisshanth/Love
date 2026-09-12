import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

import heroPortrait from '../assets/hero-portrait.jpg';
import hackathonGroup from '../assets/hackathon-group.png';
import hackathonReviewSelfie from '../assets/hackathon-review-selfie.jpg';
import earlySelfie from '../assets/early-selfie.jpg';
import highwaysWide from '../assets/highways-wide.png';
import onamCelbPort from '../assets/onam-celb-port.png';
import playfulSelfie from '../assets/playful-selfie.png';
import randomPics from '../assets/random-pics.png';
import randomPics2 from '../assets/RANDOM-PICS2.png';

// Onam 2026 Photos
import onamWide2026 from '../assets/onam-wide-2026.jpg';
import onamCouple2026 from '../assets/onam-couple-2026.jpg';
import onamSteps2026 from '../assets/onam-steps-2026.jpg';

const archiveItems = [
  {
    id: 'hackathon',
    src: hackathonGroup,
    title: 'THE HACKATHON',
    date: 'APRIL 2025',
    caption: 'Makeathon25 — Where our project turned into our story.',
    aspect: '16/9',
  },
  {
    id: 'hackathon-review',
    src: hackathonReviewSelfie,
    title: 'THE HARSH REVIEW',
    date: 'HACKATHON',
    caption: 'I remember you being there when I needed you.',
    aspect: '1/1',
  },
  {
    id: 'early',
    src: earlySelfie,
    title: 'EARLY DAYS',
    date: 'SUMMER 2025',
    caption: 'Talking day and night without ever noticing the clock.',
    aspect: '3/4',
  },
  {
    id: 'highways1',
    src: highwaysWide,
    title: 'HIGHWAYS 2025 — I',
    date: 'CULTURAL FEST',
    caption: 'Our first photograph together after Janapriyan took my phone.',
    aspect: '16/9',
  },
  {
    id: 'highways2',
    src: onamCelbPort,
    title: 'HIGHWAYS 2025 — II',
    date: 'CULTURAL FEST',
    caption: 'Close portrait amidst the festival atmosphere.',
    aspect: '3/4',
  },
  {
    id: 'onam-2026-wide',
    src: onamWide2026,
    title: 'ONAM 2026 — I',
    date: 'ONAM TOGETHER',
    caption: 'A day where I got to spend the whole day with you.',
    aspect: '16/9',
  },
  {
    id: 'onam-2026-couple',
    src: onamCouple2026,
    title: 'ONAM 2026 — II',
    date: 'ONAM TOGETHER',
    caption: 'Photoshoots, random conversations, and effortless smiles.',
    aspect: '1/1',
  },
  {
    id: 'onam-2026-steps',
    src: onamSteps2026,
    title: 'ONAM 2026 — III',
    date: 'ONAM TOGETHER',
    caption: 'Sitting on the steps — simply because you were there.',
    aspect: '1/1',
  },
  {
    id: 'playful',
    src: playfulSelfie,
    title: 'US BEING US',
    date: 'UNSCRIPTED',
    caption: 'Goofy faces and effortless laughter.',
    aspect: '3/4',
  },
  {
    id: 'random1',
    src: randomPics,
    title: 'ORDINARY DAYS — I',
    date: 'EVERYDAY MAGIC',
    caption: 'Every time I see you, it becomes a special moment.',
    aspect: '3/4',
  },
  {
    id: 'random2',
    src: randomPics2,
    title: 'ORDINARY DAYS — II',
    date: 'EVERYDAY MAGIC',
    caption: 'Small everyday confidences and quiet joy.',
    aspect: '3/4',
  },
  {
    id: 'forehead',
    src: heroPortrait,
    title: 'FOR THE ONE',
    date: 'FOREVER',
    caption: 'The forehead-touching portrait of quiet devotion.',
    aspect: '16/9',
  },
];

export default function MemoryArchive() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section
      id="chapter-13"
      style={{
        padding: '8rem 2rem 7rem 2rem',
        background: '#060606',
        color: '#f0f0f0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase' }}>
            13 — VISUAL CHRONICLES
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              fontWeight: 300,
              marginTop: '0.5rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            MEMORY ARCHIVE
          </h2>
          <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.25)', margin: '1.5rem auto 0 auto' }} />
        </motion.div>

        {/* Gallery Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.2rem' }}>
          {archiveItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: idx * 0.06 }}
              onClick={() => setSelectedPhoto(item)}
              style={{
                background: '#121212',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              whileHover={{ y: -6 }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: item.aspect, background: '#000', overflow: 'hidden' }}>
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(100%) contrast(1.05) brightness(0.92)',
                    transition: 'transform 0.8s ease, filter 0.8s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.04)';
                    e.currentTarget.style.filter = 'grayscale(100%) contrast(1.1) brightness(1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'grayscale(100%) contrast(1.05) brightness(0.92)';
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '0.8rem',
                    right: '0.8rem',
                    background: 'rgba(0,0,0,0.65)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.4rem',
                    borderRadius: '50%',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Maximize2 size={13} />
                </div>
              </div>

              <div style={{ padding: '1.4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <h4 className="font-serif" style={{ fontSize: '1.2rem', fontWeight: 400, letterSpacing: '0.08em', color: '#fff' }}>
                    {item.title}
                  </h4>
                  <span className="font-sans" style={{ fontSize: '0.62rem', color: '#777', letterSpacing: '0.15em' }}>
                    {item.date}
                  </span>
                </div>
                <p className="font-serif" style={{ fontSize: '0.88rem', fontStyle: 'italic', color: '#aaa' }}>
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(4, 4, 4, 0.95)',
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
                maxWidth: '920px',
                width: '100%',
                background: '#121212',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
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

              <div style={{ width: '100%', maxHeight: '72vh', overflow: 'hidden', background: '#000' }}>
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
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
                  {selectedPhoto.title}
                </h3>
                <p className="font-serif" style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#ccc' }}>
                  "{selectedPhoto.caption}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
