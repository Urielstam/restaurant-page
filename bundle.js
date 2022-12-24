/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:wght@300;400;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Cross page styles */\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n\nbody, html {\n    height: 100%;\n    font-family: 'Courgette', cursive;\n}\n\n.content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.nav {\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    padding: 1rem;\n    position: fixed;\n}\n\n.tags {\n    display: flex;\n    gap: 2rem;\n    font-size: 1.5rem;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.tags p {\n    display: block;\n    color: #DC3535;\n    text-decoration: none;\n    position: relative;\n}\n\n.tags p::after{\n    content: \"\";\n    background: #DC3535;\n    mix-blend-mode: exclusion;\n    width: calc(100% + 20px);\n    height: 0;\n    position: absolute;\n    bottom: -4px;\n    left: -10px;\n      transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  }\n  \n.tags p:hover::after{\n    height: calc(100% + 8px)\n  }\n\nfooter {\n    display: flex;\n    justify-content: center;\n    background-color: black;\n    color: #DC3535;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    padding: 1rem 0;\n    font-family: 'Roboto', sans-serif;\n}\n\nfooter span {\n    content: url('https://api.iconify.design/bi/fire.svg?color=%23dc3535');\n    margin: 0 5px;\n    color: #dc6a35;\n}\n\n/* Home styles */\n\n.hero {\n    box-sizing: border-box;\n    width: 100%;\n    height: 80vh;\n    color: white;\n    padding: 4rem;\n    flex-wrap: wrap;\n    background-image:\n    /* linear-gradient(black, rgba(0, 0, 0, 0.2)), */\n    url(https://images.pexels.com/photos/6876075/pexels-photo-6876075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);\n    background-position: 90% 30%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-blend-mode: saturation;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n\n}\n\n.hero h1 {\n    font-size: 6rem;\n    margin-bottom: 2rem;\n}\n\n.hero p {\n    font-size: 2rem;\n}\n\n\n.grid-container {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.grid {\n    width: 80%;\n    padding-top: 4rem;\n    display: grid;\n    grid-template: 250px 250px / 1fr 1fr;\n    gap: 10px;\n}\n\n.cell {\n    font-size: 2rem;\n    color: white;\n    padding: 1rem;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n}\n\n.img1 {\n    grid-row: 1 / -1;\n    background-image: url(https://images.unsplash.com/photo-1616141032335-7e6b413f93ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.img2 {\n    background-image: url(https://images.unsplash.com/photo-1616141215340-34b0e7c661c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);\n    background-position: 100% 75%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.img3 {\n    background-image: url(https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=743&q=80);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    justify-content: start;\n    align-items: end;\n\n}\n\n.about {\n    box-sizing: border-box;\n    height: 70vh;\n    width: 100%;\n    color: white;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    background-image: url(https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_960_720.jpg);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin-top: 4rem;\n    padding: 2rem;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n\n}\n\n.about h1 {\n    font-size: 3rem;\n}\n\n.about p {\n    font-size: 2rem;\n}\n\n.about p + p {\n    font-size: 1rem;\n}\n\n.menu-sample {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n    margin-top: 2rem;\n}\n\n.menu-sample h1 {\n    font-size: 2rem;\n    color: black;\n}\n\n\n/* CSS */\n.menu-btn {\n  --b: 3px;   /* border thickness */\n  --s: .45em; /* size of the corner */\n  --color: #373B44;\n  \n  padding: calc(.5em + var(--s)) calc(.9em + var(--s));\n  color: var(--color);\n  --_p: var(--s);\n  background:\n    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)\n    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));\n  transition: .3s linear, color 0s, background-color 0s;\n  outline: var(--b) solid #0000;\n  outline-offset: .6em;\n  font-size: 16px;\n\n  border: 0;\n\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  cursor: pointer;\n}\n\n.menu-btn:hover,\n.menu-btn:focus-visible{\n  --_p: 0px;\n  outline-color: var(--color);\n  outline-offset: .05em;\n}\n\n.menu-btn:active {\n  background: var(--color);\n  color: #fff;\n}\n\n.cards {\n    box-sizing: border-box;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 2rem;\n    padding: 4rem;\n    margin-bottom: 4rem;\n}\n\n.card {\n    height: 350px;\n    padding: 2rem;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    border-radius: 5px;\n    background-color: #DC3535;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;\n}\n\n/* Menu styles */\n\n.menu {\n    background-color: #070505;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 2rem;\n}\n\nheader h1 {\n    color: white;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    margin-top: 2rem;\n}\n\nheader h1 {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n}\n\n.options {\n    width: 80vw;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));   \n    gap: 1rem;\n}\n\na {\n    color: black;\n    text-decoration: none;\n    position: relative;\n}\n\na::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 4px;\n    border-radius: 4px;\n    background-color: black;\n    bottom: 0;\n    left: 0;\n    transform-origin: right;\n    transform: scaleX(0);\n    transition: transform .3s ease-in-out;\n  }\n  \n  a:hover::before {\n    transform-origin: left;\n    transform: scaleX(1);\n  }\n\n.option {\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #EEF1F4;\n}\n\nsection {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    margin-top: 2rem;\n}\n\nsection h1 {\n    color: white;\n    font-size: 2rem;\n}\n\n\n.container {\n    width: 80vw;\n    height: 400px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #EEF1F4;\n    color: black;\n}\n\n.appetizer-container, .option:nth-child(1) {\n    background-color: #E03706;\n}\n\n.classic-container, .option:nth-child(2) {\n    background-color: #ADB4B8;\n}\n\n.specialty-container, .option:nth-child(4) {\n    background-color: #9D3A11;\n}\n\n#specialty-section {\n    margin-bottom: 4rem;\n}\n\n/* Contact */\n\n.contact {\n    height: 100vh;\n    background-image: url(https://cdn.pixabay.com/photo/2022/06/23/09/42/food-and-drink-industry-7279413_960_720.jpg);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 2rem;\n}\n\n.contact-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n}\n\n.form-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(7, 5, 5, 0.6);\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    border-radius: 2px;\n    padding: 2rem;\n}\n\n.form-container h1 {\n    color: white;\n    font-size: 3rem;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    margin-bottom: 2rem;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 3rem;\n}\n\n.details {\n    gap: 1rem;\n}\n\ninput, textarea {\n    color: white;\n    background-color: rgba(7, 5, 5, 0.4);\n    border-bottom: 1px solid white;\n    padding: 1rem 0 1rem 1rem;\n    caret-color: #DC3535;\n}\n\ninput:focus {\n    outline: none;\n}\n\ntextarea {\n    width: 100%;\n}\n\ntextarea:focus {\n    outline: none;\n}\n\nform div {\n    display: flex;\n    justify-content: center;\n}\n\n\n/* CSS */\n.contact-btn {\n    align-items: center;\n    background-color: rgba(7, 5, 5, 0.4);\n    border-radius: 2px;\n    box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;\n    box-sizing: border-box;\n    color: #fff;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    cursor: pointer;\n    display: inline-flex;\n    flex: 1 1 auto;\n    font-size: 1.2rem;\n    font-weight: 700;\n    justify-content: center;\n    line-height: 1;\n    margin: 0;\n    outline: none;\n    padding: 1rem 1.2rem;\n    text-align: center;\n    text-decoration: none;\n    transition: box-shadow .2s,-webkit-box-shadow .2s;\n    white-space: nowrap;\n    border: 0;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n}\n\n.contact-btn:hover {\n  box-shadow: #DC3535 0 0 0 3px, transparent 0 0 0 0;\n}\n\n.contact-details {\n    color: white;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n    background-color: rgba(7, 5, 5, 0.6);\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    border-radius: 2px;\n    padding: 2rem;\n}\n\n.contact-details div {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:wght@300;400;700;900&display=swap');\n\n\n/* Cross page styles */\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n\nbody, html {\n    height: 100%;\n    font-family: 'Courgette', cursive;\n}\n\n.content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.nav {\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    padding: 1rem;\n    position: fixed;\n}\n\n.tags {\n    display: flex;\n    gap: 2rem;\n    font-size: 1.5rem;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.tags p {\n    display: block;\n    color: #DC3535;\n    text-decoration: none;\n    position: relative;\n}\n\n.tags p::after{\n    content: \"\";\n    background: #DC3535;\n    mix-blend-mode: exclusion;\n    width: calc(100% + 20px);\n    height: 0;\n    position: absolute;\n    bottom: -4px;\n    left: -10px;\n      transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  }\n  \n.tags p:hover::after{\n    height: calc(100% + 8px)\n  }\n\nfooter {\n    display: flex;\n    justify-content: center;\n    background-color: black;\n    color: #DC3535;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    padding: 1rem 0;\n    font-family: 'Roboto', sans-serif;\n}\n\nfooter span {\n    content: url('https://api.iconify.design/bi/fire.svg?color=%23dc3535');\n    margin: 0 5px;\n    color: #dc6a35;\n}\n\n/* Home styles */\n\n.hero {\n    box-sizing: border-box;\n    width: 100%;\n    height: 80vh;\n    color: white;\n    padding: 4rem;\n    flex-wrap: wrap;\n    background-image:\n    /* linear-gradient(black, rgba(0, 0, 0, 0.2)), */\n    url(https://images.pexels.com/photos/6876075/pexels-photo-6876075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);\n    background-position: 90% 30%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-blend-mode: saturation;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n\n}\n\n.hero h1 {\n    font-size: 6rem;\n    margin-bottom: 2rem;\n}\n\n.hero p {\n    font-size: 2rem;\n}\n\n\n.grid-container {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.grid {\n    width: 80%;\n    padding-top: 4rem;\n    display: grid;\n    grid-template: 250px 250px / 1fr 1fr;\n    gap: 10px;\n}\n\n.cell {\n    font-size: 2rem;\n    color: white;\n    padding: 1rem;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n}\n\n.img1 {\n    grid-row: 1 / -1;\n    background-image: url(https://images.unsplash.com/photo-1616141032335-7e6b413f93ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.img2 {\n    background-image: url(https://images.unsplash.com/photo-1616141215340-34b0e7c661c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);\n    background-position: 100% 75%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.img3 {\n    background-image: url(https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=743&q=80);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    justify-content: start;\n    align-items: end;\n\n}\n\n.about {\n    box-sizing: border-box;\n    height: 70vh;\n    width: 100%;\n    color: white;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    background-image: url(https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_960_720.jpg);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin-top: 4rem;\n    padding: 2rem;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n\n}\n\n.about h1 {\n    font-size: 3rem;\n}\n\n.about p {\n    font-size: 2rem;\n}\n\n.about p + p {\n    font-size: 1rem;\n}\n\n.menu-sample {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n    margin-top: 2rem;\n}\n\n.menu-sample h1 {\n    font-size: 2rem;\n    color: black;\n}\n\n\n/* CSS */\n.menu-btn {\n  --b: 3px;   /* border thickness */\n  --s: .45em; /* size of the corner */\n  --color: #373B44;\n  \n  padding: calc(.5em + var(--s)) calc(.9em + var(--s));\n  color: var(--color);\n  --_p: var(--s);\n  background:\n    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)\n    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));\n  transition: .3s linear, color 0s, background-color 0s;\n  outline: var(--b) solid #0000;\n  outline-offset: .6em;\n  font-size: 16px;\n\n  border: 0;\n\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  cursor: pointer;\n}\n\n.menu-btn:hover,\n.menu-btn:focus-visible{\n  --_p: 0px;\n  outline-color: var(--color);\n  outline-offset: .05em;\n}\n\n.menu-btn:active {\n  background: var(--color);\n  color: #fff;\n}\n\n.cards {\n    box-sizing: border-box;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 2rem;\n    padding: 4rem;\n    margin-bottom: 4rem;\n}\n\n.card {\n    height: 350px;\n    padding: 2rem;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    border-radius: 5px;\n    background-color: #DC3535;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;\n}\n\n/* Menu styles */\n\n.menu {\n    background-color: #070505;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 2rem;\n}\n\nheader h1 {\n    color: white;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    margin-top: 2rem;\n}\n\nheader h1 {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n}\n\n.options {\n    width: 80vw;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));   \n    gap: 1rem;\n}\n\na {\n    color: black;\n    text-decoration: none;\n    position: relative;\n}\n\na::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 4px;\n    border-radius: 4px;\n    background-color: black;\n    bottom: 0;\n    left: 0;\n    transform-origin: right;\n    transform: scaleX(0);\n    transition: transform .3s ease-in-out;\n  }\n  \n  a:hover::before {\n    transform-origin: left;\n    transform: scaleX(1);\n  }\n\n.option {\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #EEF1F4;\n}\n\nsection {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    margin-top: 2rem;\n}\n\nsection h1 {\n    color: white;\n    font-size: 2rem;\n}\n\n\n.container {\n    width: 80vw;\n    height: 400px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #EEF1F4;\n    color: black;\n}\n\n.appetizer-container, .option:nth-child(1) {\n    background-color: #E03706;\n}\n\n.classic-container, .option:nth-child(2) {\n    background-color: #ADB4B8;\n}\n\n.specialty-container, .option:nth-child(4) {\n    background-color: #9D3A11;\n}\n\n#specialty-section {\n    margin-bottom: 4rem;\n}\n\n/* Contact */\n\n.contact {\n    height: 100vh;\n    background-image: url(https://cdn.pixabay.com/photo/2022/06/23/09/42/food-and-drink-industry-7279413_960_720.jpg);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 2rem;\n}\n\n.contact-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n}\n\n.form-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(7, 5, 5, 0.6);\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    border-radius: 2px;\n    padding: 2rem;\n}\n\n.form-container h1 {\n    color: white;\n    font-size: 3rem;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    margin-bottom: 2rem;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 3rem;\n}\n\n.details {\n    gap: 1rem;\n}\n\ninput, textarea {\n    color: white;\n    background-color: rgba(7, 5, 5, 0.4);\n    border-bottom: 1px solid white;\n    padding: 1rem 0 1rem 1rem;\n    caret-color: #DC3535;\n}\n\ninput:focus {\n    outline: none;\n}\n\ntextarea {\n    width: 100%;\n}\n\ntextarea:focus {\n    outline: none;\n}\n\nform div {\n    display: flex;\n    justify-content: center;\n}\n\n\n/* CSS */\n.contact-btn {\n    align-items: center;\n    background-color: rgba(7, 5, 5, 0.4);\n    border-radius: 2px;\n    box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;\n    box-sizing: border-box;\n    color: #fff;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    cursor: pointer;\n    display: inline-flex;\n    flex: 1 1 auto;\n    font-size: 1.2rem;\n    font-weight: 700;\n    justify-content: center;\n    line-height: 1;\n    margin: 0;\n    outline: none;\n    padding: 1rem 1.2rem;\n    text-align: center;\n    text-decoration: none;\n    transition: box-shadow .2s,-webkit-box-shadow .2s;\n    white-space: nowrap;\n    border: 0;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n}\n\n.contact-btn:hover {\n  box-shadow: #DC3535 0 0 0 3px, transparent 0 0 0 0;\n}\n\n.contact-details {\n    color: white;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n    background-color: rgba(7, 5, 5, 0.6);\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    border-radius: 2px;\n    padding: 2rem;\n}\n\n.contact-details div {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact () {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact-wrapper');
    const contactDetails = document.createElement('div');
    contactDetails.classList.add('contact-details');
    const phoneDiv = document.createElement('div');
    const phoneSpan = document.createElement('span');
    phoneSpan.innerText = "Phone: ";
    const addressDiv = document.createElement('div');
    const addressSpan = document.createElement('span');
    addressSpan.innerText = "Address: ";
    const emailDiv = document.createElement('div');
    const emailSpan = document.createElement('span');
    emailSpan.innerText = "Email: ";

    phoneDiv.append(phoneSpan, "+123456789");
    addressDiv.append(addressSpan, "14 boulevard street country name")
    emailDiv.append(emailSpan, "pizzaplace@email.com");

    contactDetails.append(phoneDiv, addressDiv, emailDiv);
    

    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');
    const formContainerH = document.createElement('h1');
    formContainerH.innerText = "Contact";

    const form = document.createElement('form');
    form.setAttribute('action', '#');
    const details = document.createElement('div');
    details.classList.add('details');
    const name = document.createElement('input');
    name.setAttribute('id', 'name');
    name.setAttribute('type', 'text');
    name.setAttribute('placeholder', 'Name');
    name.required = true;
    const email = document.createElement('input');
    email.setAttribute('id', 'email');
    email.setAttribute('type', 'email');
    email.setAttribute('placeholder', 'Email');
    email.required = true;

    
    const msg = document.createElement('textarea');
    msg.setAttribute('name', 'message');
    msg.setAttribute('placeholder', 'Message');
    msg.setAttribute('id', 'msg');
    msg.setAttribute('cols', '30');
    msg.setAttribute('rows', '1');
    const btn = document.createElement('button');
    btn.classList.add('contact-btn');
    btn.innerText = "Submit";

    details.append(name, email);
    form.append(details, msg, btn);
    formContainer.append(form);

    contactWrapper.append(contactDetails, formContainer);

    contact.append(contactWrapper);

    return contact;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });


