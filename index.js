addEventListener("DOMContentLoaded", () => {

    const submitButton = document.getElementById("calculation-button");

    submitButton.addEventListener("click", () => {
        const loanAmount = document.getElementById("loan-amount-input").value;
        const interestRate = document.getElementById("interest-rate-input").value;
        const remainingPayments = document.getElementById("payments-remaining-input").value * 12; // * 12 so that it will be calculated in months. 

        const monthlyInterestRate = (interestRate / 100) / 12;
        const calculatesMortgageMonthly = loanAmount * ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, remainingPayments)) / (Math.pow(1 + monthlyInterestRate, remainingPayments) - 1));

        console.log("loanAmount:", loanAmount);
        console.log("interestRate:", interestRate);
        console.log("monthlyInterestRate:", monthlyInterestRate);
        console.log("remainingPayments:", remainingPayments);
        console.log("calculatesMortgageMonthly:", calculatesMortgageMonthly.toFixed(2));

    })


});