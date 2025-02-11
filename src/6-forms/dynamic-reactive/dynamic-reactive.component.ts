import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-dynamic-reactive',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './dynamic-reactive.component.html',
  styleUrl: './dynamic-reactive.component.css'
})
export class DynamicReactiveComponent {
  userForm : FormGroup;

  constructor(private fb:FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phones: this.fb.array(['', [Validators.required, Validators.minLength(10)]])
    })
  }

  addPhones(){
    this.userForm.get('phones')?.value?.push(new FormControl('', Validators.required));
  }

  formReset(){
    this.userForm.reset();
  }

  onSubmit() {
    if(this.userForm.valid) {
      console.log("Form Verisi:", this.userForm.value)
    }
  }
}
