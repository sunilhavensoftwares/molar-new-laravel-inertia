import { useEffect, useRef } from 'react';
import '@/Components/Common/select2custom.css';

const Select2Input = ({
  children,
  value,
  onChange,
  name,
  className = '',
  multiple = false,
  ...rest
}) => {
  const selectRef = useRef();

  useEffect(() => {
    const $select = window.$(selectRef.current);
    if (!$select || typeof $select.select2 !== 'function') return;

    // Find a suitable parent for dropdown (inside modal/offcanvas if needed)
    const dropdownParent =
      $select.closest('.modal, .offcanvas, .popup').length > 0
        ? $select.closest('.modal, .offcanvas, .popup')
        : $select.parent();

    // Initialize select2
    $select.select2({
      dropdownParent: dropdownParent,
      placeholder: $select.data('placeholder') || 'Select',
      allowClear:
        $select.data('allow-clear') === true ||
        $select.data('allow-clear') === 'true',
      theme: 'bootstrap-5',
      width: '100%',
      dropdownAutoWidth: true,
    });

    // Apply container and selection styles
    const applyContainerClasses = () => {
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
    };

    applyContainerClasses();

    // Accessibility attributes on open/close
    $select.on('select2:open', () => {
      const $selection = $select
        .next('.select2-container')
        .find('.select2-selection');
      $selection.attr('aria-expanded', 'true').addClass(className);
    });

    $select.on('select2:close', () => {
      const $selection = $select
        .next('.select2-container')
        .find('.select2-selection');
      $selection.attr('aria-expanded', 'false');
    });

    // Trigger initial value
    if (value !== undefined) {
      $select.val(value).trigger('change');
    }

    // Handle change
    $select.on('change', function () {
      const selected = $select.val();
      onChange?.(multiple ? selected : selected || '');
    });

    return () => {
      $select.off('change select2:open select2:close');
      $select.select2('destroy');
    };
  }, []);

  // Handle external value update
  useEffect(() => {
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
