"use strict";
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "genderNeutral";
})(GenderType || (GenderType = {}));
var student1 = {
    studentID: 5555,
    studentName: 'hamju5555',
    gender: GenderType.Female,
    subject: 'js5555',
    courseCompleted: true
};
//void는 아무것도 반환하지 않는다.
function getStudentDetails(studeintID) {
    return {
        studentID: 1245,
        studentName: 'hamju',
        gender: 'male',
        subject: 'js',
        courseCompleted: false,
        addComment: function () {
            return 'haha';
        }
    };
}
function saveStudentDetails(student1) {
}
saveStudentDetails(student1);
