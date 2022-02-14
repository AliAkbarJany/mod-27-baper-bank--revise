document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('click deposit button');

    const depositInput = document.getElementById('deposit-input');

    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // console.log(depositAmount);

    // get current deposit
    const depositTotal = document.getElementById('deposit-total');

    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    // console.log(previousDepositTotal);


    depositTotal.innerText = previousDepositTotal + depositAmount;
    console.log(depositTotalText);


    // update balance
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousbalanceTotal + depositAmount;

    // clear input field
    depositInput.value = '';
});

// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('click withdraw');

    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    /*
    console.log(withdrawAmount);
    console.log(withdrawAmountText);
    */

    // update withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');

    const withdrawTotalText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(withdrawTotalText);
    // console.log(withdrawAmountText);
    // withdrawTotal.innerText = withdrawAmount;
    withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText
    const previousbalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousbalanceTotal - withdrawAmount;


    // clear input field
    withdrawInput.value = '';

})
