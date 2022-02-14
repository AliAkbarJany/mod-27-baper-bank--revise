// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(4);
// const second = doubleIt(7);

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);

    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;

}

function updateTotalField(totalFieldId, amount) {

    // debugger;
    const totalField = document.getElementById(totalFieldId);

    const totalText = totalField.innerText;
    const previousTotal = parseFloat(totalText);
    // console.log(previousDepositTotal);


    totalField.innerText = previousTotal + amount;
    // console.log(depositTotalText);

}

function updateBalance(amount, isAdd) {
    debugger;
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousbalanceTotal + depositAmount;
    if (isAdd == true) {
        balanceTotal.innerText = previousbalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousbalanceTotal - amount;
    }


}


document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('click deposit button');

    /* 
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */
    // console.log(depositAmount);


    const depositAmount = getInputValue('deposit-input');



    // get and update deposit total===========

    /* 
    const depositTotal = document.getElementById('deposit-total');

    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    // console.log(previousDepositTotal);

    depositTotal.innerText = previousDepositTotal + depositAmount;
    console.log(depositTotalText); */

    updateTotalField('deposit-total', depositAmount);


    // update balance=========
    /* 
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousbalanceTotal + depositAmount; */
    updateBalance(depositAmount, true);


    // depositInput.value = '';

});

// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('click withdraw');

    /* 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */


    const withdrawAmount = getInputValue('withdraw-input');

    /*
    console.log(withdrawAmount);
    console.log(withdrawAmountText);
    */


    // get and update withdraw total===========

    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(withdrawTotalText);

    // console.log(withdrawAmountText);
    // withdrawTotal.innerText = withdrawAmount;

    withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount; */
    updateTotalField('withdraw-total', withdrawAmount);



    // update balance==============
    /* const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText
    const previousbalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousbalanceTotal - withdrawAmount; */
    updateBalance(withdrawAmount, false);


    /*  // clear input field
     withdrawInput.value = ''; */

})
