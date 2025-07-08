import { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default function QuillEditor({className=''}) {
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current) {
            new Quill(editorRef.current, {
                theme: 'snow',
                placeholder: 'Compose your message...',
                modules: {
                    toolbar: [
                        [{ 'header': [1, 2, false] }],
                        ['bold', 'italic', 'underline'],
                        //[{ list: 'ordered' }, { list: 'bullet' }],
                        //['link'],
                        //['clean'],
                    ],
                },
            });
        }
    }, []);

    return <div ref={editorRef} className={className} />;
}
