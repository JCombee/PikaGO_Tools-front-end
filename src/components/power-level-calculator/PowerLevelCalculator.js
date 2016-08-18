import React, {Component} from 'react'

export default class PowerLevelCalculator extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    const pokemonCount = parseInt(this.refs.pokemonCount.value)
    const candyCost = parseInt(this.refs.candyCost.value)
    const candyOwned = parseInt(this.refs.candyOwned.value)

    console.log('pokemonCount:', pokemonCount)
    console.log('candyCost:', candyCost)
    console.log('candyOwned:', candyOwned)

    let candy = candyOwned
    let evolveAmmount = 0
    for (let i=0;i<pokemonCount;i++) {
      if (candy >= candyCost) {
        candy -= candyCost
        evolveAmmount++
      }
      candy++
    }

    const transferAmmount = pokemonCount - evolveAmmount

    console.log('Transfer Ammount:', transferAmmount)
    console.log('Evolve Ammount:', evolveAmmount)
    console.log('Candy Left:', candy)
  }

  render() {
    return (<div>
      <input type="number" ref="pokemonCount" onChange={this.handleChange} />
      <input type="number" ref="candyCost" onChange={this.handleChange} />
      <input type="number" ref="candyOwned" onChange={this.handleChange} />
      Ammount you should save: {this.ammount}
    </div>)
  }

}
