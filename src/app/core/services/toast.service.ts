import { Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';
import type { ExternalToast } from 'ngx-sonner';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  success(message: string, options?: ExternalToast) {
    return toast.success(message, options);
  }

  error(message: string, options?: ExternalToast) {
    return toast.error(message, options);
  }

  loading(message: string, options?: ExternalToast) {
    return toast.loading(message, options);
  }

  promise<T>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string;
      error: string;
    },
    options?: ExternalToast
  ) {
    return toast.promise(promise, messages);
  }

  custom(jsx: any, options?: ExternalToast) {
    return toast.custom(jsx, options);
  }

  dismiss(toastId?: string | number) {
    toast.dismiss(toastId);
  }
}
