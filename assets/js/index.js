const levelHappiness = document.querySelector(".currentLevel--happiness");
const levelHunger = document.querySelector(".currentLevel--hunger");
const levelEnergy = document.querySelector(".currentLevel--energy");
const levelBladder = document.querySelector(".currentLevel--bladder");
const levelHygiene = document.querySelector(".currentLevel--hygiene");
const levelIntelligence = document.querySelector(".currentLevel--intelligence");

const currentStat = document.querySelectorAll(".currentLevel");
const controlButtons = document.querySelectorAll(".controlButton");

const inputName = document.querySelector("#creatureName");
const buttonEditName = document.querySelector(".button--edit");
const buttonSaveName = document.querySelector(".button--save");

const tamagotchiName = document.querySelector(".tamagotchiName--greeting span");

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
      levelBladder.classList.add("red", "highlight");
    } else {
      levelBladder.classList.remove("red", "highlight");
    }

    if (this.hunger <= 3) {
      var statusText = document.createElement("p");
      status.appendChild(statusText);
      statusText.innerHTML += "Feed me, peasant!";
      levelHunger.classList.add("red");
    } else {
      levelHunger.classList.remove("red");
    }

    if (this.energy <= 3) {
      var statusText = document.createElement("p");
      status.appendChild(statusText);
      statusText.innerHTML += "Tuck me in or I'll haunt your dreams";
      levelEnergy.classList.add("red");
    } else {
      levelEnergy.classList.remove("red");
    }

    if (this.hygiene <= 3) {
      var statusText = document.createElement("p");
      status.appendChild(statusText);
      statusText.innerHTML += "I smell!  Bathe me";
      levelHygiene.classList.add("red");
    } else {
      levelHygiene.classList.remove("red");
    }

    if (this.intelligence <= 3) {
      var statusText = document.createElement("p");
      status.appendChild(statusText);
      statusText.innerHTML +=
        "When I grow up, I want to be a principal or a caterpillar.";
      levelIntelligence.classList.add("red");
    } else {
      levelIntelligence.classList.remove("red");
    }

    if (this.happiness <= 5) {
      var statusText = document.createElement("p");
      status.appendChild(statusText);
      statusText.innerHTML += "Dance for me, jester!";
      levelHappiness.classList.add("red");
    } else {
      levelHappiness.classList.remove("red");
    }
  };

  levelHappiness.innerHTML = this.happiness;
  levelHunger.innerHTML = this.hunger;
  levelEnergy.innerHTML = this.energy;
  levelBladder.innerHTML = this.bladder;
  levelHygiene.innerHTML = this.hygiene;
  levelIntelligence.innerHTML = this.intelligence;

  const activityBathroom = () => {
    this.hygiene--;
    this.bladder = 0;
  };

  const activitySnack = () => {
    this.hunger++;
    this.bladder += 1;
  };

  const activityDinner = () => {
    this.hunger = 10;
    this.bladder += 5;
  };

  const activityShower = () => {
    this.hygiene = 10;
  };

  const activityTv = () => {
    this.energy++;
    this.hygiene--;
    this.bladder--;
    this.intelligence--;
    this.hunger--;
    this.happiness += 2;
  };

  const activityNap = () => {
    this.energy += 2;
    this.hygiene -= 2;
    this.bladder++;
    this.hunger--;
  };

  const activityBed = () => {
    this.energy += 10;
    this.hygiene -= 4;
    this.bladder += 5;
    this.hunger -= 3;
  };

  const activityRead = () => {
    this.intelligence += 3;
    this.happiness++;
  };

  const activityWalk = () => {
    this.energy -= 3;
    this.happiness++;
    this.hygiene -= 3;
    this.hunger -= 2;
    this.bladder += 2;
  };

  const checkActivity = activity => {
    switch (activity) {
      case "watchTv":
        return activityTv();

      case "readBook":
        return activityRead();

      case "snack":
        return activitySnack();

      case "bathroom":
        return activityBathroom();

      case "shower":
        return activityShower();

      case "walk":
        return activityWalk();

      case "nap":
        return activityNap();

      case "bed":
        return activityBed();

      case "dinner":
        return activityDinner();
      default:
        return;
    }
  };

  const checkLevelLimit = () => {
    for (let i = 0; i < currentStat.length; i++) {
      const type = currentStat[i].getAttribute("data-type");

      if (this[type] <= 0) {
        this[type] = 0;
      } else if (this[type] >= 10) {
        this[type] = 10;
      }
    }
  };

  const updateLevels = () => {
    levelHappiness.innerHTML = this.happiness;
    levelHunger.innerHTML = this.hunger;
    levelEnergy.innerHTML = this.energy;
    levelBladder.innerHTML = this.bladder;
    levelHygiene.innerHTML = this.hygiene;
    levelIntelligence.innerHTML = this.intelligence;
  };

  const addClickEvent = controlButton => {
    controlButton.addEventListener("click", e => {
      const activity = e.currentTarget.getAttribute("data-activity");

      clearStatusTextbox();
      checkActivity(activity);
      checkLevelLimit();
      updateLevels();
      updateStatusTextbox();
    });
  };

  for (let i = 0; i < controlButtons.length; i++) {
    addClickEvent(controlButtons[i]);
  }

  updateStatusTextbox();
}

// function addHighlight() {
//   for (let i = 0; i < currentStat.length; i++) {
//     currentStat[i].classList.add("highlight");
//   }
// }

// function removeHighlight() {
//   for (let i = 0; i < currentStat.length; i++) {
//     currentStat[i].classList.remove("highlight");
//   }
// }

// const highlightTimerAdd = setTimeout(addHighlight, 200);
// const highlightTimerRemove = setTimeout(removeHighlight, 1000);

const leah = new Tamagotchi();
