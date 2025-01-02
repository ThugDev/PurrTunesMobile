import {useCallback, useEffect, useState} from 'react';

export const useYouTubePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handleStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setIsPlaying(false);
    }
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentTime(prev => prev + 1);
      }, 1000);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying]);

  return {
    isPlaying,
    setIsPlaying,
    handleStateChange,
    togglePlay,
    currentTime,
  };
};
