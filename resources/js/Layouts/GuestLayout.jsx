import { useEffect } from 'react';
import  './css/guestLayout.css';
import useScript from '@/Hooks/useScript';
export default function Guest({ children, bodyClass = 'app-blank bgi-size-cover bgi-attachment-fixed bgi-position-center bgi-no-repeat guestLayoutBody' }) {
    useScript('/assets/js/custom/authentication/sign-in/general.js');
    useEffect(() => {
            document.body.className = bodyClass;
        }, [bodyClass]);
    return (
		<div className="d-flex flex-column flex-root" id="kt_app_root">
			<div className="d-flex flex-column flex-column-fluid flex-lg-row">
                {children}
           </div>
		</div>

    );
}
