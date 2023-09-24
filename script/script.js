const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const scoreSection = document.getElementById("score");

let currentSign;

const signs = ["rock", "paper", "scissors"];

rock.addEventListener("click", function () {
  currentSign = signs[0];
  localStorage.setItem("currentSign", currentSign);
  cpuMove();
});

paper.addEventListener("click", function () {
  currentSign = signs[1];
  localStorage.setItem("currentSign", currentSign);
  cpuMove();
});

scissors.addEventListener("click", function () {
  currentSign = signs[2];
  localStorage.setItem("currentSign", currentSign);
  cpuMove();
});

const restart = document.getElementById("restart");
restart.addEventListener("click", function () {
  localStorage.removeItem("currentSign");
  currentSign;
  location.reload();
});

currentSign = localStorage.getItem("currentSign");
console.log(currentSign);

const cpuImg = document.getElementById("cpuImg");

const images = [
  "assets/img/rock.png",
  "assets/img/paper.png",

  "assets/img/scissors.png",
];

const cpuMove = function () {
  const randomIndex = Math.floor(Math.random() * images.length);
  console.log(randomIndex);
  const imgfile = document.createElement("img");

  imgfile.src = images[randomIndex];

  cpuImg.appendChild(imgfile);

  if (
    (currentSign === signs[0] && randomIndex === 0) ||
    (currentSign === signs[1] && randomIndex === 1) ||
    (currentSign === signs[2] && randomIndex === 2)
  ) {
    console.log("draw");
    imgfile.classList.add("wiggle");
    scoreSection.innerText = "DRAW";
  }
  if (
    (currentSign === signs[0] && randomIndex === 2) ||
    (currentSign === signs[1] && randomIndex === 0) ||
    (currentSign === signs[2] && randomIndex === 1)
  ) {
    console.log("you win");
    scoreSection.innerText = "YOU WIN";
  }
  if (
    (randomIndex === 0 && currentSign === signs[2]) ||
    (randomIndex === 1 && currentSign === signs[0]) ||
    (randomIndex === 2 && currentSign === signs[1])
  ) {
    console.log("cpu wins");
    scoreSection.innerText = "CPU WINS";
  }
};
