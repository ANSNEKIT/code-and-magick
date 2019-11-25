'use strict';

(function () {
  var keyCodes = {
    'ESC': 27,
    'ENTER': 13
  };

  window.util = {
    isEcsEvent: function (evt, action) {
      if (evt.keyCode === keyCodes.ESC) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === keyCodes.ENTER) {
        action();
      }
    },
    getRandom: function (min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  };

})();
