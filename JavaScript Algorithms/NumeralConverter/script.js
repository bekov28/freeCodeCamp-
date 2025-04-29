const convertBtn = document.getElementById('convert-btn');
const inputNumber = document.getElementById('number');
const outputDiv = document.getElementById('output');

convertBtn.addEventListener('click', function() {
  if(inputNumber.value === '') {
    outputDiv.textContent = "Please enter a valid number";
  } else if (inputNumber.value <= 0) {
    outputDiv.textContent = "Please enter a number greater than or equal to 1";
  }
  else if (inputNumber.value >= 4000) {
    outputDiv.textContent = "Please enter a number less than or equal to 3999";
  } 
  else if (inputNumber.value == 9) {
    outputDiv.textContent == "IX";
  }
});


