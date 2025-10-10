import { useEffect, useRef } from 'react';
import '@/Components/Common/select2custom.css';

const Select2Input = ({
  children,
  value,
  onChange,
  name,
  className = '',
  multiple = false,
  ajax = null, // NEW PROP
  initOn = null, // e.g. '#kt_modal_add_payment' to initialize on modal shown
  ...rest
}) => {
  const selectRef = useRef();

  // Initialize function to (re)attach Select2
  const initialize = async () => {
    // Ensure jQuery is available
    if (!window.$ || typeof window.$ !== 'function') return;
    const $select = window.$(selectRef.current);
    if (!$select || !$select.length) return;

    // Ensure Select2 plugin is available; if not, wait or load it
    const ensureSelect2 = async () => {
      if (window.$.fn && typeof window.$.fn.select2 === 'function') return true;

      // Prefer a global loader if provided by globalPlugins.js
      if (window.select2Ready && typeof window.select2Ready.then === 'function') {
        try { await window.select2Ready; } catch (_) {}
        return (window.$.fn && typeof window.$.fn.select2 === 'function');
      }

      // Fallback 1: dynamic import via Vite
      try { await import('select2/dist/js/select2.full.js'); } catch (_) {}
      if (window.$.fn && typeof window.$.fn.select2 === 'function') return true;

      // Fallback 2: inject from public path (works in prod and dev when served by Laravel)
      await new Promise((resolve) => {
        const existing = document.querySelector('script[src*="/plugins/select2/dist/js/select2.full.min.js"]');
        if (existing) {
          existing.addEventListener('load', () => resolve());
          existing.addEventListener('error', () => resolve());
        } else {
          const s = document.createElement('script');
          s.src = '/plugins/select2/dist/js/select2.full.min.js';
          s.onload = () => resolve();
          s.onerror = () => resolve();
          document.head.appendChild(s);
        }
      });
      return (window.$.fn && typeof window.$.fn.select2 === 'function');
    };

    const ok = await ensureSelect2();
    if (!ok) {
      console.warn('Select2 plugin not available yet');
      return;
    }

    // Destroy any existing instance before re-init
    if ($select.data('select2')) {
      $select.select2('destroy');
    }

    const dropdownParent =
      $select.closest('.modal, .offcanvas, .popup').length > 0
        ? $select.closest('.modal, .offcanvas, .popup')
        : $select.parent();

    $select.select2({
      dropdownParent: dropdownParent,
      placeholder: $select.data('placeholder') || 'Select',
      allowClear:
        $select.data('allow-clear') === true ||
        $select.data('allow-clear') === 'true',
      theme: 'bootstrap-5',
      width: '100%',
      dropdownAutoWidth: true,
      ajax: ajax || undefined,
    });

    const $container = $select.next('.select2-container');
    const $selection = $container.find('.select2-selection');

    $container.addClass('select2-container--bootstrap5');
    $selection.addClass(className);
    $selection.find('.select2-selection__arrow').remove();

    $selection.attr({
      role: 'combobox',
      'aria-haspopup': 'true',
      'aria-expanded': 'false',
      tabindex: '0',
      'aria-disabled': 'false',
    });

    $select.on('select2:open', () => {
      const $sel = $select.next('.select2-container').find('.select2-selection');
      $sel.attr('aria-expanded', 'true').addClass(className);
    });

    $select.on('select2:close', () => {
      const $sel = $select.next('.select2-container').find('.select2-selection');
      $sel.attr('aria-expanded', 'false');
    });

    if (value !== undefined) {
      $select.val(value).trigger('change');
    }

    $select.on('change', function () {
      const selected = $select.val();
      onChange?.(multiple ? selected : selected || '');
    });

    // Register cleanup handler on the element for external callers
    $select.data('select2-cleanup', () => {
      $select.off('change select2:open select2:close');
      if ($select.data('select2')) $select.select2('destroy');
    });
  };

  // Initialize either immediately or when a modal is shown
  useEffect(() => {
    if (!initOn) {
      initialize();
      return () => {
        if (!window.$ || typeof window.$ !== 'function') return;
        const $select = window.$(selectRef.current);
        const cleanup = $select.data('select2-cleanup');
        if (cleanup) cleanup();
      };
    }

    // initOn provided: initialize only when that modal fires shown.bs.modal
    const targetEl = typeof initOn === 'string' ? document.querySelector(initOn) : null;
    const handler = (ev) => {
      if (!targetEl || ev.target === targetEl) {
        // Delay slightly so the modal is fully visible and measurable
        setTimeout(() => { initialize(); }, 100);
      }
    };
    document.addEventListener('shown.bs.modal', handler);

    return () => {
      document.removeEventListener('shown.bs.modal', handler);
      if (!window.$ || typeof window.$ !== 'function') return;
      const $select = window.$(selectRef.current);
      const cleanup = $select.data('select2-cleanup');
      if (cleanup) cleanup();
    };
  }, [initOn]);

  // Handle external value update
  useEffect(() => {
    if (!window.$ || typeof window.$ !== 'function') return;
    const $select = window.$(selectRef.current);
    if ($select && typeof $select.select2 === 'function') {
      $select.val(value).trigger('change');
    }
  }, [value]);

  return (
    <select
      ref={selectRef}
      name={name}
      className={className}
      multiple={multiple}
      {...rest}
    >
      {children}
    </select>
  );
};

export default Select2Input;
