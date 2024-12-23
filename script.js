function calculate() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (height === '' || weight === '') {
        result.textContent = 'Please fill in both fields.';
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let category = '';

    if (bmi < 18.5) {
      
        result.style.color='blue'
        category="Under Weight"
    } else if (bmi >= 18.5 && bmi < 24.9) {
      
        category="Healthy"
        result.style.color='green'
    
    } else if (bmi >= 25 && bmi < 39.9) {
        
        result.style.color='orange'
        category="Over Weight"
    
    } else {
      
        result.style.color='red'
        category="Obese"
    
    }

    result.textContent = `Your BMI is ${bmi} (${category})`;
}
