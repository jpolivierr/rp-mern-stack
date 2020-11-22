import { SET_ALERT, REMOVE_ALERT } from "./actionTypes"
import {v4 as uuidv4} from "uuid"

export const setAlert = (errors, alertType) => (dispatch) => {
  //   const id = uuid.v4()
  const errArray = []
  errors.forEach((err) => {
    const errStyle = {}
    errStyle.param = err.param
    errStyle.msg = err.msg
    errStyle.alertType = alertType
    errStyle.id = uuidv4()
    errArray.push(errStyle)
  })

dispatch(
    {
    type: SET_ALERT,
    payload: errArray
  })
  
}

export const removeAlert = () => (dispatch) => {
  dispatch({
    type: REMOVE_ALERT,
    payload: []
  })
}
