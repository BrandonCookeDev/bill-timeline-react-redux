import { SUBMIT_BILL } from './types'

export const submitBill = bill => dispatch => dispatch({
	type: SUBMIT_BILL,
	payload: bill
})