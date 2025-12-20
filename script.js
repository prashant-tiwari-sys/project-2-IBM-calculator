function calculateBMI() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    if (height === "" || weight === "") {
        alert("Please enter height and weight");
        return;
    }

    const heightInMeter = height / 100;
    const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);

    let status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    document.getElementById("bmi").innerText = `BMI: ${bmi}`;
    document.getElementById("status").innerText = `Status: ${status}`;
}