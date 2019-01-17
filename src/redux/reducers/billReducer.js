import { SUBMIT_BILL } from '../actions/types'

const initialState = {
	bills: [],
	bill: {}
}

export default function(state = initialState, action){
	switch(action.type){
		case SUBMIT_BILL:
			state.bills.push(action.payload)
			return {
				...state,
				bills: state.bills
			}
		default: 
			return state
	}
}