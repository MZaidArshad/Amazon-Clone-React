import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkHvhS7rIMBMbp9yfFo8JeN0kT0E1B0_4",
  authDomain: "clone-82843.firebaseapp.com",
  projectId: "clone-82843",
  storageBucket: "clone-82843.appspot.com",
  messagingSenderId: "959441490299",
  appId: "1:959441490299:web:fe52d4a07238bce5902dde",
  measurementId: "G-K87PDX4FTW",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
