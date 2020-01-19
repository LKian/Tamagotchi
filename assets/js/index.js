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

const inputName = document.querySelector("#creatureName");
const buttonEditName = document.querySelector(".button--edit");
const buttonSaveName = document.querySelector(".button--save");

let tamagotchiName = document.querySelector(".tamagotchiName--greeting span");

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

  let clearStatusTextbox = () => {
    status.innerHTML = "";
  };

  let updateStatusTextbox = () => {
    if (this.bladder >= 8) {
      var statusText = document.createElement("p");
      status.appendChild(statusText);
      statusText.innerHTML +=
        "Take me to the bathroom before I pee on your floor!";
    }

    if (this.hunger <= 3) {
      var statusText = document.createElement("p");
      status.appendChild(statusText);
      statusText.innerHTML += "Feed me, peasant!";
    }

    if (this.energy <= 3) {
      var statusText = document.createElement("p");
      status.appendChild(statusText);
      statusText.innerHTML += "Tuck me in or I'll haunt your dreams";
    }

    if (this.hygiene <= 3) {
      var statusText = document.createElement("p");
      status.appendChild(statusText);
      statusText.innerHTML += "I smell!  Bathe me";
    }

    if (this.intelligence <= 3) {
      var statusText = document.createElement("p");
      status.appendChild(statusText);
      statusText.innerHTML +=
        "When I grow up, I want to be a principal or a caterpillar.";
    }

    if (this.happiness <= 5) {
      var statusText = document.createElement("p");
      status.appendChild(statusText);
      statusText.innerHTML += "Dance for me, jester!";
    }
  };

  levelHappiness.innerHTML = this.happiness;
  levelHunger.innerHTML = this.hunger;
  levelEnergy.innerHTML = this.energy;
  levelBladder.innerHTML = this.bladder;
  levelHygiene.innerHTML = this.hygiene;
  levelIntelligence.innerHTML = this.intelligence;

  let activityBathroom = () => {
    this.hygiene--;
    this.bladder = 0;
    levelHygiene.innerHTML = this.hygiene;
    levelBladder.innerHTML = this.bladder;
  };

  let activitySnack = () => {
    this.hunger++;
    this.bladder += 0.5;
    levelHunger.innerHTML = this.hunger;
    levelBladder.innerHTML = this.bladder;
  };

  let activityDinner = () => {
    this.hunger = 10;
    this.bladder += 4.5;
    levelHunger.innerHTML = this.hunger;
    levelBladder.innerHTML = this.bladder;
  };

  let activityShower = () => {
    this.hygiene = 10;
    levelHygiene.innerHTML = this.hygiene;
  };

  let activityTv = () => {
    this.energy++;
    this.hygiene--;
    this.bladder--;
    this.hunger--;
    this.happiness += 2;
    levelEnergy.innerHTML = this.energy;
    levelHygiene.innerHTML = this.hygiene;
    levelBladder.innerHTML = this.bladder;
    levelHunger.innerHTML = this.hunger;
    levelHappiness.innerHTML = this.happiness;
  };

  let activityNap = () => {
    this.energy += 2;
    this.hygiene -= 2;
    this.bladder++;
    this.hunger--;
    levelEnergy.innerHTML = this.energy;
    levelHygiene.innerHTML = this.hygiene;
    levelBladder.innerHTML = this.bladder;
    levelHunger.innerHTML = this.hunger;
  };

  let activityBed = () => {
    this.energy += 10;
    this.hygiene -= 4;
    this.bladder += 5;
    this.hunger -= 3;
    levelEnergy.innerHTML = this.energy;
    levelHygiene.innerHTML = this.hygiene;
    levelBladder.innerHTML = this.bladder;
    levelHunger.innerHTML = this.hunger;
  };

  let activityRead = () => {
    this.intelligence += 3;
    this.happiness++;
    levelIntelligence.innerHTML = this.intelligence;
    levelHappiness.innerHTML = this.happiness;
  };

  let activityWalk = () => {
    this.energy -= 3;
    this.happiness++;
    this.hygiene -= 3;
    this.hunger -= 2;
    this.bladder += 2;
    levelEnergy.innerHTML = this.energy;
    levelHygiene.innerHTML = this.hygiene;
    levelHappiness.innerHTML = this.happiness;
    levelHunger.innerHTML = this.hunger;
    levelBladder.innerHTML = this.bladder;
  };

  buttonBathroom.addEventListener("click", () => {
    clearStatusTextbox();
    activityBathroom();
    updateStatusTextbox();
  });

  buttonSnacktime.addEventListener("click", () => {
    clearStatusTextbox();
    activitySnack();
    updateStatusTextbox();
  });

  buttonDinner.addEventListener("click", () => {
    clearStatusTextbox();
    activityDinner();
    updateStatusTextbox();
  });

  buttonShower.addEventListener("click", () => {
    clearStatusTextbox();
    activityShower();
    updateStatusTextbox();
  });

  buttonWatchTv.addEventListener("click", () => {
    clearStatusTextbox();
    activityTv();
    updateStatusTextbox();
  });

  buttonNaptime.addEventListener("click", () => {
    clearStatusTextbox();
    activityNap();
    updateStatusTextbox();
  });

  buttonBedtime.addEventListener("click", () => {
    clearStatusTextbox();
    activityBed();
    updateStatusTextbox();
  });

  buttonReadBook.addEventListener("click", () => {
    clearStatusTextbox();
    activityRead();
    updateStatusTextbox();
  });

  buttonWalk.addEventListener("click", () => {
    clearStatusTextbox();
    activityWalk();
    updateStatusTextbox();
  });
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
