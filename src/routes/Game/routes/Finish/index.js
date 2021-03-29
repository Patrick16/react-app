import {FireBaseContext} from "../../../../context/fireBaseContext";
import {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import PokemonCard from "../../../../components/PokemonCard";
import s from "./finish.module.css";
import {useSelector} from "react-redux";
import {opponentPokemons, selectedPokemons} from "../../../../store/pokemon";

const FinishPage = () => {
    const database = useContext(FireBaseContext);
    const player1=useSelector(selectedPokemons);
    const player2=useSelector(opponentPokemons);
    const [card, chooseCard] = useState(null);

    const [cardsToChoose, changeCard] = useState(
        () => player2.map(i => ({...i})));

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

    const history = useHistory();
    const onChooseCard = () => {
        if(card){
            card.isSelected=false;
            database.addPokemon(card);
        }
        history.replace('/game');
    }
    return (
        <>
            <div>
                <div className={s.flex}>
                    {
                        player1.map(item => {
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