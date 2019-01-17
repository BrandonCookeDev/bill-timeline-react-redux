import React, { Component } from 'react'
import { connect } from 'react-redux'

import { submitBill } from '../redux/actions/billAction'

class BillForm extends Component {
	constructor(props){
		super(props);

		this.state = {
			name: '',
			amount: 0,
			dueDate: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value})
	}
  
	handleSubmit(event) {
		  event.preventDefault()
		  this.props.submitBill(this.state)
	  }
	
	render() {
	return (
		<div>
			<h4>Add Bill</h4>
			<form onSubmit={this.handleSubmit}>
				<table>
					<tr>
						<td><label>Name: </label></td>
						<td><input type="text" name="name" onChange={this.handleChange} required /></td>
					</tr>
					<tr>
						<td><label>Amount: </label></td>
						<td><input type="number" name="amount" onChange={this.handleChange} required /></td>
					</tr>
					<tr>
						<td><lable>Due Date: </lable></td>
						<td><input type="date" name="dueDate" onChange={this.handleChange} required /></td>
					</tr>
					<input type="submit" value="Submit" />
				</table>
			</form>
		</div>
	)
  }
}

export default connect(null, { submitBill })(BillForm)