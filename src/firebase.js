import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCHWtZnVJeOJzlnAfdGdDHGD3rEVoWJLAU",
  authDomain: "social-react-e630c.firebaseapp.com",
  projectId: "social-react-e630c",
  storageBucket: "social-react-e630c.appspot.com",
  messagingSenderId: "560097046222",
  appId: "1:560097046222:web:68bcd6e8d99e8c751c2a9f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore()

export default db