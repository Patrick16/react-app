import StartPage from "../Game/routes/Start";
import BoardPage from "../Game/routes/Board";
import FinishPage from "../Game/routes/Finish";
import {PokemonContext} from "../../context/pokemonContext";
import {FireBaseContext} from "../../context/fireBaseContext";
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';

const GamePage = () => {
    const firebaseContext = useContext(FireBaseContext)
    const [cards, setPokemons] = useState({});;
    const changeState = (prevState, callBack) => {
        return Object.entries(prevState).reduce((acc, item) => {
            const pokemon = {...item[1]};
            callBack(pokemon);
            acc[item[0]] = pokemon;
            return acc;
        }, {});
    }
    const match = useRouteMatch();
    const getCardsFromDB = async () => {
        const response = await firebaseContext.getPokemonsOnce();
        setPokemons(changeState(response, pokemon => {
            pokemon.ative=true;
        }))
    }
    useEffect(async () => {
        await getCardsFromDB();
    }, []);


    return (
        <PokemonContext.Provider value={{
            cards
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