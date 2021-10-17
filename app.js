function computeLoan(){
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest_rate').value;
    const months = document.querySelector('#months').value;
    const interest = (amount * (interest_rate / 100)) / months;
    let payment = ((amount / months) + interest).toFixed(2); //toFixed is to show no. upto 2 digits after decimal



    document.querySelector('#payment').innerHTML = ` Your Monthly Payment = ${payment}` 

}