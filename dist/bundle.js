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
___CSS_LOADER_EXPORT___.push([module.id, "/* Cross page styles */\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n\nbody, html {\n    height: 100%;\n    font-family: 'Courgette', cursive;\n}\n\n.content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.nav {\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    padding: 1rem;\n    position: fixed;\n}\n\n.tags {\n    display: flex;\n    gap: 2rem;\n    font-size: 1.5rem;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.tags p {\n    display: block;\n    color: #DC3535;\n    text-decoration: none;\n    position: relative;\n}\n\n.tags p::after{\n    content: \"\";\n    background: #DC3535;\n    mix-blend-mode: exclusion;\n    width: calc(100% + 20px);\n    height: 0;\n    position: absolute;\n    bottom: -4px;\n    left: -10px;\n      transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  }\n  \n.tags p:hover::after{\n    height: calc(100% + 8px)\n  }\n\nfooter {\n    display: flex;\n    justify-content: center;\n    background-color: black;\n    color: #DC3535;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    padding: 1rem 0;\n    font-family: 'Roboto', sans-serif;\n}\n\nfooter span {\n    content: url('https://api.iconify.design/bi/fire.svg?color=%23dc3535');\n    margin: 0 5px;\n    color: #dc6a35;\n}\n\n/* Home styles */\n\n.hero {\n    color: white;\n    padding: 4rem;\n    flex-wrap: wrap;\n    height: 60vh;\n    background-image:\n    /* linear-gradient(black, rgba(0, 0, 0, 0.2)), */\n    url(https://images.pexels.com/photos/6876075/pexels-photo-6876075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);\n    background-position: 90% 30%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-blend-mode: saturation;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n\n}\n\n.hero h1 {\n    font-size: 6rem;\n    margin-bottom: 2rem;\n}\n\n.hero p {\n    font-size: 2rem;\n}\n\n\n.grid-container {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.grid {\n    width: 80%;\n    padding-top: 4rem;\n    display: grid;\n    grid-template: 250px 250px / 1fr 1fr;\n    gap: 10px;\n}\n\n.cell {\n    font-size: 2rem;\n    color: white;\n    padding: 1rem;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n}\n\n.img1 {\n    grid-row: 1 / -1;\n    background-image: url(https://images.unsplash.com/photo-1616141032335-7e6b413f93ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.img2 {\n    background-image: url(https://images.unsplash.com/photo-1616141215340-34b0e7c661c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);\n    background-position: 100% 75%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.img3 {\n    background-image: url(https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=743&q=80);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    justify-content: start;\n    align-items: end;\n\n}\n\n.about {\n    height: 500px;\n    color: white;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    background-image: url(https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_960_720.jpg);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin-top: 4rem;\n    padding: 2rem;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n\n}\n\n.about h1 {\n    font-size: 3rem;\n}\n\n.about p {\n    font-size: 2rem;\n}\n\n.about p + p {\n    font-size: 0.625rem;\n}\n\n.menu-sample {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n    margin-top: 2rem;\n}\n\n.menu-sample h1 {\n    font-size: 2rem;\n    color: black;\n}\n\n\n/* CSS */\n.menu-btn {\n  --b: 3px;   /* border thickness */\n  --s: .45em; /* size of the corner */\n  --color: #373B44;\n  \n  padding: calc(.5em + var(--s)) calc(.9em + var(--s));\n  color: var(--color);\n  --_p: var(--s);\n  background:\n    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)\n    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));\n  transition: .3s linear, color 0s, background-color 0s;\n  outline: var(--b) solid #0000;\n  outline-offset: .6em;\n  font-size: 16px;\n\n  border: 0;\n\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  cursor: pointer;\n}\n\n.menu-btn:hover,\n.menu-btn:focus-visible{\n  --_p: 0px;\n  outline-color: var(--color);\n  outline-offset: .05em;\n}\n\n.menu-btn:active {\n  background: var(--color);\n  color: #fff;\n}\n\n.cards {\n    width: 80%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 2rem;\n    margin-bottom: 4rem;\n}\n\n.card {\n    height: 350px;\n    padding: 2rem;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    border-radius: 5px;\n    background-color: #DC3535;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;\n}\n\n/* Menu styles */\n\n.menu {\n    background-color: #070505;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 2rem;\n}\n\nheader h1 {\n    color: white;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    margin-top: 2rem;\n}\n\nheader h1 {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n}\n\n.options {\n    width: 80vw;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));   \n    gap: 1rem;\n}\n\na {\n    color: black;\n    text-decoration: none;\n    position: relative;\n}\n\na::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 4px;\n    border-radius: 4px;\n    background-color: black;\n    bottom: 0;\n    left: 0;\n    transform-origin: right;\n    transform: scaleX(0);\n    transition: transform .3s ease-in-out;\n  }\n  \n  a:hover::before {\n    transform-origin: left;\n    transform: scaleX(1);\n  }\n\n.option {\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #EEF1F4;\n}\n\nsection {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    margin-top: 2rem;\n}\n\nsection h1 {\n    color: white;\n    font-size: 2rem;\n}\n\n\n.container {\n    width: 80vw;\n    height: 400px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #EEF1F4;\n    color: black;\n}\n\n.appetizer-container, .option:nth-child(1) {\n    background-color: #E03706;\n}\n\n.classic-container, .option:nth-child(2) {\n    background-color: #ADB4B8;\n}\n\n.specialty-container, .option:nth-child(4) {\n    background-color: #9D3A11;\n}\n\n#specialty-section {\n    margin-bottom: 4rem;\n}\n\n/* Contact */\n\n.contact {\n    height: 100vh;\n    background-image: url(https://cdn.pixabay.com/photo/2022/06/23/09/42/food-and-drink-industry-7279413_960_720.jpg);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 2rem;\n}\n\n.contact-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n}\n\n.form-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(7, 5, 5, 0.6);\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    border-radius: 2px;\n    padding: 2rem;\n}\n\n.form-container h1 {\n    color: white;\n    font-size: 3rem;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    margin-bottom: 2rem;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 3rem;\n}\n\n.details {\n    gap: 1rem;\n}\n\ninput, textarea {\n    color: white;\n    background-color: rgba(7, 5, 5, 0.4);\n    border-bottom: 1px solid white;\n    padding: 1rem 0 1rem 1rem;\n    caret-color: #DC3535;\n}\n\ninput:focus {\n    outline: none;\n}\n\ntextarea {\n    width: 100%;\n}\n\ntextarea:focus {\n    outline: none;\n}\n\nform div {\n    display: flex;\n    justify-content: center;\n}\n\n\n/* CSS */\n.contact-btn {\n    align-items: center;\n    background-color: rgba(7, 5, 5, 0.4);\n    border-radius: 2px;\n    box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;\n    box-sizing: border-box;\n    color: #fff;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    cursor: pointer;\n    display: inline-flex;\n    flex: 1 1 auto;\n    font-size: 1.2rem;\n    font-weight: 700;\n    justify-content: center;\n    line-height: 1;\n    margin: 0;\n    outline: none;\n    padding: 1rem 1.2rem;\n    text-align: center;\n    text-decoration: none;\n    transition: box-shadow .2s,-webkit-box-shadow .2s;\n    white-space: nowrap;\n    border: 0;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n}\n\n.contact-btn:hover {\n  box-shadow: #DC3535 0 0 0 3px, transparent 0 0 0 0;\n}\n\n.contact-details {\n    color: white;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n    background-color: rgba(7, 5, 5, 0.6);\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    border-radius: 2px;\n    padding: 2rem;\n}\n\n.contact-details div {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:wght@300;400;700;900&display=swap');\n\n\n/* Cross page styles */\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n\nbody, html {\n    height: 100%;\n    font-family: 'Courgette', cursive;\n}\n\n.content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.nav {\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    padding: 1rem;\n    position: fixed;\n}\n\n.tags {\n    display: flex;\n    gap: 2rem;\n    font-size: 1.5rem;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.tags p {\n    display: block;\n    color: #DC3535;\n    text-decoration: none;\n    position: relative;\n}\n\n.tags p::after{\n    content: \"\";\n    background: #DC3535;\n    mix-blend-mode: exclusion;\n    width: calc(100% + 20px);\n    height: 0;\n    position: absolute;\n    bottom: -4px;\n    left: -10px;\n      transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  }\n  \n.tags p:hover::after{\n    height: calc(100% + 8px)\n  }\n\nfooter {\n    display: flex;\n    justify-content: center;\n    background-color: black;\n    color: #DC3535;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    padding: 1rem 0;\n    font-family: 'Roboto', sans-serif;\n}\n\nfooter span {\n    content: url('https://api.iconify.design/bi/fire.svg?color=%23dc3535');\n    margin: 0 5px;\n    color: #dc6a35;\n}\n\n/* Home styles */\n\n.hero {\n    color: white;\n    padding: 4rem;\n    flex-wrap: wrap;\n    height: 60vh;\n    background-image:\n    /* linear-gradient(black, rgba(0, 0, 0, 0.2)), */\n    url(https://images.pexels.com/photos/6876075/pexels-photo-6876075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);\n    background-position: 90% 30%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-blend-mode: saturation;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n\n}\n\n.hero h1 {\n    font-size: 6rem;\n    margin-bottom: 2rem;\n}\n\n.hero p {\n    font-size: 2rem;\n}\n\n\n.grid-container {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.grid {\n    width: 80%;\n    padding-top: 4rem;\n    display: grid;\n    grid-template: 250px 250px / 1fr 1fr;\n    gap: 10px;\n}\n\n.cell {\n    font-size: 2rem;\n    color: white;\n    padding: 1rem;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n}\n\n.img1 {\n    grid-row: 1 / -1;\n    background-image: url(https://images.unsplash.com/photo-1616141032335-7e6b413f93ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.img2 {\n    background-image: url(https://images.unsplash.com/photo-1616141215340-34b0e7c661c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);\n    background-position: 100% 75%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.img3 {\n    background-image: url(https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=743&q=80);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    justify-content: start;\n    align-items: end;\n\n}\n\n.about {\n    height: 500px;\n    color: white;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    background-image: url(https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_960_720.jpg);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin-top: 4rem;\n    padding: 2rem;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n\n}\n\n.about h1 {\n    font-size: 3rem;\n}\n\n.about p {\n    font-size: 2rem;\n}\n\n.about p + p {\n    font-size: 0.625rem;\n}\n\n.menu-sample {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n    margin-top: 2rem;\n}\n\n.menu-sample h1 {\n    font-size: 2rem;\n    color: black;\n}\n\n\n/* CSS */\n.menu-btn {\n  --b: 3px;   /* border thickness */\n  --s: .45em; /* size of the corner */\n  --color: #373B44;\n  \n  padding: calc(.5em + var(--s)) calc(.9em + var(--s));\n  color: var(--color);\n  --_p: var(--s);\n  background:\n    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)\n    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));\n  transition: .3s linear, color 0s, background-color 0s;\n  outline: var(--b) solid #0000;\n  outline-offset: .6em;\n  font-size: 16px;\n\n  border: 0;\n\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  cursor: pointer;\n}\n\n.menu-btn:hover,\n.menu-btn:focus-visible{\n  --_p: 0px;\n  outline-color: var(--color);\n  outline-offset: .05em;\n}\n\n.menu-btn:active {\n  background: var(--color);\n  color: #fff;\n}\n\n.cards {\n    width: 80%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 2rem;\n    margin-bottom: 4rem;\n}\n\n.card {\n    height: 350px;\n    padding: 2rem;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    border-radius: 5px;\n    background-color: #DC3535;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;\n}\n\n/* Menu styles */\n\n.menu {\n    background-color: #070505;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 2rem;\n}\n\nheader h1 {\n    color: white;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    margin-top: 2rem;\n}\n\nheader h1 {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n}\n\n.options {\n    width: 80vw;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));   \n    gap: 1rem;\n}\n\na {\n    color: black;\n    text-decoration: none;\n    position: relative;\n}\n\na::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 4px;\n    border-radius: 4px;\n    background-color: black;\n    bottom: 0;\n    left: 0;\n    transform-origin: right;\n    transform: scaleX(0);\n    transition: transform .3s ease-in-out;\n  }\n  \n  a:hover::before {\n    transform-origin: left;\n    transform: scaleX(1);\n  }\n\n.option {\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #EEF1F4;\n}\n\nsection {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    margin-top: 2rem;\n}\n\nsection h1 {\n    color: white;\n    font-size: 2rem;\n}\n\n\n.container {\n    width: 80vw;\n    height: 400px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #EEF1F4;\n    color: black;\n}\n\n.appetizer-container, .option:nth-child(1) {\n    background-color: #E03706;\n}\n\n.classic-container, .option:nth-child(2) {\n    background-color: #ADB4B8;\n}\n\n.specialty-container, .option:nth-child(4) {\n    background-color: #9D3A11;\n}\n\n#specialty-section {\n    margin-bottom: 4rem;\n}\n\n/* Contact */\n\n.contact {\n    height: 100vh;\n    background-image: url(https://cdn.pixabay.com/photo/2022/06/23/09/42/food-and-drink-industry-7279413_960_720.jpg);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 2rem;\n}\n\n.contact-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n}\n\n.form-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(7, 5, 5, 0.6);\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    border-radius: 2px;\n    padding: 2rem;\n}\n\n.form-container h1 {\n    color: white;\n    font-size: 3rem;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    margin-bottom: 2rem;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 3rem;\n}\n\n.details {\n    gap: 1rem;\n}\n\ninput, textarea {\n    color: white;\n    background-color: rgba(7, 5, 5, 0.4);\n    border-bottom: 1px solid white;\n    padding: 1rem 0 1rem 1rem;\n    caret-color: #DC3535;\n}\n\ninput:focus {\n    outline: none;\n}\n\ntextarea {\n    width: 100%;\n}\n\ntextarea:focus {\n    outline: none;\n}\n\nform div {\n    display: flex;\n    justify-content: center;\n}\n\n\n/* CSS */\n.contact-btn {\n    align-items: center;\n    background-color: rgba(7, 5, 5, 0.4);\n    border-radius: 2px;\n    box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;\n    box-sizing: border-box;\n    color: #fff;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    cursor: pointer;\n    display: inline-flex;\n    flex: 1 1 auto;\n    font-size: 1.2rem;\n    font-weight: 700;\n    justify-content: center;\n    line-height: 1;\n    margin: 0;\n    outline: none;\n    padding: 1rem 1.2rem;\n    text-align: center;\n    text-decoration: none;\n    transition: box-shadow .2s,-webkit-box-shadow .2s;\n    white-space: nowrap;\n    border: 0;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n}\n\n.contact-btn:hover {\n  box-shadow: #DC3535 0 0 0 3px, transparent 0 0 0 0;\n}\n\n.contact-details {\n    color: white;\n    text-shadow: -2px 3px 5px rgba(220,53,53,0.68);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n    background-color: rgba(7, 5, 5, 0.6);\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    border-radius: 2px;\n    padding: 2rem;\n}\n\n.contact-details div {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}"],"sourceRoot":""}]);
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
    const email = document.createElement('input');
    email.setAttribute('id', 'email');
    email.setAttribute('type', 'email');
    email.setAttribute('placeholder', 'Email');
    
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

}

