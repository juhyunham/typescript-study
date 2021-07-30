enum GenderType {
	Male = 'male',
	Female = 'female',
	GenderNeutral = 'genderNeutral'
}

const student1 = {
	studentID : 5555,
	studentName: 'hamju5555',
	gender: GenderType.Female,
	subject: 'js5555',
	courseCompleted: true
}


interface Student {
	readonly studentID:number,
	studentName:string,
	age?:number,
	gender:'male' | 'female' | 'genderNeutral',
	subject:string,
	courseCompleted:boolean,
	addComment? (comment: string): string,
	addComment?: (comment: string) => string
}

//void는 아무것도 반환하지 않는다.
function getStudentDetails(studeintID:number): Student{
	return {
		studentID : 1245,
		studentName: 'hamju',
		gender: 'male',
		subject: 'js',
		courseCompleted: false,
		addComment: () => {
			return 'haha'
		}
	}
}

function saveStudentDetails (student1: Student):void {
	
}

saveStudentDetails(student1)