   
function calculatorBmi(BMI_value){
if (BMI_value < 18.5){
    return 'Underweight';    
}
if (BMI_value > 18.5 && BMI_value < 24.9){
    return 'Normal Weight';
}
if (BMI_value > 25 && BMI_value < 29.9){
    return 'Over Weight';
}
return 'Obese';

}

const result = calculatorBmi(21);
console.log(result);
module.exports = calculatorBmi;
