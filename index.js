/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {firebase} from '@react-native-firebase/app';

// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyDT9hbxUuhStcUHpjZKgs13gtA7boWKNac',
  authDomain: 'rn-firebase-analytics-example.firebaseapp.com',
  projectId: 'rn-firebase-analytics-example',
  storageBucket: 'rn-firebase-analytics-example.appspot.com',
  messagingSenderId: '599826730800',
  appId: '1:599826730800:web:830e2f4e0e8bf08fb1c2f5',
  measurementId: 'G-R2X4C5JH19',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

AppRegistry.registerComponent(appName, () => App);
