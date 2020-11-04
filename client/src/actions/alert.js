import { SET_ALERT, REMOVE_ALERT } from "./types"
import uuid from "uuid"

export const setAlert = (errors, alertType) => (dispatch) => {
  //   const id = uuid.v4()
  const msgArray = []
  msgArray.shift()
  errors.forEach((err) => {
    const errStyle = {}
    errStyle.param = err.param
    errStyle.msg = err.msg
    msgArray.push(errStyle)
  })

  dispatch(
    {
    type: SET_ALERT,
    payload: {
      msg: msgArray,
      alertType,
      //   id,
    },
  })
}
