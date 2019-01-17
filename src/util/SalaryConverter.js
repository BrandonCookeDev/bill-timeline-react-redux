
export default class SalaryConverter{
	constructor(amount, division){
		this.amount = amount;
		this.division = division;
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

	convertYearlySalary(){
		if(this.division === 'YEARLY'){
			this.hourly = this.amount / 52 / 5 / 40
			this.monthly = this.amount / 12
			this.bimonthly = this.amount / 12 / 2
			this.yearly = this.amount
		}
	}

	convertMonthlySalary(){
		if(this.division === 'MONTHLY'){
			this.hourly = this.amount / 4 / 5 / 40
			this.monthly = this.amount
			this.bimonthly = this.amount/ 2
			this.yearly = this.amount * 12
		}
	}

	convertBimonthlySalary(){
		if(this.division === 'MONTHLY'){
			this.hourly = this.amount / 4 / 5 / 40
			this.monthly = this.amount
			this.bimonthly = this.amount / 2
			this.yearly = this.amount * 12
		}
	}

	convertHourlySalary(){
		if(this.division === 'HOURLY'){
			this.hourly = this.amount
			this.monthly = this.amount * 40 * 5 * 4
			this.bimonthly = this.amount * 40 * 5 * 2
			this.yearly = this.amount * 40 * 5 * 12
		}
	}
}