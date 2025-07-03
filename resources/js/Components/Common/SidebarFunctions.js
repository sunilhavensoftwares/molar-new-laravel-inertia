import { usePage } from '@inertiajs/react';

/* ------------------------------------------------------------------ */
/* 1.  wildcard / pattern match (unchanged)                           */
/* ------------------------------------------------------------------ */
const checkActive = (search, currentUrl = '') => {
  const url  = currentUrl || usePage().url;
  const path = url.split('?')[0];                // strip query

  if (Array.isArray(search)) {
    return search.some(pattern => matchPattern(path, pattern));
  }
  return matchPattern(path, search);
};
const getFirstSegment = (path) => {
  return path.replace(/^\/+|\/+$/g, '').split('/')[0] || '';
};
const matchPattern = (path, pattern) => {
  // support '*' wildcard, e.g. /patients/*/lab
  const regex = new RegExp('^' + pattern.replace(/\*/g, '[^/]+') + '$');
  return regex.test(path);
};

/* ------------------------------------------------------------------ */
/* 2.  segment containment for “main / sub / item” (unchanged)        */
/* ------------------------------------------------------------------ */
const checkActiveMainOrSub = (searchSegments, currentUrl = '') => {
  const url      = currentUrl || usePage().url;
  const path     = url.split('?')[0];
  const segments = path.replace(/^\/|\/$/g, '').split('/'); // trim slashes → array

  const needles  = Array.isArray(searchSegments) ? searchSegments : [searchSegments];
  return needles.some(needle => segments.includes(needle));
};
const checkActiveMain = (needles, currentUrl = '') => {
  const url = currentUrl || usePage().url;
  const path = url.split('?')[0];
  const firstSegment = getFirstSegment(path);
  
  const list = Array.isArray(needles) ? needles : [needles];
  return list.includes(firstSegment);
};
/* ------------------------------------------------------------------ */
/* 3.  **exact** match helper – now accepts string **or** array       */
/* ------------------------------------------------------------------ */
const exactMatchUrl = (needle, currentUrl = '') => {
  const url         = currentUrl || usePage().url;
  const currentPath = url.split('?')[0];

  if (Array.isArray(needle)) {
    return needle.some(link => link === currentPath);
  }
  return currentPath === needle;
};

/* ------------------------------------------------------------------ */
/* 4.  class resolver – uses exactMatchUrl when type === 'link'       */
/* ------------------------------------------------------------------ */
const getMenuClass = (keys, type, currentUrl = '') => {
  let isActive = false;

  switch (type) {
    case 'link':  // <── exact match only
      isActive = checkActive(keys, currentUrl);
      return `menu-link ${isActive ? 'active' : ''}`;

    case 'main':
      isActive = checkActiveMain(keys, currentUrl);
      return `menu-item menu-sub-indention menu-accordion ${isActive ? 'show' : ''}`;

    case 'sub':
      isActive = checkActiveMain(keys, currentUrl);
      return `menu-sub menu-sub-accordion menu-active-bg px-lg-2 py-lg-4 w-lg-225px ${isActive ? 'show' : ''}`;

    case 'item':
      isActive = checkActiveMainOrSub(keys, currentUrl);
      return `menu-item menu-accordion ${isActive ? 'show' : ''}`;

    default:
      return '';
  }
};

/* ------------------------------------------------------------------ */
export default {
  checkActive,
  exactMatchUrl,
  getMenuClass,
};
/* ------------------------------------------------------------------ */
