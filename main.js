// IF STATEMENTS
num = null

if (num > 0){
    console.log("Number is Greater than zero")
}else if (num < 0){
    console.log("Number is less than zero")
}else{
    console.log("Number is zero")
}

let color =""

switch (color){
    case "red" :
    console.log("red")
    break;
    case "blue":console.log("blue")
    break;
    case 'yellow':console.log("Yellow")
    break;
    default :
    console.log("Not Valid Color")
}
// FOR LOOPS 
// for (initializer;condition;finalexpression){
    // code to run
// }

for (let a = 1; a<=10; a++){
  console.log("the number is" + a)
}
