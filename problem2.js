

//this function ask the user to enter a binary number.
// then it prints 1 if you enter 1
// 2 if you enter 10
// 3 if you enter 11
// 4 if you enter 100
// and 5 if you enter 101.

main2();
function main2(userinput){
    var input= prompt("enter a binary number");
    switch (input) {

        case "1":
            console.log("1");
            break;
        case "10":
            console.log("2");
            break;
        case "11":
            console.log("3");
            break;
        case "100":
            console.log("4");
            break;
        case "101":
            console.log("5");
            break;

    }
}