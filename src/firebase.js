// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAENm161FCg4ozJ0lDdZRENqFennrc2ySo",
  authDomain: "authdev-c00bc.firebaseapp.com",
  projectId: "authdev-c00bc",
  storageBucket: "authdev-c00bc.appspot.com",
  messagingSenderId: "399094797983",
  appId: "1:399094797983:web:984896cc9988fe0c2f34aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


