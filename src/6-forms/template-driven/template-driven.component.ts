import {Component, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgIf} from '@angular/common';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-template-driven',
  imports: [
    FormsModule,
    NgIf,
    InputText
  ],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  @ViewChild('userForm') userForm!: NgForm;

  user = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Form Gönderildi!', this.user);
    console.log('Form verisi:', this.userForm.value);
  }
}
