import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() control!: FormControl;
  @Input() submitted: boolean = false;

  get errorMessage() {
    if (!this.submitted || !this.control.errors) {
      return '';
    }

    const errors = this.control.errors;

    if (errors['required']) {
      return `${this.label} is required!`;
    }

    if (errors['email']) {
      return `${this.label} must be a valid email address`;
    }

    if (errors['minlength']) {
      return `${this.label} must be a least ${errors['minlength'].requiredLength} characters!`;
    }

    return '';
  }
}
