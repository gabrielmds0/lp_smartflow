import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cta.component.html'
})
export class CtaComponent implements OnInit {
  // We use inject() for our dependencies in standalone components
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);

  // Properties that match your template's needs
  contactForm!: FormGroup;
  isLoading = false;
  errorMessage = '';

  ngOnInit() {
    // Initialize the form with validators that match your HTML requirements
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: [''],
      terms: [false, [Validators.requiredTrue]]
    });
  }

  async onSubmit() {
    // Don't proceed if the form is invalid
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    try {
      // Add a timestamp to the form data
      const contactData = {
        ...this.contactForm.value,
        timestamp: new Date(),
      };

      await this.contactService.addContact(contactData);
      
      // Reset form on success
      this.contactForm.reset();
      // You might want to show a success message here
      
    } catch (error) {
      this.errorMessage = 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.';
      console.error('Error submitting form:', error);
    } finally {
      this.isLoading = false;
    }
  }
}