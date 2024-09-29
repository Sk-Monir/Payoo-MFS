// add money to the account recap

//add event handler
document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const inputMoneyAmount = document.getElementById('input-amount-add').value;
    const inputMoneyNumber = parseFloat(inputMoneyAmount);
    const pinNumber = document.getElementById('pin-number').value;


    if (pinNumber === '1234') {
        const mainBalance = document.getElementById('balance').innerText;
        const mainBalanceNumber = parseFloat(mainBalance);

        const newBalance = mainBalanceNumber + inputMoneyNumber;

        document.getElementById('balance').innerText = newBalance;
    } else {
        alert('Fail to add money .Please try again later');
    }
})