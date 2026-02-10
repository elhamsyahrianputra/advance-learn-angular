import { inject, Injectable, signal } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service';
import { ApiService } from '../../../core/services/api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiService = inject(ApiService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  loading = signal(false);

  login(request: any) {
    this.loading.set(true);
    return this.apiService.post('/auth/login', request.value).subscribe({
      next: () => {
        this.toastService.success('Login successfully');
        this.loading.set(false);
        this.router.navigate(['/dashboard']);
      },
      error: (response: any) => {
        this.toastService.error(response.error.message);
        this.loading.set(false);
      },
    });
  }
}
