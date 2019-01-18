import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

const dateRegex = new RegExp(/([0-9]{4})-([0-9]{2})-([0-9]{2})/);

class Timeline extends Component {

	constructor(props){
		super(props)

		this.handleMouseOverBill = this.handleMouseOverBill.bind(this);
		this.handleMouseLeaveBill = this.handleMouseLeaveBill.bind(this)
		this.getTextElementId = this.getTextElementId.bind(this)
	}

	getDay(dateString){
		return dateRegex.exec(dateString)[3]
	}

	getMonth(dateString){
		return dateRegex.exec(dateString)[2]
	}

	getYear(dateString){
		return dateRegex.exec(dateString)[1]
	}

	getTextElementId(day, bill){
		return `${day}+${bill.name}+${bill.amount}`
	}

	handleMouseOverBill(day, bill){
		let _this = this
		return function(event){
			let el = event.target
			el.style.stroke = 'green'
			let className = _this.getTextElementId(day, bill)

			let textEls = document.getElementsByClassName(className)
			for(let i in textEls){
				let textEl = textEls[i]
				if(typeof textEl === 'object')
					textEl.removeAttribute('hidden')
			}
		}
	}

	handleMouseLeaveBill(day, bill){
		let _this = this;
		return function(event){
			let el = event.target
			el.style.stroke = 'black'
			let className = _this.getTextElementId(day, bill)

			let textEls = document.getElementsByClassName(className)
			for(let i in textEls){
				let textEl = textEls[i]
				if(typeof textEl === 'object')
					textEl.setAttribute('hidden', 'true')
			}
		}
	}

  render() {
		const todayDay = this.getDay(moment().format('YYYY-MM-DD'))
	return (
	  <div>
			<h2>Timeline</h2>
			<svg width="100%" height="300" viewBox="0 0 100 100"  preserveAspectRatio="none">
				<line class="timeline" x1="0" y1="50%" x2="100" y2="50%"></line>
				<line class="divider" x1="50%" x2="50%" y1="10" y2="90" />
				<line class="me" x1={todayDay} x2={todayDay} y1="30" y2="70" />
				{this.props.bills.map(bill => {
					let day = this.getDay(bill.dueDate)
					return (
						<>
						<text class={`bill ${this.getTextElementId(day, bill)}`} x={day} y="5" hidden >{bill.name}</text>
						<text class={`bill ${this.getTextElementId(day, bill)}`} x={day} y="10" hidden >{bill.amount}</text>
						<line class="bill" x1={day} x2={day} y1="25" y2="75" 
								onMouseOver={this.handleMouseOverBill(day, bill)}
								onMouseLeave={this.handleMouseLeaveBill(day, bill)} />
						</>
					)
				})}
			</svg>
	  </div>
	)
  }
}

const mapStateToProps = state => ({
	salary: state.salaryData.salary.amount,
	division: state.salaryData.salary.division,
	bills: state.billData.bills,
	data: state.billData
})

export default connect(mapStateToProps, { })(Timeline)