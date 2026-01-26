"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useRef,
} from "react";

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playSound: (sound: "tick" | "correct" | "wrong") => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize on client side only
  useEffect(() => {
    setIsClient(true);

    // Load preference from localStorage
    const stored = localStorage.getItem("sound-enabled");
    if (stored !== null) {
      setSoundEnabled(stored === "true");
    }
  }, []);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (
        window.AudioContext || (window as any).webkitAudioContext
      )();
    }
    return audioContextRef.current;
  }, []);

  const toggleSound = useCallback(() => { 
    setSoundEnabled((prev) => {
      const newValue = !prev;
      localStorage.setItem("sound-enabled", String(newValue));
      return newValue;
    });
  }, []);

  const playSound = useCallback(
    (sound: "tick" | "correct" | "wrong") => {
      if (!soundEnabled || !isClient) return;

      try {
        const ctx = getAudioContext();
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        const now = ctx.currentTime;

        switch (sound) {
          case "tick":
            // Short click/tick sound
            oscillator.frequency.setValueAtTime(800, now);
            oscillator.frequency.exponentialRampToValueAtTime(400, now + 0.05);
            gainNode.gain.setValueAtTime(0.15, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
            oscillator.start(now);
            oscillator.stop(now + 0.05);
            break;

          case "correct":
            // Success/ding sound - ascending notes
            oscillator.type = "sine";
            oscillator.frequency.setValueAtTime(523.25, now); // C5
            oscillator.frequency.setValueAtTime(659.25, now + 0.1); // E5
            oscillator.frequency.setValueAtTime(783.99, now + 0.2); // G5
            gainNode.gain.setValueAtTime(0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
            oscillator.start(now);
            oscillator.stop(now + 0.4);
            break;

          case "wrong":
            // Error/buzz sound - descending with wobble
            oscillator.type = "sawtooth";
            oscillator.frequency.setValueAtTime(200, now);
            oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.3);
            gainNode.gain.setValueAtTime(0.2, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
            oscillator.start(now);
            oscillator.stop(now + 0.3);
            break;
        }
      } catch (e) {
        // Ignore Web Audio API errors
        console.warn("Sound playback failed:", e);
      }
    },
    [soundEnabled, isClient, getAudioContext],
  );

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}