const hero = () => {

    const heroSection = document.createElement('section');
    heroSection.classList.add('hero-section');
    const hero = document.createElement('div');
    hero.classList.add('hero');
    const heroH = document.createElement('h1');
    heroH.innerText = 'Pizza Corner';
    const heroP = document.createElement('p');
    heroP.innerText = 'Offering the most delicous and nutriticous pizza since never!';

    hero.append(heroH, heroP)
    heroSection.appendChild(hero);

    return heroSection;
};

const imageGrid = () => {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container')
    const grid = document.createElement('div');
    grid.classList.add('grid')
    const img1 = document.createElement('div');
    img1.classList.add('cell');
    img1.classList.add('img1');
    img1.innerText = 'Delicous';
    const img2 = document.createElement('div');
    img2.classList.add('cell');
    img2.classList.add('img2');
    img2.innerText = 'Fun';
    const img3 = document.createElement('div');
    img3.classList.add('cell');
    img3.classList.add('img3');
    img3.innerText = 'Nutriticous';
    
    grid.append(img1, img2, img3);
    gridContainer.appendChild(grid);

    return gridContainer;
}

const aboutBlock = () => {
    const about = document.createElement('div');
    about.classList.add('about');
    const aboutH = document.createElement('h1');
    aboutH.innerText = "About";
    const aboutP1 = document.createElement('p');
    aboutP1.innerText = "We are the best pizza makers in town, and that is definitely NOT a fact";
    const aboutP2 = document.createElement('p');
    aboutP2.innerText = "(Rather we probably don't make pizzas at all and are rather a fake site for the fun of it)";
    
    about.append(aboutH, aboutP1, aboutP2);

    return about;
}

