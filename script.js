//BMI Calculator Functionality
let bmiCms = document.getElementById('bmi-cms');
let bmiKgs = document.getElementById('bmi-kgs')
let finalBmiText = document.getElementById('final-bmi-text');
let finalBmiEmoji = document.getElementById('final-bmi-emoji');

function checkBmi(){
    let bmiCmsValue = bmiCms.value;
    let bmiKgsValue = bmiKgs.value;

    if (bmiCmsValue === "" || bmiKgsValue === ""){
        alert('Enter all the input values in BMI Calci')
    }
    else{
        let bmiHeight = parseInt(bmiCmsValue)
        let bmiWeight = parseFloat(bmiKgsValue)
        let bmi = bmiWeight/(bmiHeight * 0.01) ** 2
        if (bmi < 18.5){
            finalBmiText.textContent = 'Underweight'
            finalBmiText.style.transition = '0.8s'
            finalBmiText.style.color = 'red'
            finalBmiText.style.fontWeight = 'bold'
            finalBmiEmoji.style.transition = '0.6s'
            finalBmiEmoji.src = 'Find-Anything-Images/11.png'
            finalBmiEmoji.classList.add('bmi-oupt-emoji');
        }
        else if (bmi > 18.5 && bmi < 24.9){
            finalBmiText.textContent = 'Normal'
            finalBmiText.style.transition = '0.8s'
            finalBmiText.style.color = 'green'
            finalBmiText.style.fontWeight = 'bold'
            finalBmiEmoji.style.transition = '0.6s'
            finalBmiEmoji.src = 'Find-Anything-Images/12.png'
            finalBmiEmoji.classList.add('bmi-oupt-emoji');
        }
        else if (bmi > 25.0 && bmi < 29.9){
            finalBmiText.textContent = 'OverWeight'
            finalBmiText.style.transition = '0.8s'
            finalBmiText.style.color = 'red'
            finalBmiText.style.fontWeight = 'bold'
            finalBmiEmoji.style.transition = '0.6s'
            finalBmiEmoji.src = 'Find-Anything-Images/13.png'
            finalBmiEmoji.classList.add('bmi-oupt-emoji');
        }
        else{
            finalBmiText.textContent = 'Obese'
            finalBmiText.style.transition = '0.8s'
            finalBmiText.style.color = 'red'
            finalBmiText.style.fontWeight = 'bold'
            finalBmiEmoji.style.transition = '0.6s'
            finalBmiEmoji.src = 'Find-Anything-Images/14.png'
            finalBmiEmoji.classList.add('bmi-oupt-emoji');
        }
    }
}

function resetBmi(){
    finalBmiText.textContent = "";
    finalBmiEmoji.src = "";
    finalBmiEmoji.classList.remove('bmi-oupt-emoji')
    finalBmiEmoji.transition = '0.8s'

    bmiCms.value = "";
    bmiKgs.value = "";
}

//Loan Calculator Functionality
let lcAmt = document.getElementById('lc-amt');
let lcIr = document.getElementById('lc-ir')
let lcMp = document.getElementById('lc-mp');
let finalLcText = document.getElementById('final-lc-text');
let finalLcEmoji = document.getElementById('final-lc-emoji');

function checkLc(){
    let lcAmtValue = lcAmt.value;
    let lcIrValue = lcIr.value;
    let lcMpValue = lcMp.value;

    if (lcAmtValue === "" || lcIrValue === "" || lcMpValue === ""){
        alert('Enter all the input values in Loan Calci')
    }

    else{
        let interest = (lcAmtValue * (lcIrValue * 0.01)) / lcMpValue;
        let total = ((lcAmtValue / lcMpValue) + interest).toFixed(2);
        finalLcEmoji.style.transition = '0.8s'
        finalLcEmoji.src = 'Find-Anything-Images/15.png';
        finalLcEmoji.classList.add('lc-oupt-emoji');
        finalLcText.textContent = 'EMI: ₹' + total
        finalLcText.style.transition = '0.8s'
        finalLcText.style.fontWeight = 'bold'
    }
}

function resetLc(){
    finalLcText.textContent = "";
    finalLcEmoji.src = "";
    finalLcEmoji.classList.remove('lc-oupt-emoji')
    finalLcEmoji.transition = '0.8s'

    lcAmt.value = "";
    lcIr.value = "";
    lcMp.value = "";
}

//Profit & Loss Calculator Functionality
let plCostPrice = document.getElementById('pl-cp');
let plSellingPrice = document.getElementById('pl-sp')
let finalPlText = document.getElementById('final-pl-text');
let finalPlEmoji = document.getElementById('final-pl-emoji');

