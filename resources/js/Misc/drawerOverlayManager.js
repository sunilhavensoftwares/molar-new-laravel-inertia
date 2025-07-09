/**
 * Enhanced Drawer Overlay Manager
 * Specifically designed to prevent multiple drawer overlays in mobile view
 */

class DrawerOverlayManager {
  constructor() {
    this.overlayCount = 0;
    this.activeOverlay = null;
    this.observer = null;
    this.initialized = false;
    this.cleanupCallbacks = [];
  }

  init() {
    if (this.initialized) return;
    
    this.setupMutationObserver();
    this.setupGlobalEventListeners();
    this.cleanupExistingOverlays();
    this.initialized = true;
    
    //console.log('DrawerOverlayManager initialized');
  }

  setupMutationObserver() {
    // Create observer to watch for overlay additions
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (this.isDrawerOverlay(node)) {
              this.handleNewOverlay(node);
            }
          });
        }
      });
    });

    // Start observing
    this.observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  setupGlobalEventListeners() {
    // Listen for drawer events
    document.addEventListener('kt.drawer.shown', (e) => {
      setTimeout(() => this.enforceSingleOverlay(), 10);
    });

    document.addEventListener('kt.drawer.hidden', (e) => {
      setTimeout(() => this.cleanupOverlays(), 50);
    });

    // Listen for mobile sidebar toggle
    const mobileToggle = document.getElementById('kt_app_sidebar_mobile_toggle');
    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        this.handleMobileToggle();
      });
    }

    // Listen for page navigation (Inertia.js)
    document.addEventListener('inertia:start', () => {
      this.cleanupOverlays();
    });
  }

  handleNewOverlay(overlay) {
    this.overlayCount++;
    
    // If this is not the first overlay, handle it
    if (this.overlayCount > 1) {
      setTimeout(() => this.enforceSingleOverlay(), 10);
    } else {
      this.activeOverlay = overlay;
    }
  }

  handleMobileToggle() {
    // Clean up before toggle
    setTimeout(() => this.enforceSingleOverlay(), 10);
    
    // Clean up after toggle completes
    setTimeout(() => this.enforceSingleOverlay(), 150);
  }

  enforceSingleOverlay() {
    const overlays = document.querySelectorAll('.drawer-overlay');
    
    if (overlays.length <= 1) {
      this.overlayCount = overlays.length;
      this.activeOverlay = overlays[0] || null;
      return;
    }

    // Keep only the most recent overlay
    const overlaysArray = Array.from(overlays);
    const mostRecentOverlay = overlaysArray[overlaysArray.length - 1];
    
    // Remove all but the most recent
    overlaysArray.slice(0, -1).forEach(overlay => {
      try {
        overlay.remove();
      } catch (e) {
        console.warn('Failed to remove overlay:', e);
      }
    });

    this.overlayCount = 1;
    this.activeOverlay = mostRecentOverlay;
    
    console.log(`Enforced single overlay. Removed ${overlaysArray.length - 1} duplicate overlays.`);
  }

  cleanupOverlays() {
    const overlays = document.querySelectorAll('.drawer-overlay');
    overlays.forEach(overlay => {
      try {
        overlay.remove();
      } catch (e) {
        console.warn('Failed to remove overlay:', e);
      }
    });
    
    this.overlayCount = 0;
    this.activeOverlay = null;
  }

  cleanupExistingOverlays() {
    this.cleanupOverlays();
  }

  isDrawerOverlay(node) {
    return node.nodeType === 1 && 
           node.classList && 
           node.classList.contains('drawer-overlay');
  }

  // Add cleanup callback
  addCleanupCallback(callback) {
    this.cleanupCallbacks.push(callback);
  }

  // Destroy the manager
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    
    this.cleanupOverlays();
    this.cleanupCallbacks.forEach(callback => callback());
    this.cleanupCallbacks = [];
    this.initialized = false;
    
    //console.log('DrawerOverlayManager destroyed');
  }
}

// Create singleton instance
const drawerOverlayManager = new DrawerOverlayManager();

export default drawerOverlayManager;