const menuSample = () => {
    const menuSample = document.createElement('div');
    menuSample.classList.add('menu-sample');
    const menuSampleH = document.createElement('h1');
    menuSampleH.innerText = "Menu Sample";
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-btn');
    menuBtn.innerText = "See full menu";

    const cards = document.createElement('div');
    cards.classList.add('cards');

    const card = document.createElement('div');
    card.classList.add('card');
    const cardH = document.createElement('h1');
    cardH.innerText = "Awesome Type of Pizza here!";
    const cardP = document.createElement('p');
    cardP.innerText = "Awesome type of pizza description goes here...";
    card.append(cardH, cardP);

    const card2 = document.createElement('div');
    card2.classList.add('card');
    const cardH2 = document.createElement('h1');
    cardH2.innerText = "Awesome Type of Pizza here!";
    const cardP2 = document.createElement('p');
    cardP2.innerText = "Awesome type of pizza description goes here...";
    card2.append(cardH2, cardP2);

    const card3 = document.createElement('div');
    card3.classList.add('card');
    const cardH3 = document.createElement('h1');
    cardH3.innerText = "Awesome Type of Pizza here!";
    const cardP3 = document.createElement('p');
    cardP3.innerText = "Awesome type of pizza description goes here...";
    card3.append(cardH3, cardP3);

    cards.append(card, card2, card3);

    menuSample.append(menuSampleH, menuBtn, cards);

    return menuSample;
}

const body = () => {

    const bodySection = document.createElement('section');
    bodySection.classList.add('body-section');

    bodySection.append(imageGrid(), aboutBlock(), menuSample());


    return bodySection;
}


