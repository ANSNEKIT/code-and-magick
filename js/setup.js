'use strict';

var $setupWindow = document.querySelector('.setup');
var $setupOpen = document.querySelector('.setup-open');
var $setupOpenIcon = document.querySelector('.setup-open-icon');
var $setupClose = $setupWindow.querySelector('.setup-close');
var $wizardCoat = $setupWindow.querySelector('.wizard-coat');
var $wizardCoatInp = $setupWindow.querySelector('input[name="coat-color"]');
var $wizardEyes = $setupWindow.querySelector('.wizard-eyes');
var $wizardEyesInp = $setupWindow.querySelector('input[name="eyes-color"]');
var $wizardFireball = $setupWindow.querySelector('.setup-fireball-wrap');
var $wizardFirebalInp = $setupWindow.querySelector('input[name="fireball-color"]');
var $userNameInput = $setupWindow.querySelector('.setup-user-name');
var $setupSimilarList = document.querySelector('.setup-similar-list');
var $wizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === keyCodes.ESC) {
    closePopup();
  }
};
var showPopup = function () {
  $setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  $setupWindow.addEventListener('click', customWizard);
};
var closePopup = function () {
  $setupWindow.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  $setupWindow.removeEventListener('click', customWizard);
};

var onLoadHandler = function () {
  $setupOpenIcon.setAttribute('role', 'button');
  $setupOpenIcon.setAttribute('tabindex', '0');
  $setupClose.setAttribute('role', 'button');
  $setupClose.setAttribute('tabindex', '0');
};

var customWizard = function (evt) {
  var target = evt.target;
  if (target === $wizardCoat) {
    $wizardCoat.style.fill = coatColor[getRandom(0, coatColor.length)];
    $wizardCoatInp.value = $wizardCoat.style.fill;
  } else if (target === $wizardEyes) {
    $wizardEyes.style.fill = eyesColor[getRandom(0, eyesColor.length)];
    $wizardEyesInp.value = $wizardEyes.style.fill;
  } else if (target.closest('.setup-fireball-wrap') === $wizardFireball) {
    var fbColor = fireballColor[getRandom(0, fireballColor.length)];
    $wizardFireball.style.backgroundColor = fbColor;
    $wizardFirebalInp.value = fbColor;
  }
};

var keyCodes = {
  'ESC': 27,
  'ENTER': 13
};

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

var fireballColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
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


document.addEventListener('DOMContentLoaded', onLoadHandler);

$setupOpen.addEventListener('click', function () {
  showPopup();
});

$setupClose.addEventListener('click', function () {
  closePopup();
});


$setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === keyCodes.ENTER) {
    showPopup();
  }
});

$setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === keyCodes.ENTER) {
    closePopup();
  }
});

$userNameInput.addEventListener('invalid', function () {
  if ($userNameInput.validity.tooShort) {
    $userNameInput.setCustomValidity('Имя должно состоять минимум из 2х символов');
  } else if ($userNameInput.validity.tooLong) {
    $userNameInput.setCustomValidity('Имя не должно превышать 25 символов');
  } else if ($userNameInput.validity.valueMissing) {
    $userNameInput.setCustomValidity('Обязательное поле');
  } else {
    $userNameInput.setCustomValidity('');
  }
});

$userNameInput.addEventListener('focus', function () {
  $userNameInput.addEventListener('keydown', function (evt) {
    if (evt.keyCode === keyCodes.ESC) {
      document.removeEventListener('keydown', onPopupEscPress);
    }
  });
});

$userNameInput.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});


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


