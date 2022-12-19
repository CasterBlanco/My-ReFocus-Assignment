
const calculatorBmi = require("./bmi_calculator")
function test () {
    const result = calculatorBmi(BMI);
    const expected = "Normal Weight";

    console.assert(
        result === expected,
        `check if calculator is working - Expects: ${"Normal Weight"} Received: ${BMI}`

    );

}