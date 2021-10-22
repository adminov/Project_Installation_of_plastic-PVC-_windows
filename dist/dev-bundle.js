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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_togglePopupCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/togglePopupCall */ \"./src/modules/togglePopupCall.js\");\n/* harmony import */ var _modules_sliderForCustomers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliderForCustomers */ \"./src/modules/sliderForCustomers.js\");\n/* harmony import */ var _modules_modalCallMeasurer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modalCallMeasurer */ \"./src/modules/modalCallMeasurer.js\");\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n\n\n\n\n\n\n(0,_modules_togglePopupCall__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_sliderForCustomers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modalCallMeasurer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar countTimer = function countTimer() {\n  var deadLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '25 October 2021';\n  var timeDay = document.querySelectorAll('.count_1 span'),\n      timeHours = document.querySelectorAll('.count_2 span'),\n      timeMinutes = document.querySelectorAll('.count_3 span'),\n      timeSeconds = document.querySelectorAll('.count_4 span');\n\n  var getTimeRemaining = function getTimeRemaining() {\n    var dateStop = new Date(deadLine).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        second = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60);\n    var day = Math.floor(timeRemaining / 60 / 60 / 24);\n    return {\n      timeRemaining: timeRemaining,\n      day: day,\n      hours: hours,\n      minutes: minutes,\n      second: second\n    };\n  };\n\n  var interval;\n\n  var updateClock = function updateClock() {\n    var timer = getTimeRemaining();\n\n    if (timer.timeRemaining > 0) {\n      timeDay.forEach(function (elem) {\n        elem.textContent = ('0' + timer.day).slice(-2);\n      });\n      timeHours.forEach(function (elem) {\n        elem.textContent = ('0' + timer.hours).slice(-2);\n      });\n      timeMinutes.forEach(function (elem) {\n        elem.textContent = ('0' + timer.minutes).slice(-2);\n      });\n      timeSeconds.forEach(function (elem) {\n        elem.textContent = ('0' + timer.second).slice(-2);\n      });\n    } else {\n      clearInterval(interval);\n      timeDay.textContent = '00';\n      timeHours.textContent = '00';\n      timeMinutes.textContent = '00';\n      timeSeconds.textContent = '00';\n    }\n  };\n\n  console.log('21');\n  updateClock();\n  interval = setInterval(updateClock, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/modalCallMeasurer.js":
/*!******************************************!*\
  !*** ./src/modules/modalCallMeasurer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar modalCallMeasurer = function modalCallMeasurer() {\n  var serviceBtn = document.querySelectorAll('.service-button'),\n      servicesModal = document.querySelector('.services-modal'),\n      overlayTwo = document.querySelector('.overlayTwo');\n  serviceBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      servicesModal.style.display = 'block';\n      overlayTwo.style.display = 'block';\n    });\n  });\n  overlayTwo.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('services-modal__close')) {\n      servicesModal.style.display = 'none';\n      overlayTwo.style.display = 'none';\n    } else {\n      target = target.closest('.services-modal');\n\n      if (!target) {\n        overlayTwo.style.display = 'none';\n        servicesModal.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalCallMeasurer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modalCallMeasurer.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopupCall = function togglePopupCall() {\n  var btnOrderCall = document.querySelector('.btn-order-call'),\n      headerModal = document.querySelector('.header-modal'),\n      overlay = document.querySelector('.overlay');\n  btnOrderCall.addEventListener('click', function () {\n    headerModal.style.display = 'block';\n    overlay.style.display = 'block';\n  });\n  overlay.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('header-modal__close')) {\n      headerModal.style.display = 'none';\n      overlay.style.display = 'none';\n    } else {\n      target = target.closest('.header-modal');\n\n      if (!target) {\n        headerModal.style.display = 'none';\n        overlay.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopupCall);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/togglePopupCall.js?");

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