type ToastFn = (message: string) => void;
let _listener: ToastFn | null = null;

export const toast = {
  show: (msg: string) => _listener?.(msg),
  _register: (fn: ToastFn) => { _listener = fn; },
  _unregister: () => { _listener = null; },
};
