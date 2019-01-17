import { FETCH_SALARY, SUBMIT_SALARY, UPDATE_SALARY } from '../actions/types'
import SalaryConverter from '../../lib/SalaryConverter'

const initialState = {
	salary: 0,
	division: ''
}


export default function(state=initialState, action){
	switch(action.type){
		case FETCH_SALARY:
			return{
				...state,
				salary: action.payload
			}
		case SUBMIT_SALARY:
			return {
				...state,
				salary: action.payload
			}
		case UPDATE_SALARY:
			let amount = action.payload.salary
			let division = action.payload.division
			let taxRate = action.payload.taxRate

			let converter = new SalaryConverter(amount, division);
			converter.convert();

			return {
				...state,
				salary: converter
			}
		default:
			return state
	}
}