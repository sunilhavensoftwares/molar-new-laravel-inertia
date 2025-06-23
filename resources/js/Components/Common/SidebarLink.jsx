import { Link } from '@inertiajs/react';
import SidebarFunctions from './SidebarFunctions';

export const SidebarLink = ({ href, title, faClass = '' }) => {
  // Normalize to array for class checking
  const menuClass = SidebarFunctions.getMenuClass(href, 'link');

  // Use first href as actual link target if `href` is an array
  const linkTarget = Array.isArray(href) ? href[0] : href;

  return (
    <Link preserveScroll className={menuClass} href={linkTarget}>
      {!faClass ? (
        <span className="menu-bullet">
          <span className="bullet bullet-dot"></span>
        </span>
      ) : (
        <span className="menu-icon">
          <i className={faClass}></i>
        </span>
      )}
      <span className="menu-title">{title}</span>
    </Link>
  );
};
