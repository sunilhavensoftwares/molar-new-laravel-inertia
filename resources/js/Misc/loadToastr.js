// utils/toastrLoader.js
import 'toastr/build/toastr.min.css';
let toastrPromise = null;

export async function loadToastr() {
  if (typeof window !== 'undefined' && window.toastr) {
    return window.toastr;
  }

  if (!toastrPromise) {
    toastrPromise = import('toastr').then((toastrModule) => {
      const toastr = toastrModule.default || toastrModule;
      window.toastr = toastr;

      toastr.options = {
        closeButton: true,
        timeOut: 3000,
        progressBar: true,
        positionClass: 'toast-top-right',
      };

      return toastr;
    });
  }

  return toastrPromise;
}

// ✅ Reusable helpers
export async function showSuccessToast(message, title = '') {
  const toastr = await loadToastr();
  toastr.success(message, title);
}

export async function showErrorToast(message, title = '') {
  const toastr = await loadToastr();
  toastr.error(message, title);
}

export async function showInfoToast(message, title = '') {
  const toastr = await loadToastr();
  toastr.info(message, title);
}

export async function showWarningToast(message, title = '') {
  const toastr = await loadToastr();
  toastr.warning(message, title);
}
