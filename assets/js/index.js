console.log("Leah");

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

function Tamagotchi() {
  this.hunger = Math.floor(Math.random() * 10);
  this.energy = Math.floor(Math.random() * 10);
  this.bladder = Math.floor(Math.random() * 10);
  this.hygiene = Math.floor(Math.random() * 10);
  this.intelligence = Math.floor(Math.random() * 10 + 1);
  this.happiness = Math.floor(
    (this.hunger +
      this.energy +
      this.bladder +
      this.hygiene +
      this.intelligence) /
      5
  );

  levelHappiness.innerHTML = this.happiness;
  levelHunger.innerHTML = this.hunger;
  levelEnergy.innerHTML = this.energy;
  levelBladder.innerHTML = this.bladder;
  levelHygiene.innerHTML = this.hygiene;
  levelIntelligence.innerHTML = this.intelligence;
}

// const leah = new tamagotchi();
