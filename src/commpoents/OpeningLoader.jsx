import { useEffect, useState } from 'react';

const OpeningLoader = () => {
  const [phase, setPhase] = useState('intro');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setPhase('closing');
    }, 900);

    const exitTimer = window.setTimeout(() => {
      setVisible(false);
    }, 1400);

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
    window.setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[99999] overflow-hidden bg-[#03040a] text-white transition-opacity duration-500 ${phase === 'closing' ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(191,255,47,0.16),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(56,189,248,0.14),_transparent_32%),radial-gradient(circle_at_50%_80%,_rgba(255,255,255,0.08),_transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.06),_transparent_50%,_rgba(10,10,24,0.35))]" />

      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${phase === 'closing' ? 'scale-[0.98] opacity-0' : 'scale-100 opacity-100'}`}>
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="mb-4 h-10 w-10 rounded-full border border-white/20 border-t-[#bfff2f] animate-spin" />
          <p className="text-[10px] uppercase tracking-[0.45em] text-gray-400">WELCOME</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-[0.35em] text-white">YU SHENG</h2>
          <p className="mt-2 text-sm text-gray-400">Portfolio / Creative Developer</p>
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
