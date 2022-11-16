
//student
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDti3_cAkYq891mQQfV3Ii-dZq0YrkRRPY",
  authDomain: "student-fd81d.firebaseapp.com",
  projectId: "student-fd81d",
  storageBucket: "student-fd81d.appspot.com",
  messagingSenderId: "815243159723",
  appId: "1:815243159723:web:d3d62bdd75de247ae6efee",
  measurementId: "G-ZVR7CHWQ5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;