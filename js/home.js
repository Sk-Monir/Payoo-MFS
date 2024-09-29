// add money to the account

//1 add event handler add money 
document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    //get the inputAmount and pinNumber
    const inputAmountAdd = document.getElementById('input-amount-add').value;
    const pinNumber = document.getElementById('pin-number').value;
    // verify the pin 
    if (pinNumber === '5500') {
        const mainBalance = document.getElementById('balance').innerText;
        const mainBalanceNumber = parseInt(mainBalance);
        const inputAmountNumber = parseInt(inputAmountAdd);
        const newBalance = mainBalanceNumber + inputAmountNumber;

        document.getElementById('balance').innerText = newBalance;
    } else {
        alert('Fail to add money. Please try again later.')
    }

})