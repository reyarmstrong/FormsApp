import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from '../../../shared/validators/validators';

@Component({
  selector: 'app-register-page',
  standalone: false,

  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      username: ['', [Validators.required, cantBeStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    });
  }

  isValidField(field: string): void {
    //TODO: get validation from service
  }

  onSubmit(): void {
    this.myForm.markAllAsTouched();
  }
}
