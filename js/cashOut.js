// Cash out to the account

document.getElementById('cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const cashOutPinNumber = document.getElementById('cash-out-pin-number').value;

    if (cashOutPinNumber === '1234') {
        const mainBalance = document.getElementById('balance').innerText;
        const mainBalanceNumber = parseFloat(mainBalance);

        const newBalance = mainBalanceNumber - cashOutNumber;
        document.getElementById('balance').innerText = newBalance;
    } else {
        alert('Cash Out Fail. Try again later');
    }


});