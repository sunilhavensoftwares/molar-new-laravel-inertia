import { useEffect } from 'react';
export const useMetronicInit = () => {
  useEffect(() => {
    if (window.KTMenu) window.KTMenu.createInstances();
    if (window.KTUtil) window.KTUtil.init();
    if (window.KTDrawer) window.KTDrawer.createInstances();
  }, []);
};
