import { useEffect } from 'react';
import  './css/guestLayout.css';
import useScript from '@/Hooks/useScript';
import '@assets/js/custom/authentication/sign-in/general.js';
import guest_body_bg from '@assets/media/auth/bg4.jpg';
export default function Guest({ children, bodyClass = 'app-blank bgi-size-cover bgi-attachment-fixed bgi-position-center bgi-no-repeat guestLayoutBody' }) {
    useEffect(() => {
    const img = new Image();
    img.src = guest_body_bg;

    img.onload = () => {      
      document.body.style.transition = 'background-image 0.5s ease-in-out';
      document.body.style.backgroundImage = `url('${img.src}')`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
    };

    return () => {
      document.body.style.backgroundImage = '';
    };
  }, []);
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
