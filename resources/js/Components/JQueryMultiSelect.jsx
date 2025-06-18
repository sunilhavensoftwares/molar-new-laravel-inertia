import { useEffect, useRef, useState } from 'react';
import useScript from '@/Hooks/useScript';
if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
}

export default function JQueryMultiSelect({
  options = [],
  selectedValues = [],
  onSelect,
  onDeselect,
  id = 'multiselect',
  className = '',
}) {
  const selectRef = useRef();
  const [scriptsReady, setScriptsReady] = useState(false);

  // Load scripts once
  useScript('/assets/js/jquery.quicksearch.min.js', {
    onload: () => setScriptsReady(prev => prev || typeof $.fn.quicksearch === 'function'),
  });
  useScript('/assets/js/jquery.multi-select.min.js', {
    onload: () => setScriptsReady(prev => prev || typeof $.fn.multiSelect === 'function'),
  });

  useEffect(() => {
    
    if (!scriptsReady || !$(selectRef.current).length) return;

    const $select = $(selectRef.current);
    $select.multiSelect('destroy');

    $select.multiSelect({
      keepOrder: true,
      selectableHeader:
        "<input type='text' class='form-control form-control-solid search-input' autocomplete='off' placeholder='Search'>",
      selectionHeader:
        "<input type='text' class='form-control form-control-solid search-input' autocomplete='off' placeholder='Search'>",

      afterInit: function () {
        const that = this;
        const $selectableSearch = that.$selectableUl.prev();
        const $selectionSearch = that.$selectionUl.prev();
        const selectableSearchString = `#${that.$container.attr('id')} .ms-elem-selectable:not(.ms-selected)`;
        const selectionSearchString = `#${that.$container.attr('id')} .ms-elem-selection.ms-selected`;

        that.qs1 = $selectableSearch.quicksearch(selectableSearchString).on('keydown', function (e) {
          if (e.which === 40) {
            that.$selectableUl.focus();
            return false;
          }
        });

        that.qs2 = $selectionSearch.quicksearch(selectionSearchString).on('keydown', function (e) {
          if (e.which === 40) {
            that.$selectionUl.focus();
            return false;
          }
        });
      },

      afterSelect: function (value) {
        this.qs1.cache();
        this.qs2.cache();
        oneItemSelect(value);
        onSelect?.(value);
      },

      afterDeselect: function (value) {
        this.qs1.cache();
        this.qs2.cache();
        oneItemDeSelect(value);
        onDeselect?.(value);
      },
    });

    // Apply preselected values
    if (selectedValues?.length) {
      $select.multiSelect('select', selectedValues);
    }

    return () => {
      $select.multiSelect('destroy');
    };
  }, [options, scriptsReady]);

  return (
    <>
      <select ref={selectRef} multiple className={`multiselect ${className}`} id={id}>
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            data-id={opt.data?.id}
            data-price={opt.data?.price}
            data-cat_name={opt.data?.cat_name}
          >
            {opt.label}
          </option>
        ))}
      </select>
    </>
  );
}

// Append to table
function oneItemSelect(value) {
  const selector = $(`.multiselect option[value="${value}"]`);
  const cat_id = selector.data('id');
  const cat_price = selector.data('price');
  const cat_name = selector.data('cat_name');

  if (!$(`#id-tr${cat_id}`).length) {
    const tdInput = `<input type="number" min="0" id="idinput-${cat_id}" class="tdinput form-control form-control-flush" name="quantity[]" value="1">`;
    $('.cat_payment_tbody').append(
      `<tr id="id-tr${cat_id}"><td>${cat_name} - SAR ${cat_price}</td><td>${tdInput}</td></tr>`
    );
  }
}

// Remove from table
function oneItemDeSelect(value) {
  const selector = $(`.multiselect option[value="${value}"]`);
  const cat_id = selector.data('id');
  $(`#id-tr${cat_id}`).remove();
}
