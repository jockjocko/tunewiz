import { initializeApp, FirebaseOptions } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
const firebaseConfig: FirebaseOptions = {
    apiKey: 'AIzaSyCnvAO2DbxsYw7lkmJdOU328mRMhlzLfZg',
    authDomain: 'tunewiz-220ca.firebaseapp.com',
    databaseURL: 'https://tunewiz-220ca-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'tunewiz-220ca',
    storageBucket: 'tunewiz-220ca.appspot.com',
    messagingSenderId: '470270913584',
    appId: '1:470270913584:web:ba41bd3aeb8718cc24d1f5',
    measurementId: 'G-MQZKX8KBPG',
};

const FirebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FirebaseApp);

export const Auth = getAuth(FirebaseApp);

export default FirebaseApp;
