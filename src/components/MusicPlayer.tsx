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
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const scrollThreshold = 50; // Minimum scroll distance to trigger music
  const scrollHandlerRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // Load saved preferences
    const savedVolume = parseFloat(localStorage.getItem('musicVolume') || '0.3');
    const savedMuted = localStorage.getItem('musicMuted') === 'true';

    if (audioRef.current) {
      audioRef.current.volume = savedMuted ? 0 : savedVolume;
      setIsMuted(savedMuted);
      setVolume(savedVolume);
      
      // Always show loading screen on reload to ensure user interaction
      setShowLoadingScreen(true);
      setIsPlaying(false);
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
      hasScrolled,
      waitingForInteraction
    });
  }, [isPlaying, hasUserInteracted, hasScrolled, waitingForInteraction]);

  const attemptAutoPlay = async () => {
    if (!audioRef.current) return;

    // Always set up scroll listener first for better UX
    setupUserInteractionListener();

    // Strategy 1: Try to play immediately
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setWaitingForInteraction(false);
      localStorage.setItem('musicPlaying', 'true');
      return;
    } catch (error) {
      console.log('Strategy 1 failed:', error);
    }

    // Strategy 2: Try with muted first, then unmute
    try {
      audioRef.current.muted = true;
      await audioRef.current.play();
      audioRef.current.muted = false;
      setIsPlaying(true);
      setWaitingForInteraction(false);
      localStorage.setItem('musicPlaying', 'true');
      return;
    } catch (error) {
      console.log('Strategy 2 failed:', error);
    }

    // Strategy 3: Try after a small delay
    setTimeout(async () => {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
        setWaitingForInteraction(false);
        localStorage.setItem('musicPlaying', 'true');
        return;
      } catch (error) {
        console.log('Strategy 3 failed:', error);
      }

      // Strategy 4: Try on page visibility change
      const handleVisibilityChange = async () => {
        if (document.visibilityState === 'visible' && audioRef.current) {
          try {
            await audioRef.current.play();
            setIsPlaying(true);
            setWaitingForInteraction(false);
            localStorage.setItem('musicPlaying', 'true');
            document.removeEventListener('visibilitychange', handleVisibilityChange);
          } catch (error) {
            console.log('Strategy 4 failed:', error);
          }
        }
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);

      // Strategy 5: Set up user interaction listener as fallback
      setIsPlaying(false);
      setWaitingForInteraction(true);
    }, 100);
  };

  const setupUserInteractionListener = () => {
    console.log('Setting up user interaction listeners');
    
    // First, set up a user interaction handler that enables scroll functionality
    const enableScrollPlayback = (event: Event) => {
      console.log('User interaction detected:', event.type, 'enabling scroll playback');
      setHasUserInteracted(true);
      setWaitingForInteraction(false);
      
      // Remove all direct interaction listeners
      document.removeEventListener('click', enableScrollPlayback);
      document.removeEventListener('keydown', enableScrollPlayback);
      document.removeEventListener('touchstart', enableScrollPlayback);
      document.removeEventListener('mousemove', enableScrollPlayback);
      document.removeEventListener('mousedown', enableScrollPlayback);
    };

    // Add direct interaction listeners first
    console.log('Adding interaction listeners');
    document.addEventListener('click', enableScrollPlayback, { once: true });
    document.addEventListener('keydown', enableScrollPlayback, { once: true });
    document.addEventListener('touchstart', enableScrollPlayback, { once: true });
    document.addEventListener('mousemove', enableScrollPlayback, { once: true });
    document.addEventListener('mousedown', enableScrollPlayback, { once: true });

    // Scroll handler that only works after user interaction
    const handleScroll = () => {
      console.log('Scroll detected:', { 
        hasScrolled, 
        hasUserInteracted, 
        scrollY: window.scrollY, 
        threshold: scrollThreshold 
      });
      
      // Check if user has interacted and we haven't scrolled yet
      if (hasUserInteracted && !hasScrolled && window.scrollY >= scrollThreshold) {
        console.log('Scroll threshold reached, starting music');
        setHasScrolled(true);
        
        if (audioRef.current) {
          console.log('Attempting to play audio...');
          audioRef.current.play().then(() => {
            console.log('Music started successfully via scroll');
            setIsPlaying(true);
            localStorage.setItem('musicPlaying', 'true');
            // Remove scroll listener after successful start
            window.removeEventListener('scroll', handleScroll);
          }).catch((error) => {
            console.log('Music start failed:', error);
            // Reset hasScrolled if playback failed
            setHasScrolled(false);
          });
        } else {
          console.log('Audio ref is null');
        }
      } else {
        console.log('Scroll conditions not met:', {
          hasUserInteracted,
          hasScrolled,
          scrollY: window.scrollY,
          threshold: scrollThreshold
        });
      }
    };

    // Store the scroll handler reference for cleanup
    scrollHandlerRef.current = handleScroll;

    // Add scroll listener (will only work after user interaction)
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      <div className="fixed top-4 right-4 z-50">
        {/* Debug/Test Button - Remove this after testing */}
        {waitingForInteraction && (
          <div className="mb-4">
            <button
              onClick={() => {
                console.log('Test button clicked');
                setHasUserInteracted(true);
                setWaitingForInteraction(false);
              }}
              className="glass-card p-2 rounded-lg text-xs bg-primary/20 hover:bg-primary/30 transition-colors"
            >
              Click to Enable Scroll Music
            </button>
          </div>
        )}
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
                  ? 'Click anywhere, then scroll to start music' 
                  : isPlaying 
                    ? 'Music Playing' 
                    : 'Music Paused'
                }
              </p>
              {/* Debug info */}
              <p className="text-xs text-muted-foreground mt-1">
                Interaction: {hasUserInteracted ? 'Yes' : 'No'} | Scroll: {hasScrolled ? 'Detected' : 'Waiting'} | Y: {typeof window !== 'undefined' ? Math.round(window.scrollY || 0) : 0}
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
            ? 'Click anywhere on the page, then scroll to start background music automatically.' 
            : 'Use the music controls in the top-right corner to play, pause, or adjust volume.'
          }
        </p>
      </div>
    </>
  );
};

export default MusicPlayer;
