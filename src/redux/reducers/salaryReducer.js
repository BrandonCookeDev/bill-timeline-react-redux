import { FETCH_SALARY, SUBMIT_SALARY, UPDATE_SALARY } from '../actions/types'

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
			return {
				...state,
				salary: action.payload
			}
		default:
			return state
	}
}