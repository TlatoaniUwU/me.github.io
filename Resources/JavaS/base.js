
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
import { collection, addDoc } from "firebase/firestore"; 
import { collection, getDocs } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMMDMqoEbDVoyKvJ9cOnm4vWHIoD1kgps",
  authDomain: "justme-35a56.firebaseapp.com",
  projectId: "justme-35a56",
  storageBucket: "justme-35a56.firebasestorage.app",
  messagingSenderId: "660759219282",
  appId: "1:660759219282:web:5444f810801087eb3ea38b",
  measurementId: "G-E64H9S2TMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const aboutMe = await getDocs(collection(db, "Data.cv.AboutMe"))

document.getElementById("aboutMe").setAttribute("",aboutMe)