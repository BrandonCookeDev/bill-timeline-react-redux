import { combineReducers } from 'redux'
import deleteMeReducer from './deleteMeReducer'

export default combineReducers({
    deleteMe: deleteMeReducer
})