// imc data
const data = [
  {
    min: 0,
    max: 18.4,
    classification: "Menor que 18,5",
    info: "Magreza",
    obesity: "0",
  },
  // Other objects with BMI classification data
];

// seleção de elementos (Element selection)
const imcTable = document.querySelector("#imc-table");

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const calcBtn = document.querySelector("#calc-btn");
const clearBtn = document.querySelector("#clear-btn");

const calcContainer = document.querySelector("#calc-container");
const resultContainer = document.querySelector("#result-container");

const imcNumber = document.querySelector("#imc-number span");
const imcInfo = document.querySelector("#imc-info span");

const backBtn = document.querySelector("#back-btn");

// funções (Functions)
function createTable(data) {
  // Function to create BMI classification table
}

function validDigits(text) {
  // Function to remove non-numeric characters from input
}

function calcImc(height, weight) {
  // Function to calculate BMI
}

function cleanInputs() {
  // Function to clear input fields
}

function showOrHideResults() {
  // Function to show or hide result container
}

// inicialização (Initialization)
createTable(data);

// eventos (Events)
[heightInput, weightInput].forEach((el) => {
  // Event listeners for input fields
});

calcBtn.addEventListener("click", (e) => {
  // Event listener for calculation button
});

clearBtn.addEventListener("click", (e) => {
  // Event listener for clear button
});

backBtn.addEventListener("click", (e) => {
  // Event listener for back button
});
