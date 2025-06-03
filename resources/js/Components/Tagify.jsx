import $ from 'jquery';
import 'select2';

function SelectDropdown() {
  const selectRef = useRef();

  useEffect(() => {
    $(selectRef.current).select2();
    return () => {
      $(selectRef.current).select2('destroy');
    };
  }, []);

  return (
    <select ref={selectRef} className="form-select">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
  );
}
