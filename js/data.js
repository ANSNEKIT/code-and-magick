'use strict';

(function () {
  var $setupSimilarList = document.querySelector('.setup-similar-list');
  var $wizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

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
  for (var i = 0; i < window.setup.wizards.length; i++) {
    fragment.appendChild(renderWizard(window.setup.wizards[i]));
  }

  $setupSimilarList.appendChild(fragment);


})();
