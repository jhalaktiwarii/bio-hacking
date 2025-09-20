'use client'
import { useState, useEffect, useRef } from 'react';
import { Play, Pause, SpeakerHigh, SpeakerX, MusicNote } from '@phosphor-icons/react';
import LoadingScreen from './LoadingScreen';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showControls, setShowControls] = useState(false);
  const [waitingForInteraction, setWaitingForInteraction] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const scrollHandlerRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // Load saved preferences
    const savedVolume = parseFloat(localStorage.getItem('musicVolume') || '0.3');
    const savedMuted = localStorage.getItem('musicMuted') === 'true';

    if (audioRef.current) {
      audioRef.current.volume = savedMuted ? 0 : savedVolume;
      setIsMuted(savedMuted);
      setVolume(savedVolume);
      
      // Only show loading screen on hard reload/initial load, not on navigation
      const hasShownLoadingScreen = sessionStorage.getItem('hasShownLoadingScreen');
      if (!hasShownLoadingScreen) {
        setShowLoadingScreen(true);
        setIsPlaying(false);
      } else {
        // Skip loading screen, attempt to start music directly
        attemptAutoPlay();
      }
    }

    // Cleanup function to remove event listeners
    return () => {
      if (scrollHandlerRef.current) {
        window.removeEventListener('scroll', scrollHandlerRef.current);
      }
    };
  }, []);

  // Debug effect to monitor state changes
  useEffect(() => {
    console.log('State changed:', {
      isPlaying,
      hasUserInteracted,
      waitingForInteraction
    });
  }, [isPlaying, hasUserInteracted, waitingForInteraction]);

  const attemptAutoPlay = async () => {
    if (!audioRef.current) return;

    // First check if user has already interacted in this session
    const hasShownLoadingScreen = sessionStorage.getItem('hasShownLoadingScreen');
    
    if (hasShownLoadingScreen) {
      // User has already interacted, try to play directly
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setWaitingForInteraction(false);
        localStorage.setItem('musicPlaying', 'true');
        return;
      } catch (error) {
        console.log('Direct play failed, setting up interaction listener:', error);
        setupUserInteractionListener();
      }
    } else {
      // First time visit, set up interaction listener
      setupUserInteractionListener();
    }
  };

  const setupUserInteractionListener = () => {
    console.log('Setting up user interaction listeners');
    
    // Simple user interaction handler that starts music immediately
    const startMusicOnInteraction = async (event: Event) => {
      console.log('User interaction detected:', event.type);
      
      // Try to start music immediately
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          setWaitingForInteraction(false);
          setHasUserInteracted(true);
          localStorage.setItem('musicPlaying', 'true');
          
          // Mark that user has interacted in this session
          sessionStorage.setItem('hasShownLoadingScreen', 'true');
          
          // Remove all listeners after successful start
          document.removeEventListener('click', startMusicOnInteraction);
          document.removeEventListener('keydown', startMusicOnInteraction);
          document.removeEventListener('touchstart', startMusicOnInteraction);
          document.removeEventListener('scroll', startMusicOnInteraction);
          
          console.log('Music started successfully via user interaction');
        } catch (error) {
          console.log('Music start failed on interaction:', error);
        }
      }
    };

    // Add interaction listeners
    setWaitingForInteraction(true);
    document.addEventListener('click', startMusicOnInteraction, { once: true });
    document.addEventListener('keydown', startMusicOnInteraction, { once: true });
    document.addEventListener('touchstart', startMusicOnInteraction, { once: true });
    document.addEventListener('scroll', startMusicOnInteraction, { once: true });
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        localStorage.setItem('musicPlaying', 'false');
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          localStorage.setItem('musicPlaying', 'true');
        }).catch(() => {
          // Auto-play blocked
          setIsPlaying(false);
        });
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
        localStorage.setItem('musicMuted', 'false');
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
        localStorage.setItem('musicMuted', 'true');
      }
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
      localStorage.setItem('musicVolume', newVolume.toString());
      localStorage.setItem('musicMuted', (newVolume === 0).toString());
    }
  };

  const handleLoadingStart = () => {
    setShowLoadingScreen(false);
    setHasUserInteracted(true);
    setWaitingForInteraction(false);
    
    // Mark that loading screen has been shown in this session
    sessionStorage.setItem('hasShownLoadingScreen', 'true');
    
    // Try to start music immediately after user interaction
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        localStorage.setItem('musicPlaying', 'true');
      }).catch((error) => {
        console.log('Music start failed after loading:', error);
        // Fallback to scroll-based activation
        setWaitingForInteraction(true);
      });
    }
  };

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen 
        onStart={handleLoadingStart} 
        isVisible={showLoadingScreen} 
      />

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="/BioHacking.mp3"
        loop
        preload="auto"
        autoPlay
        muted={false}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          console.log('Audio failed to load');
          setIsPlaying(false);
        }}
        onCanPlayThrough={() => {
          // Try to play when audio is ready
          if (audioRef.current && !isPlaying) {
            audioRef.current.play().then(() => {
              setIsPlaying(true);
              setWaitingForInteraction(false);
              localStorage.setItem('musicPlaying', 'true');
            }).catch(() => {
              // Auto-play blocked, will be handled by other strategies
            });
          }
        }}
      />

      {/* Music Player Container */}
      <div className="fixed top-20 right-4 z-40 lg:top-16 lg:right-16 lg:z-50">
        {/* Main Toggle Button */}
        <button
          onClick={togglePlay}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          className="group relative"
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        >
          <div className={`glass-card p-3 rounded-full hover:scale-110 transition-all duration-300 group-hover:shadow-lg ${
            waitingForInteraction ? 'animate-pulse border-2 border-primary/50' : ''
          }`}>
            {isPlaying ? (
              <Pause size={20} weight="light" className="text-primary" />
            ) : (
              <Play size={20} weight="light" className="text-primary" />
            )}
          </div>
          
          {/* Music Note Animation */}
          {isPlaying && (
            <div className="absolute -top-1 -right-1">
              <MusicNote 
                size={12} 
                weight="fill" 
                className="text-secondary animate-pulse" 
              />
            </div>
          )}

          {/* Waiting for interaction indicator */}
          {waitingForInteraction && (
            <div className="absolute -top-1 -right-1">
              <div className="w-3 h-3 bg-secondary rounded-full animate-ping"></div>
            </div>
          )}
        </button>

        {/* Extended Controls */}
        <div 
          className={`absolute top-0 right-16 transition-all duration-300 ${
            showControls ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          <div className="glass-card p-4 rounded-2xl min-w-[200px]">
            <div className="flex items-center gap-3">
              {/* Mute/Unmute Button */}
              <button
                onClick={toggleMute}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                aria-label={isMuted ? 'Unmute music' : 'Mute music'}
              >
                {isMuted ? (
                  <SpeakerX size={16} weight="light" className="text-muted-foreground" />
                ) : (
                  <SpeakerHigh size={16} weight="light" className="text-primary" />
                )}
              </button>

              {/* Volume Slider */}
              <div className="flex-1">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer slider"
                  aria-label="Volume control"
                />
              </div>

              {/* Volume Display */}
              <span className="text-xs text-muted-foreground min-w-[2rem] text-center">
                {Math.round((isMuted ? 0 : volume) * 100)}%
              </span>
            </div>

            {/* Status Text */}
            <div className="mt-2 text-center">
              <p className="text-xs text-muted-foreground">
                {waitingForInteraction 
                  ? 'Click or scroll to start music' 
                  : isPlaying 
                    ? 'Music Playing' 
                    : 'Music Paused'
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility Notice */}
      <div className="sr-only">
        <p>
          Background music is {isPlaying ? 'playing' : 'paused'}. 
          {waitingForInteraction 
            ? 'Click anywhere on the page or scroll to start background music automatically.' 
            : 'Use the music controls in the top-right corner to play, pause, or adjust volume.'
          }
        </p>
      </div>
    </>
  );
};

export default MusicPlayer;
