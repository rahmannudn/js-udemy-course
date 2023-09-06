const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const heading = document.querySelector("h1");
console.log(heading);

const randomNumber1 = Math.trunc(Math.random() * 6) + 1;
const randomNumber2 = Math.trunc(Math.random() * 6) + 1;

if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "🚩 Player 1 WIN";
} else if (randomNumber1 < randomNumber2) {
  heading.innerHTML = "Player 2 WIN 🚩";
} else {
  heading.innerHTML = "DRAW!";
}

img1.setAttribute("src", `./images/dice${randomNumber1}.png`);
img2.setAttribute("src", `./images/dice${randomNumber2}.png`);
