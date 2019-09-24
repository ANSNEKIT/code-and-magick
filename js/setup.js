'use strict';

var $setupWindow = document.querySelector('.setup');
var $setupSimilar = document.querySelector('.setup-similar');
var $setupSimilarList = document.querySelector('.setup-similar-list');
var $wizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

$setupWindow.classList.remove('hidden');
$setupSimilar.classList.remove('hidden');


var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var familyNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizards = [
  {
    name: names[getRandom(0, names.length)]
    + ' ' + familyNames[getRandom(0, familyNames.length)],
    coatColor: coatColor[getRandom(0, coatColor.length)],
    eyesColor: eyesColor[getRandom(0, eyesColor.length)]
  },
  {
    name: names[getRandom(0, names.length)]
    + ' ' + familyNames[getRandom(0, familyNames.length)],
    coatColor: coatColor[getRandom(0, coatColor.length)],
    eyesColor: eyesColor[getRandom(0, eyesColor.length)]
  },
  {
    name: names[getRandom(0, names.length)]
    + ' ' + familyNames[getRandom(0, familyNames.length)],
    coatColor: coatColor[getRandom(0, coatColor.length)],
    eyesColor: eyesColor[getRandom(0, eyesColor.length)]
  },
  {
    name: names[getRandom(0, names.length)]
    + ' ' + familyNames[getRandom(0, familyNames.length)],
    coatColor: coatColor[getRandom(0, coatColor.length)],
    eyesColor: eyesColor[getRandom(0, eyesColor.length)]
  }
];

function renderWizard(wizard) {
  var wizardElement = $wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label')
    .textContent = wizard.name;

  wizardElement.querySelector('.wizard-coat')
    .style.fill = wizard.coatColor;

  wizardElement.querySelector('.wizard-eyes')
    .style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

$setupSimilarList.appendChild(fragment);

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


