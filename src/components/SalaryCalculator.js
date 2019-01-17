import React, { Component } from 'react'
import { connect } from 'react-redux'

class SalaryCalculator extends Component {

  render() {
	return (
		<div class="right">
			<table>
				<tr>
					<th>Division</th>
					<th>Amount</th>
				</tr>
				<tr>
					<td><label>Yearly: </label></td>
					<td>{this.props.yearly}</td>
				</tr>
				<tr>
					<td><label>Monthly: </label></td>
					<td>{this.props.monthly}</td>
				</tr>
				<tr>
					<td><label>Bimonthly: </label></td>
					<td>{this.props.bimonthly}</td>
				</tr>
				<tr>
					<td><label>Hourly: </label></td>
					<td>{this.props.hourly}</td>
				</tr>
			</table>
	  	</div>
	)
  }
}

const mapStateToProps = state => ({
	salary: state.salaryData.salary.amount,
	division: state.salaryData.salary.division,
	yearly: state.salaryData.salary.yearly,
	monthly: state.salaryData.salary.monthly,
	bimonthly: state.salaryData.salary.bimonthly,
	hourly: state.salaryData.salary.hourly
})

export default connect(mapStateToProps, { })(SalaryCalculator)