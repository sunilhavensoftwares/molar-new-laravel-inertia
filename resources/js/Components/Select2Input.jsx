import { useEffect, useRef } from "react";

const Select2Input = ({ children, value, onChange, name, className = "", ...rest }) => {
  const selectRef = useRef();

  useEffect(() => {
    let retries = 0;
    const maxRetries = 10;

    const initSelect2 = () => {
      const $select = window.$(selectRef.current);

      if (typeof $select.select2 !== "function") {
        retries++;
        if (retries < maxRetries) {
          return setTimeout(initSelect2, 200); // Retry every 200ms
        } else {
          console.warn("Select2 still not available after retries.");
          return;
        }
      }

      // ✅ Initialize Select2
      $select.select2();

      // ✅ Set initial value
      if (value !== undefined) {
        $select.val(value).trigger("change");
      }

      // ✅ Handle change
      $select.on("change", function (e) {
        const selectedData = $select.select2('data'); // returns array of {id, text, ...}
        if (onChange) onChange(selectedData); // Send the full data to the parent
      });
    };

    initSelect2();

    // ✅ Cleanup
    return () => {
      const $select = window.$(selectRef.current);
      if ($select && typeof $select.select2 === "function") {
        $select.select2("destroy");
      }
    };
  }, []);

  return (
    <select
      ref={selectRef}
      name={name}
      className={className}
      multiple
      {...rest}
    >
      {children}
    </select>
  );
};

export default Select2Input;
