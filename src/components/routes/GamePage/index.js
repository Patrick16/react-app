import {useHistory} from 'react-router-dom';
import PokemonCard from "../../PokemonCard";
import {useState} from 'react';

import pokemons from "../../PokemonCard/pokemons.json";
import s from './game.module.css';

const Game = () => {
    const [cards, changeCard] = useState(pokemons.items)
    const history = useHistory();

    const onClickCard = (id) => {
        changeCard(array =>
        {
            array.find(x => x.id === id).active = true;
            return [...array];
        });
    }
    const gotoHomeButtonHandler = () => {
        history.push('/');
    }

    return (
        <>
            <header className={s.root}>
                <div className={s.container}>
                    <h1>Game page.</h1>
                    <div className={s.flex}>
                        {
                            cards.map((item) =>
                                <PokemonCard
                                    key={item.id}
                                    name={item.name}
                                    img={item.img}
                                    id={item.id}
                                    values={item.values}
                                    type={item.type}
                                    isActive={item.active}
                                    onClickCard={onClickCard}
                                />)
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