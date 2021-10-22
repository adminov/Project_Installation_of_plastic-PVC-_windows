/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_togglePopupCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/togglePopupCall */ \"./src/modules/togglePopupCall.js\");\n/* harmony import */ var _modules_sliderForCustomers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliderForCustomers */ \"./src/modules/sliderForCustomers.js\");\n/* harmony import */ var _modules_modalCallMeasurer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modalCallMeasurer */ \"./src/modules/modalCallMeasurer.js\");\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_validateInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validateInputs */ \"./src/modules/validateInputs.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n(0,_modules_togglePopupCall__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_sliderForCustomers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modalCallMeasurer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_validateInputs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar countTimer = function countTimer() {\n  var deadLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '25 October 2021';\n  var timeDay = document.querySelectorAll('.count_1 span'),\n      timeHours = document.querySelectorAll('.count_2 span'),\n      timeMinutes = document.querySelectorAll('.count_3 span'),\n      timeSeconds = document.querySelectorAll('.count_4 span');\n\n  var getTimeRemaining = function getTimeRemaining() {\n    var dateStop = new Date(deadLine).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        second = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60);\n    var day = Math.floor(timeRemaining / 60 / 60 / 24);\n    return {\n      timeRemaining: timeRemaining,\n      day: day,\n      hours: hours,\n      minutes: minutes,\n      second: second\n    };\n  };\n\n  var interval;\n\n  var updateClock = function updateClock() {\n    var timer = getTimeRemaining();\n\n    if (timer.timeRemaining > 0) {\n      timeDay.forEach(function (elem) {\n        elem.textContent = ('0' + timer.day).slice(-2);\n      });\n      timeHours.forEach(function (elem) {\n        elem.textContent = ('0' + timer.hours).slice(-2);\n      });\n      timeMinutes.forEach(function (elem) {\n        elem.textContent = ('0' + timer.minutes).slice(-2);\n      });\n      timeSeconds.forEach(function (elem) {\n        elem.textContent = ('0' + timer.second).slice(-2);\n      });\n    } else {\n      clearInterval(interval);\n      timeDay.forEach(function (elem) {\n        elem.textContent = '00';\n      });\n      timeHours.forEach(function (elem) {\n        elem.textContent = '00';\n      });\n      timeMinutes.forEach(function (elem) {\n        elem.textContent = '00';\n      });\n      timeSeconds.forEach(function (elem) {\n        elem.textContent = '00';\n      });\n    }\n  };\n\n  updateClock();\n  interval = setInterval(updateClock, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/modalCallMeasurer.js":
/*!******************************************!*\
  !*** ./src/modules/modalCallMeasurer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar modalCallMeasurer = function modalCallMeasurer() {\n  var serviceBtn = document.querySelectorAll('.service-button'),\n      servicesModal = document.querySelector('.services-modal'),\n      overlayTwo = document.querySelector('.overlayTwo'),\n      popup = {\n    count: 150,\n    speed: 10,\n    start: 150,\n    end: 0\n  };\n\n  var showPopups = function showPopups() {\n    popup.start > popup.end ? popup.count -= popup.speed : popup.count += popup.speed;\n    servicesModal.style.transform = \"translateX(\".concat(popup.count, \"px)\");\n\n    if (popup.start > popup.end ? popup.count > popup.end : popup.count < popup.end) {\n      requestAnimationFrame(showPopups);\n    }\n  };\n\n  serviceBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      overlayTwo.style.display = 'block';\n\n      if (screen.width > 768) {\n        popup.count = popup.start;\n        servicesModal.style.display = '';\n        requestAnimationFrame(showPopups);\n      }\n    });\n  });\n  overlayTwo.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('services-modal__close')) {\n      overlayTwo.style.display = 'none';\n    } else {\n      target = target.closest('.services-modal');\n\n      if (!target) {\n        overlayTwo.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalCallMeasurer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modalCallMeasurer.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скокро с вами свяжемся!',\n      errorImg = './images/wait/error.png',\n      loadImg = './images/wait/wait.gif',\n      successImg = './images/wait/success.png'; //чистка инпутов после отправки данных\n\n  var clearInput = function clearInput(idForm) {\n    var form = document.getElementById(idForm);\n\n    _toConsumableArray(form.elements).filter(function (item) {\n      return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';\n    }).forEach(function (item) {\n      return item.value = '';\n    });\n  };\n\n  var removeDivSuccessError = function removeDivSuccessError() {\n    var successError = document.querySelector('.successError');\n    setTimeout(function () {\n      successError.remove();\n      document.querySelector('.overlayTwo').style.display = 'none';\n    }, 2000);\n  };\n\n  var processingForm = function processingForm(idForm) {\n    var form = document.getElementById(idForm);\n    var statusMessage = document.createElement('div');\n    var img = document.createElement('img');\n    statusMessage.className = 'successError';\n    statusMessage.style.cssText = 'font-size: 2rem; color: black;';\n    img.height = 50;\n    form.addEventListener('submit', function (event) {\n      event.preventDefault();\n      var formData = new FormData(form);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n\n      if (body.fio === '' || body.phone === '') {\n        alert('Введите данные');\n      } else {\n        statusMessage.textContent = loadMessage;\n        img.src = loadImg;\n        statusMessage.insertBefore(img, statusMessage.firstChild);\n        form.appendChild(statusMessage);\n        postData(body).then(function () {\n          statusMessage.textContent = successMessage;\n          img.src = successImg;\n          statusMessage.insertBefore(img, statusMessage.firstChild);\n          clearInput(idForm);\n          removeDivSuccessError();\n        })[\"catch\"](function (error) {\n          statusMessage.textContent = errorMessage;\n          img.src = errorImg;\n          statusMessage.insertBefore(img, statusMessage.firstChild);\n          clearInput(idForm);\n          removeDivSuccessError();\n          console.error(error);\n        });\n      }\n    });\n  };\n\n  processingForm('form1');\n  processingForm('form2');\n  processingForm('form3');\n  processingForm('form4');\n\n  var postData = function postData(body) {\n    return new Promise(function (resolve, reject) {\n      var request = new XMLHttpRequest();\n      request.addEventListener(\"readystatechange\", function () {\n        if (request.readyState !== 4) return;\n\n        if (request.status === 200) {\n          resolve();\n        } else {\n          reject(request.status);\n        }\n      });\n      request.open('POST', './server.php');\n      request.setRequestHeader('Content-Type', 'application/json');\n      request.send(JSON.stringify(body));\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/sliderForCustomers.js":
/*!*******************************************!*\
  !*** ./src/modules/sliderForCustomers.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sliderForCustomers = function sliderForCustomers() {\n  var benefitsInner = document.querySelector('.benefits-inner'),\n      benefitsWrap = document.querySelector('.benefits-wrap'),\n      benefitsItems = document.querySelectorAll('.benefits__item'),\n      btnLeft = document.querySelector('.benefits__arrow--left'),\n      btnRight = document.querySelector('.benefits__arrow--right');\n  benefitsInner.style.overflow = 'hidden';\n  benefitsWrap.style.marginLeft = 'inherit';\n\n  if (screen.width <= 1220) {\n    var positions = 0;\n    var slidesToShow = 1;\n    var slidesToScroll = 1;\n    var itemCount = benefitsItems.length;\n    var itemWidth = benefitsInner.clientWidth / slidesToShow;\n    var movePosition = slidesToScroll * itemWidth;\n    benefitsItems.forEach(function (item) {\n      item.style.minWidth = \"\".concat(itemWidth, \"px\");\n    });\n    btnRight.addEventListener('click', function () {\n      var itemLeft = itemCount - (Math.abs(positions) + slidesToShow * itemWidth) / itemWidth;\n      positions -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;\n      setPosition();\n    });\n    btnLeft.addEventListener('click', function () {\n      var itemLeft = Math.abs(positions) / itemWidth;\n      positions += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;\n      setPosition();\n    });\n\n    var setPosition = function setPosition() {\n      benefitsWrap.style.transform = \"translateX(\".concat(positions, \"px)\");\n    };\n  } else {\n    var position = 0;\n    var _slidesToShow = 3;\n    var _slidesToScroll = 3;\n    var _itemCount = benefitsItems.length;\n\n    var _itemWidth = benefitsInner.clientWidth / _slidesToShow;\n\n    var _movePosition = _slidesToScroll * _itemWidth;\n\n    benefitsItems.forEach(function (item) {\n      item.style.minWidth = \"\".concat(_itemWidth, \"px\");\n    });\n    btnRight.addEventListener('click', function () {\n      var itemLeft = _itemCount - (Math.abs(position) + _slidesToShow * _itemWidth) / _itemWidth;\n\n      position -= itemLeft >= _slidesToScroll ? _movePosition : itemLeft * _itemWidth;\n\n      _setPosition();\n    });\n    btnLeft.addEventListener('click', function () {\n      var itemLeft = Math.abs(position) / _itemWidth;\n\n      position += itemLeft >= _slidesToScroll ? _movePosition : itemLeft * _itemWidth;\n\n      _setPosition();\n    });\n\n    var _setPosition = function _setPosition() {\n      benefitsWrap.style.transform = \"translateX(\".concat(position, \"px)\");\n    };\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderForCustomers);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/sliderForCustomers.js?");

/***/ }),

