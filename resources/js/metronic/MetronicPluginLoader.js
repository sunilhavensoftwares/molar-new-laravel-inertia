import { useEffect } from 'react';
import 'select2/dist/css/select2.min.css';
import 'flatpickr/dist/flatpickr.min.css';
import 'toastr/build/toastr.min.css';
export default function MetronicPluginLoader() {
  useEffect(() => {
    if (window.__metronic_plugins_loaded__) return;
    window.__metronic_plugins_loaded__ = true;

  // Load jQuery first (only if not already set)
  if (!window.$ || typeof window.$ !== 'function') {
    import('jquery').then((jq) => {
      window.$ = window.jQuery = jq.default || jq;
    });
  }

      // Load Popper FIRST before Bootstrap
      import('@popperjs/core').then((Popper) => {
        window.Popper = Popper;

        // Load Bootstrap
        import('bootstrap').then(() => {
          // ✅ Load Select2
          // window.select2Ready = new Promise((resolve, reject) => {
          //   const select2Script = document.createElement('script');
          //   select2Script.src = '/plugins/select2/select2.full.min.js';
          //   select2Script.onload = () => {
          //     if (window.$.fn?.select2) {
          //       resolve();
          //     } else {
          //       reject(new Error('❌ Select2 not attached to jQuery'));
          //     }
          //   };
          //   select2Script.onerror = () => {
          //     reject(new Error('❌ Failed to load Select2'));
          //   };
          //   document.head.appendChild(select2Script);
          // });

          // // ✅ Load Metronic's scripts.bundle.js
          // const metronicScript = document.createElement('script');
          // metronicScript.src = '/assets/js/scripts.bundle.js';
          // metronicScript.onload = () => {
          //   //console.log('✅ Metronic scripts.bundle.js loaded');

          //   // Try to init KTApp and KTThemeMode if available
          //   setTimeout(() => {
          //     try {
          //       if (window.KTApp?.init) {
          //         window.KTApp.init();
          //         //console.log('✅ KTApp initialized');
          //       }
          //     } catch (err) {
          //       //console.error('❌ KTApp init failed:', err);
          //     }

          //     try {
          //       if (window.KTThemeMode?.init) {
          //         window.KTThemeMode.init();
          //         //console.log('✅ KTThemeMode initialized');
          //       }
          //     } catch (err) {
          //       //console.error('❌ KTThemeMode init failed:', err);
          //     }
          //   }, 0);
          // };
          // metronicScript.onerror = () => {
          //   //console.error('❌ Failed to load scripts.bundle.js');
          // };
          // document.head.appendChild(metronicScript);
        });
      });

      // ✅ Load other optional plugins (non-blocking)
      import('flatpickr').then((flatpickr) => {
        window.flatpickr = flatpickr;
      });
      import('toastr').then((toastr) => {
        window.toastr = toastr.default || toastr;
      });
      import('apexcharts').then((ApexCharts) => {
        window.ApexCharts = ApexCharts.default || ApexCharts;
      });
      import('moment').then((moment) => {
        window.moment = moment;
      });
      Promise.all([
        import('@fullcalendar/core'),
        import('@fullcalendar/daygrid'),
        import('@fullcalendar/interaction'),
      ]).then(([core, dayGrid, interaction]) => {
        window.FullCalendar = {
          Calendar: core.Calendar,
          dayGridPlugin: dayGrid.default,
          interactionPlugin: interaction.default,
        };
      });

      // ✅ Optional: import your bootstrap overrides
      import('@/Lib/bootstrap-client').catch(() => { });
    // });
  }, []);

  return null;
}
