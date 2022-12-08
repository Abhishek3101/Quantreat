import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDiHTDw_CGSyzYr4doPGjnJD6pxzUfz3As",
    authDomain: "quant-club-website.firebaseapp.com",
    projectId: "quant-club-website",
    storageBucket: "quant-club-website.appspot.com",
    messagingSenderId: "563144689725",
    appId: "1:563144689725:web:606e69a9a245ec29fe0254",
    measurementId: "G-DC6W5YXHJC"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)
export {db};