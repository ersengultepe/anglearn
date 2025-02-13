import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Fieldset} from 'primeng/fieldset';

@Component({
  selector: 'app-reactive-forms',
  imports: [
    ReactiveFormsModule,
    NgIf,
    Fieldset
  ],
  templateUrl: './reactive-forms.component.html',
  standalone: true,
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
 userForm : FormGroup;

 constructor() {
   this.userForm = new FormGroup({
     name: new FormControl('', Validators.required),
     email: new FormControl('', [Validators.required, Validators.email]),
     password: new FormControl('', [Validators.required, Validators.minLength(6)])
   })
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
