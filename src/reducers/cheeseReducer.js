const initialState = {
    cheeses: [],
    loading: false,
    error: null
}

const cheeseReducer = (state =  initialState, action) => {

  console.log(action);

  return state
}

export default cheeseReducer