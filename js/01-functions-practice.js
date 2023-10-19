//STEP 1
function halfNumber(num) {
    let result = (num / 2)
    document.write(`Half of ${num} is ${result}`,'<br>')
}
halfNumber(5)
//STEP 2
function squareNumber(num){
    let result = (num ** 2)
    document.write(`The result of squaring the number ${num} is ${result}`,'<br>')
}
squareNumber(3)

//STEP 3
function percentOf(num1,num2){
    let result = (100* num1)/num2
    document.write(`${num1} is ${result}% of ${num2}`,'<br>')

}
percentOf(2,4)
//STEP 4
function findModulus(num1,num2){
    let result = (num2%num1)
    document.write(`${result} is the modulus of ${num1} and ${num2}`,'<br>')
}
findModulus(4,10)

//STEP 5