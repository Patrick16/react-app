import {PokemonContext} from "../../../../context/pokemonContext";
import {FireBaseContext} from "../../../../context/fireBaseContext";
import {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import PokemonCard from "../../../../components/PokemonCard";
import s from "./finish.module.css";

const FinishPage = () => {
    const context = useContext(PokemonContext);
    const database = useContext(FireBaseContext);
    const [card, chooseCard] = useState({});
    const [cardsToChoose, changeCard] = useState(
        () => context.playersPokemons[1].map(i => ({...i})));

    const history = useHistory();
    const onChooseCard = () => {
        if(card){
            card.isSelected=false;
            database.addPokemon(card, ()=>{});
        }
        history.replace('/game');
    }
    const selectCard = (id) => {
        changeCard(cards => {
            cards.map(card => {
                if (card.id === id) {
                    card.isSelected = !card.isSelected;
                    if(card.isSelected){
                        chooseCard(card);
                    }else {
                        chooseCard(null);
                    }
                } else {
                    card.isSelected = false;
                }
            });
            return [...cards];
        })
    }

    return (
        <>
            <div>
                <div className={s.flex}>
                    {
                        context.playersPokemons[0].map(item => {
                            return <PokemonCard
                                key={item.id}
                                className={s.card}
                                name={item.name}
                                img={item.img}
                                id={item.id}
                                values={item.values}
                                type={item.type}
                                isActive={true}/>
                        })
                    }
                </div>
                <div>
                    <button onClick={onChooseCard}>
                        End Game.
                    </button>
                </div>
                <div className={s.flex}>
                    {
                        cardsToChoose.map(item => {
                            return <PokemonCard
                                key={item.id}
                                className={s.card}
                                name={item.name}
                                img={item.img}
                                id={item.id}
                                values={item.values}
                                type={item.type}
                                isActive={true}
                                isSelected={item.isSelected}
                                onClickCard={selectCard}
                            />
                        })
                    }
                </div>
            </div>

        </>
    );
}

export default FinishPage;