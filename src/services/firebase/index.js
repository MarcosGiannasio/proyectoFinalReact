import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "giann-ecommerce",
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENTID

/*   apiKey: "AIzaSyCVDHd2l9dPmIO0Mhq62duSROsvz8cF9Fg",
  authDomain: "giann-ecommerce.firebaseapp.com",
  projectId: "giann-ecommerce",
  storageBucket: "giann-ecommerce.appspot.com",
  messagingSenderId: "806635507107",
  appId: "1:806635507107:web:835bdc7e9bb8bdca211e16",
  measurementId: "G-3BDB4MJMX9" */
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);