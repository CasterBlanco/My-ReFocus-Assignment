let oxygenSaturation = 98
if (oxygenSaturation >= 96){
    console.log('Normal reading.');}
else if (oxygenSaturation == 95){
    console.log('Acceptable to continue home monitoring.');}
else if (oxygenSaturation == 94){
    console.log('Seek advice from health professionals.');
}
else if (oxygenSaturation == 93){
    console.log('Seek advice from health professionals.');
}
else {console.log('Seek urgent medical advice.');}


let pulseRatePerMinute = 300
if (pulseRatePerMinute >= 40 && pulseRatePerMinute <=100){
    console.log('Normal reading.');
}
else if (pulseRatePerMinute >=101 && pulseRatePerMinute <=109){
    console.log('Acceptable to continue home monitoring.');
}
else if (pulseRatePerMinute >= 110 && pulseRatePerMinute <=130){
    console.log('Seek advice from health professionals');
}
else if (pulseRatePerMinute >=131){
    console.log('Seek urgent medical advice.');
}

