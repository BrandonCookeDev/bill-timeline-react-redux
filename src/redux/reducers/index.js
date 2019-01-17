import { combineReducers } from 'redux'
import deleteMeReducer from './deleteMeReducer'
import salaryReducer from './salaryReducer'
import billReducer from './billReducer';

export default combineReducers({
    deleteMe: deleteMeReducer,
    salaryData: salaryReducer,
    billData: billReducer
})