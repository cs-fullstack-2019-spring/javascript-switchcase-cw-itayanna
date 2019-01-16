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