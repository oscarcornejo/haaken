import firebase from "firebase/app";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxQ6xQQ_ATn4RJ05sCRgjG1nh7NAHIGLo",
  authDomain: "coderhouse-ecommerce-app.firebaseapp.com",
  projectId: "coderhouse-ecommerce-app",
  storageBucket: "coderhouse-ecommerce-app.appspot.com",
  messagingSenderId: "330162551653",
  appId: "1:330162551653:web:f6703f84add4e1fc29ff8c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
