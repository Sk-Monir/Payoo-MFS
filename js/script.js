// // connect the button and add  addeventListener() function;

// document.getElementById('login-btn').addEventListener('click', function (event) {
//     event.preventDefault();//handel the unexpected reload;
//     console.log('hello');
//     // get the (phone and pin field)  and they are value;
//     const mobileNumber = document.getElementById('mobile-number').value;
//     const pinNumber = document.getElementById('pin-number').value;

//     // // validate the form normal way
//     // if (mobileNumber === '01869' && pinNumber === '5500') {
//     //     alert('you are login ');
//     // } else {
//     //     alert(' wrong mobile number or pin number');
//     // }

// });

document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const mobileNumber = document.getElementById('mobile-number').value;
    const pinNumber = document.getElementById('pin-number').value

    if (mobileNumber === '' || pinNumber === '') {
        alert('Enter mobile number and password');
    } else {

        if (mobileNumber === '018' && pinNumber === '1234') {
            window.location.href = './home.html';
        } else {
            alert('Wrong mobile number or password');
        }
    }


});