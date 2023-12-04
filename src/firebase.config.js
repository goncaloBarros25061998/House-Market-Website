import { initializeApp } from "firebase/app";
import{getFireStore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm9N2e9mAZ-I4ZlM9sfiemTC9CS8r1380",
  authDomain: "house-marketplace-app-31d62.firebaseapp.com",
  projectId: "house-marketplace-app-31d62",
  storageBucket: "house-marketplace-app-31d62.appspot.com",
  messagingSenderId: "308125920754",
  appId: "1:308125920754:web:b5df05c40f9668eeb3cf6b"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

export const db =getFireStore()