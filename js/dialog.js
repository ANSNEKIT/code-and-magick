'use strict';

(function () {
  var $setupWindow = document.querySelector('.setup');
  var $dialogHandler = document.querySelector('.upload');
  var $setupOpen = document.querySelector('.setup-open');
  var $setupOpenIcon = document.querySelector('.setup-open-icon');
  var $setupClose = document.querySelector('.setup-close');
  var $userNameInput = $setupWindow.querySelector('.setup-user-name');

  var onLoadHandler = function () {
    $setupOpenIcon.setAttribute('role', 'button');
    $setupOpenIcon.setAttribute('tabindex', '0');
    $setupClose.setAttribute('role', 'button');
    $setupClose.setAttribute('tabindex', '0');
  };

  var onPopupEscPress = function (evt) {
    window.util.isEcsEvent(evt, closePopup);
  };

  var showPopup = function () {
    $setupWindow.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    $setupWindow.addEventListener('click', window.setup.customWizard);
  };

  var closePopup = function () {
    $setupWindow.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    $setupWindow.removeEventListener('click', window.setup.customWizard);
  };

  $setupOpen.addEventListener('click', function () {
    showPopup();
  });

  $setupClose.addEventListener('click', function () {
    closePopup();
  });

  $setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, showPopup);
  });

  $setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
    /*if (evt.keyCode === window.keyCodes.ENTER) {
      closePopup();
    }*/
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
      window.util.isEcsEvent(evt, document.removeEventListener('keydown', onPopupEscPress));

      /*if (evt.keyCode === window.keyCodes.ESC) {
        document.removeEventListener('keydown', onPopupEscPress);
      }*/
    });
  });

  $userNameInput.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });

  document.addEventListener('DOMContentLoaded', onLoadHandler);

  // Перемещение окна

  $dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoord = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoord.x - moveEvt.clientX,
        y: startCoord.y - moveEvt.clientY
      };

      startCoord = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      $setupWindow.style.top = ($setupWindow.offsetTop - shift.y) + 'px';
      $setupWindow.style.left = ($setupWindow.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      $dialogHandler.removeEventListener('mousemove', onMouseMove);
      $dialogHandler.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickHandler = function (evt) {
          evt.preventDefault();

          $dialogHandler.removeEventListener('click', onClickHandler);
        };
      }

      $dialogHandler.addEventListener('click', onClickHandler);
    };

    $dialogHandler.addEventListener('mousemove', onMouseMove);
    $dialogHandler.addEventListener('mouseup', onMouseUp);
  });

})();
