const calculatorBmi = require("./BMI_calculator");
    
test("BMI should be Normal Weight", () =>{
expect(calculatorBmi(21)).toBe("Normal Weight")
});
