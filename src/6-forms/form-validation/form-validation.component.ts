import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {onlyLettersValidator} from './only-letters-validator';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-form-validation',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './form-validation.component.html',
  standalone: true,
})
export class FormValidationComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      myField: ['', [Validators.required, onlyLettersValidator()]]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted successfully!');
    } else {
      console.log('Form is invalid!');
    }
  }
}
