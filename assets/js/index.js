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
      (10 - this.bladder) +
      this.hygiene +
      this.intelligence) /
      currentStat.length -
      1
  );

  this.feedSnack = () => {
    this.hunger++;
    this.bladder += 0.5;
    levelHunger.innerHTML = this.hunger;
    levelBladder.innerHTML = this.bladder;
  };

  this.feedDinner = () => {
    this.hunger = 10;
    this.bladder += 4.5;
    levelHunger.innerHTML = this.hunger;
    levelBladder.innerHTML = this.bladder;
  };

  this.takeNap = () => {
    this.energy += 2;
    this.hygiene -= 2;
    this.bladder++;
    this.hunger--;
    levelEnergy.innerHTML = this.energy;
    levelHygiene.innerHTML = this.hygiene;
    levelBladder.innerHTML = this.bladder;
    levelHunger.innerHTML = this.hunger;
  };

  this.goToBed = () => {
    this.energy += 10;
    this.hygiene -= 4;
    this.bladder += 5;
    this.hunger -= 3;
    levelEnergy.innerHTML = this.energy;
    levelHygiene.innerHTML = this.hygiene;
    levelBladder.innerHTML = this.bladder;
    levelHunger.innerHTML = this.hunger;
  };

  this.watchTv = () => {
    this.energy++;
    this.hygiene--;
    this.hunger--;
    this.happiness += 2;
    levelEnergy.innerHTML = this.energy;
    levelHygiene.innerHTML = this.hygiene;
    levelBladder.innerHTML = this.bladder;
    levelHunger.innerHTML = this.hunger;
    levelHappiness.innerHTML = this.happiness;
  };

  this.readBook = () => {
    this.intelligence += 3;
    this.happiness++;
    levelIntelligence.innerHTML = this.intelligence;
    levelHappiness.innerHTML = this.happiness;
  };

  this.walk = () => {
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

  this.bathroom = () => {
    this.hygiene--;
    this.bladder = 0;
    levelHygiene.innerHTML = this.hygiene;
    levelBladder.innerHTML = this.bladder;
  };

  this.shower = () => {
    this.hygiene = 10;
    this.energy--;
    levelHygiene.innerHTML = this.hygiene;
    levelEnergy.innerHTML = this.energy;
  };

  levelHappiness.innerHTML = this.happiness;
  levelHunger.innerHTML = this.hunger;
  levelEnergy.innerHTML = this.energy;
  levelBladder.innerHTML = this.bladder;
  levelHygiene.innerHTML = this.hygiene;
  levelIntelligence.innerHTML = this.intelligence;

  buttonSnacktime.addEventListener("click", this.feedSnack);
  buttonDinner.addEventListener("click", this.feedDinner);
  buttonNaptime.addEventListener("click", this.takeNap);
  buttonBedtime.addEventListener("click", this.goToBed);
  buttonWatchTv.addEventListener("click", this.watchTv);
  buttonReadBook.addEventListener("click", this.readBook);
  buttonBathroom.addEventListener("click", this.bathroom);
  buttonShower.addEventListener("click", this.shower);
  buttonWalk.addEventListener("click", this.walk);
}

let currentStat = document.querySelectorAll(".currentLevel");

function addHighlight() {
  console.log("add highlight");

  for (let i = 0; i < currentStat.length; i++) {
    currentStat[i].classList.add("highlight");
  }
}

function removeHighlight() {
  console.log("removing highlight");

  for (let i = 0; i < currentStat.length; i++) {
    currentStat[i].classList.remove("highlight");
  }
}

const highlightTimerAdd = setTimeout(addHighlight, 200);
const highlightTimerRemove = setTimeout(removeHighlight, 1000);

const leah = new Tamagotchi();
