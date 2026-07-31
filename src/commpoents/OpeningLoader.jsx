import { useEffect, useState } from 'react';
import { GridScan } from '../specialeffects/GridScan';

const OpeningLoader = () => {
  const [phase, setPhase] = useState('intro');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setPhase('closing');
    }, 2200);

    const exitTimer = window.setTimeout(() => {
      setVisible(false);
    }, 3200);

    const handleKeyDown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setPhase('closing');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.clearTimeout(introTimer);
      window.clearTimeout(exitTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, []);

  const handleSkip = () => {
    setPhase('closing');
    window.setTimeout(() => setVisible(false), 600);
  };

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[99999] overflow-hidden bg-[#03040a] text-white transition-opacity duration-700 ${phase === 'closing' ? 'opacity-0' : 'opacity-100'}`}>
      <style>{`
        @keyframes loaderGlow {
          0%, 100% { text-shadow: 0 0 0 rgba(191, 255, 47, 0); }
          50% { text-shadow: 0 0 18px rgba(191, 255, 47, 0.5); }
        }

        @keyframes loaderFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes loaderFadeOut {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.95); }
        }

        .loader-glow {
          animation: loaderGlow 2s ease-in-out infinite;
        }

        .loader-title {
          animation: loaderFadeUp 0.8s ease-out both;
        }

        .loader-exit {
          animation: loaderFadeOut 0.7s ease-out forwards;
        }
      `}</style>

      <div className={`absolute inset-0 ${phase === 'closing' ? 'loader-exit' : ''}`}>
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#2F293A"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          lineJitter={0.1}
          scanGlow={0.5}
          scanSoftness={2}
          enableWebcam={false}
          showPreview={false}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,107,255,0.18),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(92,210,255,0.18),_transparent_32%),radial-gradient(circle_at_50%_80%,_rgba(144,80,255,0.16),_transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.08),_transparent_47%,_rgba(10,10,24,0.4))]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="loader-title">
            <p className="text-[10px] uppercase tracking-[0.45em] text-gray-300">WELCOME</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-[0.3em] text-white loader-glow">YU SHENG</h2>
          </div>
        </div>
      </div>

      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 z-20 text-[10px] uppercase tracking-[0.35em] text-gray-400 transition hover:text-[#bfff2f]"
      >
        Skip
      </button>
    </div>
  );
};

export default OpeningLoader;
