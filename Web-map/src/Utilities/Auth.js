// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdEmpT1QiTx7ePyWqYPmETcoOb9sMbniQ",
  authDomain: "web-map-e942d.firebaseapp.com",
  projectId: "web-map-e942d",
  storageBucket: "web-map-e942d.appspot.com",
  messagingSenderId: "234923034646",
  appId: "1:234923034646:web:778a19980577e12aed8d37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const storage = getStorage(firebaseConfig);
export const auth = getAuth(app);
