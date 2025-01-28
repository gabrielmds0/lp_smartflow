import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

// Interface to define the shape of our contact data
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  terms: boolean;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private firestore = inject(Firestore);

  async addContact(contactData: ContactFormData) {
    try {
      // Get a reference to our contacts collection
      const contactsRef = collection(this.firestore, 'contacts');
      
      // Add the document and await its completion
      const docRef = await addDoc(contactsRef, {
        ...contactData,
        // Ensure timestamp is handled properly by Firestore
        timestamp: contactData.timestamp || new Date()
      });

      console.log('Document written with ID: ', docRef.id);
      return docRef;
      
    } catch (error) {
      console.error('Error adding contact: ', error);
      throw error; // Re-throw to handle in component
    }
  }
}