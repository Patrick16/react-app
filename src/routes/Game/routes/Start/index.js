import PokemonCard from "../../../../components/PokemonCard";
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import s from './start.module.css';
import {useDispatch, useSelector} from "react-redux";
import {
    fetchPokemonsReject,
    getPokemonsAsync,
    loadedPokemons, selectedPokemons,
    selectPokemons
} from "../../../../store/pokemon";

const StartPage = () => {
    const pokemonsRedux = useSelector(loadedPokemons);
    const player1 = useSelector(selectedPokemons);
    const dispatch = useDispatch();
    const [cards, setPokemons] = useState([]);
    const history = useHistory();
    console.log('pokemonsRedux', pokemonsRedux);
    console.log('pokemonsCards', cards);

    const onStartClick = () => {
        dispatch(selectPokemons(cards.filter(x => x.isSelected)));
        history.push('/game/board');
    }
    const onHomeClick = () => {
        history.push('/');
    }
    const selectCard = (id) => {
        setPokemons(prev => {
            prev.map(card => {
                if(card.id===id){
                    card.isSelected=!card.isSelected
                }
            })
            return [...prev];
        });
    }

    useEffect(async () => {
        dispatch(fetchPokemonsReject);
        await dispatch(getPokemonsAsync());
    }, []);

    useEffect(() => {
        setPokemons(pokemonsRedux.map(x=>({...x})));
    }, [pokemonsRedux]);

    /*    useEffect(() => {
            pokemonContext.selectPokemon(Object.values(cards).filter(x => x.isSelected));
        }, [cards]);*/

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
                        cards.map((item) => {
                            return <PokemonCard
                                key={item.id}
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