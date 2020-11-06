import { user } from "user-profile";
import document from "document";

const bmiValue = document.getElementById('bmi-value');
const weightValue = document.getElementById('weight-value');
const heightValue = document.getElementById('height-value');

const addHeight = document.getElementById('add-height');
const subHeight = document.getElementById('sub-height');
const addWeight = document.getElementById('add-weight');
const subWeight = document.getElementById('sub-weight');

let currentWeight = 150;
let currentHeight = 5*12 + 7;

function updateFields() {
  weightValue.text = currentWeight + ' lbs';
  heightValue.text = Math.floor(currentHeight / 12) + "' " + (currentHeight % 12) + '"';

  const kg = currentWeight * 0.453592;
  const meters = currentHeight * 0.0254;
  const bmi = kg / (meters * meters);
  bmiValue.text = bmi.toFixed(1);
}

function loadStats() {
  if (user.height) {
    currentHeight = Math.round(user.height / 0.0254);
  }
  if (user.weight) {
    currentWeight = Math.round(user.weight / 0.453592);
  }
}

addHeight.addEventListener('click', () => {
  currentHeight++;
  updateFields();
});
subHeight.addEventListener('click', () => {
  if (currentHeight > 1) {
    currentHeight--;
    updateFields();
  }
});

addWeight.addEventListener('click', () => {
  currentWeight++;
  updateFields();
});
subWeight.addEventListener('click', () => {
  if (currentWeight > 0) {
    currentWeight--;
    updateFields();
  }
});

loadStats();
updateFields();
