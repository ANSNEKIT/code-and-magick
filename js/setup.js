'use strict';

(function () {
  var $setupWindow = document.querySelector('.setup');

  var $wizardCoat = $setupWindow.querySelector('.wizard-coat');
  var $wizardCoatInp = $setupWindow.querySelector('input[name="coat-color"]');
  var $wizardEyes = $setupWindow.querySelector('.wizard-eyes');
  var $wizardEyesInp = $setupWindow.querySelector('input[name="eyes-color"]');
  var $wizardFireball = $setupWindow.querySelector('.setup-fireball-wrap');
  var $wizardFirebalInp = $setupWindow.querySelector('input[name="fireball-color"]');

  window.setup = {
    customWizard: function customWizard(evt) {
      var target = evt.target;
      if (target === $wizardCoat) {
        $wizardCoat.style.fill = window.MOCK.coatColor[window.util.getRandom(0, window.MOCK.coatColor.length)];
        $wizardCoatInp.value = $wizardCoat.style.fill;
      } else if (target === $wizardEyes) {
        $wizardEyes.style.fill = window.MOCK.eyesColor[window.util.getRandom(0, window.MOCK.eyesColor.length)];
        $wizardEyesInp.value = $wizardEyes.style.fill;
      } else if (target.closest('.setup-fireball-wrap') === $wizardFireball) {
        var fbColor = window.MOCK.fireballColor[window.util.getRandom(0, window.MOCK.fireballColor.length)];
        $wizardFireball.style.backgroundColor = fbColor;
        $wizardFirebalInp.value = fbColor;
      }
    },
    wizards: [
      {
        name: window.MOCK.names[window.util.getRandom(0, window.MOCK.names.length)]
        + ' ' + window.MOCK.familyNames[window.util.getRandom(0, window.MOCK.familyNames.length)],
        coatColor: window.MOCK.coatColor[window.util.getRandom(0, window.MOCK.coatColor.length)],
        eyesColor: window.MOCK.eyesColor[window.util.getRandom(0, window.MOCK.eyesColor.length)]
      },
      {
        name: window.MOCK.names[window.util.getRandom(0, window.MOCK.names.length)]
        + ' ' + window.MOCK.familyNames[window.util.getRandom(0, window.MOCK.familyNames.length)],
        coatColor: window.MOCK.coatColor[window.util.getRandom(0, window.MOCK.coatColor.length)],
        eyesColor: window.MOCK.eyesColor[window.util.getRandom(0, window.MOCK.eyesColor.length)]
      },
      {
        name: window.MOCK.names[window.util.getRandom(0, window.MOCK.names.length)]
        + ' ' + window.MOCK.familyNames[window.util.getRandom(0, window.MOCK.familyNames.length)],
        coatColor: window.MOCK.coatColor[window.util.getRandom(0, window.MOCK.coatColor.length)],
        eyesColor: window.MOCK.eyesColor[window.util.getRandom(0, window.MOCK.eyesColor.length)]
      },
      {
        name: window.MOCK.names[window.util.getRandom(0, window.MOCK.names.length)]
        + ' ' + window.MOCK.familyNames[window.util.getRandom(0, window.MOCK.familyNames.length)],
        coatColor: window.MOCK.coatColor[window.util.getRandom(0, window.MOCK.coatColor.length)],
        eyesColor: window.MOCK.eyesColor[window.util.getRandom(0, window.MOCK.eyesColor.length)]
      }
    ]
  };
})();


