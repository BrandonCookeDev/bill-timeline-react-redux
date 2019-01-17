import { combineReducers } from 'redux'
import deleteMeReducer from './deleteMeReducer'
import salaryReducer from './salaryReducer'

export default combineReducers({
    deleteMe: deleteMeReducer,
    salaryData: salaryReducer
})