webpackHotUpdate("app",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return component; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);




function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    var ibox = document.createElement('input');

    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'Webpack'], " ");

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = Object(_print_js__WEBPACK_IMPORTED_MODULE_1__["showBox"])();

    ibox.setAttribute("type", "text");

    element.appendChild(btn);
    element.appendChild(ibox);

    return element;
}

// document.body.appendChild(component());

var elementGlb = component(); //Store the element to re-render on print.js changes
document.body.appendChild(elementGlb);

// if (module.hot) {
//     module.hot.accept('./print.js', function() {
//         console.log('Accepting the updated printMe module!');
//         // printMe();
//         document.body.removeChild(elementGlb);
//         elementGlb = component(); //Re-render the "component" to update the click handler
//         document.body.appendChild(elementGlb);
//     });
// }

/***/ })

})