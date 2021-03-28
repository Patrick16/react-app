import StartPage from "../Game/routes/Start";
import BoardPage from "../Game/routes/Board";
import FinishPage from "../Game/routes/Finish";
import {PokemonContext} from "../../context/pokemonContext";
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {useState} from 'react';

const GamePage = () => {
    const [selectedPokemons,selectPokemon] = useState([]);
    const [opponentPokemons,takePlayersPokemons] = useState([]);
    const match = useRouteMatch();


    return (
        <PokemonContext.Provider value={
            {
                selectedPokemons,
                selectPokemon,
                opponentPokemons,
                takePlayersPokemons,
            }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage}/>
                <Route path={`${match.path}/board`} component={BoardPage}/>
                <Route path={`${match.path}/finish`} component={FinishPage}/>
            </Switch>
        </PokemonContext.Provider>
    );
};
export default GamePage;