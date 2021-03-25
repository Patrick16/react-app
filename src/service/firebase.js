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

class Firebase {
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
    }
    postPokemon = (key, pokemon, callBack) => {
        this.database.ref('pokemons/' + key).set(pokemon).then(() => callBack());
    }
    addPokemon = (pokemon, callBack) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.postPokemon(newKey, pokemon, callBack);
    }
}


export default Firebase;