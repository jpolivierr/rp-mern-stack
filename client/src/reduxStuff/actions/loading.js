import * as actions from './actionTypes'

export const loading = (load) =>(dispatch)=>{
    dispatch({
        type: actions.LOADING,
        payload: load
    })
}

