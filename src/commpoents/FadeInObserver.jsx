import { useEffect, useState } from 'react';

const FadeInObserver = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const startObserver = () => {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in-visible');
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -10% 0px',
        }
      );

      const elements = document.querySelectorAll('.fade-in-element');
      elements.forEach((el) => observer.observe(el));

      return observer;
    };

    const timer = window.setTimeout(() => {
      setReady(true);
    }, 3200);

    if (ready) {
      const observer = startObserver();
      return () => {
        observer.disconnect();
      };
    }

    return () => {
      window.clearTimeout(timer);
    };
  }, [ready]);

  useEffect(() => {
    if (!ready) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ready]);

  return null;
};

export default FadeInObserver;
