const initialValue = {
  current: 0
}

function weatherReducer(state = initialValue, action) {
  switch (action.type) {
    case 'INC': 
      return {
        ...state,
        current: state.current + 1
      }
    case 'WEATHER':
      console.log('Dispatched WEATHER action with data:', action.payload);
      return {
        ...state,
        // weather: payload.weather // <- replace with something meaningful
      }
    default: 
      return state
  }
}

export default weatherReducer