import { useEffect } from 'react';

export const useMetronicInit = () => {
  useEffect(() => {
    if (window.KTMenu) window.KTMenu.createInstances();
    if (window.KTUtil) window.KTUtil.init();
    if (window.KTDrawer) {
      window.KTDrawer.createInstances();

      // Explicitly hide mobile drawers on page load/navigation
      const headerMenu = window.KTDrawer.getInstance('app-header-menu');
      if (headerMenu) headerMenu.hide();

      const sidebar = window.KTDrawer.getInstance('app-sidebar');
      if (sidebar) sidebar.hide();
    }

    // Failsafe: remove any stray overlays
    const overlays = document.querySelectorAll('.drawer-overlay');
    overlays.forEach(el => el.remove());
  }, []);
};