import { connect } from 'react-redux'

import { fetchPokemonIfNeeded } from './../../redux/pokemon/actions'
import PokemonList from './PokemonList'

function mapStateToProps(state) {
  const { pokemon } = state
  return {
    pokemon: pokemon.get('data')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    componentDidMount: () => {
      dispatch(fetchPokemonIfNeeded())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
