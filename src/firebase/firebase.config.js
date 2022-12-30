// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUk1Hvltv0tBnij78UiH8m0G1nBZBDLu8",
  authDomain: "my-task-app-bb3c4.firebaseapp.com",
  projectId: "my-task-app-bb3c4",
  storageBucket: "my-task-app-bb3c4.appspot.com",
  messagingSenderId: "856838978371",
  appId: "1:856838978371:web:36cfd4d57ac2ddd29d4df6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;