createPage(_home__WEBPACK_IMPORTED_MODULE_1__["default"]);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsZ0lBQWdJLElBQUksSUFBSSxrQkFBa0I7QUFDMUo7QUFDQSxzRUFBc0UsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFBNkIsR0FBRyxrQkFBa0IsbUJBQW1CLHdDQUF3QyxHQUFHLGNBQWMsbUJBQW1CLG9CQUFvQiw2QkFBNkIsR0FBRyxVQUFVLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4Qiw4QkFBOEIsb0JBQW9CLHNCQUFzQixHQUFHLFdBQVcsb0JBQW9CLGdCQUFnQix3QkFBd0IsdUJBQXVCLHNCQUFzQixHQUFHLGFBQWEscUJBQXFCLHFCQUFxQiw0QkFBNEIseUJBQXlCLEdBQUcsbUJBQW1CLG9CQUFvQiwwQkFBMEIsZ0NBQWdDLCtCQUErQixnQkFBZ0IseUJBQXlCLG1CQUFtQixrQkFBa0Isa0VBQWtFLEtBQUssMkJBQTJCLG1DQUFtQyxZQUFZLG9CQUFvQiw4QkFBOEIsOEJBQThCLHFCQUFxQixxREFBcUQsc0JBQXNCLHdDQUF3QyxHQUFHLGlCQUFpQiw2RUFBNkUsb0JBQW9CLHFCQUFxQixHQUFHLGdDQUFnQyxtQkFBbUIsb0JBQW9CLHNCQUFzQixtQkFBbUIseU1BQXlNLG1DQUFtQyxtQ0FBbUMsNkJBQTZCLHdDQUF3QyxxREFBcUQsS0FBSyxjQUFjLHNCQUFzQiwwQkFBMEIsR0FBRyxhQUFhLHNCQUFzQixHQUFHLHVCQUF1QixrQkFBa0Isb0JBQW9CLDhCQUE4QixHQUFHLFdBQVcsaUJBQWlCLHdCQUF3QixvQkFBb0IsMkNBQTJDLGdCQUFnQixHQUFHLFdBQVcsc0JBQXNCLG1CQUFtQixvQkFBb0IscURBQXFELEdBQUcsV0FBVyx1QkFBdUIsMkxBQTJMLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsV0FBVywyTEFBMkwsb0NBQW9DLG1DQUFtQyw2QkFBNkIsR0FBRyxXQUFXLDJMQUEyTCxrQ0FBa0MsbUNBQW1DLDZCQUE2QixvQkFBb0IsNkJBQTZCLHVCQUF1QixLQUFLLFlBQVksb0JBQW9CLG1CQUFtQix5QkFBeUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLHNHQUFzRyxrQ0FBa0MsbUNBQW1DLDZCQUE2Qix1QkFBdUIsb0JBQW9CLHFEQUFxRCxLQUFLLGVBQWUsc0JBQXNCLEdBQUcsY0FBYyxzQkFBc0IsR0FBRyxrQkFBa0IsMEJBQTBCLEdBQUcsa0JBQWtCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGdCQUFnQix1QkFBdUIsR0FBRyxxQkFBcUIsc0JBQXNCLG1CQUFtQixHQUFHLDRCQUE0QixnQkFBZ0Isc0NBQXNDLDZDQUE2Qyw2REFBNkQsd0JBQXdCLG1CQUFtQixpTUFBaU0sMERBQTBELGtDQUFrQyx5QkFBeUIsb0JBQW9CLGdCQUFnQix3QkFBd0IsOEJBQThCLCtCQUErQixvQkFBb0IsR0FBRyw4Q0FBOEMsY0FBYyxnQ0FBZ0MsMEJBQTBCLEdBQUcsc0JBQXNCLDZCQUE2QixnQkFBZ0IsR0FBRyxZQUFZLGlCQUFpQixvQkFBb0Isa0VBQWtFLGdCQUFnQiwwQkFBMEIsR0FBRyxXQUFXLG9CQUFvQixvQkFBb0IseUJBQXlCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixnQkFBZ0IseUJBQXlCLGdDQUFnQyw2RkFBNkYsR0FBRyxnQ0FBZ0MsZ0NBQWdDLG9CQUFvQiw2QkFBNkIsR0FBRyxZQUFZLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHVCQUF1QixHQUFHLGVBQWUsbUJBQW1CLHFEQUFxRCx1QkFBdUIsR0FBRyxlQUFlLHNCQUFzQiwwQkFBMEIsR0FBRyxjQUFjLGtCQUFrQixvQkFBb0IscUVBQXFFLGdCQUFnQixHQUFHLE9BQU8sbUJBQW1CLDRCQUE0Qix5QkFBeUIsR0FBRyxlQUFlLGtCQUFrQix5QkFBeUIsa0JBQWtCLGtCQUFrQix5QkFBeUIsOEJBQThCLGdCQUFnQixjQUFjLDhCQUE4QiwyQkFBMkIsNENBQTRDLEtBQUsseUJBQXlCLDZCQUE2QiwyQkFBMkIsS0FBSyxhQUFhLG9CQUFvQixvQkFBb0IsOEJBQThCLDBCQUEwQixnQ0FBZ0MsR0FBRyxhQUFhLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGdCQUFnQix1QkFBdUIsR0FBRyxnQkFBZ0IsbUJBQW1CLHNCQUFzQixHQUFHLGtCQUFrQixrQkFBa0Isb0JBQW9CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGdDQUFnQyxtQkFBbUIsR0FBRyxnREFBZ0QsZ0NBQWdDLEdBQUcsOENBQThDLGdDQUFnQyxHQUFHLGdEQUFnRCxnQ0FBZ0MsR0FBRyx3QkFBd0IsMEJBQTBCLEdBQUcsK0JBQStCLG9CQUFvQix3SEFBd0gsa0NBQWtDLG1DQUFtQyw2QkFBNkIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsb0JBQW9CLEdBQUcsc0JBQXNCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcscUJBQXFCLGNBQWMsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLDJDQUEyQyx3REFBd0QseUJBQXlCLG9CQUFvQixHQUFHLHdCQUF3QixtQkFBbUIsc0JBQXNCLHFEQUFxRCwwQkFBMEIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsOEJBQThCLGdCQUFnQixHQUFHLGNBQWMsZ0JBQWdCLEdBQUcscUJBQXFCLG1CQUFtQiwyQ0FBMkMscUNBQXFDLGdDQUFnQywyQkFBMkIsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcsY0FBYyxrQkFBa0IsR0FBRyxvQkFBb0Isb0JBQW9CLEdBQUcsY0FBYyxvQkFBb0IsOEJBQThCLEdBQUcsK0JBQStCLDBCQUEwQiwyQ0FBMkMseUJBQXlCLHdFQUF3RSw2QkFBNkIsa0JBQWtCLHFEQUFxRCxzQkFBc0IsMkJBQTJCLHFCQUFxQix3QkFBd0IsdUJBQXVCLDhCQUE4QixxQkFBcUIsZ0JBQWdCLG9CQUFvQiwyQkFBMkIseUJBQXlCLDRCQUE0Qix3REFBd0QsMEJBQTBCLGdCQUFnQix3QkFBd0IsZ0NBQWdDLGlDQUFpQyxHQUFHLHdCQUF3Qix1REFBdUQsR0FBRyxzQkFBc0IsbUJBQW1CLHFEQUFxRCxvQkFBb0IsNkJBQTZCLDhCQUE4QixnQkFBZ0IsMkNBQTJDLHdEQUF3RCx5QkFBeUIsb0JBQW9CLEdBQUcsMEJBQTBCLGtCQUFrQixvQkFBb0IscUNBQXFDLEdBQUcsT0FBTyx1RkFBdUYsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxRQUFRLFVBQVUsS0FBSyxzQkFBc0IsdUJBQXVCLGNBQWMsYUFBYSxhQUFhLFdBQVcsTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFB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ZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOzs7QUFHZTs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEhlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOzs7Ozs7VUNoR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDcUI7QUFDSztBQUNBO0FBQ007O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2Q0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQU87QUFDOUI7QUFDQSxLQUFLOztBQUVMOztBQUVBLFdBQVcsNkNBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q291cmdldHRlJmZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ3Jvc3MgcGFnZSBzdHlsZXMgKi9cXG4qIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5cXG5ib2R5LCBodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIGN1cnNpdmU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLnRhZ3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YWdzIHAge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6ICNEQzM1MzU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFncyBwOjphZnRlcntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGJhY2tncm91bmQ6ICNEQzM1MzU7XFxuICAgIG1peC1ibGVuZC1tb2RlOiBleGNsdXNpb247XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyMHB4KTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTRweDtcXG4gICAgbGVmdDogLTEwcHg7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBjdWJpYy1iZXppZXIoMC40NDUsIDAuMDUsIDAuNTUsIDAuOTUpO1xcbiAgfVxcbiAgXFxuLnRhZ3MgcDpob3Zlcjo6YWZ0ZXJ7XFxuICAgIGhlaWdodDogY2FsYygxMDAlICsgOHB4KVxcbiAgfVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6ICNEQzM1MzU7XFxuICAgIHRleHQtc2hhZG93OiAtMnB4IDNweCA1cHggcmdiYSgyMjAsNTMsNTMsMC42OCk7XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5mb290ZXIgc3BhbiB7XFxuICAgIGNvbnRlbnQ6IHVybCgnaHR0cHM6Ly9hcGkuaWNvbmlmeS5kZXNpZ24vYmkvZmlyZS5zdmc/Y29sb3I9JTIzZGMzNTM1Jyk7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxuICAgIGNvbG9yOiAjZGM2YTM1O1xcbn1cXG5cXG4vKiBIb21lIHN0eWxlcyAqL1xcblxcbi5oZXJvIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGhlaWdodDogNjB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgLyogbGluZWFyLWdyYWRpZW50KGJsYWNrLCByZ2JhKDAsIDAsIDAsIDAuMikpLCAqL1xcbiAgICB1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNjg3NjA3NS9wZXhlbHMtcGhvdG8tNjg3NjA3NS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0xKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTAlIDMwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzYXR1cmF0aW9uO1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAzcHggNXB4IHJnYmEoMjIwLDUzLDUzLDAuNjgpO1xcblxcbn1cXG5cXG4uaGVybyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmhlcm8gcCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAyNTBweCAyNTBweCAvIDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggM3B4IDVweCByZ2JhKDIyMCw1Myw1MywwLjY4KTtcXG59XFxuXFxuLmltZzEge1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTYxNDEwMzIzMzUtN2U2YjQxM2Y5M2VjP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02ODcmcT04MCk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbWcyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjE2MTQxMjE1MzQwLTM0YjBlN2M2NjFjOD9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Njg3JnE9ODApO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDc1JTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmltZzMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTM1NjQ4MzQzNjEtOTQzNjk0ODgxN2QxP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz03NDMmcT04MCk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG5cXG59XFxuXFxuLmFib3V0IHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMjAvMDMvMjUvMjEvMDUvcGl6emEtNDk2ODY0NV85NjBfNzIwLmpwZyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggM3B4IDVweCByZ2JhKDIyMCw1Myw1MywwLjY4KTtcXG5cXG59XFxuXFxuLmFib3V0IGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYWJvdXQgcCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmFib3V0IHAgKyBwIHtcXG4gICAgZm9udC1zaXplOiAwLjYyNXJlbTtcXG59XFxuXFxuLm1lbnUtc2FtcGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4ubWVudS1zYW1wbGUgaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuXFxuLyogQ1NTICovXFxuLm1lbnUtYnRuIHtcXG4gIC0tYjogM3B4OyAgIC8qIGJvcmRlciB0aGlja25lc3MgKi9cXG4gIC0tczogLjQ1ZW07IC8qIHNpemUgb2YgdGhlIGNvcm5lciAqL1xcbiAgLS1jb2xvcjogIzM3M0I0NDtcXG4gIFxcbiAgcGFkZGluZzogY2FsYyguNWVtICsgdmFyKC0tcykpIGNhbGMoLjllbSArIHZhcigtLXMpKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAtLV9wOiB2YXIoLS1zKTtcXG4gIGJhY2tncm91bmQ6XFxuICAgIGNvbmljLWdyYWRpZW50KGZyb20gOTBkZWcgYXQgdmFyKC0tYikgdmFyKC0tYiksIzAwMDAgOTBkZWcsdmFyKC0tY29sb3IpIDApXFxuICAgIHZhcigtLV9wKSB2YXIoLS1fcCkvY2FsYygxMDAlIC0gdmFyKC0tYikgLSAyKnZhcigtLV9wKSkgY2FsYygxMDAlIC0gdmFyKC0tYikgLSAyKnZhcigtLV9wKSk7XFxuICB0cmFuc2l0aW9uOiAuM3MgbGluZWFyLCBjb2xvciAwcywgYmFja2dyb3VuZC1jb2xvciAwcztcXG4gIG91dGxpbmU6IHZhcigtLWIpIHNvbGlkICMwMDAwO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC42ZW07XFxuICBmb250LXNpemU6IDE2cHg7XFxuXFxuICBib3JkZXI6IDA7XFxuXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtYnRuOmhvdmVyLFxcbi5tZW51LWJ0bjpmb2N1cy12aXNpYmxle1xcbiAgLS1fcDogMHB4O1xcbiAgb3V0bGluZS1jb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC4wNWVtO1xcbn1cXG5cXG4ubWVudS1idG46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY2FyZHMge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREMzNTM1O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxMHB4IDM2cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAwcHggMHB4IDFweDtcXG59XFxuXFxuLyogTWVudSBzdHlsZXMgKi9cXG5cXG4ubWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzA1MDU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggM3B4IDVweCByZ2JhKDIyMCw1Myw1MywwLjY4KTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTsgICBcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG4gIH1cXG4gIFxcbiAgYTpob3Zlcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB9XFxuXFxuLm9wdGlvbiB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVGMUY0O1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG5zZWN0aW9uIGgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcblxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUYxRjQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmFwcGV0aXplci1jb250YWluZXIsIC5vcHRpb246bnRoLWNoaWxkKDEpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwMzcwNjtcXG59XFxuXFxuLmNsYXNzaWMtY29udGFpbmVyLCAub3B0aW9uOm50aC1jaGlsZCgyKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBREI0Qjg7XFxufVxcblxcbi5zcGVjaWFsdHktY29udGFpbmVyLCAub3B0aW9uOm50aC1jaGlsZCg0KSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5RDNBMTE7XFxufVxcblxcbiNzcGVjaWFsdHktc2VjdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcblxcbi8qIENvbnRhY3QgKi9cXG5cXG4uY29udGFjdCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIyLzA2LzIzLzA5LzQyL2Zvb2QtYW5kLWRyaW5rLWluZHVzdHJ5LTcyNzk0MTNfOTYwXzcyMC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uY29udGFjdC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA1LCA1LCAwLjYpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciBoMSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAzcHggNXB4IHJnYmEoMjIwLDUzLDUzLDAuNjgpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogM3JlbTtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA1LCA1LCAwLjQpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDFyZW07XFxuICAgIGNhcmV0LWNvbG9yOiAjREMzNTM1O1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuZm9ybSBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuLyogQ1NTICovXFxuLmNvbnRhY3QtYnRuIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA1LCA1LCAwLjQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJveC1zaGFkb3c6IHRyYW5zcGFyZW50IDAgMCAwIDNweCxyZ2JhKDE4LCAxOCwgMTgsIC4xKSAwIDZweCAyMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggM3B4IDVweCByZ2JhKDIyMCw1Myw1MywwLjY4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4ycywtd2Via2l0LWJveC1zaGFkb3cgLjJzO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG59XFxuXFxuLmNvbnRhY3QtYnRuOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6ICNEQzM1MzUgMCAwIDAgM3B4LCB0cmFuc3BhcmVudCAwIDAgMCAwO1xcbn1cXG5cXG4uY29udGFjdC1kZXRhaWxzIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAzcHggNXB4IHJnYmEoMjIwLDUzLDUzLDAuNjgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcsIDUsIDUsIDAuNik7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtZGV0YWlscyBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBLHNCQUFzQjtBQUN0QjtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO01BQ1QseURBQXlEO0VBQzdEOztBQUVGO0lBQ0k7RUFDRjs7QUFFRjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCw4Q0FBOEM7SUFDOUMsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHNFQUFzRTtJQUN0RSxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaOzt3SEFFb0g7SUFDcEgsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLDhDQUE4Qzs7QUFFbEQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0xBQW9MO0lBQ3BMLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0xBQW9MO0lBQ3BMLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0xBQW9MO0lBQ3BMLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCwrRkFBK0Y7SUFDL0YsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4Q0FBOEM7O0FBRWxEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7OztBQUdBLFFBQVE7QUFDUjtFQUNFLFFBQVEsSUFBSSxxQkFBcUI7RUFDakMsVUFBVSxFQUFFLHVCQUF1QjtFQUNuQyxnQkFBZ0I7O0VBRWhCLG9EQUFvRDtFQUNwRCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkOzsrRkFFNkY7RUFDN0YscURBQXFEO0VBQ3JELDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsZUFBZTs7RUFFZixTQUFTOztFQUVULGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsU0FBUztFQUNULDJCQUEyQjtFQUMzQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsV0FBVztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixzRkFBc0Y7QUFDMUY7O0FBRUEsZ0JBQWdCOztBQUVoQjtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhDQUE4QztJQUM5QyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsT0FBTztJQUNQLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLG9CQUFvQjtFQUN0Qjs7QUFFRjtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQSxZQUFZOztBQUVaO0lBQ0ksYUFBYTtJQUNiLGlIQUFpSDtJQUNqSCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxpREFBaUQ7SUFDakQsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLDhDQUE4QztJQUM5QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOzs7QUFHQSxRQUFRO0FBQ1I7SUFDSSxtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixpRUFBaUU7SUFDakUsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCw4Q0FBOEM7SUFDOUMsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLFNBQVM7SUFDVCxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaURBQWlEO0lBQ2pELG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOENBQThDO0lBQzlDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsaURBQWlEO0lBQ2pELGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q291cmdldHRlJmZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuLyogQ3Jvc3MgcGFnZSBzdHlsZXMgKi9cXG4qIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5cXG5ib2R5LCBodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIGN1cnNpdmU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLnRhZ3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YWdzIHAge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6ICNEQzM1MzU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFncyBwOjphZnRlcntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGJhY2tncm91bmQ6ICNEQzM1MzU7XFxuICAgIG1peC1ibGVuZC1tb2RlOiBleGNsdXNpb247XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyMHB4KTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTRweDtcXG4gICAgbGVmdDogLTEwcHg7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBjdWJpYy1iZXppZXIoMC40NDUsIDAuMDUsIDAuNTUsIDAuOTUpO1xcbiAgfVxcbiAgXFxuLnRhZ3MgcDpob3Zlcjo6YWZ0ZXJ7XFxuICAgIGhlaWdodDogY2FsYygxMDAlICsgOHB4KVxcbiAgfVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6ICNEQzM1MzU7XFxuICAgIHRleHQtc2hhZG93OiAtMnB4IDNweCA1cHggcmdiYSgyMjAsNTMsNTMsMC42OCk7XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5mb290ZXIgc3BhbiB7XFxuICAgIGNvbnRlbnQ6IHVybCgnaHR0cHM6Ly9hcGkuaWNvbmlmeS5kZXNpZ24vYmkvZmlyZS5zdmc/Y29sb3I9JTIzZGMzNTM1Jyk7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxuICAgIGNvbG9yOiAjZGM2YTM1O1xcbn1cXG5cXG4vKiBIb21lIHN0eWxlcyAqL1xcblxcbi5oZXJvIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGhlaWdodDogNjB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgLyogbGluZWFyLWdyYWRpZW50KGJsYWNrLCByZ2JhKDAsIDAsIDAsIDAuMikpLCAqL1xcbiAgICB1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNjg3NjA3NS9wZXhlbHMtcGhvdG8tNjg3NjA3NS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0xKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTAlIDMwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzYXR1cmF0aW9uO1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAzcHggNXB4IHJnYmEoMjIwLDUzLDUzLDAuNjgpO1xcblxcbn1cXG5cXG4uaGVybyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmhlcm8gcCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAyNTBweCAyNTBweCAvIDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggM3B4IDVweCByZ2JhKDIyMCw1Myw1MywwLjY4KTtcXG59XFxuXFxuLmltZzEge1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTYxNDEwMzIzMzUtN2U2YjQxM2Y5M2VjP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02ODcmcT04MCk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbWcyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjE2MTQxMjE1MzQwLTM0YjBlN2M2NjFjOD9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Njg3JnE9ODApO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDc1JTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmltZzMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTM1NjQ4MzQzNjEtOTQzNjk0ODgxN2QxP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz03NDMmcT04MCk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG5cXG59XFxuXFxuLmFib3V0IHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMjAvMDMvMjUvMjEvMDUvcGl6emEtNDk2ODY0NV85NjBfNzIwLmpwZyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggM3B4IDVweCByZ2JhKDIyMCw1Myw1MywwLjY4KTtcXG5cXG59XFxuXFxuLmFib3V0IGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYWJvdXQgcCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmFib3V0IHAgKyBwIHtcXG4gICAgZm9udC1zaXplOiAwLjYyNXJlbTtcXG59XFxuXFxuLm1lbnUtc2FtcGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4ubWVudS1zYW1wbGUgaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuXFxuLyogQ1NTICovXFxuLm1lbnUtYnRuIHtcXG4gIC0tYjogM3B4OyAgIC8qIGJvcmRlciB0aGlja25lc3MgKi9cXG4gIC0tczogLjQ1ZW07IC8qIHNpemUgb2YgdGhlIGNvcm5lciAqL1xcbiAgLS1jb2xvcjogIzM3M0I0NDtcXG4gIFxcbiAgcGFkZGluZzogY2FsYyguNWVtICsgdmFyKC0tcykpIGNhbGMoLjllbSArIHZhcigtLXMpKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAtLV9wOiB2YXIoLS1zKTtcXG4gIGJhY2tncm91bmQ6XFxuICAgIGNvbmljLWdyYWRpZW50KGZyb20gOTBkZWcgYXQgdmFyKC0tYikgdmFyKC0tYiksIzAwMDAgOTBkZWcsdmFyKC0tY29sb3IpIDApXFxuICAgIHZhcigtLV9wKSB2YXIoLS1fcCkvY2FsYygxMDAlIC0gdmFyKC0tYikgLSAyKnZhcigtLV9wKSkgY2FsYygxMDAlIC0gdmFyKC0tYikgLSAyKnZhcigtLV9wKSk7XFxuICB0cmFuc2l0aW9uOiAuM3MgbGluZWFyLCBjb2xvciAwcywgYmFja2dyb3VuZC1jb2xvciAwcztcXG4gIG91dGxpbmU6IHZhcigtLWIpIHNvbGlkICMwMDAwO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC42ZW07XFxuICBmb250LXNpemU6IDE2cHg7XFxuXFxuICBib3JkZXI6IDA7XFxuXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtYnRuOmhvdmVyLFxcbi5tZW51LWJ0bjpmb2N1cy12aXNpYmxle1xcbiAgLS1fcDogMHB4O1xcbiAgb3V0bGluZS1jb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC4wNWVtO1xcbn1cXG5cXG4ubWVudS1idG46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY2FyZHMge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREMzNTM1O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxMHB4IDM2cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAwcHggMHB4IDFweDtcXG59XFxuXFxuLyogTWVudSBzdHlsZXMgKi9cXG5cXG4ubWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzA1MDU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggM3B4IDVweCByZ2JhKDIyMCw1Myw1MywwLjY4KTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTsgICBcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG4gIH1cXG4gIFxcbiAgYTpob3Zlcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB9XFxuXFxuLm9wdGlvbiB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVGMUY0O1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG5zZWN0aW9uIGgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcblxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUYxRjQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmFwcGV0aXplci1jb250YWluZXIsIC5vcHRpb246bnRoLWNoaWxkKDEpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwMzcwNjtcXG59XFxuXFxuLmNsYXNzaWMtY29udGFpbmVyLCAub3B0aW9uOm50aC1jaGlsZCgyKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBREI0Qjg7XFxufVxcblxcbi5zcGVjaWFsdHktY29udGFpbmVyLCAub3B0aW9uOm50aC1jaGlsZCg0KSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5RDNBMTE7XFxufVxcblxcbiNzcGVjaWFsdHktc2VjdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcblxcbi8qIENvbnRhY3QgKi9cXG5cXG4uY29udGFjdCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIyLzA2LzIzLzA5LzQyL2Zvb2QtYW5kLWRyaW5rLWluZHVzdHJ5LTcyNzk0MTNfOTYwXzcyMC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uY29udGFjdC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA1LCA1LCAwLjYpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciBoMSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAzcHggNXB4IHJnYmEoMjIwLDUzLDUzLDAuNjgpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogM3JlbTtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA1LCA1LCAwLjQpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDFyZW07XFxuICAgIGNhcmV0LWNvbG9yOiAjREMzNTM1O1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuZm9ybSBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuLyogQ1NTICovXFxuLmNvbnRhY3QtYnRuIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA1LCA1LCAwLjQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJveC1zaGFkb3c6IHRyYW5zcGFyZW50IDAgMCAwIDNweCxyZ2JhKDE4LCAxOCwgMTgsIC4xKSAwIDZweCAyMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggM3B4IDVweCByZ2JhKDIyMCw1Myw1MywwLjY4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4ycywtd2Via2l0LWJveC1zaGFkb3cgLjJzO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG59XFxuXFxuLmNvbnRhY3QtYnRuOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6ICNEQzM1MzUgMCAwIDAgM3B4LCB0cmFuc3BhcmVudCAwIDAgMCAwO1xcbn1cXG5cXG4uY29udGFjdC1kZXRhaWxzIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAzcHggNXB4IHJnYmEoMjIwLDUzLDUzLDAuNjgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcsIDUsIDUsIDAuNik7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtZGV0YWlscyBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0ICgpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgY29uc3QgY29udGFjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXdyYXBwZXInKTtcbiAgICBjb25zdCBjb250YWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3REZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGV0YWlscycpO1xuICAgIGNvbnN0IHBob25lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcGhvbmVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHBob25lU3Bhbi5pbm5lclRleHQgPSBcIlBob25lOiBcIjtcbiAgICBjb25zdCBhZGRyZXNzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWRkcmVzc1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWRkcmVzc1NwYW4uaW5uZXJUZXh0ID0gXCJBZGRyZXNzOiBcIjtcbiAgICBjb25zdCBlbWFpbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGVtYWlsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBlbWFpbFNwYW4uaW5uZXJUZXh0ID0gXCJFbWFpbDogXCI7XG5cbiAgICBwaG9uZURpdi5hcHBlbmQocGhvbmVTcGFuLCBcIisxMjM0NTY3ODlcIik7XG4gICAgYWRkcmVzc0Rpdi5hcHBlbmQoYWRkcmVzc1NwYW4sIFwiMTQgYm91bGV2YXJkIHN0cmVldCBjb3VudHJ5IG5hbWVcIilcbiAgICBlbWFpbERpdi5hcHBlbmQoZW1haWxTcGFuLCBcInBpenphcGxhY2VAZW1haWwuY29tXCIpO1xuXG4gICAgY29udGFjdERldGFpbHMuYXBwZW5kKHBob25lRGl2LCBhZGRyZXNzRGl2LCBlbWFpbERpdik7XG4gICAgXG5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZvcm1Db250YWluZXJIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBmb3JtQ29udGFpbmVySC5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOYW1lJyk7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVtYWlsLnNldEF0dHJpYnV0ZSgnaWQnLCAnZW1haWwnKTtcbiAgICBlbWFpbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcbiAgICBlbWFpbC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VtYWlsJyk7XG4gICAgXG4gICAgY29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBtc2cuc2V0QXR0cmlidXRlKCduYW1lJywgJ21lc3NhZ2UnKTtcbiAgICBtc2cuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdNZXNzYWdlJyk7XG4gICAgbXNnLnNldEF0dHJpYnV0ZSgnaWQnLCAnbXNnJyk7XG4gICAgbXNnLnNldEF0dHJpYnV0ZSgnY29scycsICczMCcpO1xuICAgIG1zZy5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMScpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWJ0bicpO1xuICAgIGJ0bi5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xuXG4gICAgZGV0YWlscy5hcHBlbmQobmFtZSwgZW1haWwpO1xuICAgIGZvcm0uYXBwZW5kKGRldGFpbHMsIG1zZywgYnRuKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZChmb3JtKTtcblxuICAgIGNvbnRhY3RXcmFwcGVyLmFwcGVuZChjb250YWN0RGV0YWlscywgZm9ybUNvbnRhaW5lcik7XG5cbiAgICBjb250YWN0LmFwcGVuZChjb250YWN0V3JhcHBlcik7XG5cbiAgICByZXR1cm4gY29udGFjdDtcbn0iLCJcblxuY29uc3QgaGVybyA9ICgpID0+IHtcblxuICAgIGNvbnN0IGhlcm9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGhlcm9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hlcm8tc2VjdGlvbicpO1xuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgICBjb25zdCBoZXJvSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVyb0guaW5uZXJUZXh0ID0gJ1BpenphIENvcm5lcic7XG4gICAgY29uc3QgaGVyb1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaGVyb1AuaW5uZXJUZXh0ID0gJ09mZmVyaW5nIHRoZSBtb3N0IGRlbGljb3VzIGFuZCBudXRyaXRpY291cyBwaXp6YSBzaW5jZSBuZXZlciEnO1xuXG4gICAgaGVyby5hcHBlbmQoaGVyb0gsIGhlcm9QKVxuICAgIGhlcm9TZWN0aW9uLmFwcGVuZENoaWxkKGhlcm8pO1xuXG4gICAgcmV0dXJuIGhlcm9TZWN0aW9uO1xufTtcblxuY29uc3QgaW1hZ2VHcmlkID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY29udGFpbmVyJylcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJylcbiAgICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nMS5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgaW1nMS5jbGFzc0xpc3QuYWRkKCdpbWcxJyk7XG4gICAgaW1nMS5pbm5lclRleHQgPSAnRGVsaWNvdXMnO1xuICAgIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWcyLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICBpbWcyLmNsYXNzTGlzdC5hZGQoJ2ltZzInKTtcbiAgICBpbWcyLmlubmVyVGV4dCA9ICdGdW4nO1xuICAgIGNvbnN0IGltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWczLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICBpbWczLmNsYXNzTGlzdC5hZGQoJ2ltZzMnKTtcbiAgICBpbWczLmlubmVyVGV4dCA9ICdOdXRyaXRpY291cyc7XG4gICAgXG4gICAgZ3JpZC5hcHBlbmQoaW1nMSwgaW1nMiwgaW1nMyk7XG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkKTtcblxuICAgIHJldHVybiBncmlkQ29udGFpbmVyO1xufVxuXG5jb25zdCBhYm91dEJsb2NrID0gKCkgPT4ge1xuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcbiAgICBjb25zdCBhYm91dEggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGFib3V0SC5pbm5lclRleHQgPSBcIkFib3V0XCI7XG4gICAgY29uc3QgYWJvdXRQMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dFAxLmlubmVyVGV4dCA9IFwiV2UgYXJlIHRoZSBiZXN0IHBpenphIG1ha2VycyBpbiB0b3duLCBhbmQgdGhhdCBpcyBkZWZpbml0ZWx5IE5PVCBhIGZhY3RcIjtcbiAgICBjb25zdCBhYm91dFAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFib3V0UDIuaW5uZXJUZXh0ID0gXCIoUmF0aGVyIHdlIHByb2JhYmx5IGRvbid0IG1ha2UgcGl6emFzIGF0IGFsbCBhbmQgYXJlIHJhdGhlciBhIGZha2Ugc2l0ZSBmb3IgdGhlIGZ1biBvZiBpdClcIjtcbiAgICBcbiAgICBhYm91dC5hcHBlbmQoYWJvdXRILCBhYm91dFAxLCBhYm91dFAyKTtcblxuICAgIHJldHVybiBhYm91dDtcbn1cblxuY29uc3QgbWVudVNhbXBsZSA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51U2FtcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVNhbXBsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXNhbXBsZScpO1xuICAgIGNvbnN0IG1lbnVTYW1wbGVIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtZW51U2FtcGxlSC5pbm5lclRleHQgPSBcIk1lbnUgU2FtcGxlXCI7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWVudS1idG4nKTtcbiAgICBtZW51QnRuLmlubmVyVGV4dCA9IFwiU2VlIGZ1bGwgbWVudVwiO1xuXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkcy5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xuXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIGNvbnN0IGNhcmRIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjYXJkSC5pbm5lclRleHQgPSBcIkF3ZXNvbWUgVHlwZSBvZiBQaXp6YSBoZXJlIVwiO1xuICAgIGNvbnN0IGNhcmRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNhcmRQLmlubmVyVGV4dCA9IFwiQXdlc29tZSB0eXBlIG9mIHBpenphIGRlc2NyaXB0aW9uIGdvZXMgaGVyZS4uLlwiO1xuICAgIGNhcmQuYXBwZW5kKGNhcmRILCBjYXJkUCk7XG5cbiAgICBjb25zdCBjYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQyLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICBjb25zdCBjYXJkSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNhcmRIMi5pbm5lclRleHQgPSBcIkF3ZXNvbWUgVHlwZSBvZiBQaXp6YSBoZXJlIVwiO1xuICAgIGNvbnN0IGNhcmRQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjYXJkUDIuaW5uZXJUZXh0ID0gXCJBd2Vzb21lIHR5cGUgb2YgcGl6emEgZGVzY3JpcHRpb24gZ29lcyBoZXJlLi4uXCI7XG4gICAgY2FyZDIuYXBwZW5kKGNhcmRIMiwgY2FyZFAyKTtcblxuICAgIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZDMuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIGNvbnN0IGNhcmRIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY2FyZEgzLmlubmVyVGV4dCA9IFwiQXdlc29tZSBUeXBlIG9mIFBpenphIGhlcmUhXCI7XG4gICAgY29uc3QgY2FyZFAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNhcmRQMy5pbm5lclRleHQgPSBcIkF3ZXNvbWUgdHlwZSBvZiBwaXp6YSBkZXNjcmlwdGlvbiBnb2VzIGhlcmUuLi5cIjtcbiAgICBjYXJkMy5hcHBlbmQoY2FyZEgzLCBjYXJkUDMpO1xuXG4gICAgY2FyZHMuYXBwZW5kKGNhcmQsIGNhcmQyLCBjYXJkMyk7XG5cbiAgICBtZW51U2FtcGxlLmFwcGVuZChtZW51U2FtcGxlSCwgbWVudUJ0biwgY2FyZHMpO1xuXG4gICAgcmV0dXJuIG1lbnVTYW1wbGU7XG59XG5cbmNvbnN0IGJvZHkgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBib2R5U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBib2R5U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdib2R5LXNlY3Rpb24nKTtcblxuICAgIGJvZHlTZWN0aW9uLmFwcGVuZChpbWFnZUdyaWQoKSwgYWJvdXRCbG9jaygpLCBtZW51U2FtcGxlKCkpO1xuXG5cbiAgICByZXR1cm4gYm9keVNlY3Rpb247XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSAoKSB7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgbWFpbi5hcHBlbmQoaGVybygpLCBib2R5KCkpO1xuXG4gICAgcmV0dXJuIG1haW47XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51ICgpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGhlYWRlckggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlckguaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9wdGlvbnMuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycpO1xuXG4gICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9wdGlvbjEuY2xhc3NMaXN0LmFkZCgnb3B0aW9uJyk7XG4gICAgY29uc3QgYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYTEuaHJlZiA9IFwiI2FwcGV0aXplci1zZWN0aW9uXCI7XG4gICAgYTEuaW5uZXJUZXh0ID0gXCJBcHBldGl6ZXJzXCI7XG5cbiAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3B0aW9uMi5jbGFzc0xpc3QuYWRkKCdvcHRpb24nKTtcbiAgICBjb25zdCBhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhMi5ocmVmID0gXCIjY2xhc3NpYy1zZWN0aW9uXCI7XG4gICAgYTIuaW5uZXJUZXh0ID0gXCJDbGFzc2ljc1wiO1xuXG4gICAgY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9wdGlvbjMuY2xhc3NMaXN0LmFkZCgnb3B0aW9uJyk7XG4gICAgY29uc3QgYTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYTMuaHJlZiA9IFwiI3NpZGUtc2VjdGlvblwiO1xuICAgIGEzLmlubmVyVGV4dCA9IFwiU2lkZXNcIjtcblxuICAgIGNvbnN0IG9wdGlvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcHRpb240LmNsYXNzTGlzdC5hZGQoJ29wdGlvbicpO1xuICAgIGNvbnN0IGE0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGE0LmhyZWYgPSBcIiNzcGVjaWFsdHktc2VjdGlvblwiO1xuICAgIGE0LmlubmVyVGV4dCA9IFwiU3BlY2lhbHNcIjtcblxuICAgIG9wdGlvbjEuYXBwZW5kQ2hpbGQoYTEpO1xuICAgIG9wdGlvbjIuYXBwZW5kQ2hpbGQoYTIpO1xuICAgIG9wdGlvbjMuYXBwZW5kQ2hpbGQoYTMpO1xuICAgIG9wdGlvbjQuYXBwZW5kQ2hpbGQoYTQpO1xuXG4gICAgb3B0aW9ucy5hcHBlbmQob3B0aW9uMSwgb3B0aW9uMiwgb3B0aW9uMywgb3B0aW9uNCk7XG4gICAgaGVhZGVyLmFwcGVuZChoZWFkZXJILCBvcHRpb25zKTtcblxuICAgIGNvbnN0IGFwcFNlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBhcHBTZWMuc2V0QXR0cmlidXRlKCdpZCcsICdhcHBldGl6ZXItc2VjdGlvbicpO1xuICAgIGNvbnN0IGFwcEggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGFwcEguaW5uZXJUZXh0ID0gXCJBcHBldGl6ZXJzXCI7XG4gICAgY29uc3QgYXBwQ29udGFpbmVyICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFwcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBhcHBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYXBwZXRpemVyLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGFwcENvbnRhaW5lclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYXBwQ29udGFpbmVyUC5pbm5lclRleHQgPSBcIkNvb2wgbWVudSBvZiBBcHBldGl6ZXJzIGhlcmVcIjtcbiAgICBhcHBDb250YWluZXIuYXBwZW5kKGFwcENvbnRhaW5lclApO1xuICAgIGFwcFNlYy5hcHBlbmQoYXBwSCwgYXBwQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGNsYXNzaWNTZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY2xhc3NpY1NlYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NsYXNzaWMtc2VjdGlvbicpO1xuICAgIGNvbnN0IGNsYXNzaWNIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjbGFzc2ljSC5pbm5lclRleHQgPSBcIkNsYXNzaWNzXCI7XG4gICAgY29uc3QgY2xhc3NpY0NvbnRhaW5lciAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjbGFzc2ljQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGNsYXNzaWNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2xhc3NpYy1jb250YWluZXInKTtcbiAgICBjb25zdCBjbGFzc2ljQ29udGFpbmVyUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjbGFzc2ljQ29udGFpbmVyUC5pbm5lclRleHQgPSBcIkNvb2wgY2xhc3NpYyBwaXp6YSBtZW51IGhlcmVcIjtcbiAgICBjbGFzc2ljQ29udGFpbmVyLmFwcGVuZChjbGFzc2ljQ29udGFpbmVyUCk7XG4gICAgY2xhc3NpY1NlYy5hcHBlbmQoY2xhc3NpY0gsIGNsYXNzaWNDb250YWluZXIpO1xuXG5cbiAgICBjb25zdCBzaWRlU2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNpZGVTZWMuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlLXNlY3Rpb24nKTtcbiAgICBjb25zdCBzaWRlSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgc2lkZUguaW5uZXJUZXh0ID0gXCJTaWRlc1wiO1xuICAgIGNvbnN0IHNpZGVDb250YWluZXIgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBzaWRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc2lkZUNvbnRhaW5lclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc2lkZUNvbnRhaW5lclAuaW5uZXJUZXh0ID0gXCJBd2Vzb21lIG1lbnUgb2Ygc2lkZXMgaGVyXCI7XG4gICAgc2lkZUNvbnRhaW5lci5hcHBlbmQoc2lkZUNvbnRhaW5lclApO1xuICAgIHNpZGVTZWMuYXBwZW5kKHNpZGVILCBzaWRlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHNwZWNpYWxTZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgc3BlY2lhbFNlYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NwZWNpYWx0eS1zZWN0aW9uJyk7XG4gICAgY29uc3Qgc3BlY2lhbEggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHNwZWNpYWxILmlubmVyVGV4dCA9IFwiU2lkZXNcIjtcbiAgICBjb25zdCBzcGVjaWFsQ29udGFpbmVyICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwZWNpYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgc3BlY2lhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzcGVjaWFsdHktY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc3BlY2lhbENvbnRhaW5lclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3BlY2lhbENvbnRhaW5lclAuaW5uZXJUZXh0ID0gXCJBd2Vzb21lIG1lbnUgb2Ygc2lkZXMgaGVyXCI7XG4gICAgc3BlY2lhbENvbnRhaW5lci5hcHBlbmQoc3BlY2lhbENvbnRhaW5lclApO1xuICAgIHNwZWNpYWxTZWMuYXBwZW5kKHNwZWNpYWxILCBzcGVjaWFsQ29udGFpbmVyKTtcblxuXG4gICAgbWVudS5hcHBlbmQoaGVhZGVyLCBhcHBTZWMsIGNsYXNzaWNTZWMsIHNpZGVTZWMsIHNwZWNpYWxTZWMpO1xuXG4gICAgcmV0dXJuIG1lbnU7XG5cbn0gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbmNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG4gICAgY29uc3QgdGFncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFncy5jbGFzc0xpc3QuYWRkKCd0YWdzJyk7XG5cbiAgICBjb25zdCBob21lUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBtZW51UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBjb250YWN0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob21lUC5pbm5lclRleHQgPSAnSG9tZSc7XG4gICAgbWVudVAuaW5uZXJUZXh0ID0gJ01lbnUnO1xuICAgIGNvbnRhY3RQLmlubmVyVGV4dCA9ICdDb250YWN0JztcbiAgICBuYXYuYXBwZW5kQ2hpbGQodGFncyk7XG4gICAgdGFncy5hcHBlbmQoaG9tZVAsIG1lbnVQLCBjb250YWN0UCk7XG5cbiAgICByZXR1cm4gbmF2O1xufVxuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmlubmVySFRNTCA9ICfCqTIwMjIgTWFkZSB3aXRoIDxzcGFuPjwvc3Bhbj4gYnkgVXJpZWwgc3RhbWVsbWFuJztcblxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmNvbnN0IGNyZWF0ZVBhZ2UgPSAocGFnZSkgPT4ge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZSgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICAgIGNvbnN0IHRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFncycpO1xuICAgIHRhZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldC5pbm5lclRleHQgPT09ICdIb21lJykge1xuICAgICAgICAgICAgd2hpbGUoY29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjcmVhdGVQYWdlKGhvbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ01lbnUnKSB7XG4gICAgICAgICAgICB3aGlsZShjb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNyZWF0ZVBhZ2UobWVudSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuaW5uZXJUZXh0ID09PSBcIkNvbnRhY3RcIikge1xuICAgICAgICAgICAgd2hpbGUoY29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjcmVhdGVQYWdlKGNvbnRhY3QpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn1cblxuY3JlYXRlUGFnZShob21lKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=