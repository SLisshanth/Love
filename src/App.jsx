import React, { useState } from 'react';
import FilmGrain from './components/FilmGrain';
import AtmosphericParticles from './components/AtmosphericParticles';
import AudioPlayer from './components/AudioPlayer';
import ExperienceIntro from './components/ExperienceIntro';
import Hero from './components/Hero';
import StoryTimeline from './components/StoryTimeline';
import MemoryArchive from './components/MemoryArchive';
import CinematicVideo from './components/CinematicVideo';
import LetterSection from './components/LetterSection';
import BirthdayFinale from './components/BirthdayFinale';
import EndingSection from './components/EndingSection';

export default function App() {
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#060606', overflowX: 'hidden' }}>
      {/* Background Visual Effects & Audio Controls */}
      <FilmGrain />
      <AtmosphericParticles />
      <AudioPlayer />

      {!onboardingComplete && <ExperienceIntro onComplete={() => setOnboardingComplete(true)} />}

      {/* 16-Chapter Interactive Story Experience */}
      {onboardingComplete && (
        <main style={{ position: 'relative', width: '100%' }}>
        <Hero />
        <StoryTimeline />
        <MemoryArchive />
        <CinematicVideo />
        <LetterSection />
        <BirthdayFinale />
        <EndingSection />
        </main>
      )}
    </div>
  );
}
