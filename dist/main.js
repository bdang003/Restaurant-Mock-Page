/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const constructNav=(()=>{\n  const navBar = document.createElement('div');\n  navBar.innerHTML = 'navbar';\n  navBar.id='nav-bar';\n  document.body.append(navBar);\n})();\n\nconst constructMain=(()=>{\n  const main = document.createElement('main');\n  const footer = document.createElement('div');\n  main.innerHTML = 'main';\n  main.id='main';\n  footer.innerHTML = 'footer';\n  footer.id='footer';\n  document.body.append(main);\n  main.append(footer);\n})();\n\n//# sourceURL=webpack://restaurant-mock-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;