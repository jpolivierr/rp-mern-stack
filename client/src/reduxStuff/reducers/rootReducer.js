import {combineReducers} from 'redux'
import alert from './alert'
import loading from './loading'
export default combineReducers({
    alert,
    loading
})