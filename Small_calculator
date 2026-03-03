while(true){

    alert("Enter the information as instructed");

    let first_number = prompt("first number");

    if(first_number === 'Q'){

        break;

    } else {

        first_number = Number(first_number);

    }

    let second_number = Number(prompt("second number"));

    if(second_number === 'Q'){

        break;

    } else {

        second_number = Number(second_number);

    }

    let nr_operation = prompt("operation, one of: + - * /");

    if(nr_operation === 'Q'){

        break;

    }

    if((first_number.isNan || second_number.isNan) == second_number.isNan){ //or if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber))

        alert("Numbers not converted properly");

    } else {

        let result;

        switch(nr_operation){

            case "+": 

            result = first_number + second_number;

            break;

            case "-":

            result = first_number - second_number;

            break; 

            case "*":

            result = first_number * second_number;

            break;

            case "/":

            result = first_number/second_number;

            break;

            default:

            result = "Invalid operation";

        }

        alert(result);

    }

}


