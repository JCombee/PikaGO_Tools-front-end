import Immutable from 'immutable'

import { POKEMON } from './actions'

const initialState = Immutable.Map({
    'isFetching': false,
    'offset': 1,
    'data': Immutable.Map()
})

export function pokemon(state = initialState, action) {
    switch (action.type) {
        case POKEMON.REQUEST :
            return state.set('isFetching', true)
        case POKEMON.RECEIVE :
            let data = Immutable.Map()
            let offset = state.get('offset')
            action.payload.forEach((pokemon, index) => {
                data = data.set(index+offset, Immutable.Map(pokemon))
            })
            if (action.payload.next) {
              offset = queryString(action.payload.next).offset
            }
            return state.merge({
                isFetching: false,
                offset,
                data
            })
        default :
            return state
    }
}

function queryString(query) {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  query = query.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}
