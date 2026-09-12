import React from 'react';
import { motion } from 'framer-motion';

// Image assets
import groupHackathon from '../assets/hackathon-group.png';
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
import handHoldingSquare from '../assets/hand-holding-square.jpg';
import untilDawnMoon from '../assets/until-dawn-moon.png';
import ordinaryDay3 from '../assets/ordinary-day-3.png';
import ordinaryDay4 from '../assets/ordinary-day-4.png';
import ordinaryDay5 from '../assets/ordinary-day-5.png';
import ordinaryDay6 from '../assets/ordinary-day-6.jpg';
import undoHands from '../assets/undo-hands.png';

export default function StoryTimeline() {
  return (
    <div style={{ background: '#060606', color: '#f0f0f0', position: 'relative' }}>
      
      {/* CHAPTER 01 — BEFORE I KNEW */}
      <section
        id="chapter-01"
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '6rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '750px', textAlign: 'center' }}
        >
          <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase' }}>
            01 — BEFORE I KNEW
          </span>
          <p className="font-sans" style={{ fontSize: '0.75rem', letterSpacing: '0.25em', color: '#aaaaaa', marginTop: '0.4rem', textTransform: 'uppercase' }}>
            15 APRIL 2025
          </p>

          <blockquote
            className="font-serif"
            style={{
              fontSize: 'clamp(1.5rem, 3.2vw, 2.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.4,
              color: '#e5e5e5',
              marginTop: '2.5rem',
              marginBottom: '2rem',
            }}
          >
            "There was a day when I cried about a crush. Looking back, it was one of the dumbest things I ever did, because I had no idea that you would eventually become such an important part of my life."
          </blockquote>
        </motion.div>
      </section>

      {/* CHAPTER 02 — THE FIRST TIME WE MET */}
      <section
        style={{
          padding: '7rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          background: '#090909',
        }}
      >
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.2 }}
            style={{ marginBottom: '3.5rem', textAlign: 'center' }}
          >
            <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase' }}>
              02 — THE FIRST TIME WE MET
            </span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              MAKEATHON'25
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: '#121212',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '1.2rem',
              marginBottom: '2.5rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            }}
          >
            <img
              src={groupHackathon}
              alt="First time we met at Library Hackathon"
              style={{
                width: '100%',
                maxHeight: '520px',
                objectFit: 'cover',
                filter: 'grayscale(100%) contrast(1.06)',
                display: 'block',
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="font-serif"
            style={{
              fontSize: '1.35rem',
              lineHeight: 1.7,
              color: '#cccccc',
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto',
              fontWeight: 300,
            }}
          >
            We initially talked about our project. Gradually the conversations became personal.
          </motion.p>
        </div>
      </section>

      {/* ANOTHER DUMB THING — THE HARSH REVIEW */}
      <section
        style={{
          padding: '8rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          background: '#070707',
        }}
      >
        <div style={{ maxWidth: '1050px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            style={{ background: '#121212', border: '1px solid rgba(255,255,255,0.08)', padding: '0.8rem' }}
          >
            <img
              src={hackathonReviewSelfie}
              alt="Together during the hackathon"
              style={{ width: '100%', height: '460px', objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(100%) contrast(1.05)' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
          >
            <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase' }}>
              ANOTHER DUMB THING
            </span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)', fontWeight: 300, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.2 }}>
              THE HARSH REVIEW
            </h2>

            <div className="font-serif" style={{ fontSize: '1.18rem', lineHeight: 1.8, color: '#d0d0d0', marginTop: '1.6rem', fontWeight: 300 }}>
              <p style={{ marginBottom: '1.2rem' }}>
                I still remember another one of the dumbest things I cried about during the hackathon.
              </p>
              <p style={{ marginBottom: '1.2rem', color: '#ffffff', fontStyle: 'italic' }}>
                The review was harsh. Really harsh.
              </p>
              <p style={{ marginBottom: '1.2rem' }}>
                I had put so much into the project, and when the review came, everything suddenly felt like it was falling apart. I couldn't hold it together, and somehow, there I was, crying in the middle of a hackathon.
              </p>
              <p style={{ marginBottom: '1.2rem', color: '#ffffff' }}>
                But you were there.
              </p>
              <p style={{ marginBottom: '1.2rem' }}>
                You didn't make me feel stupid for crying. You stayed with me. You compromised with me, comforted me, and somehow made that horrible moment feel a little less horrible.
              </p>
              <p style={{ marginBottom: '1.2rem', color: '#aaaaaa' }}>
                Looking back now, it feels almost silly that I cried over it.
              </p>
              <p style={{ fontStyle: 'italic', color: '#ffffff' }}>
                "But maybe that's what makes the memory special. I remember you being there when I needed you."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CHAPTER 03 — WHEN PROJECTS BECAME CONVERSATIONS */}
      <section
        style={{
          padding: '7rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
          >
            <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase' }}>
              03 — LATE NIGHTS & EARLY DAYS
            </span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 3.2vw, 3rem)', fontWeight: 300, marginTop: '0.6rem', lineHeight: 1.2, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              WHEN PROJECTS BECAME CONVERSATIONS
            </h2>
            <p className="font-serif" style={{ fontSize: '1.25rem', lineHeight: 1.7, color: '#b0b0b0', marginTop: '1.5rem', fontWeight: 300 }}>
              We started talking more and more. Eventually, we were talking day and night. The lines between code deadlines and secret confidences dissolved entirely.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            style={{
              background: '#121212',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '1rem',
            }}
          >
            <img
              src={earlySelfie}
              alt="Early selfie together"
              style={{
                width: '100%',
                maxHeight: '480px',
                objectFit: 'cover',
                objectPosition: 'center 25%',
                filter: 'grayscale(100%) contrast(1.05)',
                display: 'block',
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* CHAPTER 04 — HIGHWAYS 2025 */}
      <section
        style={{
          padding: '8rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          background: '#090909',
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
              04 — CULTURAL FESTIVAL MEMORY
            </span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 300, marginTop: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              HIGHWAYS 2025
            </h2>
            <p className="font-sans" style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: '#666', marginTop: '0.5rem', textTransform: 'uppercase' }}>
              *College cultural event
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginBottom: '3.5rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3 }}
              style={{ background: '#121212', border: '1px solid rgba(255,255,255,0.08)', padding: '0.8rem' }}
            >
              <img src={highwaysWide} alt="Highways 2025 First Couple Photo" style={{ width: '100%', height: '360px', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.05)' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: 0.2 }}
              style={{ background: '#121212', border: '1px solid rgba(255,255,255,0.08)', padding: '0.8rem' }}
            >
              <img src={onamCelbPort} alt="Highways 2025 Close Photo" style={{ width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'center 20%', filter: 'grayscale(100%) contrast(1.05)' }} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}
          >
            <p className="font-serif" style={{ fontSize: '1.35rem', lineHeight: 1.7, color: '#d0d0d0', fontWeight: 300 }}>
              I was terrified to ask for a photograph. After thinking about it countless times, Janapriyan took my phone and called you, forcing me to finally ask.
            </p>
            <p className="font-serif" style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#999', marginTop: '1.2rem' }}>
              This became our very first photograph together.
            </p>
          </motion.div>
        </div>
      </section>


      {/* CHAPTER 05 — THE HAND */}
      <section
        style={{
          padding: '8rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          background: '#070707',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase' }}>
              05 — A MOMENT OF STILLNESS
            </span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 300, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              THE HAND
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3 }}
              style={{ background: '#121212', border: '1px solid rgba(255,255,255,0.08)', padding: '0.8rem' }}
            >
              <img src={handHoldingSquare} alt="Holding hands" style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.05)' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3 }}
              className="font-serif"
            >
              <h3 style={{ fontSize: '1.6rem', fontWeight: 300, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
                The Little Things I Never Want to Forget
              </h3>
              
              <div style={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#cccccc', fontWeight: 300 }}>
                <p style={{ marginBottom: '1.2rem', color: '#e0e0e0' }}>
                  One day you grabbed my hand because you were scared about an exam.
                </p>
                <p style={{ marginBottom: '1.2rem' }}>
                  I remember being completely lost in the moment, daydreaming while you held my hand.
                </p>
                <p style={{ marginBottom: '1.2rem', fontStyle: 'italic', color: '#aaaaaa' }}>
                  Maybe holding your hand doesn't look like much to anyone else. But to me, it became one of those little things that meant everything.
                </p>
                <p style={{ marginBottom: '1.2rem' }}>
                  I love how something as simple as holding your hand can make an ordinary moment feel different. Whether we're walking somewhere, sitting together, or just standing around with nothing particularly interesting happening, having your hand in mine somehow makes the moment feel complete.
                </p>
                <p style={{ color: '#ffffff', marginTop: '2rem' }}>
                  And if I had to choose one thing to keep from all these memories, I'd probably choose this.<br />
                  <span style={{ fontStyle: 'italic', marginTop: '0.5rem', display: 'block' }}>Your hand in mine.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CHAPTER 06 — 25 JUNE 2025 (MAJOR PROPOSAL TRANSITION) */}
      <section
        style={{
          minHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8rem 2rem',
          background: 'linear-gradient(180deg, #060606 0%, #0d0d0d 50%, #060606 100%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: '850px',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '5rem 3rem',
            background: 'rgba(18, 18, 18, 0.6)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.72rem', color: '#888', textTransform: 'uppercase' }}>
            06 — THE PROPOSAL
          </span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, marginTop: '0.8rem', letterSpacing: '0.12em' }}>
            25 JUNE 2025
          </h2>

          <p className="font-serif" style={{ fontSize: '1.4rem', color: '#aaaaaa', marginTop: '2rem', fontWeight: 300 }}>
            I wanted to propose but hesitated...
          </p>

          <div style={{ width: '50px', height: '1px', background: 'rgba(255,255,255,0.3)', margin: '2rem auto' }} />

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.4 }}
            className="font-serif"
            style={{
              fontSize: 'clamp(1.8rem, 3.8vw, 3.2rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#ffffff',
              letterSpacing: '0.06em',
            }}
          >
            "And you did it first."
          </motion.h3>
        </motion.div>
      </section>

      {/* CHAPTER 07 — UNTIL DAWN */}
      <section
        style={{
          padding: '8rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          background: '#070707',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase' }}>
              07 — UNTIL DAWN
            </span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 300, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              6 AM
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3 }}
              style={{ background: '#121212', border: '1px solid rgba(255,255,255,0.08)', padding: '0.8rem' }}
            >
              <img src={untilDawnMoon} alt="Couple under the moon" style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.05)' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3 }}
              className="font-serif"
            >
              <h3 style={{ fontSize: '1.6rem', fontWeight: 300, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
                The Conversations That Didn't Know When To End
              </h3>
              
              <div style={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#cccccc', fontWeight: 300 }}>
                <p style={{ marginBottom: '1.2rem' }}>
                  Somehow, a conversation with you could start at night and suddenly it was morning.
                </p>
                <p style={{ marginBottom: '1.2rem', color: '#e0e0e0' }}>
                  There were nights when we had absolutely no reason to stay awake, yet somehow we kept talking.
                </p>
                <p style={{ marginBottom: '1.2rem' }}>
                  One topic became another.<br />
                  One joke became ten.<br />
                  A random thought turned into an entire conversation.
                </p>
                <p style={{ marginBottom: '1.2rem', fontStyle: 'italic', color: '#aaaaaa' }}>
                  And before we realized it, the night had disappeared.
                </p>
                <p style={{ marginBottom: '1.2rem' }}>
                  I loved those conversations because they never felt forced. We could talk about serious things, completely stupid things, things that made no sense at all, and somehow every conversation felt worth staying awake for.
                </p>
                <p style={{ color: '#ffffff', marginTop: '2rem' }}>
                  Some nights ended with a goodnight. Some ended with sleep taking over mid-conversation. But I don't think I'll ever forget the nights that somehow lasted until dawn.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CHAPTER 08 — US BEING US */}
      <section
        style={{
          padding: '7rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          background: '#090909',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            style={{ background: '#121212', border: '1px solid rgba(255,255,255,0.08)', padding: '0.8rem' }}
          >
            <img src={playfulSelfie} alt="Us Being Us Goofy Selfie" style={{ width: '100%', height: '440px', objectFit: 'cover', objectPosition: 'center 20%', filter: 'grayscale(100%) contrast(1.05)' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
          >
            <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase' }}>
              08 — PLAYFUL & AUTHENTIC
            </span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              US BEING US
            </h2>

            <p className="font-serif" style={{ fontSize: '1.3rem', lineHeight: 1.7, color: '#cccccc', marginTop: '1.5rem', fontWeight: 300 }}>
              Beyond all the quiet romantic moments are the unscripted, goofy, silly faces and spontaneous laughter that make us who we are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CHAPTER 09 — OUR FIRST FIGHT */}
      <section
        style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          style={{ maxWidth: '800px', textAlign: 'center' }}
        >
          <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase' }}>
            09 — LESSONS IN VULNERABILITY
          </span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 300, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            OUR FIRST FIGHT
          </h2>

          <div className="font-serif" style={{ fontSize: '1.35rem', lineHeight: 1.8, color: '#d0d0d0', marginTop: '2.5rem', fontWeight: 300 }}>
            <p>You felt I wasn't there for you. you cried. I cried too.</p>
            <p style={{ marginTop: '1rem', color: '#999' }}>You stopped talking to me for a moment. But when you realized I was crying, you immediately came back and held me.</p>
          </div>

          <p className="font-serif" style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#aaaaaa', marginTop: '3rem' }}>
            "What a silly couple we were."
          </p>
        </motion.div>
      </section>

      {/* NEW SECTION — ONAM TOGETHER (ONAM 2026 — A DAY I WON'T FORGET) */}
      <section
        style={{
          padding: '8rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          background: '#070707',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{ textAlign: 'center', marginBottom: '4.5rem' }}
          >
            <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase' }}>
              ONAM TOGETHER
            </span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 300, marginTop: '0.5rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              ONAM 2026 — A DAY I WON’T FORGET
            </h2>
          </motion.div>

          {/* Photo Grid for Onam 2026 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3 }}
              style={{ background: '#121212', border: '1px solid rgba(255,255,255,0.08)', padding: '0.8rem' }}
            >
              <img src={onamWide2026} alt="Onam 2026 Smiling Together" style={{ width: '100%', height: '360px', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.05)' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: 0.15 }}
              style={{ background: '#121212', border: '1px solid rgba(255,255,255,0.08)', padding: '0.8rem' }}
            >
              <img src={onamCouple2026} alt="Onam 2026 Standing Together" style={{ width: '100%', height: '360px', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.05)' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: 0.3 }}
              style={{ background: '#121212', border: '1px solid rgba(255,255,255,0.08)', padding: '0.8rem' }}
            >
              <img src={onamSteps2026} alt="Onam 2026 Sitting on Steps" style={{ width: '100%', height: '360px', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.05)' }} />
            </motion.div>
          </div>

          {/* Onam Story Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}
            className="font-serif"
          >
            <p style={{ fontSize: '1.35rem', lineHeight: 1.8, color: '#e0e0e0', fontWeight: 300, marginBottom: '1.5rem' }}>
              This year’s Onam celebration became one of the most memorable days for me.
            </p>
            <p style={{ fontSize: '1.3rem', lineHeight: 1.8, color: '#cccccc', fontWeight: 300, marginBottom: '1.5rem' }}>
              We spent almost the whole day together, taking photos, going around, having our stupid little conversations, and laughing at things that probably wouldn't make sense to anyone else.
            </p>
            <p style={{ fontSize: '1.3rem', lineHeight: 1.8, color: '#cccccc', fontWeight: 300, marginBottom: '1.5rem' }}>
              The photoshoots, the random conversations, the little jokes, and even talking to your brother went surprisingly well. I genuinely didn't expect that part to go so smoothly, but I'm glad it did.
            </p>
            <p style={{ fontSize: '1.3rem', lineHeight: 1.8, color: '#cccccc', fontWeight: 300, marginBottom: '2.5rem' }}>
              I know there will be many more Onams in our lives, but I'll always remember this one differently. Because this was the one where I got to spend the whole day with you.
            </p>

            <blockquote
              style={{
                fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)',
                fontStyle: 'italic',
                color: '#ffffff',
                lineHeight: 1.5,
                fontWeight: 300,
                borderTop: '1px solid rgba(255,255,255,0.1)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                padding: '2rem 1rem',
              }}
            >
              "Some days become memories because something extraordinary happened. This one became a memory simply because you were there."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* CHAPTER 10 — THE ORDINARY DAYS WITH NEW PHOTOS */}
      <section
        style={{
          padding: '7rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          background: '#090909',
        }}
      >
        <div style={{ maxWidth: '1050px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            style={{ marginBottom: '4rem' }}
          >
            <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase' }}>
              10 — EVERYDAY MAGIC
            </span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 300, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              THE ORDINARY DAYS
            </h2>

            <blockquote className="font-serif" style={{ fontSize: '1.5rem', fontStyle: 'italic', color: '#ffffff', marginTop: '1.5rem', fontWeight: 300, lineHeight: 1.5 }}>
              "Every single time I see her, it becomes a special moment."
            </blockquote>
          </motion.div>

          {/* New Photos Grid for Ordinary Days */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              style={{ background: '#121212', border: '1px solid rgba(255,255,255,0.08)', padding: '0.8rem' }}
            >
              <img src={randomPics} alt="Ordinary Day Memory 1" style={{ width: '100%', height: '360px', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.05)' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
              style={{ background: '#121212', border: '1px solid rgba(255,255,255,0.08)', padding: '0.8rem' }}
            >
              <img src={randomPics2} alt="Ordinary Day Memory 2" style={{ width: '100%', height: '360px', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.05)' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              style={{ background: '#121212', border: '1px solid rgba(255,255,255,0.08)', padding: '0.8rem' }}
            >
              <img src={ordinaryDay3} alt="Ordinary Day Memory 3" style={{ width: '100%', height: '360px', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.05)' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              style={{ background: '#121212', border: '1px solid rgba(255,255,255,0.08)', padding: '0.8rem' }}
            >
              <img src={ordinaryDay4} alt="Ordinary Day Memory 4" style={{ width: '100%', height: '360px', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.05)' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              style={{ background: '#121212', border: '1px solid rgba(255,255,255,0.08)', padding: '0.8rem' }}
            >
              <img src={ordinaryDay5} alt="Ordinary Day Memory 5" style={{ width: '100%', height: '360px', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.05)' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              style={{ background: '#121212', border: '1px solid rgba(255,255,255,0.08)', padding: '0.8rem' }}
            >
              <img src={ordinaryDay6} alt="Ordinary Day Memory 6" style={{ width: '100%', height: '360px', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.05)' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CHAPTER 11 — THE THINGS I LOVE ABOUT YOU */}
      <section
        style={{
          padding: '8rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div style={{ maxWidth: '950px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{ textAlign: 'center', marginBottom: '4.5rem' }}
          >
            <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase' }}>
              11 — PERSONAL OBSERVATIONS
            </span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 300, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              THE THINGS I LOVE ABOUT YOU
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Childish Behavior', text: 'The adorable, unfiltered innocence in the way you react to small things.' },
              { title: 'The Way You Care', text: 'How deeply you feel for those you love, without holding anything back.' },
              { title: 'Your Guidance', text: 'The way you tell me what is right and wrong with honest clarity.' },
              { title: 'Looking After Me', text: 'How you notice when I am tired or overwhelmed before I even say a word.' },
              { title: 'Your Smile', text: 'The way your entire face lights up and instantly makes everything alright.' },
              { title: 'Lunch Dates', text: 'The cute detail that you so often insist on paying for our lunch!' }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: idx * 0.1 }}
                style={{
                  background: '#121212',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '2rem 1.6rem',
                }}
              >
                <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 400, color: '#ffffff', marginBottom: '0.6rem', letterSpacing: '0.05em' }}>
                  {item.title}
                </h3>
                <p className="font-sans" style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#999999', fontWeight: 300 }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 12 — EVERYTHING WE'VE BEEN THROUGH */}
      <section
        style={{
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8rem 2rem',
          background: '#090909',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '850px', textAlign: 'center', padding: '4rem 2rem' }}
        >
          <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase' }}>
            12 — RESILIENCE & RECONCILIATION
          </span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 300, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            EVERYTHING WE'VE BEEN THROUGH
          </h2>

          <p className="font-serif" style={{ fontSize: '1.3rem', lineHeight: 1.8, color: '#a0a0a0', marginTop: '2rem', fontWeight: 300 }}>
            Through problems, misunderstandings, arguments, and quiet reconciliations...
          </p>

          <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.25)', margin: '2.5rem auto' }} />

          <blockquote
            className="font-serif"
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.4,
            }}
          >
            "But my heart always needs yours.<br />
            And somehow, yours still needs mine."
          </blockquote>
        </motion.div>
      </section>

      {/* CHAPTER 13 — THE THINGS I WISH I COULD UNDO */}
      <section
        style={{
          padding: '8rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            className="font-serif"
          >
            <span className="font-sans tracking-wide-editorial" style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase' }}>
              13 — REGRETS & PROMISES
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, color: '#ffffff', marginTop: '0.5rem', marginBottom: '2rem', letterSpacing: '0.05em', lineHeight: 1.2 }}>
              The Things I Wish I Could Undo
            </h2>
            
            <div style={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#cccccc', fontWeight: 300 }}>
              <p style={{ marginBottom: '1.2rem' }}>
                I know I haven't always been the person you deserved me to be. There were moments when my words, my actions, or the way I handled things hurt you. And I know that saying "I'm sorry" cannot simply erase those moments.
              </p>
              <p style={{ marginBottom: '1.2rem', color: '#e0e0e0' }}>
                I have hurt you a lot, and honestly, that is something I carry with me. You never deserved to be hurt by someone who was supposed to make you feel safe, understood, and loved.
              </p>
              <p style={{ marginBottom: '1.2rem' }}>
                I'm genuinely sorry for every time I made you cry, every time I disappointed you, and every moment where I made you question how much you meant to me. I promise I won't ever intentionally put you through that again.
              </p>
              <p style={{ marginBottom: '1.2rem', fontStyle: 'italic', color: '#aaaaaa' }}>
                I can't change what has already happened. But I can change what happens next.
              </p>
              <p style={{ color: '#ffffff', marginTop: '2rem', fontSize: '1.35rem' }}>
                And if there is one thing I want you to know, it is this: I'm sorry. Truly. And I choose to do better, not just say better.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            style={{ background: '#121212', border: '1px solid rgba(255,255,255,0.08)', padding: '0.8rem' }}
          >
            <img src={undoHands} alt="Reaching hands shadow" style={{ width: '100%', height: 'auto', maxHeight: '550px', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.05)' }} />
          </motion.div>

        </div>
      </section>

    </div>
  );
}
