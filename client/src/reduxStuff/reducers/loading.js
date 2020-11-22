import * as actions from "../actions/actionTypes"

const initialState = {
  loading: false,
}

const loading = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

export default loading
