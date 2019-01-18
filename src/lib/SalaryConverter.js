

export default class SalaryConverter{
	constructor(amount, division, taxRate){
		this.amount = amount;
		this.division = division;
		this.taxRate = taxRate;
		this.hourly = 0;
		this.monthly = 0;
		this.bimonthly = 0;
		this.yearly = 0;
	}

	convert(){
		switch(this.division){
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
			default: throw new Error(`${this.division} is not a valid Division of Salary`)
		}
	}

	applyTax(amount){
		return (amount - (amount * this.taxRate))
	}

	convertYearlySalary(){
		if(this.division === 'YEARLY'){
			this.hourly = (+this.amount / 52 / 5 / 40).toFixed(2)
			this.monthly = (+this.amount / 12).toFixed(2)
			this.bimonthly = (+this.amount / 12 / 2).toFixed(2)
			this.yearly = (+this.amount).toFixed(2)
		}
	}

	convertMonthlySalary(){
		if(this.division === 'MONTHLY'){
			this.hourly = (+this.amount / 4 / 5 / 40).toFixed(2)
			this.monthly = (+this.amount).toFixed(2)
			this.bimonthly = (+this.amount/ 2).toFixed(2)
			this.yearly = (+this.amount * 12).toFixed(2)
		}
	}

	convertBimonthlySalary(){
		if(this.division === 'MONTHLY'){
			this.hourly = (+this.amount / 4 / 5 / 40).toFixed(2)
			this.monthly = (+this.amount).toFixed(2)
			this.bimonthly = (+this.amount / 2).toFixed(2)
			this.yearly = (+this.amount * 12).toFixed(2)
		}
	}

	convertHourlySalary(){
		if(this.division === 'HOURLY'){
			this.hourly = (+this.amount).toFixed(2)
			this.monthly = (+this.amount * 40 * 5 * 4).toFixed(2)
			this.bimonthly = (+this.amount * 40 * 5 * 2).toFixed(2)
			this.yearly = (+this.amount * 40 * 5 * 12).toFixed(2)
		}
	}
}