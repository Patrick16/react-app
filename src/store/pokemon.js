import {createSlice} from "@reduxjs/toolkit";
import FireBaseObject from "../service/firebase";

export const slice = createSlice({
    name: 'pokemons',
    initialState: {
        isLoading: false,
        loadedPokemons: [],
        selectedPokemons: [],
        opponentPokemons: [],
        error: null
    },
    reducers: {
        fetchPokemons: (state, action) => ({
            ...state,
            isLoading: true
        }),
        fetchPokemonsResolve: (state, action) => ({
            ...state,
            isLoading: false,
            loadedPokemons: action.payload
        }),
        fetchPokemonsReject: (state, action) => ({
            ...state,
            isLoading: false,
            loadedPokemons: [],
            opponentPokemons: [],
            selectedPokemons: []
        }),
        selectPokemons: (state, action) => ({
            ...state,
            selectedPokemons: action.payload
        }),
        takeOpponentPokemons: (state, action) => ({
            ...state,
            opponentPokemons: action.payload
        })
    }
});
export const {fetchPokemons, fetchPokemonsResolve, selectPokemons, fetchPokemonsReject, takeOpponentPokemons} = slice.actions;
export const loadingPokemons = state => state.pokemons.isLoading;
export const loadedPokemons = state => state.pokemons.loadedPokemons;
export const selectedPokemons = state => state.pokemons.selectedPokemons;
export const opponentPokemons = state => state.pokemons.opponentPokemons;

export const getPokemonsAsync = () => async (dispatch) => {
    dispatch(fetchPokemons);
    const data = await FireBaseObject.getPokemonsOnce();
    dispatch(fetchPokemonsResolve(Object.values(data).map(x => ({...x, active: true}))));
}


export default slice.reducer;