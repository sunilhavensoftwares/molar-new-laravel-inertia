import { useEffect } from 'react';

export const useMetronicInit = () => {
  useEffect(() => {
    // Initialize other Metronic components
    if (window.KTMenu) window.KTMenu.createInstances();
    if (window.KTUtil) window.KTUtil.init();
    
    // Note: KTDrawer initialization is now handled by cleanupDrawer.js
    // to prevent duplicate instances and overlay issues
    
    // Clean up any existing overlays on init
    const cleanupOverlays = () => {
      document.querySelectorAll('.drawer-overlay').forEach((el) => el.remove());
    };
    
    // Only hide existing drawer instances without creating new ones
    if (window.KTDrawer) {
      // Clean overlays first
      cleanupOverlays();
      
      // Explicitly hide mobile drawers on page load/navigation
      setTimeout(() => {
        const headerMenu = window.KTDrawer.getInstance('app-header-menu');
        if (headerMenu) {
          headerMenu.hide();
        }

        const sidebar = window.KTDrawer.getInstance('app-sidebar');
        if (sidebar) {
          sidebar.hide();
        }
        
        const startSidebar = window.KTDrawer.getInstance('start-sidebar');
        if (startSidebar) {
          startSidebar.hide();
        }
        
        // Clean up any remaining overlays after hiding
        setTimeout(cleanupOverlays, 100);
      }, 50);
    }
  }, []);
};
