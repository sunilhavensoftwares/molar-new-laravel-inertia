import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function cleanupDrawerOverlays() {
  useEffect(() => {
    // Clean up any existing overlays first
    const cleanupOverlays = () => {
      document.querySelectorAll('.drawer-overlay').forEach((el) => el.remove());
    };

    // Remove duplicate overlays, keeping only one
    const removeExtraOverlays = () => {
      const overlays = document.querySelectorAll('.drawer-overlay');
      if (overlays.length > 1) {
        // Keep only the last overlay (most recent) and remove others
        overlays.forEach((el, i) => {
          if (i < overlays.length - 1) {
            el.remove();
          }
        });
      }
    };

    // Enhanced drawer overlay management
    const manageDrawerOverlays = () => {
      // Observer to watch for new overlay additions
      const overlayObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === 1 && node.classList && node.classList.contains('drawer-overlay')) {
                // Delay to ensure all overlays are added before cleanup
                setTimeout(removeExtraOverlays, 10);
              }
            });
          }
        });
      });

      // Start observing body for overlay additions
      overlayObserver.observe(document.body, {
        childList: true,
        subtree: true
      });

      return overlayObserver;
    };

    // Initialize drawers with proper cleanup
    const initializeDrawers = () => {
      const drawerElements = document.querySelectorAll('[data-kt-drawer="true"]');

      drawerElements.forEach((el) => {
        // Get drawer name for tracking
        const drawerName = el.getAttribute('data-kt-drawer-name');
        
        // Skip if already initialized
        if (el.hasAttribute('data-drawer-initialized')) {
          return;
        }

        // Clean up any existing instance first
        if (window.KTDrawer && drawerName) {
          const existingInstance = window.KTDrawer.getInstance(drawerName);
          if (existingInstance) {
            existingInstance.dispose();
          }
        }

        // Create new drawer instance
        if (window.KTDrawer) {
          const drawer = new window.KTDrawer(el);
          el.setAttribute('data-drawer-initialized', 'true');

          // Add event listeners for overlay cleanup
          el.addEventListener('kt.drawer.shown', () => {
            setTimeout(removeExtraOverlays, 50);
          });
          el.addEventListener('kt.drawer.hide', () => {
            setTimeout(removeExtraOverlays, 50);
          });
          el.addEventListener('kt.drawer.toggle', () => {
            setTimeout(removeExtraOverlays, 50);
          });
        }
      });
    };

    // Handle mobile sidebar toggle specifically
    const handleMobileSidebarToggle = () => {
      const mobileToggle = document.getElementById('kt_app_sidebar_mobile_toggle');
      if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
          // Clean up overlays before and after toggle
          setTimeout(removeExtraOverlays, 10);
          setTimeout(removeExtraOverlays, 100);
        });
      }
    };

    // Initial cleanup
    cleanupOverlays();

    // Set up overlay management
    const overlayObserver = manageDrawerOverlays();

    // Initialize drawers after a short delay
    const timeoutId = setTimeout(() => {
      initializeDrawers();
      handleMobileSidebarToggle();
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      overlayObserver.disconnect();
      
      // Remove event listeners and dispose drawer instances
      document.querySelectorAll('[data-kt-drawer="true"]').forEach((el) => {
        const drawerName = el.getAttribute('data-kt-drawer-name');
        if (window.KTDrawer && drawerName) {
          const instance = window.KTDrawer.getInstance(drawerName);
          if (instance) {
            instance.dispose();
          }
        }
        el.removeAttribute('data-drawer-initialized');
      });
      
      // Final overlay cleanup
      cleanupOverlays();
    };
  }, []);

  return null;
}
