import { useEffect, useRef } from 'react';

const CountUpCard = ({ finalValue = 0, duration = 1500 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let start = null;
    const startValue = 0;
    const endValue = parseInt(finalValue, 10);
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      const current = Math.floor(percentage * (endValue - startValue) + startValue);
      el.textContent = current.toLocaleString();

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [finalValue, duration]);

  return (
    <div ref={ref} className="fs-2 fw-bold">
      0
    </div>
  );
};

export default CountUpCard;
