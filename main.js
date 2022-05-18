let number = 0;
let numberDisplay = document.getElementById('numberDisplay')


const increase = () => {
    number++;
    numberDisplay.textContent = number;
    if (number > 0) {
        numberDisplay.style.color = 'green'
    } else if (number < 0) {
        numberDisplay.style.color = 'red';
    } else {
        numberDisplay.style.color = 'black';
    }
}

const decrease = () => {
    number--;
    numberDisplay.textContent = number;
    if (number > 0) {
        numberDisplay.style.color = 'green'
    } else if (number < 0) {
        numberDisplay.style.color = 'red';
    } else {
        numberDisplay.style.color = 'black';
    }
}

const reset = () => {
    number = 0;
    numberDisplay.textContent = number;
    if (number > 0) {
        numberDisplay.style.color = 'green'
    } else if (number < 0) {
        numberDisplay.style.color = 'red';
    } else {
        numberDisplay.style.color = 'black';
    }
}

//==========================================================================
// OTHER SOLUTION
//==========================================================================

// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});


