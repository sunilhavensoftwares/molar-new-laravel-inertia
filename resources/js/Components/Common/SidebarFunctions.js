import { usePage } from '@inertiajs/react';
const checkActive = (search, currentUrl = '') => {
  const url = currentUrl || usePage().url;
  const path = url.split('?')[0]; // remove query string

  if (Array.isArray(search)) {
    return search.some(pattern => matchPattern(path, pattern));
  }

  return matchPattern(path, search);
};

const matchPattern = (path, pattern) => {
  // Support wildcard '*' in pattern like /patients/patient-detail/*/lab
  const regex = new RegExp('^' + pattern.replace(/\*/g, '[^/]+') + '$');
  return regex.test(path);
};
const checkActiveMainOrSub = (searchSegments, currentUrl = '') => {
 const url = currentUrl || usePage().url;
  const path = url.split('?')[0];
  const segments = path.replace(/^\/|\/$/g, '').split('/'); // clean slashes and split

  const needles = Array.isArray(searchSegments) ? searchSegments : [searchSegments];

  return needles.some(needle => segments.includes(needle));
};

const exactMatchUrl = (link, currentUrl = '') => {
  const url = currentUrl || usePage().url;
  const currentPath = url.split('?')[0];
  return currentPath === link;
};

const getMenuClass = (keys, type, currentUrl = '') => {
  let className = '';
  const isActive = type === 'link' ? checkActive(keys, currentUrl) : checkActiveMainOrSub(keys, currentUrl);

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
      className = `menu-link ${isActive ? 'active' : ''}`;
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
