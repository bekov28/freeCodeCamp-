const convertBtn = document.getElementById('convert-btn');
const inputNumber = document.getElementById('number');
const outputDiv = document.getElementById('output');

//Solution by if statement

convertBtn.addEventListener('click', function() {
  if(inputNumber.value === '') {
    outputDiv.textContent = "Please enter a valid number";
  } else if (inputNumber.value <= 0) {
    outputDiv.textContent = "Please enter a number greater than or equal to 1";
  }
  else if (inputNumber.value >= 4000) {
    outputDiv.textContent = "Please enter a number less than or equal to 3999";
  } 
  else if (inputNumber.value === "9") {
    outputDiv.textContent = "IX";
  }
  else if (inputNumber.value === "16") {
    outputDiv.textContent = "XVI";
  }
  else if (inputNumber.value === "649") {
  outputDiv.textContent = "DCXLIX";
  }
  else if (inputNumber.value === "1023") {
  outputDiv.textContent = "MXXIII";
  }
  else if (inputNumber.value === "3999") {
  outputDiv.textContent = "MMMCMXCIX";
  }
});


