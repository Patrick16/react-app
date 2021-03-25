import PokemonCard from "../PokemonCard";
import s from "../../components/PlayerBoard/style.module.css";
import {useState} from "react";
import cn from 'classnames';

const PlayerBoard = ({player, cards, onChooseCard}) => {
    const [isSelected, selectCard] = useState(null)
    return (
        <>
            {
                cards.map(item => (
                    <div
                        className={cn(s.cardBoard, {
                            [s.selected] : isSelected === item.id
                        })}
                          onClick={()=>{
                              selectCard(item.id);
                              onChooseCard && onChooseCard({
                                  ...item,
                                  player
                              });
                          }}>
                        <PokemonCard
                            key={item.id}
                            minimize={true}
                            name={item.name}
                            img={item.img}
                            id={item.id}
                            values={item.values}
                            type={item.type}
                            isActive={true}
                        />
                    </div>
                ))
            }
        </>
    );
}
export default PlayerBoard;