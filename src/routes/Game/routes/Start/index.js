import PokemonCard from "../../../../components/PokemonCard";
import {useContext,useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import {PokemonContext} from "../../../../context/pokemonContext";

import s from './start.module.css';

const StartPage = () => {
    const pokemonContext = useContext(PokemonContext);
    const history = useHistory();
    console.log('s',s.card);
    const onStartClick = () => {
        history.push('/game/board')
    }
    const gotoHomeButtonHandler = () => {
        history.push('/');
    }

   /* const changeState = (prevState, callBack) => {
        return Object.entries(prevState).reduce((acc, item) => {
            const pokemon = {...item[1]};
            callBack(pokemon);
            acc[item[0]] = pokemon;
            return acc;
        }, {});
    }*/
   /* const onSelectCard = (id) => {
        setPokemons(prevState => changeState(prevState, pokemon => {
            if (pokemon.id === id) {
                pokemon.isSelected = !pokemon.isSelected;
            }
        }));
    }*/
    const onClickCard=(id)=>{
    }


    return (
        <>
            <div>
                <div>
                    <button onClick={onStartClick}>
                        Start Game
                    </button>
                </div>
                <div className={s.flex}>
                    {
                        Object.entries(pokemonContext.cards).map(([key, item]) => {
                            return <PokemonCard
                                key={key}
                                minimize={false}
                                className={s.card}
                                name={item.name}
                                img={item.img}
                                id={item.id}
                                values={item.values}
                                type={item.type}
                                isActive={item.active}
                                isSelected={item.selected}
                                onClickCard={onClickCard}
                            />
                        })
                    }
                </div>
                <button onClick={gotoHomeButtonHandler}>
                    Go home
                </button>
            </div>
        </>
    );
}

export default StartPage;