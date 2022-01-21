import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCcwObcauq-8mDNlx3yZ4DIq5mJ58X1JR8",
  authDomain: "netflix-633cc.firebaseapp.com",
  projectId: "netflix-633cc",
  storageBucket: "netflix-633cc.appspot.com",
  messagingSenderId: "71569621599",
  appId: "1:71569621599:web:c0f0c7a73101ab2ae2d1ea",
  measurementId: "G-5MV91FZNN7",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export default storage;
