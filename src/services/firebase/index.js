import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCVDHd2l9dPmIO0Mhq62duSROsvz8cF9Fg",
  authDomain: "giann-ecommerce.firebaseapp.com",
  projectId: "giann-ecommerce",
  storageBucket: "giann-ecommerce.appspot.com",
  messagingSenderId: "806635507107",
  appId: "1:806635507107:web:835bdc7e9bb8bdca211e16",
  measurementId: "G-3BDB4MJMX9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);