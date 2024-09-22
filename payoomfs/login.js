// step - 1 set event handler
document.getElementById('button-login').addEventListener('click', function(event){
    // step - 2 prevent default behavior (prevent reloading browser)
    // vejal for beginners
    event.preventDefault();
    
     // step - 3 get the phone number and the pin number
    const phoneNumber = document.getElementById('phone-number').value;

    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);
    // step - 4 validate phone and pin
    // this is the not the ideal way
    if(phoneNumber === '0175' && pinNumber === '1234'){
        console.log('right')
        window.location.href = './home.html';
        // step - 5 allow user to use the website
    }
    else{
        alert('wrong phone number or pin')
    }

})