/***/ "./src/modules/togglePopupCall.js":
/*!****************************************!*\
  !*** ./src/modules/togglePopupCall.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopupCall = function togglePopupCall() {\n  var btnOrderCall = document.querySelector('.btn-order-call'),\n      headerModal = document.querySelector('.header-modal'),\n      overlay = document.querySelector('.overlay');\n  var popupData = {\n    count: 150,\n    speed: 10,\n    start: 150,\n    end: 0\n  };\n\n  var showPopup = function showPopup() {\n    popupData.start > popupData.end ? popupData.count -= popupData.speed : popupData.count += popupData.speed;\n    headerModal.style.transform = \"translateX(\".concat(popupData.count, \"px)\");\n\n    if (popupData.start > popupData.end ? popupData.count > popupData.end : popupData.count < popupData.end) {\n      requestAnimationFrame(showPopup);\n    }\n  };\n\n  btnOrderCall.addEventListener('click', function () {\n    overlay.style.display = 'block';\n\n    if (screen.width > 768) {\n      popupData.count = popupData.start;\n      headerModal.style.display = '';\n      requestAnimationFrame(showPopup);\n    }\n  });\n  overlay.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('header-modal__close')) {\n      overlay.style.display = 'none';\n    } else {\n      target = target.closest('.header-modal');\n\n      if (!target) {\n        overlay.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopupCall);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/togglePopupCall.js?");

/***/ }),

/***/ "./src/modules/validateInputs.js":
/*!***************************************!*\
  !*** ./src/modules/validateInputs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validateInputs = function validateInputs() {\n  console.log('123');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateInputs);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/validateInputs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;