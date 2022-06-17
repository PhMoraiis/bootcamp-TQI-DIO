let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber > 0) {
        document.getElementById('currentNumber').style.color = 'black';
    }
    /*if (currentNumber < 10) {
        document.getElementById('button').disabled = false;
    } else {
        document.getElementById('button').disabled = true;
    } */
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        document.getElementById('currentNumber').style.color = 'red';
    }
}

