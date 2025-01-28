// src/environments/environment.development.ts
export interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  }
  
  // We first define our environment interface to get good TypeScript support
  interface Environment {
    production: boolean;
    firebase: FirebaseConfig;
  }
  
  // Then we implement that interface in our environment object
  export const environment: Environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyABFH72qEH5cglyq27wSkn-DhyK-vOoXOM",
        authDomain: "forms-cronus.firebaseapp.com",
        projectId: "forms-cronus",
        storageBucket: "forms-cronus.firebasestorage.app",
        messagingSenderId: "850063397608",
        appId: "1:850063397608:web:a326c5b08ab920e178af5d",
    }
  };