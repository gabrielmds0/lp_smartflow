import { ApplicationConfig } from '@angular/core';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from '../environments/environment.development';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Firebase initialization
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // Firestore initialization
    provideFirestore(() => getFirestore())
  ]
};