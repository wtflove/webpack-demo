webpackHotUpdate("app",{

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: printMe, showBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printMe", function() { return printMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showBox", function() { return showBox; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");

// import './styles.css';

function printMe() {
    // var element = thisElement;
    // var colors = ['#ff0000', '#00ff00', '#0000ff'];
    // document.getElementsByTagName("BODY").background = colors[Math.floor(Math.random() * colors.length)];
    // console.log(document.getElementsByTagName("BODY").background);
    // console.log(thisElement.innerHTML);
    // document.body.removeChild(element);
    // element = component;
    // document.body.appendChild(element);
    let element = document.getElementsByTagName('DIV');
    document.body.removeChild(element);
    console.log('Updating print.js accpet');
}

function showBox(){
	// let element = document.getElementsByTagName('DIV')[0];
	// document.body.removeChild(element);
	let element = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["component"])();
	document.body.appendChild(element);
}

/***/ })

})