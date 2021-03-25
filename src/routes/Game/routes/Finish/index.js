import {PokemonContext} from "../../../../context/pokemonContext";
import {useContext} from 'react';
import PokemonCard from "../../../../components/PokemonCard";

const FinishPage = () => {
    const context = useContext(PokemonContext);
    console.log(context.playersPokemons);
    return (
        <>
            <div>
                <div>
                    {
                        context.playersPokemons[0].map(item => {
                            <PokemonCard key={item.id} isActive minimize/>
                        })
                    }
                </div>
                <div>
                    <button>
                        Choose Card.
                    </button>
                </div>
                <div>
                    {
                        context.playersPokemons[1].map(item => {
                            <PokemonCard key={item.id} isActive minimize/>
                        })
                    }
                </div>
            </div>

        </>
    );
}

export default FinishPage;