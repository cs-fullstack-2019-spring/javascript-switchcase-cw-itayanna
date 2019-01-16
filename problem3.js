


//this function ask the user if a teacher, student, or parent is checking in
// a switch statement is used to add the teacher/student/parent to the attendance array,
// then log the option they chose
// it is repeated this five times.

main3();
var attendance= [];
function main3(userInput) {
    for (var i=0; i<=5; i++){
    var input=prompt("Is a teacher,student or parent checking in?");
    switch (input){
    case 'teacher':
        attendance.push(input);
        console.log(input);
        break;
    case 'parent':
        attendance.push(input);
        console.log(input);
        break;
    case 'student':
        attendance.push(input);
        console.log(input);
        break;
}

}

}