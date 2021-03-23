import {PokemonContext} from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";
import {useContext} from "react";

import s from './style.module.css';

const BoardPage = () => {
    const pokemonContext = useContext(PokemonContext);

    return (
            <div className={s.root}>
                <div className={s.playerOne}>
                    {
                        Object.entries(pokemonContext.selectedCards).map(([key, item]) => {
                            return <PokemonCard
                                key={key}
                                className={s.card}
                                minimize={true}
                                name={item.name}
                                img={item.img}
                                id={item.id}
                                values={item.values}
                                type={item.type}
                                isActive={item.active}
                            />
                        })
                    }
                </div>
                <div className={s.board}>
                    <div className={s.boardPlate}>1</div>
                    <div className={s.boardPlate}>2</div>
                    <div className={s.boardPlate}>3</div>
                    <div className={s.boardPlate}>4</div>
                    <div className={s.boardPlate}>5</div>
                    <div className={s.boardPlate}>6</div>
                    <div className={s.boardPlate}>7</div>
                    <div className={s.boardPlate}>8</div>
                    <div className={s.boardPlate}>9</div>
                </div>
            </div>
    );
};

export default BoardPage;