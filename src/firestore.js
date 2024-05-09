// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwPUTI_2gcboP1WQrZ_KHBV8STI13i1mg",
  authDomain: "portofolio-ef4ca.firebaseapp.com",
  projectId: "portofolio-ef4ca",
  storageBucket: "portofolio-ef4ca.appspot.com",
  messagingSenderId: "689138104745",
  appId: "1:689138104745:web:eff77771673d8f4232ecb8",
  measurementId: "G-4VT5S0H8DG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default getFirestore(app);