function home () {

    const main = document.createElement('div');
    main.classList.add('main');
    main.append(hero(), body());

    return main;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
function menu () {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const header = document.createElement('header');
    header.classList.add('header');
    const headerH = document.createElement('h1');
    headerH.innerText = "Menu";
    const options = document.createElement('div');
    options.classList.add('options');

    const option1 = document.createElement('div');
    option1.classList.add('option');
    const a1 = document.createElement('a');
    a1.href = "#appetizer-section";
    a1.innerText = "Appetizers";

    const option2 = document.createElement('div');
    option2.classList.add('option');
    const a2 = document.createElement('a');
    a2.href = "#classic-section";
    a2.innerText = "Classics";

    const option3 = document.createElement('div');
    option3.classList.add('option');
    const a3 = document.createElement('a');
    a3.href = "#side-section";
    a3.innerText = "Sides";

    const option4 = document.createElement('div');
    option4.classList.add('option');
    const a4 = document.createElement('a');
    a4.href = "#specialty-section";
    a4.innerText = "Specials";

    option1.appendChild(a1);
    option2.appendChild(a2);
    option3.appendChild(a3);
    option4.appendChild(a4);

    options.append(option1, option2, option3, option4);
    header.append(headerH, options);

    const appSec = document.createElement('section');
    appSec.setAttribute('id', 'appetizer-section');
    const appH = document.createElement('h1');
    appH.innerText = "Appetizers";
    const appContainer  = document.createElement('div');
    appContainer.classList.add('container');
    appContainer.classList.add('appetizer-container');
    const appContainerP = document.createElement('p');
    appContainerP.innerText = "Cool menu of Appetizers here";
    appContainer.append(appContainerP);
    appSec.append(appH, appContainer);

    const classicSec = document.createElement('section');
    classicSec.setAttribute('id', 'classic-section');
    const classicH = document.createElement('h1');
    classicH.innerText = "Classics";
    const classicContainer  = document.createElement('div');
    classicContainer.classList.add('container');
    classicContainer.classList.add('classic-container');
    const classicContainerP = document.createElement('p');
    classicContainerP.innerText = "Cool classic pizza menu here";
    classicContainer.append(classicContainerP);
    classicSec.append(classicH, classicContainer);


    const sideSec = document.createElement('section');
    sideSec.setAttribute('id', 'side-section');
    const sideH = document.createElement('h1');
    sideH.innerText = "Sides";
    const sideContainer  = document.createElement('div');
    sideContainer.classList.add('container');
    sideContainer.classList.add('side-container');
    const sideContainerP = document.createElement('p');
    sideContainerP.innerText = "Awesome menu of sides her";
    sideContainer.append(sideContainerP);
    sideSec.append(sideH, sideContainer);

    const specialSec = document.createElement('section');
    specialSec.setAttribute('id', 'specialty-section');
    const specialH = document.createElement('h1');
    specialH.innerText = "Sides";
    const specialContainer  = document.createElement('div');
    specialContainer.classList.add('container');
    specialContainer.classList.add('specialty-container');
    const specialContainerP = document.createElement('p');
    specialContainerP.innerText = "Awesome menu of sides her";
    specialContainer.append(specialContainerP);
    specialSec.append(specialH, specialContainer);


    menu.append(header, appSec, classicSec, sideSec, specialSec);

    return menu;

} 

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






const content = document.querySelector('.content');

const createNav = () => {
    const nav = document.createElement('div');
    nav.classList.add('nav');
    const tags = document.createElement('div')
    tags.classList.add('tags');

    const homeP = document.createElement('p');
    const menuP = document.createElement('p');
    const contactP = document.createElement('p');
    homeP.innerText = 'Home';
    menuP.innerText = 'Menu';
    contactP.innerText = 'Contact';
    nav.appendChild(tags);
    tags.append(homeP, menuP, contactP);

    return nav;
}

const createFooter = () => {
    const footer = document.createElement('footer');
    footer.innerHTML = '©2022 Made with <span></span> by Uriel stamelman';

    return footer;
}

const createPage = (page) => {
    content.appendChild(createNav());
    content.appendChild(page());
    content.appendChild(createFooter());

    const tags = document.querySelector('.tags');
    const menuBtn = document.querySelector('.menu-btn');

    tags.addEventListener('click', (e) => {
        if(e.target.innerText === 'Home') {
            while(content.hasChildNodes()) {
                content.removeChild(content.firstChild);
            }
            createPage(_home__WEBPACK_IMPORTED_MODULE_1__["default"]);
        }
        else if (e.target.innerText === 'Menu') {
            while(content.hasChildNodes()) {
                content.removeChild(content.firstChild);
            }
            createPage(_menu__WEBPACK_IMPORTED_MODULE_2__["default"]);
        }
        else if (e.target.innerText === "Contact") {
            while(content.hasChildNodes()) {
                content.removeChild(content.firstChild);
            }
            createPage(_contact__WEBPACK_IMPORTED_MODULE_3__["default"]);
        }
    });
    menuBtn.addEventListener('click', (e) => {
        while(content.hasChildNodes()) {
            content.removeChild(content.firstChild);
        }
        createPage(_menu__WEBPACK_IMPORTED_MODULE_2__["default"]);
    })

}

createPage(_home__WEBPACK_IMPORTED_MODULE_1__["default"]);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxhQUFhLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsVUFBVSxLQUFLLHNCQUFzQix1QkFBdUIsY0FBYyxhQUFhLGFBQWEsV0FBVyxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFV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Q0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOzs7QUFHZTs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEhlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOzs7Ozs7VUNoR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDcUI7QUFDSztBQUNBO0FBQ007O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2Q0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQU87QUFDOUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQUk7QUFDdkIsS0FBSzs7QUFFTDs7QUFFQSxXQUFXLDZDQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvdXJnZXR0ZSZmYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIENyb3NzIHBhZ2Ugc3R5bGVzICovXFxuKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuXFxuYm9keSwgaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyZ2V0dGUnLCBjdXJzaXZlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hdiB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi50YWdzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFncyBwIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiAjREMzNTM1O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhZ3MgcDo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBiYWNrZ3JvdW5kOiAjREMzNTM1O1xcbiAgICBtaXgtYmxlbmQtbW9kZTogZXhjbHVzaW9uO1xcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC00cHg7XFxuICAgIGxlZnQ6IC0xMHB4O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgY3ViaWMtYmV6aWVyKDAuNDQ1LCAwLjA1LCAwLjU1LCAwLjk1KTtcXG4gIH1cXG4gIFxcbi50YWdzIHA6aG92ZXI6OmFmdGVye1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDhweClcXG4gIH1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiAjREMzNTM1O1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAzcHggNXB4IHJnYmEoMjIwLDUzLDUzLDAuNjgpO1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuZm9vdGVyIHNwYW4ge1xcbiAgICBjb250ZW50OiB1cmwoJ2h0dHBzOi8vYXBpLmljb25pZnkuZGVzaWduL2JpL2ZpcmUuc3ZnP2NvbG9yPSUyM2RjMzUzNScpO1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbiAgICBjb2xvcjogI2RjNmEzNTtcXG59XFxuXFxuLyogSG9tZSBzdHlsZXMgKi9cXG5cXG4uaGVybyB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNHJlbTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICAvKiBsaW5lYXItZ3JhZGllbnQoYmxhY2ssIHJnYmEoMCwgMCwgMCwgMC4yKSksICovXFxuICAgIHVybChodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy82ODc2MDc1L3BleGVscy1waG90by02ODc2MDc1LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTEpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5MCUgMzAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNhdHVyYXRpb247XFxuICAgIHRleHQtc2hhZG93OiAtMnB4IDNweCA1cHggcmdiYSgyMjAsNTMsNTMsMC42OCk7XFxuXFxufVxcblxcbi5oZXJvIGgxIHtcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uaGVybyBwIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZy10b3A6IDRyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDI1MHB4IDI1MHB4IC8gMWZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAzcHggNXB4IHJnYmEoMjIwLDUzLDUzLDAuNjgpO1xcbn1cXG5cXG4uaW1nMSB7XFxuICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYxNjE0MTAzMjMzNS03ZTZiNDEzZjkzZWM/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTY4NyZxPTgwKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmltZzIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTYxNDEyMTUzNDAtMzRiMGU3YzY2MWM4P2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02ODcmcT04MCk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNzUlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uaW1nMyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYxMzU2NDgzNDM2MS05NDM2OTQ4ODE3ZDE/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTc0MyZxPTgwKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcblxcbn1cXG5cXG4uYWJvdXQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDcwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMC8wMy8yNS8yMS8wNS9waXp6YS00OTY4NjQ1Xzk2MF83MjAuanBnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAzcHggNXB4IHJnYmEoMjIwLDUzLDUzLDAuNjgpO1xcblxcbn1cXG5cXG4uYWJvdXQgaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5hYm91dCBwIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uYWJvdXQgcCArIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5tZW51LXNhbXBsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5tZW51LXNhbXBsZSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5cXG4vKiBDU1MgKi9cXG4ubWVudS1idG4ge1xcbiAgLS1iOiAzcHg7ICAgLyogYm9yZGVyIHRoaWNrbmVzcyAqL1xcbiAgLS1zOiAuNDVlbTsgLyogc2l6ZSBvZiB0aGUgY29ybmVyICovXFxuICAtLWNvbG9yOiAjMzczQjQ0O1xcbiAgXFxuICBwYWRkaW5nOiBjYWxjKC41ZW0gKyB2YXIoLS1zKSkgY2FsYyguOWVtICsgdmFyKC0tcykpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gIC0tX3A6IHZhcigtLXMpO1xcbiAgYmFja2dyb3VuZDpcXG4gICAgY29uaWMtZ3JhZGllbnQoZnJvbSA5MGRlZyBhdCB2YXIoLS1iKSB2YXIoLS1iKSwjMDAwMCA5MGRlZyx2YXIoLS1jb2xvcikgMClcXG4gICAgdmFyKC0tX3ApIHZhcigtLV9wKS9jYWxjKDEwMCUgLSB2YXIoLS1iKSAtIDIqdmFyKC0tX3ApKSBjYWxjKDEwMCUgLSB2YXIoLS1iKSAtIDIqdmFyKC0tX3ApKTtcXG4gIHRyYW5zaXRpb246IC4zcyBsaW5lYXIsIGNvbG9yIDBzLCBiYWNrZ3JvdW5kLWNvbG9yIDBzO1xcbiAgb3V0bGluZTogdmFyKC0tYikgc29saWQgIzAwMDA7XFxuICBvdXRsaW5lLW9mZnNldDogLjZlbTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gIGJvcmRlcjogMDtcXG5cXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS1idG46aG92ZXIsXFxuLm1lbnUtYnRuOmZvY3VzLXZpc2libGV7XFxuICAtLV9wOiAwcHg7XFxuICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICBvdXRsaW5lLW9mZnNldDogLjA1ZW07XFxufVxcblxcbi5tZW51LWJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jYXJkcyB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREMzNTM1O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxMHB4IDM2cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAwcHggMHB4IDFweDtcXG59XFxuXFxuLyogTWVudSBzdHlsZXMgKi9cXG5cXG4ubWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzA1MDU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggM3B4IDVweCByZ2JhKDIyMCw1Myw1MywwLjY4KTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTsgICBcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG4gIH1cXG4gIFxcbiAgYTpob3Zlcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB9XFxuXFxuLm9wdGlvbiB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVGMUY0O1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG5zZWN0aW9uIGgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcblxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUYxRjQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmFwcGV0aXplci1jb250YWluZXIsIC5vcHRpb246bnRoLWNoaWxkKDEpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwMzcwNjtcXG59XFxuXFxuLmNsYXNzaWMtY29udGFpbmVyLCAub3B0aW9uOm50aC1jaGlsZCgyKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBREI0Qjg7XFxufVxcblxcbi5zcGVjaWFsdHktY29udGFpbmVyLCAub3B0aW9uOm50aC1jaGlsZCg0KSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5RDNBMTE7XFxufVxcblxcbiNzcGVjaWFsdHktc2VjdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcblxcbi8qIENvbnRhY3QgKi9cXG5cXG4uY29udGFjdCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIyLzA2LzIzLzA5LzQyL2Zvb2QtYW5kLWRyaW5rLWluZHVzdHJ5LTcyNzk0MTNfOTYwXzcyMC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uY29udGFjdC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA1LCA1LCAwLjYpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciBoMSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAzcHggNXB4IHJnYmEoMjIwLDUzLDUzLDAuNjgpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogM3JlbTtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA1LCA1LCAwLjQpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDFyZW07XFxuICAgIGNhcmV0LWNvbG9yOiAjREMzNTM1O1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuZm9ybSBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuLyogQ1NTICovXFxuLmNvbnRhY3QtYnRuIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA1LCA1LCAwLjQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJveC1zaGFkb3c6IHRyYW5zcGFyZW50IDAgMCAwIDNweCxyZ2JhKDE4LCAxOCwgMTgsIC4xKSAwIDZweCAyMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggM3B4IDVweCByZ2JhKDIyMCw1Myw1MywwLjY4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4ycywtd2Via2l0LWJveC1zaGFkb3cgLjJzO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG59XFxuXFxuLmNvbnRhY3QtYnRuOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6ICNEQzM1MzUgMCAwIDAgM3B4LCB0cmFuc3BhcmVudCAwIDAgMCAwO1xcbn1cXG5cXG4uY29udGFjdC1kZXRhaWxzIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAzcHggNXB4IHJnYmEoMjIwLDUzLDUzLDAuNjgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcsIDUsIDUsIDAuNik7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtZGV0YWlscyBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBLHNCQUFzQjtBQUN0QjtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdB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eUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4Q0FBOEM7SUFDOUMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztJQUNULG9DQUFvQztJQUNwQyxpREFBaUQ7SUFDakQsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3VyZ2V0dGUmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG4vKiBDcm9zcyBwYWdlIHN0eWxlcyAqL1xcbioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcblxcbmJvZHksIGh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmdldHRlJywgY3Vyc2l2ZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uYXYge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4udGFncyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhZ3MgcCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb2xvcjogI0RDMzUzNTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YWdzIHA6OmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgYmFja2dyb3VuZDogI0RDMzUzNTtcXG4gICAgbWl4LWJsZW5kLW1vZGU6IGV4Y2x1c2lvbjtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDIwcHgpO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNHB4O1xcbiAgICBsZWZ0OiAtMTBweDtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGN1YmljLWJlemllcigwLjQ0NSwgMC4wNSwgMC41NSwgMC45NSk7XFxuICB9XFxuICBcXG4udGFncyBwOmhvdmVyOjphZnRlcntcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA4cHgpXFxuICB9XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogI0RDMzUzNTtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggM3B4IDVweCByZ2JhKDIyMCw1Myw1MywwLjY4KTtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmZvb3RlciBzcGFuIHtcXG4gICAgY29udGVudDogdXJsKCdodHRwczovL2FwaS5pY29uaWZ5LmRlc2lnbi9iaS9maXJlLnN2Zz9jb2xvcj0lMjNkYzM1MzUnKTtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG4gICAgY29sb3I6ICNkYzZhMzU7XFxufVxcblxcbi8qIEhvbWUgc3R5bGVzICovXFxuXFxuLmhlcm8ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgLyogbGluZWFyLWdyYWRpZW50KGJsYWNrLCByZ2JhKDAsIDAsIDAsIDAuMikpLCAqL1xcbiAgICB1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNjg3NjA3NS9wZXhlbHMtcGhvdG8tNjg3NjA3NS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0xKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTAlIDMwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzYXR1cmF0aW9uO1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAzcHggNXB4IHJnYmEoMjIwLDUzLDUzLDAuNjgpO1xcblxcbn1cXG5cXG4uaGVybyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmhlcm8gcCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAyNTBweCAyNTBweCAvIDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggM3B4IDVweCByZ2JhKDIyMCw1Myw1MywwLjY4KTtcXG59XFxuXFxuLmltZzEge1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTYxNDEwMzIzMzUtN2U2YjQxM2Y5M2VjP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02ODcmcT04MCk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbWcyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjE2MTQxMjE1MzQwLTM0YjBlN2M2NjFjOD9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Njg3JnE9ODApO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDc1JTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmltZzMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTM1NjQ4MzQzNjEtOTQzNjk0ODgxN2QxP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz03NDMmcT04MCk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG5cXG59XFxuXFxuLmFib3V0IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMjAvMDMvMjUvMjEvMDUvcGl6emEtNDk2ODY0NV85NjBfNzIwLmpwZyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggM3B4IDVweCByZ2JhKDIyMCw1Myw1MywwLjY4KTtcXG5cXG59XFxuXFxuLmFib3V0IGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYWJvdXQgcCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmFib3V0IHAgKyBwIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubWVudS1zYW1wbGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4ubWVudS1zYW1wbGUgaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuXFxuLyogQ1NTICovXFxuLm1lbnUtYnRuIHtcXG4gIC0tYjogM3B4OyAgIC8qIGJvcmRlciB0aGlja25lc3MgKi9cXG4gIC0tczogLjQ1ZW07IC8qIHNpemUgb2YgdGhlIGNvcm5lciAqL1xcbiAgLS1jb2xvcjogIzM3M0I0NDtcXG4gIFxcbiAgcGFkZGluZzogY2FsYyguNWVtICsgdmFyKC0tcykpIGNhbGMoLjllbSArIHZhcigtLXMpKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAtLV9wOiB2YXIoLS1zKTtcXG4gIGJhY2tncm91bmQ6XFxuICAgIGNvbmljLWdyYWRpZW50KGZyb20gOTBkZWcgYXQgdmFyKC0tYikgdmFyKC0tYiksIzAwMDAgOTBkZWcsdmFyKC0tY29sb3IpIDApXFxuICAgIHZhcigtLV9wKSB2YXIoLS1fcCkvY2FsYygxMDAlIC0gdmFyKC0tYikgLSAyKnZhcigtLV9wKSkgY2FsYygxMDAlIC0gdmFyKC0tYikgLSAyKnZhcigtLV9wKSk7XFxuICB0cmFuc2l0aW9uOiAuM3MgbGluZWFyLCBjb2xvciAwcywgYmFja2dyb3VuZC1jb2xvciAwcztcXG4gIG91dGxpbmU6IHZhcigtLWIpIHNvbGlkICMwMDAwO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC42ZW07XFxuICBmb250LXNpemU6IDE2cHg7XFxuXFxuICBib3JkZXI6IDA7XFxuXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtYnRuOmhvdmVyLFxcbi5tZW51LWJ0bjpmb2N1cy12aXNpYmxle1xcbiAgLS1fcDogMHB4O1xcbiAgb3V0bGluZS1jb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC4wNWVtO1xcbn1cXG5cXG4ubWVudS1idG46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY2FyZHMge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgcGFkZGluZzogNHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RDMzUzNTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMTBweCAzNnB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMHB4IDBweCAxcHg7XFxufVxcblxcbi8qIE1lbnUgc3R5bGVzICovXFxuXFxuLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwNTA1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiAtMnB4IDNweCA1cHggcmdiYSgyMjAsNTMsNTMsMC42OCk7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7ICAgXFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmE6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XFxuICB9XFxuICBcXG4gIGE6aG92ZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgfVxcblxcbi5vcHRpb24ge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRjFGNDtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuc2VjdGlvbiBoMSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVGMUY0O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5hcHBldGl6ZXItY29udGFpbmVyLCAub3B0aW9uOm50aC1jaGlsZCgxKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMDM3MDY7XFxufVxcblxcbi5jbGFzc2ljLWNvbnRhaW5lciwgLm9wdGlvbjpudGgtY2hpbGQoMikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQURCNEI4O1xcbn1cXG5cXG4uc3BlY2lhbHR5LWNvbnRhaW5lciwgLm9wdGlvbjpudGgtY2hpbGQoNCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUQzQTExO1xcbn1cXG5cXG4jc3BlY2lhbHR5LXNlY3Rpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4vKiBDb250YWN0ICovXFxuXFxuLmNvbnRhY3Qge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMi8wNi8yMy8wOS80Mi9mb29kLWFuZC1kcmluay1pbmR1c3RyeS03Mjc5NDEzXzk2MF83MjAuanBnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3Qtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3JlbTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNywgNSwgNSwgMC42KTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg5OSwgOTksIDk5LCAwLjIpIDBweCAycHggOHB4IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgaDEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggM3B4IDVweCByZ2JhKDIyMCw1Myw1MywwLjY4KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDNyZW07XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5pbnB1dCwgdGV4dGFyZWEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNywgNSwgNSwgMC40KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAxcmVtO1xcbiAgICBjYXJldC1jb2xvcjogI0RDMzUzNTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmZvcm0gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbi8qIENTUyAqL1xcbi5jb250YWN0LWJ0biB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNywgNSwgNSwgMC40KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBib3gtc2hhZG93OiB0cmFuc3BhcmVudCAwIDAgMCAzcHgscmdiYSgxOCwgMTgsIDE4LCAuMSkgMCA2cHggMjBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtc2hhZG93OiAtMnB4IDNweCA1cHggcmdiYSgyMjAsNTMsNTMsMC42OCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS4ycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMnMsLXdlYmtpdC1ib3gtc2hhZG93IC4ycztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxufVxcblxcbi5jb250YWN0LWJ0bjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAjREMzNTM1IDAgMCAwIDNweCwgdHJhbnNwYXJlbnQgMCAwIDAgMDtcXG59XFxuXFxuLmNvbnRhY3QtZGV0YWlscyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggM3B4IDVweCByZ2JhKDIyMCw1Myw1MywwLjY4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA1LCA1LCAwLjYpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5jb250YWN0LWRldGFpbHMgZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCAoKSB7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgIGNvbnN0IGNvbnRhY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC13cmFwcGVyJyk7XG4gICAgY29uc3QgY29udGFjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0RGV0YWlscy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWRldGFpbHMnKTtcbiAgICBjb25zdCBwaG9uZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBob25lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwaG9uZVNwYW4uaW5uZXJUZXh0ID0gXCJQaG9uZTogXCI7XG4gICAgY29uc3QgYWRkcmVzc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZHJlc3NTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFkZHJlc3NTcGFuLmlubmVyVGV4dCA9IFwiQWRkcmVzczogXCI7XG4gICAgY29uc3QgZW1haWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbWFpbFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZW1haWxTcGFuLmlubmVyVGV4dCA9IFwiRW1haWw6IFwiO1xuXG4gICAgcGhvbmVEaXYuYXBwZW5kKHBob25lU3BhbiwgXCIrMTIzNDU2Nzg5XCIpO1xuICAgIGFkZHJlc3NEaXYuYXBwZW5kKGFkZHJlc3NTcGFuLCBcIjE0IGJvdWxldmFyZCBzdHJlZXQgY291bnRyeSBuYW1lXCIpXG4gICAgZW1haWxEaXYuYXBwZW5kKGVtYWlsU3BhbiwgXCJwaXp6YXBsYWNlQGVtYWlsLmNvbVwiKTtcblxuICAgIGNvbnRhY3REZXRhaWxzLmFwcGVuZChwaG9uZURpdiwgYWRkcmVzc0RpdiwgZW1haWxEaXYpO1xuICAgIFxuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVySCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgZm9ybUNvbnRhaW5lckguaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmFtZScpO1xuICAgIG5hbWUucmVxdWlyZWQgPSB0cnVlO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlbWFpbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlsJyk7XG4gICAgZW1haWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2VtYWlsJyk7XG4gICAgZW1haWwuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbWFpbCcpO1xuICAgIGVtYWlsLnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIFxuICAgIGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgbXNnLnNldEF0dHJpYnV0ZSgnbmFtZScsICdtZXNzYWdlJyk7XG4gICAgbXNnLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTWVzc2FnZScpO1xuICAgIG1zZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21zZycpO1xuICAgIG1zZy5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCAnMzAnKTtcbiAgICBtc2cuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEnKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1idG4nKTtcbiAgICBidG4uaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcblxuICAgIGRldGFpbHMuYXBwZW5kKG5hbWUsIGVtYWlsKTtcbiAgICBmb3JtLmFwcGVuZChkZXRhaWxzLCBtc2csIGJ0bik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmQoZm9ybSk7XG5cbiAgICBjb250YWN0V3JhcHBlci5hcHBlbmQoY29udGFjdERldGFpbHMsIGZvcm1Db250YWluZXIpO1xuXG4gICAgY29udGFjdC5hcHBlbmQoY29udGFjdFdyYXBwZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59IiwiXG5cbmNvbnN0IGhlcm8gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBoZXJvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBoZXJvU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoZXJvLXNlY3Rpb24nKTtcbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG4gICAgY29uc3QgaGVyb0ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlcm9ILmlubmVyVGV4dCA9ICdQaXp6YSBDb3JuZXInO1xuICAgIGNvbnN0IGhlcm9QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhlcm9QLmlubmVyVGV4dCA9ICdPZmZlcmluZyB0aGUgbW9zdCBkZWxpY291cyBhbmQgbnV0cml0aWNvdXMgcGl6emEgc2luY2UgbmV2ZXIhJztcblxuICAgIGhlcm8uYXBwZW5kKGhlcm9ILCBoZXJvUClcbiAgICBoZXJvU2VjdGlvbi5hcHBlbmRDaGlsZChoZXJvKTtcblxuICAgIHJldHVybiBoZXJvU2VjdGlvbjtcbn07XG5cbmNvbnN0IGltYWdlR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncmlkLWNvbnRhaW5lcicpXG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpXG4gICAgY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZzEuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgIGltZzEuY2xhc3NMaXN0LmFkZCgnaW1nMScpO1xuICAgIGltZzEuaW5uZXJUZXh0ID0gJ0RlbGljb3VzJztcbiAgICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nMi5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgaW1nMi5jbGFzc0xpc3QuYWRkKCdpbWcyJyk7XG4gICAgaW1nMi5pbm5lclRleHQgPSAnRnVuJztcbiAgICBjb25zdCBpbWczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nMy5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgaW1nMy5jbGFzc0xpc3QuYWRkKCdpbWczJyk7XG4gICAgaW1nMy5pbm5lclRleHQgPSAnTnV0cml0aWNvdXMnO1xuICAgIFxuICAgIGdyaWQuYXBwZW5kKGltZzEsIGltZzIsIGltZzMpO1xuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XG5cbiAgICByZXR1cm4gZ3JpZENvbnRhaW5lcjtcbn1cblxuY29uc3QgYWJvdXRCbG9jayA9ICgpID0+IHtcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG4gICAgY29uc3QgYWJvdXRIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBhYm91dEguaW5uZXJUZXh0ID0gXCJBYm91dFwiO1xuICAgIGNvbnN0IGFib3V0UDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXRQMS5pbm5lclRleHQgPSBcIldlIGFyZSB0aGUgYmVzdCBwaXp6YSBtYWtlcnMgaW4gdG93biwgYW5kIHRoYXQgaXMgZGVmaW5pdGVseSBOT1QgYSBmYWN0XCI7XG4gICAgY29uc3QgYWJvdXRQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dFAyLmlubmVyVGV4dCA9IFwiKFJhdGhlciB3ZSBwcm9iYWJseSBkb24ndCBtYWtlIHBpenphcyBhdCBhbGwgYW5kIGFyZSByYXRoZXIgYSBmYWtlIHNpdGUgZm9yIHRoZSBmdW4gb2YgaXQpXCI7XG4gICAgXG4gICAgYWJvdXQuYXBwZW5kKGFib3V0SCwgYWJvdXRQMSwgYWJvdXRQMik7XG5cbiAgICByZXR1cm4gYWJvdXQ7XG59XG5cbmNvbnN0IG1lbnVTYW1wbGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVudVNhbXBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVTYW1wbGUuY2xhc3NMaXN0LmFkZCgnbWVudS1zYW1wbGUnKTtcbiAgICBjb25zdCBtZW51U2FtcGxlSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWVudVNhbXBsZUguaW5uZXJUZXh0ID0gXCJNZW51IFNhbXBsZVwiO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnRuJyk7XG4gICAgbWVudUJ0bi5pbm5lclRleHQgPSBcIlNlZSBmdWxsIG1lbnVcIjtcblxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZHMuY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcblxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICBjb25zdCBjYXJkSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY2FyZEguaW5uZXJUZXh0ID0gXCJBd2Vzb21lIFR5cGUgb2YgUGl6emEgaGVyZSFcIjtcbiAgICBjb25zdCBjYXJkUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjYXJkUC5pbm5lclRleHQgPSBcIkF3ZXNvbWUgdHlwZSBvZiBwaXp6YSBkZXNjcmlwdGlvbiBnb2VzIGhlcmUuLi5cIjtcbiAgICBjYXJkLmFwcGVuZChjYXJkSCwgY2FyZFApO1xuXG4gICAgY29uc3QgY2FyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkMi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgY29uc3QgY2FyZEgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjYXJkSDIuaW5uZXJUZXh0ID0gXCJBd2Vzb21lIFR5cGUgb2YgUGl6emEgaGVyZSFcIjtcbiAgICBjb25zdCBjYXJkUDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2FyZFAyLmlubmVyVGV4dCA9IFwiQXdlc29tZSB0eXBlIG9mIHBpenphIGRlc2NyaXB0aW9uIGdvZXMgaGVyZS4uLlwiO1xuICAgIGNhcmQyLmFwcGVuZChjYXJkSDIsIGNhcmRQMik7XG5cbiAgICBjb25zdCBjYXJkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQzLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICBjb25zdCBjYXJkSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNhcmRIMy5pbm5lclRleHQgPSBcIkF3ZXNvbWUgVHlwZSBvZiBQaXp6YSBoZXJlIVwiO1xuICAgIGNvbnN0IGNhcmRQMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjYXJkUDMuaW5uZXJUZXh0ID0gXCJBd2Vzb21lIHR5cGUgb2YgcGl6emEgZGVzY3JpcHRpb24gZ29lcyBoZXJlLi4uXCI7XG4gICAgY2FyZDMuYXBwZW5kKGNhcmRIMywgY2FyZFAzKTtcblxuICAgIGNhcmRzLmFwcGVuZChjYXJkLCBjYXJkMiwgY2FyZDMpO1xuXG4gICAgbWVudVNhbXBsZS5hcHBlbmQobWVudVNhbXBsZUgsIG1lbnVCdG4sIGNhcmRzKTtcblxuICAgIHJldHVybiBtZW51U2FtcGxlO1xufVxuXG5jb25zdCBib2R5ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgYm9keVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgYm9keVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYm9keS1zZWN0aW9uJyk7XG5cbiAgICBib2R5U2VjdGlvbi5hcHBlbmQoaW1hZ2VHcmlkKCksIGFib3V0QmxvY2soKSwgbWVudVNhbXBsZSgpKTtcblxuXG4gICAgcmV0dXJuIGJvZHlTZWN0aW9uO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUgKCkge1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIG1haW4uYXBwZW5kKGhlcm8oKSwgYm9keSgpKTtcblxuICAgIHJldHVybiBtYWluO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSAoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBjb25zdCBoZWFkZXJIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXJILmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnKTtcblxuICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcHRpb24xLmNsYXNzTGlzdC5hZGQoJ29wdGlvbicpO1xuICAgIGNvbnN0IGExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGExLmhyZWYgPSBcIiNhcHBldGl6ZXItc2VjdGlvblwiO1xuICAgIGExLmlubmVyVGV4dCA9IFwiQXBwZXRpemVyc1wiO1xuXG4gICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9wdGlvbjIuY2xhc3NMaXN0LmFkZCgnb3B0aW9uJyk7XG4gICAgY29uc3QgYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYTIuaHJlZiA9IFwiI2NsYXNzaWMtc2VjdGlvblwiO1xuICAgIGEyLmlubmVyVGV4dCA9IFwiQ2xhc3NpY3NcIjtcblxuICAgIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcHRpb24zLmNsYXNzTGlzdC5hZGQoJ29wdGlvbicpO1xuICAgIGNvbnN0IGEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEzLmhyZWYgPSBcIiNzaWRlLXNlY3Rpb25cIjtcbiAgICBhMy5pbm5lclRleHQgPSBcIlNpZGVzXCI7XG5cbiAgICBjb25zdCBvcHRpb240ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3B0aW9uNC5jbGFzc0xpc3QuYWRkKCdvcHRpb24nKTtcbiAgICBjb25zdCBhNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhNC5ocmVmID0gXCIjc3BlY2lhbHR5LXNlY3Rpb25cIjtcbiAgICBhNC5pbm5lclRleHQgPSBcIlNwZWNpYWxzXCI7XG5cbiAgICBvcHRpb24xLmFwcGVuZENoaWxkKGExKTtcbiAgICBvcHRpb24yLmFwcGVuZENoaWxkKGEyKTtcbiAgICBvcHRpb24zLmFwcGVuZENoaWxkKGEzKTtcbiAgICBvcHRpb240LmFwcGVuZENoaWxkKGE0KTtcblxuICAgIG9wdGlvbnMuYXBwZW5kKG9wdGlvbjEsIG9wdGlvbjIsIG9wdGlvbjMsIG9wdGlvbjQpO1xuICAgIGhlYWRlci5hcHBlbmQoaGVhZGVySCwgb3B0aW9ucyk7XG5cbiAgICBjb25zdCBhcHBTZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgYXBwU2VjLnNldEF0dHJpYnV0ZSgnaWQnLCAnYXBwZXRpemVyLXNlY3Rpb24nKTtcbiAgICBjb25zdCBhcHBIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBhcHBILmlubmVyVGV4dCA9IFwiQXBwZXRpemVyc1wiO1xuICAgIGNvbnN0IGFwcENvbnRhaW5lciAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcHBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgYXBwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FwcGV0aXplci1jb250YWluZXInKTtcbiAgICBjb25zdCBhcHBDb250YWluZXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFwcENvbnRhaW5lclAuaW5uZXJUZXh0ID0gXCJDb29sIG1lbnUgb2YgQXBwZXRpemVycyBoZXJlXCI7XG4gICAgYXBwQ29udGFpbmVyLmFwcGVuZChhcHBDb250YWluZXJQKTtcbiAgICBhcHBTZWMuYXBwZW5kKGFwcEgsIGFwcENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjbGFzc2ljU2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNsYXNzaWNTZWMuc2V0QXR0cmlidXRlKCdpZCcsICdjbGFzc2ljLXNlY3Rpb24nKTtcbiAgICBjb25zdCBjbGFzc2ljSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY2xhc3NpY0guaW5uZXJUZXh0ID0gXCJDbGFzc2ljc1wiO1xuICAgIGNvbnN0IGNsYXNzaWNDb250YWluZXIgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2xhc3NpY0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBjbGFzc2ljQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NsYXNzaWMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2xhc3NpY0NvbnRhaW5lclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2xhc3NpY0NvbnRhaW5lclAuaW5uZXJUZXh0ID0gXCJDb29sIGNsYXNzaWMgcGl6emEgbWVudSBoZXJlXCI7XG4gICAgY2xhc3NpY0NvbnRhaW5lci5hcHBlbmQoY2xhc3NpY0NvbnRhaW5lclApO1xuICAgIGNsYXNzaWNTZWMuYXBwZW5kKGNsYXNzaWNILCBjbGFzc2ljQ29udGFpbmVyKTtcblxuXG4gICAgY29uc3Qgc2lkZVNlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzaWRlU2VjLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2lkZS1zZWN0aW9uJyk7XG4gICAgY29uc3Qgc2lkZUggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHNpZGVILmlubmVyVGV4dCA9IFwiU2lkZXNcIjtcbiAgICBjb25zdCBzaWRlQ29udGFpbmVyICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgc2lkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHNpZGVDb250YWluZXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNpZGVDb250YWluZXJQLmlubmVyVGV4dCA9IFwiQXdlc29tZSBtZW51IG9mIHNpZGVzIGhlclwiO1xuICAgIHNpZGVDb250YWluZXIuYXBwZW5kKHNpZGVDb250YWluZXJQKTtcbiAgICBzaWRlU2VjLmFwcGVuZChzaWRlSCwgc2lkZUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBzcGVjaWFsU2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNwZWNpYWxTZWMuc2V0QXR0cmlidXRlKCdpZCcsICdzcGVjaWFsdHktc2VjdGlvbicpO1xuICAgIGNvbnN0IHNwZWNpYWxIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBzcGVjaWFsSC5pbm5lclRleHQgPSBcIlNpZGVzXCI7XG4gICAgY29uc3Qgc3BlY2lhbENvbnRhaW5lciAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcGVjaWFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIHNwZWNpYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3BlY2lhbHR5LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHNwZWNpYWxDb250YWluZXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNwZWNpYWxDb250YWluZXJQLmlubmVyVGV4dCA9IFwiQXdlc29tZSBtZW51IG9mIHNpZGVzIGhlclwiO1xuICAgIHNwZWNpYWxDb250YWluZXIuYXBwZW5kKHNwZWNpYWxDb250YWluZXJQKTtcbiAgICBzcGVjaWFsU2VjLmFwcGVuZChzcGVjaWFsSCwgc3BlY2lhbENvbnRhaW5lcik7XG5cblxuICAgIG1lbnUuYXBwZW5kKGhlYWRlciwgYXBwU2VjLCBjbGFzc2ljU2VjLCBzaWRlU2VjLCBzcGVjaWFsU2VjKTtcblxuICAgIHJldHVybiBtZW51O1xuXG59ICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG5jb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuICAgIGNvbnN0IHRhZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhZ3MuY2xhc3NMaXN0LmFkZCgndGFncycpO1xuXG4gICAgY29uc3QgaG9tZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbWVudVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgY29udGFjdFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaG9tZVAuaW5uZXJUZXh0ID0gJ0hvbWUnO1xuICAgIG1lbnVQLmlubmVyVGV4dCA9ICdNZW51JztcbiAgICBjb250YWN0UC5pbm5lclRleHQgPSAnQ29udGFjdCc7XG4gICAgbmF2LmFwcGVuZENoaWxkKHRhZ3MpO1xuICAgIHRhZ3MuYXBwZW5kKGhvbWVQLCBtZW51UCwgY29udGFjdFApO1xuXG4gICAgcmV0dXJuIG5hdjtcbn1cblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSAnwqkyMDIyIE1hZGUgd2l0aCA8c3Bhbj48L3NwYW4+IGJ5IFVyaWVsIHN0YW1lbG1hbic7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5jb25zdCBjcmVhdGVQYWdlID0gKHBhZ2UpID0+IHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2UoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgICBjb25zdCB0YWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhZ3MnKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnRuJyk7XG5cbiAgICB0YWdzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQuaW5uZXJUZXh0ID09PSAnSG9tZScpIHtcbiAgICAgICAgICAgIHdoaWxlKGNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3JlYXRlUGFnZShob21lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5pbm5lclRleHQgPT09ICdNZW51Jykge1xuICAgICAgICAgICAgd2hpbGUoY29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjcmVhdGVQYWdlKG1lbnUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gXCJDb250YWN0XCIpIHtcbiAgICAgICAgICAgIHdoaWxlKGNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3JlYXRlUGFnZShjb250YWN0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB3aGlsZShjb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZVBhZ2UobWVudSk7XG4gICAgfSlcblxufVxuXG5jcmVhdGVQYWdlKGhvbWUpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==