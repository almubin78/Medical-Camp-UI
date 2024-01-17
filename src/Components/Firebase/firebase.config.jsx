//myjob6563
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};
// const firebaseConfig = {
//   apiKey:
//   authDomain:
//   projectId:
//   storageBucket:
//   messagingSenderId:
//   appId:
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;