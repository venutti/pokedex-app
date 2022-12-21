import axios from "axios";

export async function getPokemonList(offset, limit) {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  try {
    const response = await axios.get(url);
    console.log(response);
    const pokemonList = response.results;
    const next = response.next;
    return {};
  } catch (error) {
    console.log(error);
    return [];
  }
}
