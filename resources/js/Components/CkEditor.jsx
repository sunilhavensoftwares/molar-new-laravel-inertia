import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const CkEditor = ({ value, onChange, name, className = '', id, rows = 10 }) => {
  const editorHeight = rows * 24; 
  return (
    <div className={`ck-editor-wrapper ${className}`}  style={{ minHeight: `${editorHeight}px` }}>
       <CKEditor
        editor={ClassicEditor}
        data={value || ''}
        config={{
          toolbar: [
            'undo',
            'redo',
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'insertTable',
            'bulletedList',
            'numberedList',
            'blockQuote',
          ],
          table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
          },
        }}
        onChange={(event, editor) => {
          if (typeof onChange === 'function') {
            onChange(editor.getData());
          }
        }}
      />
      <input type="hidden" name={name} id={id} value={value} />
    </div>
  );
};
export default CkEditor;