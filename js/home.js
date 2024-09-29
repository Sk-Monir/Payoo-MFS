// add money to the account

//1 add event handler add money 
document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const inputAmountAdd = document.getElementById('input-amount-add').value;
    console.log(inputAmountAdd);
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);
})