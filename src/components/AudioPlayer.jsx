import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Attempt autoplay or listen for first interaction
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch(() => {
          // Autoplay blocked by browser policy, wait for button click
        });
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('scroll', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const toggleAudio = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
      }).catch((err) => {
        console.warn("Playback failed:", err);
      });
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '2.5rem',
        right: '2.5rem',
        zIndex: 90,
      }}
    >
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/bgm.mp3`}
        loop
        preload="auto"
      />

      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Mute background song' : 'Play Pesamale Karaoke'}
        style={{
          background: 'rgba(14, 14, 14, 0.65)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          borderRadius: '40px',
          padding: '0.65rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
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
        {isPlaying ? <Volume2 size={13} strokeWidth={1.5} /> : <VolumeX size={13} strokeWidth={1.5} />}
        <span>{isPlaying ? 'PESAMALE ♪' : 'PLAY MUSIC'}</span>

        {/* Animated Sound Bars */}
        {isPlaying && (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '10px', marginLeft: '2px' }}>
            <span style={{ width: '2px', height: '100%', background: '#fff', animation: 'wave 1.2s infinite ease-in-out' }}></span>
            <span style={{ width: '2px', height: '60%', background: '#fff', animation: 'wave 0.9s infinite ease-in-out 0.2s' }}></span>
            <span style={{ width: '2px', height: '80%', background: '#fff', animation: 'wave 1.4s infinite ease-in-out 0.4s' }}></span>
          </div>
        )}

        <style>{`
          @keyframes wave {
            0%, 100% { height: 20%; }
            50% { height: 100%; }
          }
        `}</style>
      </button>
    </div>
  );
}
