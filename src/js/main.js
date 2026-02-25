// Apenas importe o arquivo aqui. 
// O Vite vai ler isso e injetar o CSS automaticamente no seu HTML.
import '@styles/stylesheet.scss';

// console.log("O JavaScript está rodando e o SCSS foi carregado!");

let arrayInputs = document.querySelectorAll("input[type='range']");

for(let i = 0; i < arrayInputs.length; i++) {
    formatInputAndOutput(arrayInputs[i].previousElementSibling, arrayInputs[i]);
}

function formatInputAndOutput(output, input) {
    output.textContent = input.value;
    input.addEventListener("input", (event) => {
        output.textContent = event.target.value;
    });
}

function squareFeetTotal(val1 = 0, val2 = 0) {
    let num1 = parseInt(val1);
    let num2 = parseInt(val2);
    return num1 * num2;
}
function linearFeetTotal(val1 = 0, val2 = 0) {
    let num1 = parseInt(val1);
    let num2 = parseInt(val2);
    return 2 * (num1 + num2);
}

let squareFeetValues = document.querySelectorAll('[data-type="square-feet"]');
let squareFeetResult = document.querySelector("#square-feet-value");
let linearFeetResult = document.querySelector("#linear-feet-value");
let valueLinear;
let valueSquare;

// Insert values on output element and populate vars 'valueLinear' and 'valueSquare'
for (let j = 0; j < squareFeetValues.length; j++) {
    squareFeetValues[j].addEventListener("input", (event) => {
        let val1 = squareFeetValues[0].value;
        let val2 = squareFeetValues[1].value;
        let valueSquareFeet = squareFeetTotal(val1, val2);
        let linearFeet = linearFeetTotal(val1, val2);
        squareFeetResult.innerText = valueSquareFeet;
        linearFeetResult.innerText = linearFeet;
        valueLinear = linearFeet;
        valueSquare = valueSquareFeet;
    });
}

// Incorporated Value
let incorporatedElements = document.querySelectorAll('[data-type="incorporated"]');
for(let k = 0; k < incorporatedElements.length; k++) {
    let incorporatedValue;
    incorporatedElements[k].addEventListener("change", (event) => {
        let resultIncorporated = event.target.value;
        // console.log(resultIncorporated);
        switch (resultIncorporated) {
            case "Incorporated":
                incorporatedValue = 20000;
                break;
            case "Unincorporated":
                incorporatedValue = 30000;
                break;        
            default:
                break;
        }
        // console.log(incorporatedValue);
    });
}

// Site Preparation and Grading
let prepGradingElements = document.querySelectorAll('[data-type="prep-grading"]');
for(let k = 0; k < prepGradingElements.length; k++) {
    let prepGradingValue;
    prepGradingElements[k].addEventListener("change", (event) => {
        let resultPrepGrading = event.target.value;
        // console.log(resultIncorporated);
        switch (resultPrepGrading) {
            case "Minimal":
                prepGradingValue = 10000;
                break;
            case "Moderate":
                prepGradingValue = 25000;
                break;
            case "Heavy":
                prepGradingValue = 50000;
                break;        
            default:
                break;
        }
        // console.log(prepGradingValue);
    });
}

// Here insert Length of Utilities code

// Foundation Preference
let foundationPreferenceElements = document.querySelectorAll('[data-type="foundation-preference"]');
for(let l = 0; l < foundationPreferenceElements.length; l++) {
    let foundationValue;
    foundationPreferenceElements[l].addEventListener("change", (event) => {
        let resultFoundationPreference = event.target.value;
        // console.log(resultIncorporated);
        switch (resultFoundationPreference) {
            case "Above Grade":
            foundationValue = 90 * valueLinear; // dando erro
                break;
            case "Permanent":
                foundationValue = 155 * valueLinear; // dando erro
                break;        
            default:
                break;
        }
        // console.log(foundationValue);
    });
}

// Crane required
let cranePreferenceElements = document.querySelectorAll('[data-type="crane-preference"]');
for(let l = 0; l < cranePreferenceElements.length; l++) {
    let craneValue;
    cranePreferenceElements[l].addEventListener("change", (event) => {
        let resultcranePreference = event.target.value;
        // console.log(resultIncorporated);
        switch (resultcranePreference) {
            case "Yes":
            craneValue = 25000;
                break;
            case "No":
                craneValue = 0;
                break;        
            default:
                break;
        }
        console.log(craneValue);
    });

}


