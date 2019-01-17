import React, { Component } from 'react'
import { connect } from 'react-redux'

import { submitSalary, updateSalary } from '../redux/actions/salaryActions'

const DIVISIONS = ['HOURLY', 'MONTHLY', 'BIMONTHLY', 'YEARLY']
 
class SalaryForm extends Component {
	constructor(props){
		super(props);

		this.state = {
			division: 'MONTHLY',
			salary: 0,
			taxRate: 0.0
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	
  /* Forms shouldn't need to access props, only state */
  handleChange(event) {
	  let _this = this;
	return new Promise(function(resolve, reject){
		resolve(_this.setState({[event.target.name]: event.target.value}))
	})
	.then(() => this.handleSubmit(event))
  }

  handleSubmit(event) {
		event.preventDefault()
		this.props.updateSalary(this.state)
	}


  render() {
		const divisionOptions = DIVISIONS.map(d => (
			<option>{d}</option>
		))
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div class="left">
						<table class="salary-form left">
							<tr>
								<td><label>Salary Division:</label></td>
								<td>
									<select name="division" onChange={this.handleChange} value={this.state.division} onKeyUp={this.handleChange}>
										{divisionOptions}
									</select>
								</td>
							</tr>
							<tr>
								<td><label>Salary: </label></td>
								<td>
									<input type="number" max="1000000" name="salary" 
										value={this.state.salary} onChange={this.handleChange} />
								</td>
							</tr>
							<tr>
								<td><label>County Tax Rate:</label></td>
								<td>
									<input type="number" max="100" name="taxRate"
										value={this.state.taxRate} onChange={this.handleChange} />
								</td>
							</tr>
							<tr><input type="Submit" value="Calculate" /> </tr>
						</table>
					</div>
				</form>
			</div>
		)
  }
}

export default connect(null, { updateSalary })(SalaryForm)