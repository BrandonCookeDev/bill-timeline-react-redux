import React, { Component } from 'react'
import { connect } from 'react-redux'

class Timeline extends Component {
  render() {
	return (
	  <div>
			<h2>Timeline</h2>
			{JSON.stringify(this.props)}
			<svg width="100%" height="150" viewBox="0 0 100 100"  preserveAspectRatio="none">
				<line class="timeline" x1="0" y1="50" x2="100" y2="50"></line>
			</svg>
	  </div>
	)
  }
}

const mapStateToProps = state => ({
	salary: state.salaryData.salary.amount,
	division: state.salaryData.salary.division,
	bills: state.billData.bills,
	data: state.billsData
})

export default connect(mapStateToProps, { })(Timeline)