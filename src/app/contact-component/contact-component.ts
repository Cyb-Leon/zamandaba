import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-component',
  imports: [],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      topic: ['consulting']
    });

  }
  async onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      this.isSubmitted = true;
      this.isSubmitting = false;

      // Reset after 3 seconds
      setTimeout(() => {
        this.isSubmitted = false;
        this.contactForm.reset({ topic: 'consulting' });
      }, 3000);
    }
  }
}
