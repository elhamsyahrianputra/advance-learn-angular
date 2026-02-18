import { Component, inject } from '@angular/core';
import { InputComponent } from '../../../../core/components/ui/forms/input/input.component';
import { ButtonComponent } from '../../../../core/components/ui/button/button.component';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [InputComponent, ButtonComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  authService = inject(AuthService);

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  submitted = false;

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm);
    }
  }
}
