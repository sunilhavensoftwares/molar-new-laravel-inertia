// resources/js/Hooks/useScript.js
import { useEffect, useState } from 'react';

export default function useScript(src) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (document.querySelector(`script[src="${src}"]`)) {
      setLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => setLoaded(true);
    script.onerror = () => setLoaded(false);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);

  return loaded;
}
