"use strict";
const inputText = document.querySelector(".input");
const resultText = document.querySelector(".result");
const btnUpper = document.querySelector(".btn-to-upper");
const btnLower = document.querySelector(".btn-to-lower");
const btnCapitalized = document.querySelector(".btn-to-capitalized");

btnUpper.addEventListener("click", function () {
  const input = inputText.value.trim().toUpperCase();
  resultText.value = input;
});

btnLower.addEventListener("click", function () {
  const input = inputText.value.trim().toLowerCase();
  resultText.value = input;
});

btnCapitalized.addEventListener("click", function () {
  const input = inputText.value.trim().toLowerCase().split(" ");
  const newInput = [];
  for (const i of input) {
    i.slice(0, 1);
    newInput.push(i[0].toUpperCase() + i.slice(1, i.length));
  }
  resultText.value = newInput.join(" ");
});
