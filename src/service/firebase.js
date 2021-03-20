import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAiKnY3nOjI2uOiOL6hCP8knXFsKwtfWsA",
    authDomain: "pokemon-game-bbe62.firebaseapp.com",
    databaseURL: "https://pokemon-game-bbe62-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-bbe62",
    storageBucket: "pokemon-game-bbe62.appspot.com",
    messagingSenderId: "1000406699483",
    appId: "1:1000406699483:web:9d5233b1ff6e4d560cebfe"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;