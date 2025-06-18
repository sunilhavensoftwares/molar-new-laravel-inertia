import { useEffect } from 'react';

export default function useScript(src, { onload } = {}) {
  useEffect(() => {
    if (document.querySelector(`script[src="${src}"]`)) {
      // Already loaded
      if (onload) onload();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;

    script.onload = () => {
      //console.log(`✅ Script loaded: ${src}`);
      if (onload) onload();
    };

    script.onerror = () => {
      //console.error(`❌ Failed to load script: ${src}`);
    };

    document.body.appendChild(script);

    return () => {
      // Optional: clean up
      script.remove();
    };
  }, [src]);
}
