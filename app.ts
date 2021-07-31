class Employee {
	constructor (
		private _fullName:string, 
		private _age: number, 
		private _jobTitle: string, 
		private _hourlyRate: number , 
		public workingHoursPerWeek: number ) {
		
	}

	get fullName () {
		return this._fullName;
	}

	set fullName (value: string) {
		this._fullName = value
	}

	printEmployeeDetails = ():void => {
		console.log(`${this._fullName}의 직업은 ${this._jobTitle} 이고 일주일의 수입은 ${this._hourlyRate * this.workingHoursPerWeek}달러이다.`)
	}
}

let employee1 = new Employee(`주현`, 32, `주니어개발자`, 40, 35);
employee1.fullName = `사랑`
employee1.workingHoursPerWeek = 50
employee1.printEmployeeDetails();