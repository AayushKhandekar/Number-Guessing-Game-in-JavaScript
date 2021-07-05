var randomNumber;

function generateNumber(){

    randomNumber = Math.floor(Math.random() *11);
    validate();
}

function validate(){

    document.getElementById("generatedNumber").innerHTML = randomNumber;
    
    var number = document.form.inputNumber.value;
    if(number == randomNumber){
        document.getElementById("answer").innerHTML = 'A perfect guess!';
    } else {
        document.getElementById("answer").innerHTML = 'Oops! Try again!';
    }
}