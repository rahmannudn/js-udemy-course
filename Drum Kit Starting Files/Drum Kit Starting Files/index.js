"use strict";
const buttonContainer = document.querySelector(".set");

const pressedAnimation = function (element) {
  element.classList.add("pressed");

  setTimeout(() => {
    element.classList.remove("pressed");
  }, 100);
};

const playDrum = function (key) {
  const createAudio = (loc) => new Audio(`sounds/${loc}.mp3`);

  switch (key) {
    case "w":
      const tom1 = createAudio("tom-1");
      tom1.play();
      break;
    case "a":
      const tom2 = createAudio("tom-2");
      tom2.play();
      break;
    case "s":
      const tom3 = createAudio("tom-3");
      tom3.play();
      break;
    case "d":
      const tom4 = createAudio("tom-4");
      tom4.play();
      break;
    case "j":
      const snare = createAudio("snare");
      snare.play();
      break;
    case "k":
      const crash = createAudio("crash");
      crash.play();
      break;
    case "l":
      const kickBass = createAudio("kick-bass");
      kickBass.play();
      break;
    default:
      console.log(key);
      break;
  }
};

buttonContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("drum")) return;
  const className = e.target.className[0];
  const target = e.target;
  playDrum(className);
  pressedAnimation(target);
});

document.addEventListener("keypress", function (e) {
  const key = e.key;
  const targetBtn = document.querySelector(`.${e.key}`);
  playDrum(key);
  pressedAnimation(targetBtn);
});
