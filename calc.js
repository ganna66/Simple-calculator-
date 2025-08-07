/*
  This is a beginner-level calculator project.
  Some parts of the code may be hardcoded or not optimized,
  as I'm still learning JavaScript and trying to build things on my own.

  I'm experimenting with DOM manipulation, event listeners, and basic logic.

  Feedback is always welcome :)
*/

let inputBox = document.querySelector(".in");
const btn = document.querySelectorAll(".btn-num");
const opeator = document.querySelectorAll(".operator");
const eQual = document.querySelector(".equal");
const c = document.querySelector(".AC");

let currentExepression = " ";
let answer;
let afterEqual = false;

btn.forEach(function (x) {
  x.addEventListener("click", function () {
    inputBox.value += x.textContent;
    currentExepression += x.textContent;

    if (afterEqual) {
      currentExepression = x.textContent;
      inputBox.value = x.textContent;
      afterEqual = false;
    }

    console.log("input iss now ", currentExepression);
  });
});

opeator.forEach(function (sign) {
  sign.addEventListener("click", function () {
    if (sign.textContent === "×") {
      inputBox.value += sign.textContent;
      currentExepression += "*";
    } else if (sign.textContent === "÷") {
      inputBox.value += sign.textContent;
      currentExepression += "/";
    } else {
      inputBox.value += sign.textContent;
      currentExepression += sign.textContent;
    }
    afterEqual = false;
    console.log("input iss now ", currentExepression);
  });

  if (afterEqual) {
    currentExepression += sign.textContent;
  }
});

eQual.addEventListener("click", function () {
  try {
    answer = eval(currentExepression);
    inputBox.value = answer.toFixed(4);
    afterEqual = true;
  } catch {
    inputBox.value = "Erorr!";
    afterEqual = true;
    currentExepression = " ";
  }
});

c.addEventListener("click", function () {
  inputBox.value = " ";
  currentExepression = " ";
  afterEqual = false;
});
