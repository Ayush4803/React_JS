// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOoQ5mqMRJKsn9mSJeBcbyFk2ZkvYcAsc",
  authDomain: "bhojanaalay.firebaseapp.com",
  projectId: "bhojanaalay",
  storageBucket: "bhojanaalay.firebasestorage.app",
  messagingSenderId: "1098288958124",
  appId: "1:1098288958124:web:f439841d258776b03d2d09",
  measurementId: "G-C0P6RLKQZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);