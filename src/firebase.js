// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe4NOprqhhiAa5nPfEooAjE-HaIw7JxBs",
  authDomain: "fnb-hackaton-app.firebaseapp.com",
  projectId: "fnb-hackaton-app",
  storageBucket: "fnb-hackaton-app.appspot.com",
  messagingSenderId: "725410072256",
  appId: "1:725410072256:web:256d077b49611dc4270f25",
  measurementId: "G-XGX73T3ELS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);