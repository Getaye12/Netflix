import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDG774tX6xYVYVjwdWJeue4ygYqn3Ih6Rg",
  authDomain: "netflix-b7b57.firebaseapp.com",
  databaseURL:
    "https://netflix-b7b57-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "netflix-b7b57",
  storageBucket: "netflix-b7b57.appspot.com",
  messagingSenderId: "485149722406",
  appId: "1:485149722406:web:78f0ec6fb445110a7ba3e7",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);

export { firebase };

export default firebase;