function checkPl(){
    let plCostPriceValue = plCostPrice.value;
    let plSellingPriceValue = plSellingPrice.value;

    if (plCostPriceValue === "" || plSellingPriceValue === ""){
        alert('Enter all the input values in Profit and Loss Calci')
    }
    else{
        let costPrice = parseFloat(plCostPriceValue)
        let sellingPrice = parseFloat(plSellingPriceValue)
        let total = sellingPrice - costPrice
        if (costPrice < sellingPrice){
            finalPlEmoji.style.transition = '0.8s'
            finalPlEmoji.src = 'Find-Anything-Images/16.png';
            finalPlEmoji.classList.add('pl-oupt-emoji');
            finalPlText.style.transition = '0.8s'
            finalPlText.textContent = 'Profit: ' + total
            finalPlText.style.fontWeight = 'bold'
        }
        else{
            finalPlEmoji.style.transition = '0.8s'
            finalPlEmoji.src = 'Find-Anything-Images/17.png';
            finalPlEmoji.classList.add('pl-oupt-emoji');
            finalPlText.style.transition = '0.8s'
            finalPlText.textContent = 'Loss: ' + total
            finalPlText.style.fontWeight = 'bold'
        }
    }
}

function resetPl(){
    finalPlText.textContent = "";
    finalPlEmoji.src = "";
    finalPlEmoji.classList.remove('pl-oupt-emoji')
    finalPlEmoji.transition = '0.8s'

    plCostPrice.value = "";
    plSellingPrice.value = "";
}

//Simple Interest Calculator Functionality
let siAmount = document.getElementById('pa-si');
let siInterestRate = document.getElementById('ir-si')
let siYears = document.getElementById('y-si');
let finalSiText = document.getElementById('final-si-text');
let finalSiEmoji = document.getElementById('final-si-emoji');

function checksI(){
    let siAmountValue = siAmount.value;
    let siInterestRateValue = siInterestRate.value;
    let siYearsValue = siYears.value;
    if (siAmountValue === "" || siInterestRateValue === "" || siYearsValue === ""){
        alert('Enter all the input values in Simple Interest Calci')
    }
    else{
        let initialInvestment = parseFloat(siAmountValue);
        let interestRate = parseFloat(siInterestRateValue) / 100;
        let investmentYears = parseInt(siYearsValue);

        let totalAmount = initialInvestment;

        totalAmount = Array.from({ length: investmentYears }, (_, i) => i + 1).reduce(
            (acc) => acc * (1 + interestRate),
            totalAmount
        );
        finalSiEmoji.style.transition = '0.8s'
        finalSiEmoji.src = 'Find-Anything-Images/18.png';
        finalSiEmoji.classList.add('si-oupt-emoji');
        finalSiText.style.transition = '0.8s'
        finalSiText.textContent = `The total investment was ₹${initialInvestment}/- for the span of ${investmentYears} years and generated ₹${totalAmount.toFixed(2)}/-` 
    }
}

function resetsI(){
    finalSiText.textContent = "";
    finalSiEmoji.src = "";
    finalSiEmoji.classList.remove('si-oupt-emoji')
    finalSiEmoji.transition = '0.8s'

    siAmount.value = "";
    siInterestRate.value = "";
    siYears.value = "";
}

//Percentage Calculator Functionality
let pcAmount = document.getElementById('pc-amt');
let pcPercentage = document.getElementById('pc-p')
let finalpCText = document.getElementById('final-pc-text');
let finalpCEmoji = document.getElementById('final-pc-emoji');

function checkpC(){
    if (pcAmount.value === "" || pcPercentage.value === ""){
        alert('Enter all the input values in Percentage Calci')
    }
    else{
        let amount = pcAmount.value;
        let percentage = pcPercentage.value;
        let percent = amount * percentage/100;

        finalpCEmoji.style.transition = '0.8s'
        finalpCEmoji.src = 'Find-Anything-Images/19.png';
        finalpCEmoji.classList.add('pc-oupt-emoji');
        finalpCText.style.transition = '0.8s'
        finalpCText.textContent = 'Amount: ₹' + percent
        finalpCText.style.fontWeight = 'bold'
    }
}

function resetpC(){
    finalpCText.textContent = "";
    finalpCEmoji.src = "";
    finalpCEmoji.classList.remove('pc-oupt-emoji')
    finalpCEmoji.transition = '0.8s'

    pcAmount.value = "";
    pcPercentage.value = "";
}

//Tip Calculator Functionality
let billAmount = document.getElementById('tp-ba')
let percentageTip = document.getElementById('tp-pt')
let finalTipText1 = document.getElementById('final-tp-text-1');
let finalTipText2 = document.getElementById('final-tp-text-2');
let finalTipEmoji = document.getElementById('final-tp-emoji');

