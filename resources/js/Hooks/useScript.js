// resources/js/Hooks/useScript.js
import { useEffect } from 'react';

export default function useScript(src, options = {}) {
    useEffect(() => {
        // Prevent duplicates
        if (document.querySelector(`script[src="${src}"]`)) return;

        const script = document.createElement('script');
        script.src = src;
        script.async = options.async ?? true;
        script.defer = options.defer ?? false;
        script.onload = () => {
            if (src.includes('jquery') || src.includes('plugins.bundle')) {
                // Expose jQuery globally
                window.$ = window.jQuery = window.jQuery || window.$;
            }
            options.onload && options.onload();
        };
        document.body.appendChild(script);

        return () => {
            // Optional: remove script on cleanup
            if (options.removeOnUnmount) {
                document.body.removeChild(script);
            }
        };
    }, [src]);
}
