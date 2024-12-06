import {useCallback, useState} from 'react';

export const useYouTubePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setIsPlaying(false);
    }
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  return {
    isPlaying,
    setIsPlaying,
    handleStateChange,
    togglePlay,
  };
};
