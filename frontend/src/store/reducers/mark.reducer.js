const initialState = {
  // ADD MODEL ьф
  name: "Mark",
  phrase: {},
  hint: {},
}

const markReducer = ( prevState = initialState, action ) => {
  switch (action.type) {
    case 'PULL_PHRASE':{
      return {
        ...prevState,
        phrase: action.payload,
      }
    }

    case 'PULL_HINT': {
      return {
        ...prevState,
        phrase: action.payload,
      }
    }
  
    default:
      return prevState;
  }
}

export default markReducer;
