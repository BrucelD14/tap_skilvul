const button = document.getElementById('btn'); 

button.addEventListener('click', () => {
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
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = "under weight : " + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = "normal : " + bmi;
        }else{
            result.innerHTML = "over weight : " + bmi;
        }
    }else{
        alert("the form has errors");
        result.innerHTML = '';
    }
});