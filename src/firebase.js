// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBXrWY7bbePBkza9_PGVOovpfIiYcWZq20',
  authDomain: 'soulipie.firebaseapp.com',
  projectId: 'soulipie',
  storageBucket: 'soulipie.appspot.com',
  messagingSenderId: '201876828788',
  appId: '1:201876828788:web:c19120f57065b2ad7f9721',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
