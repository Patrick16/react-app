import {useHistory} from 'react-router-dom';
import PokemonCard from "../../components/PokemonCard";
import {useState, useEffect} from 'react';
import database from "../../service/firebase";

import s from './game.module.css';

const Game = () => {
    const [cards, changeCard] = useState({})
    const [isCardAdded, addCard] = useState(false);
    const history = useHistory();

    const getCardsFromDB = () => {
        database.ref('pokemons').once('value', (snapshot) => {
            changeCard(snapshot.val());
        });
    }
    const saveCardToDB = (key, card) => {
        database.ref('pokemons/' + key).set(card).then(
            () => addCard(prev => !prev));
    }
    const deleteCardFromDB = (key) => {
        database.ref('pokemons/' + key).remove().then(
            () => addCard(prev => !prev));
    }


    const getRandomCard = () => {
        const array = Object.values(cards);
        const index = Math.floor(Math.random() * Math.floor(array.length));
        return array[index];
    }
    const getLastCardKey = () => {
        const array = Object.keys(cards);
        return array[array.length - 1];
    }

    const onAddCard = () => {
        const newKey = database.ref().child('pokemons').push().key;
        saveCardToDB(newKey, getRandomCard());
        ;
    }
    const onRemoveCard = () => {
        const newKey = database.ref().child('pokemons').push().key;
        deleteCardFromDB(getLastCardKey());
    }

    const onClickCard = (id) => {
        changeCard(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                }
                acc[item[0]] = pokemon;
                saveCardToDB(item[0], pokemon);
                return acc;
            }, {});
        });
    }

    const gotoHomeButtonHandler = () => {
        history.push('/');
    }

    useEffect(() => {
        getCardsFromDB();
    }, [isCardAdded]);

    return (
        <>
            <header className={s.root}>
                <div className={s.container}>
                    <h1>Game page</h1>
                    <div>
                        <button onClick={onAddCard}>
                            Add card
                        </button>
                        <button onClick={onRemoveCard}>
                            Remove last card
                        </button>
                    </div>
                    <div className={s.flex}>
                        {
                            Object.entries(cards).map(([key, item]) => {
                                return <PokemonCard
                                    key={key}
                                    name={item.name}
                                    img={item.img}
                                    id={item.id}
                                    values={item.values}
                                    type={item.type}
                                    isActive={item.active}
                                    onClickCard={onClickCard}
                                />
                            })
                        }
                    </div>
                    <button onClick={gotoHomeButtonHandler}>
                        Go home
                    </button>
                </div>
            </header>
        </>
    );
}

export default Game;