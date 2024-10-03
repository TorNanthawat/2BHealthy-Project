function calBMI() {
    let inputKG = parseFloat(document.getElementById('InputKG').value);
    let inputCM = parseFloat(document.getElementById('InputCM').value);

    let valueCM = inputCM / 100;
    let value = inputKG / (valueCM * valueCM);
    let bmiResult = value.toFixed(2);
    let message = '';

    if (bmiResult <= 18.5) {
        message = 'ค่า BMI ของคุณอยู่ในระดับ ผอมเกินไป';
    } else if (bmiResult <= 22.9) {
        message = 'ค่า BMI ของคุณอยู่ในระดับปกติ เหมาะสม';
    } else if (bmiResult <= 24.9) {
        message = 'ค่า BMI ของคุณอยู่ในระดับน้ำหนักเกิน';
    } else if (bmiResult <= 29.9) {
        message = 'ค่า BMI ของคุณอยู่ในระดับอ้วน';
    } else {
        message = 'ค่า BMI ของคุณอยู่ในระดับอ้วนมาก';
    }

    display("bmi-result", bmiResult); // เรียกฟังก์ชัน display เพื่อแสดงผลออกมาในส่วนของ bmi-result
    display2("bmi-result2", message); // เรียกฟังก์ชัน display2 เพื่อแสดงผลออกมาในส่วนของ bmi-result2
    document.getElementById('bmi-result').innerHTML = 'BMI : ' + bmiResult ; // แสดงผลของ bmiResult
}

function display(elementId, value) {
    document.getElementById(elementId).innerHTML = value;
}

function display2(elementId, value) {
    document.getElementById(elementId).innerHTML = value;
}
