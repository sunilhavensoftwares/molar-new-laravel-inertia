import 'select2/dist/css/select2.min.css';
import '@/Components/Common/select2custom.css';
// ✅ 1. jQuery (must be global BEFORE importing plugins)
import $ from 'jquery';
window.$ = window.jQuery = $;

// ✅ 2. Popper (needed for Bootstrap tooltips/dropdowns)
import * as Popper from '@popperjs/core';
window.Popper = Popper;

// ✅ 3. Bootstrap
import 'bootstrap';

// ✅ 4. Select2 (must come after global jQuery)
// Load Select2
window.select2Ready = new Promise((resolve, reject) => {
    const select2Script = document.createElement('script');
    select2Script.src = '/plugins/select2/select2.full.min.js';
    select2Script.onload = () => {
        if (window.$.fn?.select2) {
            resolve();
        } else {
            reject(new Error('❌ Select2 not attached to jQuery'));
        }
    };
    select2Script.onerror = () => {
        reject(new Error('❌ Failed to load Select2'));
    };
    document.head.appendChild(select2Script);
});

// ✅ 5. Flatpickr
import flatpickr from 'flatpickr';
window.flatpickr = flatpickr;
import 'flatpickr/dist/flatpickr.min.css';

// ✅ 6. Toastr
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

window.toastr = toastr;

// ✅ 7. ApexCharts
import ApexCharts from 'apexcharts';
window.ApexCharts = ApexCharts;

// ✅ 8. Moment.js
import moment from 'moment';
window.moment = moment;

// ✅ 9. FullCalendar (optional: expose globally if legacy code uses it)
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
window.FullCalendar = { Calendar, dayGridPlugin, interactionPlugin };

