
import { initializeApp } from 'firebase/app';

// Replace these values with your project's ones
// (you can find such code in the Console)
const firebaseConfig = {
  apiKey: "AIzaSyDsivST0tVQe5Ervx4aQhlgg1zM1V0wf1A",
  authDomain: "examble-c123d.firebaseapp.com",
  projectId: "examble-c123d",
  storageBucket: "examble-c123d.appspot.com",
  messagingSenderId: "744836102630",
  appId: "1:744836102630:web:d157365ec6eddaa97abe27",
  measurementId: "G-YR6XJFMPPJ"
};

export const firebaseApp = initializeApp(firebaseConfig);
