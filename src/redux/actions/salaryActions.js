import { FETCH_SALARY, SUBMIT_SALARY, UPDATE_SALARY } from './types'

const API_URL = 'localhost:3001/api/salary';

export const fetchSalary = () => dispatch => {
	fetch(API_URL)
		.then(res => res.json())
		.then(data => dispatch({
			type: FETCH_SALARY,
			payload: data
		}))
}

export const submitSalary = (obj) => dispatch => {
	let params = {
		yearlySalary: obj.yearlySalary
	}

	fetch(API_URL, {
		method: 'POST',
		headers:{
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(params)
	})
		.then(res => res.json())
		.then(data => dispatch({
			type: SUBMIT_SALARY,
			payload: data
		}));
}

export const updateSalary = (obj) => dispatch => {
	dispatch({
		type: UPDATE_SALARY,
		payload: obj
	})
}