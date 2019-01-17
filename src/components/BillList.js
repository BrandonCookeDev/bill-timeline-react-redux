import React, { Component } from 'react'
import { connect } from 'react-redux'

 class BillList extends Component {
  render() {
	return (
	  <div>
		<table class="left pad">
			<tr>
				<th>Name</th>
				<th>Amount</th>
				<th>Due Date</th>
			</tr>
			{this.props.bills.map(bill => (
				<tr>
					<td>{bill.name}</td>
					<td>{bill.amount}</td>
					<td>{bill.dueDate}</td>
				</tr>
			))}
		</table>
	  </div>
	)
  }
}

const mapStateToProps = state => ({
	bills: state.billData.bills,
	data: state.billData
})

export default connect(mapStateToProps, { })(BillList)