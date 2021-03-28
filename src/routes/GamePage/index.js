import StartPage from "../Game/routes/Start";
import BoardPage from "../Game/routes/Board";
import FinishPage from "../Game/routes/Finish";
import {PokemonContext} from "../../context/pokemonContext";
import {FireBaseContext} from "../../context/fireBaseContext";
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';

const GamePage = () => {
    const [selectedPokemon,selectPokemon] = useState([]);
    const [playersPokemons,takePlayersPokemons] = useState([[],[]]);
    const match = useRouteMatch();


    return (
        <PokemonContext.Provider value={
            {
                selectedPokemon,
                selectPokemon,
                playersPokemons,
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