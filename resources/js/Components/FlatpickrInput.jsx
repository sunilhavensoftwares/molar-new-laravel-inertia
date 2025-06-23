// components/FlatpickrInput.jsx
import { useEffect, useRef } from "react";

const FlatpickrInput = ({ value, onChange, options = {}, name, className, placeholder }) => {
  const inputRef = useRef();

  useEffect(() => {
    const instance = window.flatpickr(inputRef.current, {
       disableMobile: true, // 🚫 Prevent native mobile behavior
      ...options,
      defaultDate: value,
      onChange: ([selectedDate]) => {
        if (onChange) onChange(selectedDate);
      },
    });

    return () => {
      instance.destroy();
    };
  }, []);

  return <input type="text" name={name} defaultValue={value} ref={inputRef} className={className} placeholder={placeholder} />;
};

export default FlatpickrInput;
