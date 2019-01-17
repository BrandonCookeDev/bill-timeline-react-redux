import React, { Component } from 'react'
import { connect } from 'react-redux'

class SalaryCalculator extends Component {
	constructor(props){
		super(props)

		this.convert = this.convert.bind(this)
		this.convertYearlySalary = this.convertYearlySalary.bind(this)
		this.convertMonthlySalary = this.convertMonthlySalary.bind(this)
		this.convertBimonthlySalary = this.convertBimonthlySalary.bind(this)
		this.convertHourlySalary = this.convertHourlySalary.bind(this)
	}

	convert(){
		switch(this.props.division){
			case 'YEARLY': 
				this.convertYearlySalary()
				break
			case 'MONTHLY': 
				this.convertMonthlySalary()
				break
			case 'BIMONTHLY': 
				this.convertBimonthlySalary()
				break
			case 'HOURLY': 
				this.convertHourlySalary()
				break
			default: throw new Error(`${this.props.division} is not a valid Division of Salary`)
		}
	}

	convertYearlySalary(){
		if(this.props.division === 'YEARLY')
			this.setState({
				hourlySalary: this.props.salary / 52 / 5 / 40,
				monthlySalary: this.props.salary / 12,
				bimonthlySalary: this.props.salary / 12 / 2,
				yearlySalary: this.props.salary
			})
	}

	convertMonthlySalary(){
		if(this.props.division === 'MONTHLY')
			this.setState({
				hourlySalary: this.props.salary / 4 / 5 / 40,
				monthlySalary: this.props.salary,
				bimonthlySalary: this.props.salary / 2,
				yearlySalary: this.props.salary * 12 
			})
	}

	convertBimonthlySalary(){
		if(this.props.division === 'MONTHLY')
			this.setState({
				hourlySalary: this.props.salary / 4 / 5 / 40,
				monthlySalary: this.props.salary,
				bimonthlySalary: this.props.salary / 2,
				yearlySalary: this.props.salary * 12 
			})
	}

	convertHourlySalary(){
		if(this.props.division === 'HOURLY')
			this.setState({
				hourlySalary: this.props.salary,
				monthlySalary: this.props.salary * 40 * 5 * 4,
				bimonthlySalary: this.props.salary * 40 * 5 * 2,
				yearlySalary: this.props.salary * 40 * 5 * 12 
			})
	}

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
					<td>{this.props.bimonthlySalary}</td>
				</tr>
				<tr>
					<td><label>Hourly: </label></td>
					<td>{this.props.hourlySalary}</td>
				</tr>
			</table>
	  	</div>
	)
  }
}

const mapStateToProps = state => ({
	salary: state.salary,
	division: state.salary
})

export default connect(mapStateToProps, { })(SalaryCalculator)