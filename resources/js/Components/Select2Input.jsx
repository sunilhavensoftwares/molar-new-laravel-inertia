import { useEffect, useRef } from 'react';

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

    $select.select2({
      dropdownParent: $select.parent(),
      placeholder: $select.data('placeholder') || 'Select',
      allowClear: $select.data('allow-clear') === true || $select.data('allow-clear') === 'true',
    });

    // Initial value
    if (value !== undefined) {
      $select.val(value).trigger('change');
    }

    $select.on('change', function () {
      if (multiple) {
        const selected = $select.val(); // array of values
        onChange?.(selected);
      } else {
        const selected = $select.val(); // string or null
        onChange?.(selected || '');
      }
    });

    return () => {
      $select.off('change');
      $select.select2('destroy');
    };
  }, []);

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
