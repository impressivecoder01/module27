// add money to the account
// s-1:add event handler
// prevent page reload after Submit
// s-2: get money to be added to the account balance
// get the pin Number
// s-3: verify the pin number

//step 1: add an event handler to the add money button inside the form
// document
//   .getElementById("btn-add-money")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     // step 2: get money to be added to the account
//     const addMoneyInput = document.getElementById("input-add-money").value;
//     console.log(addMoneyInput);
//     // get the pin number provided
//     const pinNumberProvided = document.getElementById("input-pin-number").value;
//     console.log(pinNumberProvided);
//     // step-3: verify the pin number
//     // wrong way to validate the pin number
//     if (pinNumberProvided === "1234") {
//       console.log("money added");
//       // step 4: get the current balance
//       const balance = document.getElementById("account-balance").innerText;
//       console.log(balance);
//       // step 5: add addMoneyInput with balance
//       const addMoneyNumber = parseFloat(addMoneyInput);
//       const balanceNumber = parseFloat(balance);
//       const newBalance = addMoneyNumber + balanceNumber;
//       console.log(newBalance);
//       // step 6: update the balance in the UI/DOM
//       document.getElementById("account-balance").innerText = newBalance;
//     } else {
//       alert("something is wrong please check again");
//     }
//   });



document.getElementById('btn-add-money').addEventListener('click' , function(event){
    event.preventDefault();
    const addMoney = document.getElementById('input-add-money').value;
    const pinNumber = document.getElementById('input-pin-number').value;
    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const addMoneyNumber = parseFloat(addMoney);
        const mainBalance = parseFloat(balance);
        const newBalance = addMoneyNumber + mainBalance;
        console.log(newBalance)
        document.getElementById("account-balance").innerText = newBalance;
    }
    else{
        alert('pin number is wrong')
    }
})

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutMoney = document.getElementById('input-cash-out-money').value;
    const cashOutPin = document.getElementById('input-cash-out-pin').value;
    if(cashOutPin === '1234'){
        const cashOutNumber = parseFloat(cashOutMoney);
        const oldBalance = document.getElementById('out-account-balance').innerText
        const oldBalanceNumber = parseFloat(oldBalance);
        const minusBalance = oldBalanceNumber - cashOutNumber;
        // console.log(minusBalance);
        document.getElementById('out-account-balance').innerText = minusBalance;
    }
    else{
        alert('something is wrong')
    }
})