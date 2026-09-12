import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        width: '100%',
        padding: '6rem 2rem 4rem 2rem',
        background: '#040404',
        color: '#888888',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        textAlign: 'center',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-serif"
          style={{
            fontSize: '1.4rem',
            fontStyle: 'italic',
            color: '#d0d0d0',
            lineHeight: 1.6,
            marginBottom: '2rem',
            fontWeight: 300,
          }}
        >
          "To love and be loved is to feel the sun from both sides."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <p className="font-sans tracking-wide-editorial" style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: '#666', marginBottom: '0.6rem' }}>
            MADE WITH DEVOTION & ETERNAL LOVE
          </p>
          <p className="font-sans" style={{ fontSize: '0.62rem', color: '#444', letterSpacing: '0.2em' }}>
            HAPPY BIRTHDAY • ALWAYS & FOREVER
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
