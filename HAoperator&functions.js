function converToKelvin (temperatureC){
    let temperatureK = (temperatureC + 273.15);
    return temperatureK;}

    console.log(converToKelvin(7));
    console.log(converToKelvin(21));

    function convertToKelvin(tempFahrenheit){
        let temperatureKelvin = ((tempFahrenheit - 32) / 1.8) + 273.15;
    return temperatureKelvin;}
    
    console.log(convertToKelvin(10))

function computeTip(totalBill){
        let tenPercentOfBill = (totalBill/10);
return tenPercentOfBill;}
    console.log(computeTip(10));