function checkTip(){
    if (billAmount.value === "" || percentageTip.value === ""){
        alert('Enter all the input values in Tip Calci')
    }
    else{
        let bill = parseInt(billAmount.value);
        let tipPercentage = parseInt(percentageTip.value);

        let calculatedTip = (tipPercentage/100) * bill;
        let calculatedTotal = bill + calculatedTip;

        finalTipEmoji.style.transition = '0.8s'
        finalTipEmoji.src = 'Find-Anything-Images/19.png';
        finalTipEmoji.classList.add('tp-oupt-emoji');
        finalTipText1.style.transition = '0.8s'
        finalTipText1.textContent = 'Tip Amount: ₹' + calculatedTip
        finalTipText1.style.fontWeight = 'bold'
        finalTipText2.style.transition = '0.8s'
        finalTipText2.textContent = 'Total: ₹' + calculatedTotal
        finalTipText2.style.fontWeight = 'bold'
    }
}

function resetTip(){
    finalTipText1.textContent = "";
    finalTipText2.textContent = "";
    finalTipEmoji.src = "";
    finalTipEmoji.classList.remove('tp-oupt-emoji')
    finalTipEmoji.transition = '0.8s'

    billAmount.value = "";
    percentageTip.value = "";
}

//Grade Calculator Functionality
let maths = document.getElementById('m');
let physics = document.getElementById('p');
let chemistry = document.getElementById('c');
let finalGcText1 = document.getElementById('final-gc-text-1');
let finalGcText2 = document.getElementById('final-gc-text-2');
let finalGcEmoji = document.getElementById('final-gc-emoji');

function checkGc(){
    if (maths.value === "" || physics.value === "" || chemistry.value === ""){
        alert('Enter all the input values in Grade Calci')
    }
    else{
        let m = parseInt(maths.value)
        let p = parseInt(physics.value)
        let c = parseInt(chemistry.value)
        let sum = m + p + c;
        let avg = sum / 3;
        if (sum <= 270 && sum >= 243){
            finalGcEmoji.style.transition = '0.8s'
            finalGcEmoji.src = 'Find-Anything-Images/20.png';
            finalGcEmoji.classList.add('gc-oupt-emoji');
        }

        else if(sum <= 242 && sum >= 216){
            finalGcEmoji.style.transition = '0.8s'
            finalGcEmoji.src = 'Find-Anything-Images/21.png';
            finalGcEmoji.classList.add('gc-oupt-emoji');
        }

        else if(sum <= 215 && sum >= 189){
            finalGcEmoji.style.transition = '0.8s'
            finalGcEmoji.src = 'Find-Anything-Images/22.png';
            finalGcEmoji.classList.add('gc-oupt-emoji');
        }

        else if(sum <= 188 && sum >= 162){
            finalGcEmoji.style.transition = '0.8s'
            finalGcEmoji.src = 'Find-Anything-Images/23.png';
            finalGcEmoji.classList.add('gc-oupt-emoji');
        }

        else{
            finalGcEmoji.style.transition = '0.8s'
            finalGcEmoji.src = 'Find-Anything-Images/24.png';
            finalGcEmoji.classList.add('gc-oupt-emoji');
        }
        finalGcText1.style.transition = '0.8s'
        finalGcText1.textContent = 'Sum of Scores: ' + sum
        finalGcText1.style.fontWeight = 'bold'
        finalGcText2.style.transition = '0.8s'
        finalGcText2.textContent = 'Avg of Scores: ' + avg.toFixed(2);
        finalGcText2.style.fontWeight = 'bold'
    }
}

function resetGc(){
    finalGcText1.textContent = "";
    finalGcText2.textContent = "";
    finalGcEmoji.src = "";
    finalGcEmoji.classList.remove('gc-oupt-emoji')
    finalGcEmoji.transition = '0.8s'

    maths.value = "";
    physics.value = "";
    chemistry.value = "";
}

//Password Stength
let password = document.getElementById('password')
let power = document.getElementById('power-point')

password.oninput = function() {
    let point = 0;
    let value = password.value;
    let widthPower = ['1%', '25%', '50%', '75%', '100%']
    let colorPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"]

    if (value.length >= 6){
        let arrayTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
        arrayTest.forEach((item) => {
            if (item.test(value)) {
                point+=1;
            }
        });
    }
    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];
}

function resetPas(){
    password.textContent = "";
}

//DOB Functionality
let dobInput = document.getElementById('input-dob')
let currentDate = document.getElementById('current-date')
let finalAgeText = document.getElementById('final-age-text')

function getAge(){
    let dobValue = dobInput.value;
    let currentValue = currentDate.value;

    if (!dobValue || !currentValue){
        alert('Enter the required feilds')
    }
    else{
        let dob = new Date(dobValue);
        let current = new Date(currentValue);

        let age = current.getFullYear() - dob.getFullYear();
        let monthDifference = current.getMonth() - dob.getMonth();
        
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dob.getDate())) {
            age--;
        }
        
        finalAgeText.style.transition = '0.8s'
        finalAgeText.textContent = 'Your ages is: ' + age;
        finalAgeText.style.fontWeight = 'bold'
    }
}

function remAge(){
    dobInput.value = "";
    currentDate.value = "";
    finalAgeText.textContent = "";
}