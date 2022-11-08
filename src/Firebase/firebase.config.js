// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_DUy9njxuWk8u0TmvYmRXNF-OXk343d4",
  authDomain: "food-corner-39565.firebaseapp.com",
  projectId: "food-corner-39565",
  storageBucket: "food-corner-39565.appspot.com",
  messagingSenderId: "362459185298",
  appId: "1:362459185298:web:7a3cbcd2dac386be01664b",
  measurementId: "G-HBMWSCMWMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;