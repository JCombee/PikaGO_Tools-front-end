import { connect } from 'react-redux'

import PowerLevelCalculator from './PowerLevelCalculator'
import { filterPokemon } from './../../redux/pokemon/actions'

const mapStateToProps = state => {
  const { pokemon } = state
  return {
    pokemon: pokemon.get('data')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filter: (filter) => {
      dispatch(filterPokemon(filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PowerLevelCalculator)
