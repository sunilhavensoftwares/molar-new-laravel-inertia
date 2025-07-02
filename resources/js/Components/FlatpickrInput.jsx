// components/FlatpickrInput.jsx
import { useEffect, useRef } from "react";
import Flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const FlatpickrInput = ({ value, onChange, options = {}, name, className, placeholder }) => {
  const inputRef = useRef();

  useEffect(() => {
    const instance = Flatpickr(inputRef.current, {
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
