import PokemonCard from "../../../../components/PokemonCard";
import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';

import s from './style.module.css';
import PlayerBoard from "../../../../components/PlayerBoard";
import {useDispatch, useSelector} from "react-redux";
import {selectedPokemons, takeOpponentPokemons} from "../../../../store/pokemon";

const BoardPage = () => {
    const history = useHistory();
    const [board, setBoard] = useState([]);
    const [steps, setSteps] = useState(0);
    const disaptch = useDispatch();
    const player1Pokemons = useSelector(selectedPokemons);
    const [player1, setPlayer1] = useState(() => player1Pokemons.map(item => ({
        ...item,
        possession: 'blue'
    })));
    const [player2, setPlayer2] = useState([]);
    const [chosenCard, chooseCard] = useState(null);

    const countWinner = (board, player1, player2) => {
        let points1 = player1.length;
        let points2 = player2.length;
        board.forEach(x => {
            if (x.card.possession === 'blue')
                points1++;
            if (x.card.possession === 'red')
                points2++;
        })
        return [points1, points2];
    }
    const onCellClick = async (position) => {
        if (chosenCard) {
            const params = {
                position,
                card: chosenCard,
                board
            }
            const response = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params),
            });
            const responseJson = await response.json();

            if (chosenCard.player === 1) {
                setPlayer1(prev => prev.filter(x => x.id !== chosenCard.id))
            }
            if (chosenCard.player === 2) {
                setPlayer2(prev => prev.filter(x => x.id !== chosenCard.id))
            }
            setBoard(responseJson.data);
            setSteps(prev => prev + 1);
        }
    }

    if (player1Pokemons.length !== 5) {
        alert('You should take 5 cards');
        history.replace('/game');
    }

    useEffect(async () => {
        const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardJson = await boardResponse.json();
        setBoard(boardJson.data);

        const playerResponse = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const playerJson = await playerResponse.json();
        setPlayer2(() => playerJson.data.map(item => ({
            ...item,
            possession: 'red'
        })));
        if (player1Pokemons.length == 5) {
            disaptch(takeOpponentPokemons(
                playerJson.data.map(item => ({...item}))));
        }
    }, []);

    useEffect(() => {
        if (steps === 9) {
            const [points1, points2] = countWinner(board, player1, player2);
            if (points1 > points2) {
                alert('Player 1 win');
                history.replace('/game/finish');
            } else if (points2 > points1) {
                alert('Player 2 win');
                history.replace('/game');
            } else {
                alert('Draw');
                history.replace('/game');
            }
        }
    }, [steps]);

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {
                    <PlayerBoard
                        player={1}
                        cards={player1}
                        onChooseCard={(card) => chooseCard(card)}
                    />
                }
            </div>
            <div className={s.board}>{
                board.map(item => (
                    <div
                        key={item.position}
                        className={s.boardPlate}
                        onClick={() => !item.card && onCellClick(item.position)}
                    >
                        {
                            item.card && <PokemonCard {...item.card} minimize isActive/>
                        }
                    </div>
                ))
            }
            </div>
            <div className={s.playerTwo}>
                {
                    <PlayerBoard
                        player={2}
                        cards={player2}
                        onChooseCard={(card) => chooseCard(card)}
                    />
                }
            </div>
        </div>
    );
};

export default BoardPage;