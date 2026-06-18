import React, { useState } from 'react';
import { AudioPlayer } from './AudioPlayer';

export default function App() {
  const [audioUrl, setAudioUrl] = useState<string | undefined>();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (prompt: string) => {
    setIsGenerating(true);
    // ಇಲ್ಲಿ ನಿಮ್ಮ AI ಮ್ಯೂಸಿಕ್ API ಕನೆಕ್ಷನ್ ಬರುತ್ತದೆ
    setTimeout(() => {
      setAudioUrl('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="text-center space-y-8 w-full">
        <h1 className="text-4xl font-bold text-white">ಸ್ವರನಾದ (SWARANADA)</h1>
        <AudioPlayer 
          audioUrl={audioUrl} 
          onGenerate={handleGenerate} 
          isGenerating={isGenerating} 
        />
      </div>
    </div>
  );
}
