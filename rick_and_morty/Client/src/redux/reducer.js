import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-type';

const initialState = {
  myFavorites: [],
  allCharacters: [],
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {

          ...state, myFavorites: payload, allCharacters: payload

        // ...state,
        // myFavorites: [...state.allCharacters, payload],
        // allCharacters: [...state.allCharacters, payload]
      };
  case FILTER:
    const filteredCharacters = state.allCharacters.filter(
      character => character.gender === payload
    );
    return {
      ...state,
      myFavorites: filteredCharacters
    };

  case ORDER:
    const sortedCharacters = [...state.allCharacters];
     return {
        ...state,
        myFavorites: 
          payload === "A"
        ? sortedCharacters.sort((a, b) => a.id - b.id)
        : sortedCharacters.sort((a, b) => b.id - a.id)
      }
    

  case REMOVE_FAV:
      return {

               ...state, myFavorites: payload

        // ...state,
        // myFavorites: state.myFavorites.filter(
        //  character => character.id !== Number(payload)
        // )
      };

    default: return { ...state };
  }

}

export default reducer;