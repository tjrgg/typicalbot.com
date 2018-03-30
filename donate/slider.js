var amount = 5
var donateButton = document.getElementById("donate-btn")
donateButton.innerHTML = "Donate $" + amount + " with Paypal";

function donate(value) {
    window.location.href = "process.php?paypal=checkout&donateAmount=" + amount;
}

function sliderUpdate(value) {
    donateButton.innerHTML = "Donate $" + value + " with Paypal"
    amount = value
}