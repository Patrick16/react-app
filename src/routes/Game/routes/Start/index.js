import PokemonCard from "../../../../components/PokemonCard";
import {useContext,useEffect,useState} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';
import {PokemonContext} from "../../../../context/pokemonContext";
import {FireBaseContext} from "../../../../context/fireBaseContext";

import s from './start.module.css';

const StartPage = () => {
    const pokemonContext = useContext(PokemonContext);
    const history = useHistory();
    const onStartClick = () => {
        history.push('/game/board')
    }
    const onHomeClick = () => {
        history.push('/');
    }
    const firebaseContext = useContext(FireBaseContext);
    const [cards, setPokemons] = useState({});

    const copyObject = (source, callBack) => {
        return Object.entries(source).reduce((acc, item) => {
            const pokemon = {...item[1]};
            callBack(pokemon);
            acc[item[0]] = pokemon;
            return acc;
        }, {});
    }
    const getCardsFromDB = async () => {
        const response = await firebaseContext.getPokemonsOnce();
        setPokemons(copyObject(response, pokemon => {
            pokemon.active=true;
        }))
    }

    const selectCard = (id) => {
        setPokemons(prev=>copyObject(prev, pokemon => {
            if (pokemon.id === id) {
                pokemon.isSelected = !pokemon.isSelected;
            }}));
    }


    useEffect(async () => {
        await getCardsFromDB();
    }, []);

    useEffect(() => {
        pokemonContext.selectPokemon(Object.values(cards).filter(x=>x.isSelected));
    }, [cards]);

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
                        Object.entries(cards).map(([key, item]) => {
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
                                isSelected={item.isSelected}
                                onClickCard={selectCard}
                            />
                        })
                    }
                </div>
                <button onClick={onHomeClick}>
                    Go home
                </button>
            </div>
        </>
    );
}

export default StartPage;