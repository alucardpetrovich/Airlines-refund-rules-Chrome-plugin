let form = document.forms[0];
let airline = form.elements.airline;
let button = form.elements.submit;

function displayRules() {
    let airlineName = (airline.value).toLowerCase();
    let airlineRules = refundRules[airlineName];
    if (airlineRules === undefined) {
        placeholder.innerHTML = "Sorry, I don't know such airline";
    } else {
        placeholder.innerHTML = refundRules[airlineName];
    }
    
}
form.onsubmit = () => {
    displayRules();
    return false;
}