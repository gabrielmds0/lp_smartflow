// This file sets up the core Firebase initialization
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from '../src/environments/environment';

// Initialize the Firebase app with our credentials
export const app = initializeApp(environment.firebase);

// Create and export the Firestore instance that we'll use throughout the app
export const db = getFirestore(app);