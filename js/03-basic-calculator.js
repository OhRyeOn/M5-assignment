// ADD A FUNCTION CALLED CALCULATE
function calc(){ 
    let condition = false
    do{
      num1 = Number(prompt("Please Enter Your First Number."))
      num2 = Number(prompt("Please Enter Your Second Number."))
      opp = prompt("Would You Like To Add, Subtract, Multiply, or Divide The Two Numbers?")
      opp = opp.toLowerCase()
      if (opp === 'add' || opp === 'subtract' || opp === 'multiply' || opp ==='divide'){
        condition = true;   
        } else {
        condition = false;
        alert("Please Enter Your Numbers Again And Double Check The Opperation You'd Like To Perform")
        }
    } while (condition === false)

    switch(opp){
        case "add":
          add(num1, num2)
          break
        case "subtract":
          sub(num1, num2)
          break
        case "multiply":
          mult(num1, num2)
          break
        case "divide":
          div(num1, num2)
          break
      } 
    }
    
    function add(num1, num2){
      result = num1 + num2
      alert(result)
    }
    
    function sub(num1, num2){
      result = num1 - num2
      alert(result)
    }
    
    function mult(num1, num2){
      result = num1 * num2
      alert(result) 
    }
    
    function div(num1, num2){
      result = num1 / num2
      alert(result)
    }
    
    calc()