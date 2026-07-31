import { useEffect, useRef, useState } from 'react';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  fallback = null,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(loading !== 'lazy');
  const imgRef = useRef(null);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
    setShouldLoad(loading !== 'lazy');
  }, [src, loading]);

  useEffect(() => {
    if (loading !== 'lazy' || shouldLoad) return;

    const node = imgRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [loading, shouldLoad]);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#17240d] via-[#0f1809] to-[#060a05] ${containerClassName}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_top_left,_rgba(191,255,47,0.18),_transparent_55%)]" />
      )}

      {hasError ? (
        fallback || (
          <div className="flex h-full min-h-[120px] items-center justify-center px-4 text-center">
            <div>
              <p className="text-neonGreen text-xl font-semibold tracking-[0.2em]">GY</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-gray-400">Image</p>
            </div>
          </div>
        )
      ) : (
        <img
          ref={imgRef}
          src={shouldLoad ? src : undefined}
          alt={alt}
          loading={loading}
          decoding="async"
          fetchPriority={fetchPriority}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} ${className}`}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
