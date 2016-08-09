export const BAG = {
  ADD: "BAG.ADD",
  SET: "BAG.SET",
  REMOVE: "BAG.REMOVE"
}

export function addPokemon(pokemonId) {
  return {
    type: BAG.ADD,
    payload: pokemonId
  }
}

export function setPokemon(pokemonId, ammount) {
  return {
    type: BAG.ADD,
    payload: {
      pokemonId,
      ammount
    }
  }
}

export function removePokemon(pokemonId) {
  return {
    type: BAG.REMOVE,
    payload: pokemonId
  }
}
