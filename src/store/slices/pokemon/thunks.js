import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemos, startLoadingPokemons } from "./pokemonSlice";


export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        
        dispatch( startLoadingPokemons() );

        //TODO: realizar peticion HTTP
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

        dispatch( setPokemos({ pokemons: data.results, page: page +1 }));
    }
}