import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../core/components/ui/button/button.component';
import { InputComponent } from '../../../../core/components/ui/forms/input/input.component';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-page',
  imports: [ButtonComponent, InputComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  registerForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  submitted = false;

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      alert(`
        First Name: ${this.registerForm.value.first_name}
        Last Name: ${this.registerForm.value.last_name}
        Username: ${this.registerForm.value.username}
        password: ${this.registerForm.value.password}
      `);
    }
  }
}
