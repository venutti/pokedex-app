import axios from "axios";

export async function getPokemonList(offset, limit) {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    const pokemonList = data.results;
    const next = data.next;
    const prev = data.previuos;
    return { pokemonList, next, prev };
  } catch (error) {
    console.log(error);
    return [];
  }
}
