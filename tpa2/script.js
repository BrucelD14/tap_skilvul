const button = document.getElementById('btn'); 

button.addEventListener('click', (ev) => {
    
    ev.preventDefault()
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const result = document.getElementById('result-bmi');
    let weight_status = false;
    let height_status = false;

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = "Angka yang anda masukkan tidak valid";
    }else{
        document.getElementById('weight_error').innerHTML = ''
        weight_status = true;
    }

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = "Angka yang anda masukkan tidak valid";
    }else{
        document.getElementById('height_error').innerHTML = ''
        height_status = true;
    }

    if(height_status && weight_status){
        let bmi = (weight / ((height / 100)^2)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = `Your BMI is ${bmi}, which means You are Underweight`;
        }else if(bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = `Your BMI is ${bmi}, which means You are Normal`;
        }else if(bmi >= 25 && bmi <= 29.9){
            result.innerHTML = `Your BMI is ${bmi}, which means You are Overweight`;
        }else{
            result.innerHTML = `Your BMI is ${bmi}, which means You are Obesity` ;
        }
    }else{
        alert("the form has errors");
        result.innerHTML = '';
    }
});