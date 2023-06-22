function calBMI() {
    let inputKG = parseFloat(document.getElementById('InputKG').value);
    let inputCM = parseFloat(document.getElementById('InputCM').value);

    let valueCM = inputCM / 100;
    let value = inputKG / (valueCM * valueCM);
    let bmiResult = value.toFixed(2);

    display("bmi-result", bmiResult);
}

function display(elementId, value) {
    document.getElementById(elementId).innerHTML = value;
}
