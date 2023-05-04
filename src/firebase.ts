import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "ny-times-pet-project.firebaseapp.com",
  projectId: "ny-times-pet-project",
  storageBucket: "ny-times-pet-project.appspot.com",
  messagingSenderId: "473433744300",
  appId: "1:473433744300:web:84760958edc4b13facd009",
  measurementId: "G-D5K74SNL6S"
};

export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);