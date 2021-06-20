import firebase from "firebase/app";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "coderhouse-ecommerce-app.firebaseapp.com",
  projectId: "coderhouse-ecommerce-app",
  storageBucket: "coderhouse-ecommerce-app.appspot.com",
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
