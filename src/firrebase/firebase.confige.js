// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyBuh8nuTUlQdplYmd7ASvx7j6w0jfqfdHg",
     authDomain: "user-email-password-auth-d5866.firebaseapp.com",
     projectId: "user-email-password-auth-d5866",
     storageBucket: "user-email-password-auth-d5866.appspot.com",
     messagingSenderId: "873771582729",
     appId: "1:873771582729:web:e0e87c52139fd033377fd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;