import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function cleanupDrawerOverlays() {
  useEffect(() => {
    const removeExtraOverlays = () => {
      const overlays = document.querySelectorAll('.drawer-overlay');
      if (overlays.length > 1) {
        overlays.forEach((el, i) => i > 0 && el.remove());
      }
    };

    const initializeDrawers = () => {
      const drawerElements = document.querySelectorAll('[data-kt-drawer="true"]');

      drawerElements.forEach((el) => {
        if (!el.hasAttribute('data-drawer-initialized')) {
          const drawer = new KTDrawer(el); // This initializes the drawer
          el.setAttribute('data-drawer-initialized', 'true');

          // ✅ Native custom event listener
          el.addEventListener('kt.drawer.shown', removeExtraOverlays);
        }
      });
    };

    setTimeout(() => {
      initializeDrawers();
    }, 50);

    return () => {
      document.querySelectorAll('.drawer-overlay').forEach((el) => el.remove());
    };
  }, []);

  return null;
}