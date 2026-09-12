import React from 'react';
import { motion } from 'framer-motion';

const chapters = [
  {
    number: '01',
    title: 'THE FIRST ENCOUNTER',
    subtitle: 'Where stillness met destiny',
    quote: '"Out of millions of ordinary moments in this world, the universe chose that exact second to align our paths."',
    description: 'A quiet glance that turned into endless hours of conversation. We didn’t know it then, but something permanent had begun.'
  },
  {
    number: '02',
    title: 'THE REASON',
    subtitle: 'In quiet grace & endless warmth',
    quote: '"You showed me that love isn’t loud or demanding—it is gentle, steady, and infinitely deep."',
    description: 'Through shared laughter, midnight secrets, and unscripted adventures, every ordinary day transformed into something extraordinary.'
  },
  {
    number: '03',
    title: 'THE PROMISE',
    subtitle: 'Choosing you, yesterday, today & always',
    quote: '"If I had to live a thousand lifetimes, I would search for you in every single one."',
    description: 'Happy Birthday to the person who makes every corner of my world warmer, brighter, and infinitely more beautiful.'
  }
];

export default function StorySection() {
  return (
    <section
      id="our-story"
      style={{
        position: 'relative',
        width: '100%',
        padding: '8rem 2rem 6rem 2rem',
        background: '#080808',
        color: '#f0f0f0',
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      {/* Decorative vertical guide line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1px',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 90%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '7rem' }}
        >
          <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>
            CHAPTERS OF US
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
              fontWeight: 300,
              marginTop: '0.8rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#ffffff',
            }}
          >
            OUR STORY
          </h2>
          <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.3)', margin: '1.8rem auto 0 auto' }} />
        </motion.div>

        {/* Chapters Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {chapters.map((chapter, idx) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center',
                padding: '3rem 2.5rem',
                background: 'rgba(18, 18, 18, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
              }}
            >
              {/* Chapter Number & Title */}
              <div>
                <span
                  className="font-serif"
                  style={{
                    fontSize: '3.5rem',
                    fontWeight: 300,
                    color: 'rgba(255, 255, 255, 0.18)',
                    lineHeight: 1,
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  {chapter.number}
                </span>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    color: '#ffffff',
                    marginBottom: '0.4rem',
                  }}
                >
                  {chapter.title}
                </h3>
                <p className="font-sans" style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: '#888888', textTransform: 'uppercase' }}>
                  {chapter.subtitle}
                </p>
              </div>

              {/* Quote & Description */}
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1.8rem' }}>
                <blockquote
                  className="font-serif"
                  style={{
                    fontSize: '1.25rem',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                    color: '#d4d4d4',
                    marginBottom: '1.2rem',
                    fontWeight: 300,
                  }}
                >
                  {chapter.quote}
                </blockquote>
                <p
                  className="font-sans"
                  style={{
                    fontSize: '0.85rem',
                    lineHeight: 1.8,
                    color: '#999999',
                    fontWeight: 300,
                    letterSpacing: '0.02em',
                  }}
                >
                  {chapter.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
