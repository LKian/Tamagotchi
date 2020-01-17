let levelHappiness = document.querySelector(".currentLevel--happiness");
let levelHunger = document.querySelector(".currentLevel--hunger");
let levelEnergy = document.querySelector(".currentLevel--energy");
let levelBladder = document.querySelector(".currentLevel--bladder");
let levelHygiene = document.querySelector(".currentLevel--hygiene");
let levelIntelligence = document.querySelector(".currentLevel--intelligence");

let buttonWatchTv = document.querySelector(".controlButton.button--watchTv");
let buttonReadBook = document.querySelector(".controlButton.button--readBook");
let buttonSnacktime = document.querySelector(".controlButton.button--snack");
let buttonBathroom = document.querySelector(".controlButton.button--bathroom");
let buttonShower = document.querySelector(".controlButton.button--shower");
let buttonWalk = document.querySelector(".controlButton.button--walk");
let buttonNaptime = document.querySelector(".controlButton.button--naptime");
let buttonBedtime = document.querySelector(".controlButton.button--bedtime");
let buttonDinner = document.querySelector(".controlButton.button--dinner");

// const inputName = document.querySelector("#creatureName");
const buttonEditName = document.querySelector(".editName");
const buttonSaveName = document.querySelector(".saveName");

let tamagotchiName = document.querySelector(".tamagatchiName--greeting span");
var inputName = document.getElementById("creatureName");
inputName.onkeyup = function() {
  tamagotchiName.innerHTML = inputName.value;
};

function disableText() {
  inputName.disabled = true;
}
function enableText() {
  inputName.disabled = false;
}

buttonSaveName.addEventListener("click", disableText);
buttonEditName.addEventListener("click", enableText);

let status = document.querySelector(".tamagotchiStatus");

function Tamagotchi() {
  this.hunger = Math.floor(Math.random() * 10);
  this.energy = Math.floor(Math.random() * 10);
  this.bladder = Math.floor(Math.random() * 10);
  this.hygiene = Math.floor(Math.random() * 10);
  this.intelligence = Math.floor(Math.random() * 10 + 1);
  this.happiness = Math.floor(
    (this.hunger +
      this.energy +
      (10 - this.bladder) +
      this.hygiene +
      this.intelligence) /
      currentStat.length -
      1
  );

  let updateBladder = () => {
    var statusText = document.createElement("p");
    status.appendChild(statusText);
    statusText.innerHTML +=
      "Take me to the bathroom before I pee on your floor!";
  };

  // this.bathroom = () => {

  //   this.hygiene--;
  //   this.bladder = 0;
  //   levelHygiene.innerHTML = this.hygiene;
  //   levelBladder.innerHTML = this.bladder;
  // };

  this.updateAllStatuses = () => {
    if (this.bladder >= 8) {
      updateBladder();
    }
  };

  levelHappiness.innerHTML = this.happiness;
  levelHunger.innerHTML = this.hunger;
  levelEnergy.innerHTML = this.energy;
  levelBladder.innerHTML = this.bladder;
  levelHygiene.innerHTML = this.hygiene;
  levelIntelligence.innerHTML = this.intelligence;

  buttonBathroom.addEventListener("click", () => {
    this.bathroom, updateAllStatuses;
  });

  buttonSnacktime.addEventListener("click", this.feedSnack);
  buttonDinner.addEventListener("click", this.feedDinner);
  buttonNaptime.addEventListener("click", this.takeNap);
  buttonBedtime.addEventListener("click", this.goToBed);
  buttonWatchTv.addEventListener("click", this.watchTv);
  buttonReadBook.addEventListener("click", this.readBook);
  buttonShower.addEventListener("click", this.shower);
  buttonWalk.addEventListener("click", this.walk);
}

let currentStat = document.querySelectorAll(".currentLevel");

function addHighlight() {
  for (let i = 0; i < currentStat.length; i++) {
    currentStat[i].classList.add("highlight");
  }
}

function removeHighlight() {
  for (let i = 0; i < currentStat.length; i++) {
    currentStat[i].classList.remove("highlight");
  }
}

const highlightTimerAdd = setTimeout(addHighlight, 200);
const highlightTimerRemove = setTimeout(removeHighlight, 1000);

const leah = new Tamagotchi();
