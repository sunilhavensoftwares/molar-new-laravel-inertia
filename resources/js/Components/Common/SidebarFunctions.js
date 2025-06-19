import { usePage } from '@inertiajs/react';
const checkActive = (search, currentUrl = '') => {
  const segments = currentUrl || usePage().url;

  if (Array.isArray(search)) {
    return search.some(str => segments.includes(str));
  }

  return search === segments;
};

const exactMatchUrl = (link, currentUrl = '') => {
  const url = currentUrl || usePage().url;
  const currentPath = url.split('?')[0];
  return currentPath === link;
};

const getMenuClass = (keys, type, currentUrl = '') => {
  let className = '';
  const isActive = checkActive(keys, currentUrl);

  switch (type) {
    case 'main':
      className = `menu-item menu-sub-indention menu-accordion ${isActive ? 'show' : ''}`;
      break;
    case 'sub':
      className = `menu-sub menu-sub-accordion menu-active-bg px-lg-2 py-lg-4 w-lg-225px ${isActive ? 'show' : ''}`;
      break;
    case 'item':
      className = `menu-item menu-accordion ${isActive ? 'show' : ''}`;
      break;
    case 'link':
      className = `menu-link ${exactMatchUrl(keys, currentUrl) ? 'active' : ''}`;
      break;
    default:
      break;
  }

  return className;
};

export default {
  checkActive,
  exactMatchUrl,
  getMenuClass,
};
